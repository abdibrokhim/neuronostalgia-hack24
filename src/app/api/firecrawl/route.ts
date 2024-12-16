// app/api/firecrawl/route.ts
import FirecrawlApp, { CrawlParams, CrawlStatusResponse } from '@mendable/firecrawl-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const app = new FirecrawlApp({apiKey: process.env.FIRECRAWL_API_KEY});

    // Crawl a website
    const crawlResponse = await app.crawlUrl(url, {
    limit: 100,
    scrapeOptions: {
        formats: ['markdown', 'html'],
    }
    });

    if (!crawlResponse.success) {
        throw new Error(`Failed to crawl: ${crawlResponse.error}`)
    }

    console.log(crawlResponse)

    console.log("====================================")
    console.log('Crawled data:', crawlResponse);

    return NextResponse.json({ crawlResponse });
  } catch (error: any) {
    console.error('Error in /api/firecrawl', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
