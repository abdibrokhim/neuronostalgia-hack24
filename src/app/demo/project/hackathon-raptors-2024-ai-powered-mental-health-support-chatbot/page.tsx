'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ margin: '0 auto', padding: '20px', maxWidth: '800px', backgroundColor: '#FFCC00', border: '3px solid #CC0000', fontFamily: 'Courier New, Courier, monospace', color: '#3300FF', textAlign: 'center' }}>
            <div>
                <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="" width={50} height={50} />
            </div>
            <h1 style={{ fontSize: '36px', color: '#660033' }}>Artificial Intelligence Hype — Mental Health Support Chatbot Hackathon</h1>
            <h2 style={{ fontSize: '28px', color: '#006600' }}>AI Minds, Human Hearts: Mental Wellness Hackathon</h2>
            <ul style={{ listStyleType: 'disc', padding: '0 20px', textAlign: 'left' }}>
                <li style={{ fontSize: '20px' }}>Date: Jun 2024</li>
                <li style={{ fontSize: '20px' }}>Client: Hackathon Raptors</li>
                <li style={{ fontSize: '20px' }}>Website: <a href="http://hackformental.com" style={{ color: '#CC00CC', textDecoration: 'none' }}>hackformental.com</a></li>
                <li style={{ fontSize: '20px' }}>Category: Hackathon, Health Tech</li>
            </ul>
            <section style={{ marginTop: '30px' }}>
                <h3 style={{ fontSize: '24px', color: '#663399' }}>Mental Well-being: Coding Compassion</h3>
                <p style={{ fontSize: '18px' }}>Hackathon Raptors announces the successful completion of our <strong>AI Mental Wellness Chatbot Hackathon</strong>. The event brought together tech innovators to develop empathetic AI chatbots for mental health support.</p>
            </section>
            <section style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '22px', color: '#CC6600' }}>✯ Global Participation and Creative Synergy</h4>
                <p style={{ fontSize: '18px' }}>International participants collaborated virtually to create innovative mental wellness chatbots. Solutions ranged from AI emotional support systems to comprehensive wellness platforms, blending technical skill with compassion.</p>
            </section>
            <section style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '22px', color: '#FF0066' }}>✯ Highlighted Projects and Winners:</h4>
                <ul style={{ listStyleType: 'square', padding: '0 20px', textAlign: 'left' }}>
                    <li style={{ fontSize: '18px' }}><strong>Wendy</strong> — GPT-4 Telegram bot for empathetic conversations. Personalized, efficient, with detailed implementation.</li>
                    <li style={{ fontSize: '18px' }}><strong>Mental AI</strong> — Real-time voice assistance for mental health. Collaborates with psychologists, uses innovative prompts.</li>
                    <li style={{ fontSize: '18px' }}><strong>MeWellAI</strong> — Platform with specialized AI agents for various concerns. Offers AI content, community features, and courses.</li>
                </ul>
            </section>
            <section style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '22px', color: '#FF3399' }}>✯ Celebrating Excellence</h4>
                <p style={{ fontSize: '18px' }}>This year's hackathon spotlighted thoughtful, innovative, and flawlessly executed projects. We congratulate all our participants, particularly Wendy, Mental AI, and MeWellAI, for their outstanding contributions to mental wellness support.</p>
            </section>
            <section style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '22px', color: '#6633FF' }}>✯ Judge's Laudatory Comments</h4>
                <ul style={{ listStyleType: 'circle', padding: '0 20px', textAlign: 'left' }}>
                    <li style={{ fontSize: '18px' }}><strong>Relevance to the Topic</strong> — "<i>MeWellAI stood out in correspondence to the task, enabling users to pick feedback that's most effective for them.</i>" — Rodrigo Segnini</li>
                    <li style={{ fontSize: '18px' }}><strong>Innovative Problem-Solving</strong> — "<i>Mental AI's inclusion of voice messages and emotional inputs signifies an advancement in user interaction.</i>" — Xin Hu</li>
                    <li style={{ fontSize: '18px' }}><strong>Code Quality</strong> — "<i>Wendy's project was well-detailed and showed a clear demonstration of product functionality.</i>" — Iuliia Kozlova</li>
                </ul>
            </section>
            <div style={{ marginTop: '40px' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a9923dfc514a2132207_23.png" alt="" width={60} height={60} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a992bacf91adbe69427_22.png" alt="" width={60} height={60} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a991264581e96180f94_21.png" alt="" width={60} height={60} />
            </div>
            <div style={{ marginTop: '30px', backgroundColor: '#99CCFF', padding: '10px', border: '2px dashed #0033CC' }}>
                <h5 style={{ fontSize: '20px' }}><a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a></h5>
                <h5 style={{ fontSize: '20px' }}><a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a></h5>
                <h5 style={{ fontSize: '20px' }}><a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a> – <a href="/#contact" style={{ color: '#FF33CC', textDecoration: 'none' }}>Get in Touch</a></h5>
            </div>
        </div>
    );
}