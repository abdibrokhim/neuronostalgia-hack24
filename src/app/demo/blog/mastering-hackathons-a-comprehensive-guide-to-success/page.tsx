'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#FFFF00', color: '#0000FF', fontFamily: 'Courier New', padding: '20px' }}>
            <h1 style={{ fontSize: '36px', textAlign: 'center', textDecoration: 'underline', marginBottom: '40px' }}>Mastering Hackathons — Effective Hacking's Guide</h1>
            <div style={{ border: '3px dotted #FF00FF', padding: '10px', marginBottom: '40px' }}>
                <p><strong>Hackathons:</strong> 48-hour coding sprints to build IT solutions. This guide covers team strategies and presentation tips for success.</p>
                <p><strong>Date:</strong> August 6, 2024</p>
                <p><strong>Read Time:</strong> 7 min</p>
                <Image
                    src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66c498b20a91536cfc572899_45530454661_d8a4902d3d_k%20(1).png"
                    alt="Hackathon Image"
                    width={400}
                    height={300}
                    style={{ display: 'block', margin: '20px auto' }}
                />
            </div>
            <section style={{ border: '3px solid #008000', padding: '10px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', backgroundColor: '#FF0000', padding: '5px' }}>Understanding the Hackathon Format</h2>
                <p>The typical setup is straightforward: within a tight 48-hour window, your team must develop an IT solution to a challenge presented by the organizers...</p>
            </section>
            <section style={{ border: '3px double #FFA500', padding: '10px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', backgroundColor: '#00FFFF', padding: '5px' }}>Key Strategies for Success</h2>
                <ol style={{ margin: '0 20px', listStyleType: 'disc' }}>
                    <li><strong>Focus on the Presentation:</strong> The judging panel often includes a diverse group of professionals...</li>
                    <li><strong>Keep It Simple and Accessible:</strong> Your presentation should be simple and accessible to a wide range of people...</li>
                    <li><strong>Be Prepared for Broad Challenges:</strong> Hackathon tasks can be formulated broadly...</li>
                    <li><strong>Understand the Judging Criteria:</strong> Some organizers may specify that development should use particular technologies...</li>
                    <li><strong>Assemble the Right Team:</strong> Review the challenge in advance to determine the competencies you'll need...</li>
                    <li><strong>Ensure Adequate Team Size:</strong> It's generally better if the team consists of more than just one or two people...</li>
                    <li><strong>Define Clear Roles:</strong> Outline roles within your team...</li>
                    <li><strong>Choose Specialists Based on the Challenge:</strong> The team members executing the idea are crucial...</li>
                    <li><strong>Prepare for the Presentation:</strong> Designate someone to prepare the presentation...</li>
                    <li><strong>Include Business Aspects:</strong> Frequently, hackathon judges ask for information on market potential...</li>
                </ol>
            </section>
            <section style={{ border: '3px groove #800080', padding: '10px', marginTop: '25px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', backgroundColor: '#FFFF00', padding: '5px' }}>Common Pitfalls to Avoid</h2>
                <ol style={{ margin: '0 20px', listStyleType: 'decimal' }}>
                    <li><strong>Don't Go Solo:</strong> While one person can make a difference in many scenarios, this isn't typically true at hackathons...</li>
                    <li><strong>Avoid Disorganization:</strong> Starting as an unorganized team is a common challenge...</li>
                    <li><strong>Be Realistic About Team Commitments:</strong> Be honest about team members' skills and availability...</li>
                    <li><strong>Don't Wing It:</strong> Avoid the "we'll figure it out as we go" approach...</li>
                    <li><strong>Don't Ignore Available Resources:</strong> Avoid not talking to mentors and trainers provided by the organizers...</li>
                    <li><strong>Read the Fine Print:</strong> Don't ignore the details in the hackathon rules and guidelines...</li>
                </ol>
            </section>
            <section style={{ border: '3px dashed #FFA500', padding: '10px', marginTop: '25px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', backgroundColor: '#B22222', padding: '5px' }}>Final Thoughts</h2>
                <p>Hackathons... crucibles of innovation where time bends and minds expand...</p>
            </section>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h3 style={{ fontSize: '28px' }}>Dmitrii Starikov</h3>
                <p>Dmitrii Starikov, Lead Developer at ELAR Corporation, uses PHP, NodeJS, and ElasticSearch to design high-performance archival systems...</p>
                <Image
                    src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66c49755ecf8279c0dbe4c8e_New%20Project%20(14).png"
                    alt="Dmitrii Starikov"
                    width={200}
                    height={150}
                    style={{ display: 'block', margin: '20px auto' }}
                />
            </div>
        </div>
    );
}