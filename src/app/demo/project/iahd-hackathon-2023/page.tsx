'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{
            backgroundColor: '#f0f9e4',
            fontFamily: 'Courier New, monospace',
            color: '#00008b',
            padding: '20px',
            width: '95%',
            margin: 'auto',
            border: '3px solid #ff00ff'
        }}>
            <header style={{
                backgroundColor: '#c0c0c0',
                padding: '10px',
                textAlign: 'center',
                borderBottom: '5px dotted #008000'
            }}>
                <h1 style={{ fontSize: '28px' }}>International Association of Honored Developers — DEI & Web Accessibility</h1>
                <p style={{ fontSize: '18px' }}>Inclusive Tech Revolution: Global Coders Unite</p>
            </header>
            <section style={{ marginTop: '20px' }}>
                <h3 style={{ backgroundColor: '#ffcccb', padding: '5px', borderRadius: '10px' }}>Date: Sep 2023</h3>
                <h3 style={{ backgroundColor: '#e0ffff', padding: '5px', borderRadius: '10px' }}>Client: IAHD Association</h3>
                <h3 style={{ backgroundColor: '#fffacd', padding: '5px', borderRadius: '10px' }}>Website: <a href="https://iahdhackathon2023.cc/" target="_blank" style={{ textDecoration: 'underline', color: '#ff00ff' }}>iahdhackathon2023.cc</a></h3>
                <h3 style={{ backgroundColor: '#add8e6', padding: '5px', borderRadius: '10px' }}>Category: Hackathon, DEI</h3>
            </section>
            <section style={{ marginTop: '20px' }}>
                <h2>What did we do?</h2>
                <p>Hackathon Raptors orchestrated the <strong>Accessibility Innovations Hackathon 2024</strong>, leveraging collective intelligence to address digital accessibility challenges. This event convened skilled developers and UX designers to prototype and implement solutions enhancing web and application usability for users with diverse needs. Employing agile methodologies, participants developed scalable algorithms, optimized data structures, and novel assistive technologies.</p>
                <article>
                    <h4>✯ Diverse Solutions for Accessibility</h4>
                    <p>Participants developed a wide range of projects, from browser extensions to specialized apps, demonstrating creativity and technical skill in addressing accessibility challenges.</p>
                </article>
                <article>
                    <h4>✯ Notable Projects</h4>
                    <ul>
                        <li><strong>Accessibility extension</strong> — A browser add-on to enhance web accessibility</li>
                        <li><strong>Assistapp</strong> — An easy-to-use widget for website and platform accessibility, compliant with ADA standards</li>
                        <li><strong>BimbimBambam</strong> — A prototype marketplace with accessibility features</li>
                        <li><strong>Easy to find, easy to eat</strong> — A shop food app designed for ease of use by everyone</li>
                    </ul>
                </article>
                <article>
                    <h4>✯ Innovative Approaches</h4>
                    <p>Other notable entries included voice-assistant technology, web accessibility checkers, and specialized e-commerce solutions, showcasing the diverse ways participants approached accessibility challenges.</p>
                </article>
                <article>
                    <h4>✯ Community Impact</h4>
                    <p>This hackathon not only produced practical solutions but also raised awareness about the importance of digital accessibility. By bringing together developers with different perspectives, we've taken a step forward in making the digital world more inclusive for all users.</p>
                </article>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5e4180b52f6bcffc1b5b_33.png" alt="hackathon image" width={100} height={100} />
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5e4180b52f6bcffc1b51_32.png" alt="hackathon image" width={100} height={100} />
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5e41e362688d86f2fcfd_31.png" alt="hackathon image" width={100} height={100} />
                </div>
            </section>
            <section style={{
                backgroundColor: '#eeeeee',
                padding: '10px',
                marginTop: '20px',
                textAlign: 'center'
            }}>
                <h2>Related Works</h2>
                <a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="browserhack" width={150} height={150} />
                </a>
                <br />
                <h3>BrowserHack — Revolutionizing Productivity With Innovative Tools</h3>
                <p>Hackathon</p>
                <p>Social Impact</p>
                <a href="/project/neuro-nostalgia">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="neuro nostalgia" width={150} height={150} />
                </a>
                <br />
                <h3>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h3>
                <p>Hackathon</p>
                <p>Content Tech</p>
            </section>
            <footer style={{
                backgroundColor: '#c0c0c0',
                padding: '10px',
                textAlign: 'center',
                borderTop: '5px dotted #008000'
            }}>
                <a href="/#contact" style={{ textDecoration: 'none', color: '#ff00ff' }}>Get in Touch</a>
                <p>Get in Touch –</p>
                <p>Get in Touch –</p>
                <p>Get in Touch –</p>
                <p>Get in Touch –</p>
            </footer>
        </div>
    );
}