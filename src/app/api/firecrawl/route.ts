// app/api/firecrawl/route.ts
import FirecrawlApp, { CrawlParams, CrawlStatusResponse } from '@mendable/firecrawl-js';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const app = new FirecrawlApp({apiKey: process.env.FIRECRAWL_API_KEY});

    // Crawl a website
    const crawlResponse = await app.crawlUrl(url, {
    limit: 100,
    scrapeOptions: {
        formats: ['markdown'],
    }
    });

    if (!crawlResponse.success) {
        throw new Error(`Failed to crawl: ${crawlResponse.error}`)
    }

    console.log(crawlResponse)

    console.log("====================================")
    console.log('Crawled data:', crawlResponse);

    // // Write scraped markdown data to a new file
    // const filesDir = path.join(process.cwd(), 'files');
    // const fileName = `scraped_${Date.now()}.md`;
    // const filePath = path.join(filesDir, fileName);

    // // Ensure the "files" directory exists
    // if (!fs.existsSync(filesDir)) {
    //   fs.mkdirSync(filesDir, { recursive: true });
    // }

    // // Write markdown content to the file
    // fs.writeFileSync(filePath, crawlResponse!.data.map((page) => page.markdown).join('\n\n'));

    // console.log(`Markdown file saved at: ${filePath}`);

    // return NextResponse.json({ crawlResponse });

        // Ensure the "files" directory exists
        const filesDir = path.join(process.cwd(), 'files');
        if (!fs.existsSync(filesDir)) {
          fs.mkdirSync(filesDir, { recursive: true });
        }
    
        // Write the scraped markdown data to a file
        const timeStamp = Date.now();
        // const markdownFileName = `scraped_${timeStamp}.md`;
        // const markdownFilePath = path.join(filesDir, markdownFileName);
        // fs.writeFileSync(markdownFilePath, crawlResponse.markdown!);
        // console.log(`Markdown file saved at: ${markdownFilePath}`);
    
        // Write the entire scrapeResponse to a .json file
        const jsonFileName = `scraped_${timeStamp}.json`;
        const jsonFilePath = path.join(filesDir, jsonFileName);
        fs.writeFileSync(jsonFilePath, JSON.stringify(crawlResponse, null, 2), 'utf8');
        console.log(`JSON file saved at: ${jsonFilePath}`);
    
        return NextResponse.json({ 
          message: 'Scrape successful and files saved.', 
          jsonFilePath
        });
  } catch (error: any) {
    console.error('Error in /api/firecrawl', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
