'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#f0f', color: '#00f', fontFamily: 'Courier, monospace', padding: '20px' }}>
            <header style={{ textAlign: 'center', borderBottom: '3px dotted #000' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="" width={50} height={50} />
                <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Turing Day — Interactive Educational Game for STEM Learning Hackathon</h1>
            </header>
            <section style={{ maxWidth: '640px', margin: '20px auto', backgroundColor: '#ff0', padding: '10px', border: '2px solid #00f' }}>
                <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
                    <li>
                        <h5 style={{ fontSize: '24px', textDecoration: 'underline' }}>Date: Jun 2024</h5>
                    </li>
                    <li>
                        <h5 style={{ fontSize: '24px', textDecoration: 'underline' }}>Client: Hackathon Raptors</h5>
                    </li>
                    <li>
                        <h5 style={{ fontSize: '24px', textDecoration: 'underline' }}>Website: <a href="http://turingday.com" style={{ color: '#f00' }}>turingday.com</a></h5>
                    </li>
                    <li>
                        <h5 style={{ fontSize: '24px', textDecoration: 'underline' }}>Category: Hackathon, STEM</h5>
                    </li>
                </ul>
                <h2 style={{ fontSize: '30px', fontStyle: 'italic' }}>A Triumph of Innovation in STEM Education</h2>
                <p style={{ fontSize: '20px' }}>
                    Hackathon Raptors is proud to announce the successful conclusion of our <strong>Turing Day Hackathon 2024</strong>,
                    which focused on <strong>Interactive Educational Games for STEM Learning</strong>. This global event brought together
                    elite developers, engineers, and designers from around the world and showcased cutting-edge solutions in educational technology.
                </p>
            </section>
            <section style={{ maxWidth: '640px', margin: '20px auto', backgroundColor: '#0f0', padding: '10px', border: '2px solid #f00' }}>
                <h3 style={{ fontSize: '28px', color: '#000' }}>✯ International Collaboration</h3>
                <p style={{ fontSize: '20px' }}>
                    Participants from diverse countries collaborated virtually, producing an impressive array of innovative projects. From
                    physics simulations to language learning games, the submissions demonstrated both technical excellence and creative problem-solving in STEM education.
                </p>
                <h3 style={{ fontSize: '28px', color: '#000' }}>✯ Notable projects</h3>
                <ul style={{ listStyleType: 'circle', marginLeft: '40px' }}>
                    <li>
                        <a href="https://github.com/milkeeycat/matgen" style={{ color: '#00f', textDecoration: 'none' }}>Battle City</a> — Physics education through real-world simulations
                    </li>
                    <li>
                        <a href="https://github.com/TimurRakhmatullin86/CandyWords" style={{ color: '#00f', textDecoration: 'none' }}>CandyWords</a> — Language learning via an engaging candy-matching game
                    </li>
                    <li>
                        <a href="https://github.com/Daria565/BeLikeAlanTuring" style={{ color: '#00f', textDecoration: 'none' }}>Be Like Alan Turing</a> — A board game teaching cryptography concepts
                    </li>
                </ul>
            </section>
            <section style={{ maxWidth: '640px', margin: '20px auto', backgroundColor: '#0ff', padding: '10px', border: '2px solid #ff0' }}>
                <h3 style={{ fontSize: '28px', color: '#000' }}>✯ Celebrating Excellence</h3>
                <p style={{ fontSize: '20px' }}>
                    The competition was fierce, with a total prize pool of $1,500. We're thrilled to announce that <i>Timur Rakhmatullin</i>
                    was awarded the grand prize of $1,000 for his outstanding project, "CandyWords." Timur, a Software and Data Engineer with over
                    15 years of experience, exemplifies our event's high level of talent.
                </p>
            </section>
            <section style={{ maxWidth: '640px', margin: '20px auto', backgroundColor: '#f0f', padding: '10px', border: '2px solid #0f0' }}>
                <h3 style={{ fontSize: '28px', color: '#000' }}>✯ Industry Support and Future Impact</h3>
                <p style={{ fontSize: '20px' }}>
                    Backed by prominent sponsors like Miras Education, Balsamiq, and 1Password, Turing Day 2024 has set a new benchmark for innovation
                    in STEM education. With support from tech companies such as Raptors.dev and Vectora, our participants' creativity and technical prowess promise
                    to shape the future of learning technologies.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab59c6078f7e0c171b51d0_13.png" alt="" width={100} height={100} />
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab59c5e66a559b6c16478d_12.png" alt="" width={100} height={100} />
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab59c50ee44e9f530751c8_11.png" alt="" width={100} height={100} />
                </div>
            </section>
            <footer style={{ textAlign: 'center', marginTop: '30px', borderTop: '3px dotted #000', paddingTop: '10px' }}>
                [<a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools" style={{ color: '#f00' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="" width={100} height={100} />
                </a>]
                <div style={{ marginTop: '20px', maxWidth: '640px', margin: 'auto', backgroundColor: '#ff0', padding: '10px', border: '2px solid #00f' }}>
                    <h3 style={{ fontSize: '28px', color: '#000' }}>BrowserHack — Revolutionizing Productivity With Innovative Tools</h3>
                    <p style={{ fontSize: '20px' }}>Hackathon | Social Impact</p>
                </div>
                [<a href="/project/neuro-nostalgia" style={{ color: '#f00' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="" width={100} height={100} />
                </a>]
                <div style={{ marginTop: '20px', maxWidth: '640px', margin: 'auto', backgroundColor: '#0f0', padding: '10px', border: '2px solid #f00' }}>
                    <h3 style={{ fontSize: '28px', color: '#000' }}>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h3>
                    <p style={{ fontSize: '20px' }}>Hackathon | Content Tech</p>
                </div>
            </footer>
            <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '3px dotted #000', paddingTop: '10px', fontSize: '20px' }}>
                <a href="/#contact" style={{ color: '#f00', textDecoration: 'none' }}>Get in Touch – Get in Touch – Get in Touch –</a>
            </div>
        </div>
    );
}