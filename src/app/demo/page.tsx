'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: "'Comic Sans MS', 'Courier New', serif", backgroundColor: '#f5deb3', color: '#8b008b', margin: '0', padding: '20px', textAlign: 'center' }}>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" width={50} height={50} alt="Arrow" />
            <h1 style={{ fontSize: '40px', textShadow: '2px 2px #ffa500' }}>HACKATHON RAPTORS</h1>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65e205d14e76ead77edab322_5038912.png" width={200} height={200} alt="Raptor Logo" />
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '20px 0', backgroundColor: '#ff69b4', padding: '10px' }}>We’re a community of</h2>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65df5b36cfa3a27948694b79_AdobeStock_321156867.jpeg" width={300} height={200} alt="Experts" />
            <ul style={{ listStyleType: 'square', padding: '0', lineHeight: '1.5', backgroundColor: '#ffe4e1', margin: '20px', padding: '10px', border: '2px dashed #ff1493' }}>
                <li>impactful challenges</li>
                <li>proven Fundraising</li>
                <li>Efficient Scientific Methods</li>
                <li>Top-Tier Software Development</li>
                <li>altruism-centered events</li>
                <li>respected collaboration</li>
            </ul>
            <section style={{ margin: '20px 0', padding: '10px', border: '2px groove #00f', backgroundColor: '#add8e6' }}>
                <h3>VALUES</h3>
                <a href="/leadership-principles" style={{ color: '#ff4500', textDecoration: 'underline' }}>Learn More</a>
                <p>Ideate. Program. Revolutionize.</p>
            </section>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65df563c0dcd7ede97492cee_New%20Project%20(7).jpg" width={200} height={170} alt="Image 1" />
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65df59b564b5f3cc81025cd7_New%20Project%20(9).jpg" width={200} height={170} alt="Image 2" />
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65df59cd34095a67fb10422f_New%20Project%20(8).jpg" width={200} height={170} alt="Image 3" />
            <footer style={{ backgroundColor: '#4682b4', color: '#fff', padding: '10px', marginTop: '20px' }}>
                <p>Contact us at hello@raptors.dev or +44 1733 833019</p>
                <p>Follow Us &ndash; Social Links</p>
            </footer>
        </div>
    );
}