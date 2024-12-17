'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#ffeb3b', color: '#000080', fontFamily: 'Comic Sans MS, Comic Sans, cursive', textAlign: 'center', padding: '20px', fontSize: '16px' }}>
            <h1 style={{ backgroundColor: '#ff69b4', padding: '10px' }}>Bug Hunters — QA Hackathon for All Tech Enthusiasts</h1>
            <h2 style={{ color: '#ff4500', backgroundColor: '#87cefa', padding: '8px' }}>Quality Assurance Mastery: Advanced Bug Detection Challenge</h2>
            <ul style={{ listStyleType: 'circle', textAlign: 'left', margin: '0 auto', width: 'fit-content' }}>
                <li><strong>Date:</strong> Nov 2024</li>
                <li><strong>Client:</strong> Raptors</li>
                <li><strong>Website:</strong> <a href="https://qahack.net/" style={{ color: '#0000ee' }}>qahack.net</a></li>
                <li><strong>Category:</strong> Hackathon, QA</li>
            </ul>
            <br />
            <div>
                <b style={{ backgroundColor: '#ffe135', padding: '5px' }}>Stay tuned.</b>
            </div>
            <h3 className="related-works" style={{ marginTop: '20px', paddingBottom: '10px', borderBottom: '2px dashed #ff6347' }}>Related Works</h3>
            <div className="project" style={{ margin: '20px 0' }}>
                <a href="/demo/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="BrowserHack" width={150} height={150} />
                    <h4 style={{ color: '#ff1493', backgroundColor: '#adff2f', padding: '5px' }}>BrowserHack — Revolutionizing Productivity With Innovative Tools</h4>
                </a>
                <p style={{ fontSize: '14px' }}>Hackathon, Social Impact</p>
            </div>
            <div className="project" style={{ margin: '20px 0' }}>
                <a href="/demo/project/neuro-nostalgia">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="Neuro Nostalgia" width={150} height={150} />
                    <h4 style={{ color: '#ff1493', backgroundColor: '#adff2f', padding: '5px' }}>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h4>
                </a>
                <p style={{ fontSize: '14px' }}>Hackathon, Content Tech</p>
            </div>
            <div style={{ borderTop: '2px dotted #4b0082', paddingTop: '10px' }}>
                <a href="/#contact" style={{ textDecoration: 'none', color: '#00f' }}><marquee behavior="scroll" direction="left">Get in Touch – Get in Touch – Get in Touch – Get in Touch – Get in Touch – Get in Touch – Get in Touch – Get in Touch –</marquee></a>
            </div>
        </div>
    );
}