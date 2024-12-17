'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{
            fontFamily: 'Comic Sans MS, Arial, Sans-Serif',
            backgroundColor: '#00ffcc',
            color: '#ff00ff',
            textAlign: 'center',
            padding: '20px',
            border: '3px dashed #ff0000'
        }}>
            <h1 style={{ fontSize: '36px', textDecoration: 'underline', margin: '20px 0' }}>Welcome to Hackathon Raptors!</h1>
            <marquee behavior="scroll" direction="left" style={{ fontSize: '18px', marginBottom: '20px', backgroundColor: '#0000ff', color: '#ffff00' }}>
                We're a community of experts specializing in impactful challenges.
            </marquee>
            <div style={{ border: '3px grooved #ff00ff', margin: '20px', padding: '10px', backgroundColor: '#ccffcc' }}>
                <h2 style={{ fontSize: '24px' }}>Our Values</h2>
                <button onClick={() => window.location.href='/demo/leadership-principles'} style={{ fontSize: '18px', margin: '10px 0', padding: '5px 10px', backgroundColor: '#ffff00' }}>Learn More</button>
                <ul style={{ listStyleType: 'square', fontSize: '16px', textAlign: 'left', padding: '0 40px' }}>
                    <li>Community involvement</li>
                    <li>Global impact</li>
                    <li>Problem-solving focus</li>
                    <li>Tech-driven solutions</li>
                    <li>Creative synergy</li>
                </ul>
            </div>
            <div style={{ margin: '20px', padding: '10px', border: '2px dotted #00ff00', backgroundColor: '#ffccff' }}>
                <h3 style={{ fontSize: '22px' }}>Latest Events</h3>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" width={50} height={50} alt="Event Image" />
                <p style={{ margin: '10px', fontSize: '16px' }}>BrowserHack - Revolutionizing Productivity With Innovative Tools</p>
            </div>
            <blockquote style={{ fontSize: '18px', fontStyle: 'italic', margin: '20px 0' }}>
                "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." — Margaret Mead
            </blockquote>
            <footer style={{
                fontSize: '14px',
                borderTop: '3px solid #ff0000',
                marginTop: '20px',
                paddingTop: '10px'
            }}>
                <p>Hackathon Raptors, Community Interest Company</p>
                <p>Contact: hello@raptors.dev | +44 1733 833019</p>
                <p style={{ backgroundColor: '#33cc33', padding: '10px', color: '#0000ff' }}>Let's Talk Partnerships!</p>
            </footer>
        </div>
    );
}