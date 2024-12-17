'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#FFFACD', fontFamily: 'Comic Sans MS, cursive', color: '#0000FF', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <header style={{ textAlign: 'center', backgroundColor: '#FFD700', padding: '10px', border: '3px solid #A52A2A' }}>
                <h1>Beyond Code — The Importance Of Non-Technical Skills</h1>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd31956997bc07f46274a_1676826279102.jpeg" alt="Beyond Code" width={200} height={150} />
                <p style={{ fontStyle: 'italic', margin: '10px 0' }}>Aleksei Naumov | August 6, 2024 | 10 min read</p>
            </header>
            <p>Have you ever felt left out of the tech world because you're not a coding wizard? Think hackathons are only for programmers and developers? Think again! This post will explore how non-technical skills can be just as valuable in hackathons and how your unique perspective might be the key to success.</p>
            <a href="/blog/beyond-code-the-importance-of-non-technical-skills-in-hackathon-success" style={{ color: '#FF6347', textDecoration: 'underline' }}>Read more about Beyond Code »</a>
            <div style={{ marginTop: '50px' }}>
                <h3 style={{ backgroundColor: '#8A2BE2', color: '#FFFFFF', padding: '5px' }}>Other Posts</h3>
                {[
                    {
                        title: 'Designing Altruistic Hackathons For Social Good',
                        image: 'https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cdbc7e9e241b80c898017_%D1%8F%20(1).png',
                        author: 'Yauheni Malashuk',
                        date: 'October 25, 2024',
                        time: '13 min',
                        link: '/blog/designing-altruistic-hackathons-for-socia-good'
                    },
                    {
                        title: 'Efficient Methods of Scientific Rigor in Hackathon',
                        image: 'https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd75350672565d49ebb03_IMG_2390.png',
                        author: 'Nikita Letov',
                        date: 'October 24, 2024',
                        time: '5 min',
                        link: '/blog/efficient-methods-of-scientific-rigor-in-hackathon'
                    },
                    {
                        title: 'Positive Social Impact of Global Hackathons',
                        image: 'https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd9f8ee20442cbf9847f7_dd.jpg',
                        author: 'Diana Dvoryak',
                        date: 'October 24, 2024',
                        time: '7 min',
                        link: '/blog/positive-social-impact-of-global-hackathons'
                    }
                ].map((post, index) => (
                    <div key={index} style={{ marginBottom: '20px', padding: '10px 5px', border: '2px solid #A52A2A', backgroundColor: '#FFF8DC' }}>
                        <h4 style={{ color: '#8B0000' }}>{post.title}</h4>
                        <Image src={post.image} alt={post.title} width={150} height={100} />
                        <p>{post.author} | {post.date} | {post.time} read</p>
                        <a href={post.link} style={{ color: '#FF6347', textDecoration: 'none' }}>Read more »</a>
                    </div>
                ))}
            </div>
        </div>
    );
}