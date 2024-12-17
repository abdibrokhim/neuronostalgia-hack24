'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Courier New, monospace', backgroundColor: '#F0F8FF', color: '#000', padding: '20px', maxWidth: '800px', margin: '0 auto', border: '3px dashed #ff00ff', textAlign: 'center' }}>
            <h1 style={{ color: '#ff4500', fontSize: '36px', textShadow: '2px 2px #ff00ff' }}>Social Good</h1>
            <h2 style={{ fontSize: '30px', color: '#ff6347' }}>Designing Altruistic Hackathons For Social Good</h2>
            <p style={{ fontSize: '12px', color: '#4b0082' }}>October 25, 2024 · 13 min</p>
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/671b679d735faf3d0073923e_53924764136_d320c4c847_k.jpg" alt="Hackathon Image" width={640} height={360} style={{ border: '4px solid #ff69b4', boxShadow: '5px 5px 5px #000' }} />
            
            <h2 style={{ color: '#ff00ff', fontSize: '24px', marginTop: '20px' }}>Designing Altruistic Hackathons: A Guide On Innovations For Social Good</h2>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                The most recent technology, AI, has played a positive role in humanity. As it has grown over the past two years, it has influenced 17 UN Sustainable Development Goals. The advancements in the internet also positively impact humanity in many ways.
            </p>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                From apps to technology for mental health and AI-powered solutions show altruism in innovation. Being a hub of creativity, designing altruistic hackathons is a productive way to use it for social good.
            </p>
            
            <h3 style={{ color: '#8b0000', fontSize: '20px' }}>What Makes a Hackathon Altruistic?</h3>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                All hackathons aren’t altruistic as they offer solutions or products just to win the event or meet the goals. An altruism-centered hackathon focuses on offering a solution that positively impacts humanity. It is a perfect opportunity to bring innovations that prove helpful for others.
            </p>
            
            <h3 style={{ color: '#8b0000', fontSize: '20px' }}>Altruism in Innovation</h3>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                Most of the innovations are centered around profit maximization or market dominance. However, many companies are now shifting their ways towards altruism. It is a perfect opportunity to bring positive change in society.
            </p>

            <h3 style={{ color: '#8b0000', fontSize: '20px' }}>Challenges Addresses in Altruistic Hackathons</h3>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                Because of the altruistic hackathons, innovations have handled many social issues. These include healthcare, offering safe driving features, mental health, or cost of living crises. Instead of having profit-driven goals, these hackathons let diverse, skilled persons use creativity to address social problems.
            </p>

            <h3 style={{ color: '#8b0000', fontSize: '20px' }}>Purpose Of Altruistic Hackathons</h3>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
                The main purpose of designing altruistic hackathons is to use creativity for innovations that can solve social issues. A typical hackathon just focuses on meeting the goals or aims of the sponsors. However, altruism mainly focuses on social challenges, which makes it different from the typical one.
            </p>

            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cdbc7e9e241b80c898017_%D1%8F%20(1).png" alt="Yauheni Malashuk" width={320} height={180} style={{ margin: '20px 0', border: '4px dotted #4682b4' }} />
            
            <h4 style={{ color: '#4682b4', fontSize: '18px' }}>Yauheni Malashuk</h4>

            <p style={{ fontSize: '14px', fontStyle: 'italic', marginBottom: '40px' }}>
                Yauheni Malashuk, expert in web design projects and web development, is the author of a comprehensive study and book, offering insights into modern web design and development practices.
            </p>
        </div>
    );
}