'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#ff00ff', color: '#00ff00', fontFamily: 'Courier New, monospace', textAlign: 'center' }}>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="" width={150} height={150} />
            <h1 style={{ fontSize: '64px', margin: '20px 0', textDecoration: 'underline' }}>RetroAI Quest</h1>
            <h2>— Reviving Classic Text Adventures with AI-Driven Gameplay</h2>
            <p style={{ fontSize: '24px', margin: '20px 0' }}>
                <span>OldSchool's Time: Hackathon Focused on Text-Based Gaming</span>
            </p>
            <hr style={{ borderWidth: '4px', borderColor: '#ffff00' }} />
            <p style={{ fontSize: '20px' }}>📅 Sep 2024</p>
            <p style={{ fontSize: '20px' }}>👥 Raptors</p>
            <p style={{ fontSize: '20px' }}>
                <a href="https://textadventurehack.com/" style={{ color: '#ff6600', textDecoration: 'none' }}>🔗 textadventurehack.com</a>
            </p>
            <p style={{ fontSize: '20px' }}>🎮 Hackathon, Game Development</p>
            <hr style={{ borderWidth: '4px', borderColor: '#ffff00' }} />
            <h3 style={{ fontSize: '36px', margin: '40px 0' }}>RetroAI Quest's Results</h3>
            <p style={{ fontSize: '20px', margin: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                Raptors is excited to announce the end of the RetroAI Quest Hackathon. Participants were challenged to create AI-powered text adventure games inspired by the classic interactive fiction of the 1980s. This global event gathered talented developers, engineers, and storytellers who showcased exceptional creativity and technical skill.
            </p>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>✯ Global Collaboration</p>
            <p style={{ fontSize: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                Participants from various countries collaborated virtually on Discord, resulting in a collection of impressive projects.
            </p>
            <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left', display: 'inline-block' }}>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 Verdictum: An AI-powered detective game dynamically generating plots based on player-provided scenarios.</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 EpochExplorerAI: Players become time travelers communicating with past selves.</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 3-days: Introducing users to Kazakh culture.</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 Aventra: Combines AI-driven text adventure with OpenAI for dynamic responses.</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 RetroAI-Quest: Terminal-based game with modern AI storytelling.</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>💡 Lost: Interactive text-based adventure set in a dystopian future.</li>
            </ul>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>✯ Top Honors</p>
            <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left', display: 'inline-block' }}>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>🏆 Overall Winner: Intra by Team Me Myself and I</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>🥈 Second Place: Verdictum by Team Verdictum Team</li>
                <li style={{ fontSize: '20px', margin: '20px 0' }}>🥉 Third Place: RetroAI-Quest by Sanjay</li>
            </ul>
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670ce719087d78662c732305_1%20(2).png" alt="" width={300} height={300} />
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670ce7366b5924e18644e6a9_2.png" alt="" width={300} height={300} />
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670ce7365947824a1a9377a3_3%20(2).png" alt="" width={300} height={300} />
            <div style={{ margin: '40px 0' }}>
                <a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="" width={250} height={200} />
                </a>
            </div>
            <footer style={{ backgroundColor: '#006666', padding: '10px' }}>
                <a href="#contact" style={{ color: '#ff3300', fontSize: '24px', textDecoration: 'none' }}>Get in Touch</a>
            </footer>
        </div>
    );
}