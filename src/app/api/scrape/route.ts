// app/api/scrape/route.ts
import FirecrawlApp, { CrawlParams, CrawlStatusResponse } from '@mendable/firecrawl-js';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const app = new FirecrawlApp({apiKey: process.env.FIRECRAWL_API_KEY});

    // Scrape a website
    const scrapeResponse = await app.scrapeUrl(url, {
        formats: ['markdown'],
    });

    if (!scrapeResponse.success) {
        throw new Error(`Failed to scrape: ${scrapeResponse.error}`)
    }

    console.log("====================================")
    console.log('Scraped data:', scrapeResponse);

    // Write scraped markdown data to a new file
    const filesDir = path.join(process.cwd(), 'files');
    const fileName = `scraped_${Date.now()}.md`;
    const filePath = path.join(filesDir, fileName);

    // Ensure the "files" directory exists
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir, { recursive: true });
    }

    // Write markdown content to the file
    fs.writeFileSync(filePath, scrapeResponse.markdown!);

    console.log(`Markdown file saved at: ${filePath}`);

    // return NextResponse.json({ scrapeResponse });
    return NextResponse.json({ 
      message: 'Scrape successful and file saved.', 
      filePath 
    });
  } catch (error: any) {
    console.error('Error in /api/scrape', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
