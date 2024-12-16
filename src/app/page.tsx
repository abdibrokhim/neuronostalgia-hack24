'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Notification from './utils/notify';
import { loader } from './utils/loader';
// import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';

export default function Home() {
  const [webUrl, setwebUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message
  const messages = {
    crawling: 'Crawling website...',
    scraping: 'Scraping website...',
    redesigning: 'Redesigning website...',
    stillRedesigning: 'Still redesigning website...',
    crawledSuccess: 'Website crawled successfully.',
    scrapedSuccess: 'Website scraped successfully.',
    redesignSuccess: 'Website redesigned successfully.',
  }
  const [scrapedDataFilePath, setScrapedDataFilePath] = useState<string | null>(null);
  const [redesignedFolderPath, setRedesignedFolderPath] = useState<string | null>(null);
  const scrapeStates = {
    singlePage: 'Single',
    fullSite: 'Multi',
  }
  const [scrapeState, setScrapeState] = useState(scrapeStates.singlePage);
  const [pageCount, setPageCount] = useState<number>(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScrape = () => {
    if (pageCount === 1) {
      scrapeUrl();
    } else {
      crawlUrl();
    }
  };

  const selectPages = (count: number) => {
    setPageCount(count);
    setScrapeState(count === 1 ? scrapeStates.singlePage : scrapeStates.fullSite);
    setShowDropdown(false);
  };

  const crawlUrl = async () => {
      if (!webUrl) return;

      setLoading(true);
      setNotification({ message: messages.crawling, type: 'info' });

      try {
      const response = await fetch('/api/firecrawl', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: webUrl }),
      });

      const data = await response.json();

      if (response.ok) {
          setNotification({ message: messages.crawledSuccess, type: 'success' });
          const scrapedData = data.crawlResponse;
          console.log("====================================")
          console.log('Crawled data:', scrapedData);
      } else {
          setNotification({ message: data.error || 'An unexpected error occurred.', type: 'error' });
      }
      } catch (error) {
          console.error('Error scraping website:', error);
          alert('An unexpected error occurred.');
      } finally {
          setLoading(false);
      }
  };
  
  const scrapeUrl = async () => {
      if (!webUrl) return;

      setLoading(true);
      setNotification({ message: messages.scraping, type: 'info' });

      try {
      const response = await fetch('/api/scrape', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: webUrl }),
      });

      const data = await response.json();

      if (response.ok) {
          setNotification({ message: messages.scrapedSuccess, type: 'success' });
          const scrapedDataMsg = data.message;
          const scrapedDataFilePath = data.filePath;
          console.log("====================================")
          console.log(scrapedDataMsg);
          console.log('Scraped data saved at:', scrapedDataFilePath);

          setScrapedDataFilePath(scrapedDataFilePath);
      } else {
          setNotification({ message: data.error || 'An unexpected error occurred.', type: 'error' });
      }
      } catch (error) {
          console.error('Error crawling website:', error);
          alert('An unexpected error occurred.');
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      if (scrapedDataFilePath) {
          redesignWebsite();
          setScrapedDataFilePath(null);
      }
  }, [scrapedDataFilePath]);

  const redesignWebsite = async () => {

      setLoading(true);
      setNotification({ message: messages.redesigning, type: 'info' });

      try {
      const response = await fetch('/api/redesign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filePath: scrapedDataFilePath }),
      });

      const data = await response.json();

      if (response.ok) {
          setNotification({ message: messages.redesignSuccess, type: 'success' });
          const newwebsitepath = data.newwebsitepath;
          console.log("====================================")
          console.log('Website redesigned at:', newwebsitepath);
          setRedesignedFolderPath(newwebsitepath);
      } else {
          setNotification({ message: data.error || 'An unexpected error occurred.', type: 'error' });
      }
      } catch (error) {
          console.error('Error redesigning website:', error);
          alert('An unexpected error occurred.');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      {/* <Analytics /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
          
          <div className="mb-6 mt-16 sm:mt-24 w-full max-w-2xl text-center text-xl sm:text-2xl md:text-3xl leading-9">
            <h1 className="text-[var(--text-a)] font-semibold flex flex-row gap-2">
              <p className="text-center mx-auto">AI-Powered Time Machine for Web Design</p>
            </h1>
          </div>

          <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center p-4 mb-8 shadow-lg gap-4 bg-[var(--bg-a)] rounded-full">
            <input
              type="text"
              value={webUrl}
              onChange={(e) => setwebUrl(e.target.value)}
              placeholder="Enter website link here..."
              className="placeholder:text-[var(--text-c)] placeholder:text-sm text-sm bg-transparent focus:outline-none text-[var(--text-a)] w-full px-4 py-2 rounded-full shadow transition-colors border border-[var(--ring)] focus:border-[var(--violet)]"
              disabled={loading}
            />
            <div className="relative flex flex-row gap-4 inline-block text-left">
              <button
                disabled={loading}
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center justify-center py-2 px-4 sm:px-8 text-sm md:text-sm rounded-full shadow transition-colors 
                  ${loading 
                    ? 'cursor-not-allowed bg-[var(--text-b)] text-[var(--bg-a)]' 
                    : 'cursor-pointer bg-[var(--text-b)] hover:bg-[var(--text-c)] text-[var(--bg-a)]'
                  }`}
              > <span className="mr-2">{scrapeState}</span>
                {!loading 
                  ? (
                    <Image
                      aria-hidden
                      src="/line-angle-down-icon.svg"
                      alt="line-angle-down-icon"
                      width={14}
                      height={14}
                    />
                  )
                  : loader()
                }
              </button>
              {showDropdown && (
                <div className="absolute mt-12 w-32 rounded-md shadow-lg bg-[var(--text-b)] ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectPages(1)}
                      role="menuitem"
                    >
                      1 page
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectPages(2)}
                      role="menuitem"
                    >
                      2 pages
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectPages(3)}
                      role="menuitem"
                    >
                      3 pages
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectPages(4)}
                      role="menuitem"
                    >
                      4+ pages
                    </button>
                  </div>
                </div>
              )}
              <button
                disabled={webUrl === '' || loading}
                onClick={handleScrape}
                className={`flex items-center justify-center py-2 px-4 sm:px-8 text-sm md:text-sm rounded-full shadow transition-colors 
                  ${webUrl === '' || loading 
                    ? 'cursor-not-allowed bg-[var(--ring)] text-[var(--text-a)]' 
                    : 'cursor-pointer bg-[var(--violet)] hover:bg-[var(--ring)] text-[var(--text-a)]'
                  }`}
              > <span className="mr-2">Back90s</span>
                {!loading 
                  ? (
                    <Image
                      aria-hidden
                      src="/history-line-icon.svg"
                      alt="Download Icon"
                      width={18}
                      height={18}
                    />
                  )
                  : loader()
                }
              </button>
            </div>
          </div>

          {redesignedFolderPath && (
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-4 mb-8 shadow-lg gap-4 bg-[var(--bg-a)] rounded-full">
              <a
                href={redesignedFolderPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2 px-4 sm:px-8 text-sm md:text-sm rounded-full shadow transition-colors bg-[var(--violet)] hover:bg-[var(--ring)] text-[var(--text-a)]"
              >
                <span className="mr-2">View redesigned website</span>
                <Image
                  aria-hidden
                  src="/arrow-top.svg"
                  alt="External Link Icon"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
}