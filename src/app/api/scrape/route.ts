// app/api/scrape/route.ts
import FirecrawlApp, { CrawlParams, CrawlStatusResponse } from '@mendable/firecrawl-js';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ scrapeResponse });
  } catch (error: any) {
    console.error('Error in /api/scrape', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
