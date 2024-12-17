'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Courier New, monospace', color: '#00FF00', backgroundColor: '#FFFFE0', padding: '10px', textAlign: 'center' }}>
            <h1 style={{ color: '#4B0082' }}>WELCOME TO HACKATHON RAPTORS</h1>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65e205d14e76ead77edab322_5038912.png" width="150" height="150" alt="Raptors Logo" />
            <marquee style={{ backgroundColor: '#FF69B4' }}>Join us on our mission to innovate and impact!</marquee>
            <h2>We’re a community of</h2>
            <h3>experts specializing on</h3>
            <h3>impactful challenges</h3>
            <h3 style={{ color: '#B22222' }}>proven Fundraising</h3>
            <h3>Efficient Scientific Methods</h3>
            <h3>Top-Tier Software Development</h3>
            <h3 style={{ color: '#FF4500' }}>altruism-centered events</h3>
            <h3>respected collaboration</h3>
            <marquee style={{ backgroundColor: '#FFD700' }}>Join us for upcoming events and collaborations!</marquee>
            <h2>VALUES</h2>
            <h3>Ideate. Program. Revolutionize.</h3>
            <p><a href="/demo/leadership-principles" style={{ color: '#0000FF', textDecoration: 'underline' }}>Learn More</a></p>
            <h3>Latest Events</h3>
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" width="150" height="150" alt="Event Image" />
            <p><strong>BrowserHack — Revolutionizing Productivity With Innovative Tools</strong></p>
            <p><a href="/demo/project/browserhack----revolutionizing-productivity-with-innovative-tools" style={{ color: '#8A2BE2' }}>Learn more about our events!</a></p>
            <marquee direction="left" style={{ backgroundColor: '#7FFF00', color: '#000080' }}>Alone we can do so little; together we can do so much.</marquee>
            <h2>WHO WE ARE?</h2>
            <p>Event Organization Driven by Decently Experienced Engineers</p>
            <marquee direction="right" style={{ backgroundColor: '#FF6347', color: '#000080' }}>Over 1500 participants from 30+ countries. Be a part of it!</marquee>
            <h2>ASSOCIATION</h2>
            <p><strong>Guild of Expert Engineers</strong></p>
            <p><a href="/demo/fellow-membership" style={{ color: '#FF00FF', textDecoration: 'none' }}>DISCOVER</a> <a href="/demo/our-members" style={{ color: '#FF00FF', textDecoration: 'none' }}>OUR FELLOWS</a></p>
            <marquee direction="left" style={{ backgroundColor: '#FF1493', color: '#FFFFFF' }}>SMALL SCALE — BIG IMPACT</marquee>
            <h2>Contact</h2>
            <p>Join us for partnerships, proposals, and more.</p>
            <p>Email: hello@raptors.dev | Phone: +44 1733 833019</p>
            <marquee style={{ backgroundColor: '#DDA0DD', color: '#008080' }}>Let's Talk - Let's Talk - Let's Talk</marquee>
        </div>
    );
}