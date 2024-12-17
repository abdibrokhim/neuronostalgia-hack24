'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Courier New, monospace', backgroundColor: '#FAFAD2', color: '#0000CD', padding: '20px', textAlign: 'left' }}>
            <h1 style={{ fontSize: '2em', margin: '20px', backgroundColor: '#FFD700', padding: '10px', fontFamily: 'Impact, Charcoal, sans-serif' }}>Our Fellows</h1>
            <div className="fellow" style={{ borderBottom: '3px dashed #FF4500', marginBottom: '20px', padding: '10px' }}>
                <h2 style={{ color: '#B22222' }}>Vineet Dhanawat</h2>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/668ec3def9b738c480b22a73_66375693d24d4bea08c1a7f8_lhSdZFrH_400x400-p-500.png" alt="Vineet Dhanawat" width={100} height={100} style={{ borderRadius: '50%', border: '5px solid #B22222' }} />
                <p>Software Engineer at Meta<br />United States<br />
                <a href="https://www.linkedin.com/in/vineetdhanawat/" target="_blank" style={{ color: '#FF4500' }}>LinkedIn</a>
                </p>
            </div>
            <div className="fellow" style={{ borderBottom: '3px dashed #FF4500', marginBottom: '20px', padding: '10px' }}>
                <h2 style={{ color: '#B22222' }}>Dmitry Brazhenko</h2>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/668ec4f9f1d83544d174f298_65f49b942419a8d81c776e07_2024-03-15%2021.02.13%20(1)-p-500.png" alt="Dmitry Brazhenko" width={100} height={100} style={{ borderRadius: '50%', border: '5px solid #B22222' }} />
                <p>Software Engineer at Microsoft<br />Czech Republic<br />
                <a href="https://www.linkedin.com/in/dmitry-brazhenko/" target="_blank" style={{ color: '#FF4500' }}>LinkedIn</a>
                </p>
            </div>
            <div className="fellow" style={{ borderBottom: '3px dashed #FF4500', marginBottom: '20px', padding: '10px' }}>
                <h2 style={{ color: '#B22222' }}>Bhuvi Chopra</h2>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/668ec5b6eade56b912b1b438_663ba2b84cef2d739f11bd05_25005136989%20(1)-p-500.png" alt="Bhuvi Chopra" width={100} height={100} style={{ borderRadius: '50%', border: '5px solid #B22222' }} />
                <p>Product Manager at Google<br />United States<br />
                <a href="https://www.linkedin.com/in/bhuvi-chopra/" target="_blank" style={{ color: '#FF4500' }}>LinkedIn</a>
                </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="?17d73874_page=2" style={{ color: '#0000CD', textDecoration: 'underline' }}>Next</a>
            </div>
        </div>
    );
}