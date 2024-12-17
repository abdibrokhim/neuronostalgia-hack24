import fs from "fs";
import path from "path";
import { layoutGenerator } from "./layoutgen";
import { pageGenerator } from "./pagegen";
import { chatCompletion } from "./gpt";
import { ensureFolderStructure } from "./foldermaker";
import { findMarkdown } from "./helpers";

export async function buildSite(filePath: string) {
    // Load your scraped JSON data
    let jsonFilePath = filePath;
    if (!path.isAbsolute(filePath)) {
      jsonFilePath = path.join(process.cwd(), filePath);
    }

    if (!fs.existsSync(jsonFilePath)) {
      throw new Error(`${filePath} not found`);
    }

    const rawData = fs.readFileSync(jsonFilePath, 'utf8');
    const jsonData = JSON.parse(rawData);
  
    // Ensure main demo folder
    const demoDir = path.join(process.cwd(), 'src', 'app', 'demo');
    if (!fs.existsSync(demoDir)) {
      fs.mkdirSync(demoDir, { recursive: true });
    }

    const mainPageData = findMainPageData(jsonData.data);

    const pageTitle = mainPageData.metadata.title || 'Raptors.dev';
    const pageDescription = mainPageData.metadata.description || 'Raptors.dev is a collection of useful resources for developers.';
  
    // Create layout.tsx in the root "demo" folder. 
    // If you want the root layout different, you can do it here:
    await layoutGenerator(demoDir, pageTitle, pageDescription);

    const pageContent = findMarkdown(mainPageData);
  
    // Create page.tsx in the root "demo" folder if needed.
    // Or skip if you do not need a root page.
    const rootPageContent = await chatCompletion(pageContent);
    pageGenerator(demoDir, rootPageContent!);
  
    // Build a map: folderName -> { title, description, markdowns: string[] }
    const folderMap: Record<string, {title: string, description: string, markdowns: string[]}> = {};
  
    for (const item of jsonData.data) {
      const url: string = item.metadata.url;
      // Extract folder name: everything after 'https://www.raptors.dev/'
      const folderName = url.replace('https://www.raptors.dev/', '').split('?')[0]; 
      // Remove trailing slashes if any
      const cleanedFolderName = folderName.replace(/\/$/, '') || ''; 
  
      // If it's the root (e.g. ""), you can skip or handle differently
      if (!cleanedFolderName) {
        continue;
      }
  
      const title = item.metadata.title || 'Default Title';
      const description = item.metadata.description || 'Default Description';
      const markdownContent = findMarkdown(item);
  
      if (!folderMap[cleanedFolderName]) {
        folderMap[cleanedFolderName] = { title, description, markdowns: [] };
      }
  
      folderMap[cleanedFolderName].markdowns.push(markdownContent);
    }
  
    // Now loop over each folder and generate layout.tsx and page.tsx
    for (const [folderName, data] of Object.entries(folderMap)) {
      const folderPath = ensureFolderStructure(folderName);
  
      // Generate layout.tsx per folder
      await layoutGenerator(folderPath, data.title, data.description);
  
      // Combine all markdown entries for this folder
      const combinedMarkdown = data.markdowns.join('\n\n');
  
      // Call chatCompletion to transform markdown to page.tsx content
      const pageContent = await chatCompletion(combinedMarkdown);
  
      // Write page.tsx in the folder
      pageGenerator(folderPath, pageContent!);
    }
  
    console.log('All pages and layouts generated successfully!');

    return { message: 'All pages and layouts generated successfully!', demoDir };
}

// scrape individual markdown content from the JSON data where the "url"=== "https://www.raptors.dev/" super strictly!
function findMainPageData(data: any) {
    for (const item of data) {
      if (item.metadata.url === 'https://www.raptors.dev/') {
        return item;
      }
    }
  
    return '';
}