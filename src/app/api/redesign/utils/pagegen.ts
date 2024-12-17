import fs from 'fs';
import path from 'path';
import { removeFirstAndLastLines } from './cleaner';


export function pageGenerator(folderPath: string, pageContent: string) {
    const pagePath = path.join(folderPath, 'page.tsx');
    // If you need to remove first and last lines from pageContent, uncomment the below line
    const processedContent = removeFirstAndLastLines(pageContent);
    fs.writeFileSync(pagePath, processedContent, 'utf8');
    console.log("page.tsx created at:", pagePath);
}