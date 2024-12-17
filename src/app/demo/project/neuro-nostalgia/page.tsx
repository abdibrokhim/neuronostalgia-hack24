'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ backgroundImage: 'url(http://www.lorefnon.com/assets/images/90s-bg.gif)', color: '#00FF00', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center', padding: '20px'}}>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="hover-arrow" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
            <h1 style={{ fontSize: '40px', textShadow: '2px 2px #FF0000' }}>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h1>
            <p style={{ fontSize: '14px', background: '#FFFF00', border: '3px dashed #0000FF', padding: '10px', display: 'inline-block' }}>
                <strong>Web Design Evolution:</strong> Retro AI Time Travel Engine
            </p>
            <div style={{ marginTop: '30px' }}>
                <h3 style={{ borderBottom: '2px solid #FF00FF', display: 'inline-block', paddingBottom: '5px' }}>Date: Dec 2024</h3>
                <h3 style={{ borderBottom: '2px solid #FF00FF', display: 'inline-block', paddingBottom: '5px', marginLeft: '20px' }}>Client: Raptors</h3>
                <h3 style={{ borderBottom: '2px solid #FF00FF', display: 'inline-block', paddingBottom: '5px', marginLeft: '20px' }}>Website: <a href="http://neuronostalgia.com" style={{ color: '#0000FF' }}>neuronostalgia.com</a></h3>
                <h3 style={{ borderBottom: '2px solid #FF00FF', display: 'inline-block', paddingBottom: '5px', marginLeft: '20px' }}>Category: Hackathon, Content Tech</h3>
            </div>
            <h2 style={{ marginTop: '20px', fontSize: '26px', background: '#00FFFF', padding: '10px' }}>Coming Soon. Stay tuned.</h2>
            <h2 style={{ marginTop: '40px', fontSize: '26px' }}>Related Works</h2>
            <div>
                <a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools"><Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="BrowserHack" width={300} height={200} style={{ border: '4px solid #FF6600', margin: '10px' }} /></a>
                <h3>BrowserHack — Revolutionizing Productivity With Innovative Tools</h3>
                <p style={{ fontSize: '20px', color: '#FF00FF' }}>Hackathon, Social Impact</p>
                <a href="/project/neuro-nostalgia"><Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="Neuro Nostalgia" width={300} height={200} style={{ border: '4px solid #0000CC', margin: '10px' }} /></a>
                <h3>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h3>
                <p style={{ fontSize: '20px', color: '#FF00FF' }}>Hackathon, Content Tech</p>
            </div>
            <div style={{ marginTop: '30px', background: '#FFA500', border: '3px solid #000000', padding: '15px' }}>
                <a href="/#contact" style={{ fontSize: '24px', color: '#000000', lineHeight: '1.5' }}>Get in Touch – Get in Touch – Get in Touch –<br />Get in Touch – Get in Touch – Get in Touch –<br />Get in Touch – Get in Touch – Get in Touch –<br />Get in Touch – Get in Touch – Get in Touch –</a>
            </div>
        </div>
    );
}