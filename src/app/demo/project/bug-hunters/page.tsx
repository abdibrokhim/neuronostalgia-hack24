'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#ffcc00', color: '#000', fontFamily: 'Comic Sans MS, sans-serif', textAlign: 'center', padding: '10px' }}>
            <div style={{ border: '5px dashed #ff69b4', margin: '20px', padding: '20px' }}>
                <img src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="" />
                <h1 style={{ fontSize: '5em', backgroundColor: '#00ffff' }}>Bug Hunters — QA Hackathon for All Tech Enthusiasts</h1>
                <h3 style={{ fontSize: '2em' }}>Quality Assurance Mastery: Advanced Bug Detection Challenge</h3>
                <p style={{ fontSize: '1.5em', backgroundColor: '#ff69b4', padding: '10px' }}>Date: <b>Nov 2024</b></p>
                <p style={{ fontSize: '1.5em', backgroundColor: '#00ffff', padding: '10px' }}>Client: <b>Raptors</b></p>
                <p style={{ fontSize: '1.5em', backgroundColor: '#ff69b4', padding: '10px' }}>Website: <a href="https://qahack.net/" style={{ color: '#0000ff', textDecoration: 'none' }}>qahack.net</a></p>
                <p style={{ fontSize: '1.5em', backgroundColor: '#00ffff', padding: '10px' }}>Category: <b>Hackathon, QA</b></p>
                <p style={{ fontSize: '2em', marginTop: '30px' }}>Stay tuned.</p>
            </div>
            <div style={{ border: '5px solid #ff69b4', margin: '20px', padding: '20px' }}>
                <h2 style={{ fontSize: '3em', backgroundColor: '#00ff00' }}>Related Works</h2>
                <a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                    <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="" style={{ width: '300px', height: 'auto', backgroundColor: '#ff00ff', padding: '10px' }} />
                </a>
                <h3 style={{ fontSize: '3em', backgroundColor: '#00ff00' }}>BrowserHack — Revolutionizing Productivity With Innovative Tools</h3>
                <p style={{ fontSize: '2em', backgroundColor: '#ff00ff', padding: '10px' }}>Hackathon, Social Impact</p>
                <a href="/project/neuro-nostalgia">
                    <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="" style={{ width: '300px', height: 'auto', backgroundColor: '#ff00ff', padding: '10px' }} />
                </a>
                <h3 style={{ fontSize: '3em', backgroundColor: '#00ff00' }}>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h3>
                <p style={{ fontSize: '2em', backgroundColor: '#ff00ff', padding: '10px' }}>Hackathon, Content Tech</p>
            </div>
            <div style={{ backgroundColor: '#00ffff', padding: '10px', margin: '20px', fontSize: '2em' }}>
                <a href="/#contact" style={{ color: '#ff0000', textDecoration: 'none' }}>
                    <b>Get in Touch — Get in Touch — Get in Touch — Get in Touch — Get in Touch — Get in Touch —</b>
                </a>
            </div>
        </div>
    );
}