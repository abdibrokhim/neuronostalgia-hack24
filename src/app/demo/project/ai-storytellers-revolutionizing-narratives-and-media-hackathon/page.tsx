'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 2000);
    }, []);

    if (!isLoaded) {
        return <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Courier New, Courier, monospace', color: '#006400' }}>
            Welcome to the 90s web... Loading...
        </div>
    }

    return (
        <div style={{ background: '#ff00ff', color: '#008080', fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            <marquee behavior="alternate">
                <h1>AI Storytellers — Revolutionizing Narratives and Media Hackathon</h1>
            </marquee>
            <h2 style={{ textAlign: 'center', background: '#ffcc00', padding: '10px' }}>Media Renaissance: AI Changes Storytelling Methods</h2>
            <div style={{ margin: '10px', padding: '10px', border: '5px dotted #ff0000' }}>
                <h4 style={{ color: '#0000ff' }}>🏆 Date: Sep 2024</h4>
                <h4 style={{ color: '#0000ff' }}>🏆 Client: <span style={{ color: '#ff0000' }}>Raptors</span></h4>
                <h4 style={{ color: '#0000ff' }}>🏆 Website: <a href="https://aistoryhack.com" style={{ textDecoration: 'underline', color: '#008000' }}>aistoryhack.com</a></h4>
                <h4 style={{ color: '#0000ff' }}>🏆 Category: Hackathon, Content Tech</h4>
            </div>
            <p style={{ textAlign: 'justify', margin: '20px', background: 'lime', padding: '10px' }}>
                Hackathon Raptors is thrilled to announce the successful conclusion of our <b>AI Storytellers Hackathon 2024</b>, which focused on <b>AI-driven solutions for Efficient Content Consumption</b>. This global event brought together innovative developers, engineers, and designers worldwide, showcasing cutting-edge AI-powered content summarization and personalization solutions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div style={{ border: '3px double #ff00ff', padding: '5px', margin: '5px' }}>
                    <h3>✯ International Collaboration</h3>
                    <p style={{ background: '#7fffd4', margin: '10px' }}>
                        Participants from diverse countries collaborated virtually, producing an impressive array of innovative projects. The submissions demonstrated technical excellence and creative problem-solving in content consumption, from video summarization tools to interactive storytelling bots.
                    </p>
                </div>
                <div style={{ border: '3px double #ff00ff', padding: '5px', margin: '5px' }}>
                    <h3>✯ Notable Projects</h3>
                    <ul style={{ color: '#8b4513' }}>
                        <li><b>FocusFeed</b> — Transforming educational content into engaging video summaries</li>
                        <li><b>Long Story Short</b> — A Chrome extension for customizable webpage summarization</li>
                        <li><b>AI-Powered Mindmap Creator</b> — Visualizing complex information for enhanced comprehension</li>
                    </ul>
                </div>
            </div>
            <h3 style={{ textAlign: 'center', margin: '10px', color: '#ff4500' }}>✯ Celebrating Excellence</h3>
            <p style={{ textAlign: 'center', margin: '20px', background: '#00ced1', padding: '10px' }}>
                The competition was fierce, with 30+ impressive submissions. We're thrilled to announce that the <b>FocusFeed</b> team was awarded the top prize of $1,000 for their outstanding project. Second and third places, earning $300 and $200, respectively, went to <b>Long Story Short</b> and <b>AI-Powered Mindmap Creator</b>.
            </p>
            <h3 style={{ textAlign: 'center', margin: '10px', color: '#ff4800' }}>✯ Industry Support and Future Impact</h3>
            <p style={{ margin: '20px', background: 'yellow', padding: '10px' }}>
                Backed by a panel of distinguished judges from tech giants like Microsoft, AWS, Meta, Oracle, and Goldman Sachs, AI Storytellers 2024 has set a new benchmark for innovation in content consumption. The event featured valuable networking opportunities, including Speed Dating sessions, mock interviews, and workshops with industry experts.
            </p>
            <h3 style={{ textAlign: 'center', margin: '10px', color: '#ff6347' }}>✯ Beyond the Hackathon</h3>
            <p style={{ margin: '20px', background: '#f0e68c', padding: '10px' }}>
                As part of the larger Hack&Grow Fest, this hackathon was more than just a competition. It culminated in a collective manifesto on AI's practical and ethical use in content creation and consumption, underlining the event's commitment to responsible innovation.
            </p>
            <div style={{ textAlign: 'center' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ddc7664b8412815fac77ec_51.png" alt="Hackathon Image 1" width={200} height={150} style={{ margin: '10px' }} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ddc766fa9ffe66692bc81d_52.png" alt="Hackathon Image 2" width={200} height={150} style={{ margin: '10px' }} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ddc7661ce0643cc10353da_53.png" alt="Hackathon Image 3" width={200} height={150} style={{ margin: '10px' }} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ddc766a3763daba57bc7b8_54.png" alt="Hackathon Image 4" width={200} height={150} style={{ margin: '10px' }} />
            </div>
            <div style={{ textAlign: 'center', margin: '20px', padding: '20px', background: 'pink' }}>
                <h4>Related Works</h4>
                <a href="/demo/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="BrowserHack" width={100} height={75} />
                </a>
                <h4>BrowserHack — Revolutionizing Productivity With Innovative Tools</h4>
                <p>Hackathon, Social Impact</p>
                <a href="/demo/project/neuro-nostalgia">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="Neuro Nostalgia" width={100} height={75} />
                </a>
                <h4>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h4>
                <p>Hackathon, Content Tech</p>
            </div>
            <h4 style={{ textAlign: 'center', borderTop: '3px dashed #000', marginTop: '30px', paddingTop: '10px' }}>
                <a href="/#contact" style={{ textDecoration: 'none', color: '#000080' }}>Get in Touch — Get in Touch — Get in Touch</a>
            </h4>
        </div>
    );
}