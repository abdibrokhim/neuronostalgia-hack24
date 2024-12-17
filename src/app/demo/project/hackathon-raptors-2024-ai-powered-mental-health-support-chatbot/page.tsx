'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#E0E4CC', color: '#663399', fontFamily: `'Comic Sans MS', cursive, sans-serif`, padding: '20px' }}>
            <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="Arrow" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
            <h1 style={{ textAlign: 'center', backgroundColor: '#A7DBD8', padding: '10px' }}>Artificial Intelligence Hype — Mental Health Support Chatbot Hackathon</h1>
            <marquee behavior="scroll" direction="left" style={{ backgroundColor: '#F38630', color: '#fff', padding: '10px' }}>AI Minds, Human Hearts: Mental Wellness Hackathon</marquee>
            <div style={{ margin: '20px auto', width: '80%', backgroundColor: '#FA6900', padding: '10px', border: '3px dashed #FFF' }}>
                <h5>Date: Jun 2024</h5>
                <h5>Client: Hackathon Raptors</h5>
                <h5>Website: <a href="http://hackformental.com" style={{ color: '#fff' }}>hackformental.com</a></h5>
                <h5>Category: Hackathon, Health Tech</h5>
            </div>
            <section style={{ backgroundColor: '#FFD700', padding: '15px', margin: '20px 0', border: '2px solid #000' }}>
                <h2>Mental Well-being: Coding Compassion</h2>
                <p>Hackathon Raptors announces the successful completion of our <strong>AI Mental Wellness Chatbot Hackathon</strong>. The event brought together tech innovators to develop empathetic AI chatbots for mental health support.</p>
                <h4>✯ Global Participation and Creative Synergy</h4>
                <p>International participants collaborated virtually to create innovative mental wellness chatbots. Solutions ranged from AI emotional support systems to comprehensive wellness platforms, blending technical skill with compassion.</p>
                <h4>✯ Highlighted Projects and Winners:</h4>
                <ul>
                    <li><strong>Wendy</strong> — GPT-4 Telegram bot for empathetic conversations. Personalized, efficient, with detailed implementation.</li>
                    <li><strong>Mental AI</strong> — Real-time voice assistance for mental health. Collaborates with psychologists, uses innovative prompts.</li>
                    <li><strong>MeWellAI</strong> — Platform with specialized AI agents for various concerns. Offers AI content, community features, and courses.</li>
                </ul>
                <h4>✯ Celebrating Excellence</h4>
                <p>This year's hackathon spotlighted thoughtful, innovative, and flawlessly executed projects. We congratulate all our participants, particularly Wendy, Mental AI, and MeWellAI, for their outstanding contributions to mental wellness support.</p>
                <h4>✯ Judge's Laudatory Comments</h4>
                <blockquote>
                    <p><strong>Relevance to the Topic</strong> — "_MeWellAI stood out in correspondence to the task, enabling users to pick feedback that's most effective for them._" — Rodrigo Segnini</p>
                    <p><strong>Innovative Problem-Solving</strong> — "_Mental AI's inclusion of voice messages and emotional inputs signifies an advancement in user interaction._" — Xin Hu</p>
                    <p><strong>Code Quality</strong> — "_Wendy's project was well-detailed and showed a clear demonstration of product functionality._" — Iuliia Kozlova</p>
                </blockquote>
            </section>
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a9923dfc514a2132207_23.png" alt="Image1" width={200} height={150} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a992bacf91adbe69427_22.png" alt="Image2" width={200} height={150} />
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66ab5a991264581e96180f94_21.png" alt="Image3" width={200} height={150} />
            </div>
            <h3 style={{ textAlign: 'center', backgroundColor: '#69D2E7', padding: '10px', fontSize: '24px' }}>Stay tuned.</h3>
            <section style={{ margin: '20px 0' }}>
                <h3 style={{ backgroundColor: '#C02942', color: '#FFF', padding: '10px' }}>Related Works</h3>
                <a href="/project/browserhack----revolutionizing-productivity-with-innovative-tools" style={{ display: 'block', textAlign: 'center', margin: '10px 0' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png" alt="Project 1" width={300} height={200} />
                    <h4>BrowserHack — Revolutionizing Productivity With Innovative Tools</h4>
                </a>
                <p style={{ textAlign: 'center', color: '#F38630' }}>Hackathon, Social Impact</p>
                <a href="/project/neuro-nostalgia" style={{ display: 'block', textAlign: 'center', margin: '10px 0' }}>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png" alt="Project 2" width={300} height={200} />
                    <h4>Neuro Nostalgia — AI-Powered Time Machine for Web Design</h4>
                </a>
                <p style={{ textAlign: 'center', color: '#F38630' }}>Hackathon, Content Tech</p>
            </section>
            <div style={{ backgroundColor: '#F38630', padding: '30px', borderTop: '5px outset #000', textAlign: 'center' }}>
                <a href="/#contact" style={{ display: 'block', color: '#fff', fontSize: '20px', padding: '5px', textDecoration: 'none' }}>Get in Touch – Get in Touch – Get in Touch –</a>
            </div>
        </div>
    );
}