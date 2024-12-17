'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#FFA07A', color: '#000080', fontFamily: 'Courier New, monospace', textAlign: 'center', padding: '20px'}}>
            <img src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="Arrow" style={{width: '50px', height: '50px'}} />
            
            <h1 style={{ fontSize: '30px', textDecoration: 'underline', marginBottom: '20px' }}>Burning Heroes — Artificial Intelligence For Humanity Hackathon</h1>
            
            <p><b>AI for Impact:</b> Engineers Coding for Social Good</p>

            <h5 style={{ backgroundColor: '#FFFF00', padding: '5px', display: 'inline-block', margin: '10px' }}>March 2024</h5>
            <h5 style={{ backgroundColor: '#FFFF00', padding: '5px', display: 'inline-block', margin: '10px' }}>Client: Burning Heroes</h5>
            <h5 style={{ backgroundColor: '#FFFF00', padding: '5px', display: 'inline-block', margin: '10px' }}>Website: <a href="https://burningheroes.com/2024/hackathon" target="_blank" style={{color: '#8B0000'}}>burningheroes.com</a></h5>
            <h5 style={{ backgroundColor: '#FFFF00', padding: '5px', display: 'inline-block', margin: '10px' }}>Category: Hackathon, Social Impact</h5>

            <h2 style={{ margin: '40px 0', fontSize: '24px'}}>What have we done?</h2>
            <p style={{ width: '80%', margin: '0 auto', backgroundColor: '#ADFF2F', padding: '10px' }}>
                We orchestrated an <b>AI hackathon</b>, uniting a diverse group of 200+ developers from different backgrounds and regions to create socially impactful solutions. Participants leveraged machine learning, NLP, and computer vision to address real-world challenges, fostering innovation in critical sectors.
            </p>

            <h3 style={{ marginTop: '30px', fontSize: '22px'}}>✯ Notable Projects</h3>
            <ul style={{ listStyleType: 'square', textAlign: 'left', display: 'inline-block' }}>
                <li style={{ marginBottom: '5px' }}><b>NodeMap —</b> AI-powered learning tool using knowledge graphs and reinforcement learning</li>
                <li style={{ marginBottom: '5px' }}><b>Voice-Over Vision —</b> YouTube accessibility enhancer with ASR/NLG for audio descriptions</li>
                <li style={{ marginBottom: '5px' }}><b>The 5th Sense —</b> Web accessibility extension employing NLU and DOM manipulation</li>
                <li><b>KineticKids —</b> Computer vision-based physical therapy app utilizing pose estimation</li>
            </ul>

            <h3 style={{ marginTop: '30px', fontSize: '22px'}}>✯ Technical Innovations</h3>
            <p style={{ width: '80%', margin: '0 auto', backgroundColor: '#ADFF2F', padding: '10px' }}>
                The projects showcased at the hackathon demonstrated advanced AI applications in education, accessibility, and healthcare. These implementations not only showed algorithmic efficiency and scalable architectures but also highlighted the successful integration with existing platforms and APIs, underlining their technical significance.
            </p>

            <h3 style={{ marginTop: '30px', fontSize: '22px'}}>✯ Impact and Recognition</h3>
            <p style={{ width: '80%', margin: '0 auto', backgroundColor: '#ADFF2F', padding: '10px' }}>
                The event attracted global investor attention, particularly for STORI AI and Jupitrr, highlighting the commercial viability of socially conscious AI ventures. This underscores the immense potential of AI to drive societal advancements through targeted technological innovation, offering hope for a better future.
            </p>

            <h3 style={{ marginTop: '30px', fontSize: '22px'}}>✯ Future Implications</h3>
            <p style={{ width: '80%', margin: '0 auto', backgroundColor: '#ADFF2F', padding: '10px' }}>
                This hackathon exemplifies the power of collaborative AI development in addressing societal needs. It sets a precedent for future events focused on harnessing collective intelligence for social good while pushing the boundaries of AI capabilities.
            </p>

            <div style={{ marginTop: '20px' }}>
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab61d00abdc9cf69902e8c_44.png" alt="Project Image 1" style={{width: '100px', height: '100px', margin: '5px'}} />
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab61d00be2667d5e837072_43.png" alt="Project Image 2" style={{width: '100px', height: '100px', margin: '5px'}} />
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab61d08f425e09a511c3ed_42.png" alt="Project Image 3" style={{width: '100px', height: '100px', margin: '5px'}} />
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab61d0f4d114a34414b4b1_41.png" alt="Project Image 4" style={{width: '100px', height: '100px', margin: '5px'}} />
            </div>

            <h2 style={{ margin: '40px 0', fontSize: '24px'}}>Related Works</h2>
            <a href="/demo/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="BrowserHack" style={{width: '150px', height: '150px'}} />
                <h3 style={{ marginTop: '10px' }}>BrowserHack — Revolutionizing Productivity With Innovative Tools</h3>
            </a>

            <a href="/demo/project/neuro-nostalgia">
                <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="Neuro Nostalgia" style={{width: '150px', height: '150px', margin: '20px'}} />
                <h3>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h3>
            </a>

            <div style={{ marginTop: '40px', color: '#FFFFFF', backgroundColor: '#2E8B57', padding: '20px' }}>
                <a href="/#contact" style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '18px', fontWeight: 'bold' }}>
                    Get in Touch — Get in Touch — Get in Touch — Get in Touch — Get in Touch — 
                </a>
            </div>
        </div>
    );
}