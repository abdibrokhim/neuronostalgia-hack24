'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#ffffcc', fontFamily: 'Comic Sans MS, cursive', color: '#993300', padding: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', borderTop: '2px dotted #ff99cc', borderBottom: '2px dotted #ff99cc', margin: '20px 0' }}>Discover Fellowship</h1>
            <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
                As the highest category of membership, awarded by your peers, the Hackathon Raptors Fellowship opens up opportunities to you, both in terms of your career and in giving back to the profession. It strengthens your reputation in the workplace and beyond, giving you access to more fulfilling roles and new challenges.
            </p>
            <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
                The Fellows category includes engineering and technology professionals from diverse backgrounds. They all share a common trait — they have contributed to the profession through creativity, innovation, enterprise, authority, prestige, responsibility, or interdisciplinary integration.
            </p>
            <h2 style={{ fontSize: '36px', backgroundColor: '#ccffcc', padding: '10px', marginTop: '40px' }}>ENROLLMENT OPEN</h2>
            <h3 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '20px' }}>Apply for Fellowship</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                If you’ve been recognised time and again for your commitment to the industry and professional achievements, Fellowship will be right for you.
                <br />
                <br />
                We accept applications from both current Raptors contributors and non-members.
            </p>
            <a href="https://fellowship.raptors.dev/" style={{ backgroundColor: '#ffcc99', padding: '10px 20px', textDecoration: 'none', color: '#993300', boxShadow: '2px 2px 5px #888888' }}>
                Apply for Fellowship
            </a>
            <h3 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px' }}>Am I Eligible?</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
                Fellowship is the prestigious Hackathon Raptors membership level awarded only to individuals who have demonstrated recent significant achievement(s) sustained at high levels for a period of at least five years in engineering, technology, or related disciplines relevant to the Hackathon Raptors.
            </p>
            <ul style={{ textAlign: 'left', margin: '20px 40px', fontSize: '20px', lineHeight: '1.8' }}>
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Enterprise</li>
                <li>Authority</li>
                <li>Prestige</li>
                <li>Contribution</li>
                <li>Responsibility</li>
                <li>Interdisciplinary Integration</li>
            </ul>
            <a href="https://s3.amazonaws.com/raptors.dev/raptors_fellowship.pdf" style={{ display: 'block', margin: '20px 0', color: '#004d99', textDecoration: 'underline' }}>Fellowship Criteria — March, 24</a>
            <a href="https://s3.amazonaws.com/raptors.dev/raptors_election_process.pdf" style={{ display: 'block', margin: '20px 0', color: '#004d99', textDecoration: 'underline' }}>Election Process — August, 24</a>
            <h3 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px' }}>Frequently Asked Questions About Fellowship</h3>
            <div style={{ textAlign: 'left', margin: '0 40px' }}>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>What makes the Fellow unique?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    Fellows of Hackathon Raptors are known for their outstanding achievements and expertise in technology and innovation. They have shown significant performance for at least five years, usually in the past decade, and their contributions are recognized nationally or internationally. They are chosen through a strict peer-review process, ensuring only top-quality individuals are admitted.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>Do I need to meet all eight criteria?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    No, candidates are not required to meet all criteria. The fellowship requirements state that applicants should detail their experience and achievements within at least two of the eight criteria relevant to Hackathon Raptors.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>How long will it take to review my application?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    The evaluation process usually takes 3-4 weeks. During this period, our fellows conduct a detailed peer review of each application. We aim for efficiency, ensuring every candidate gets fair and thorough consideration.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>How are new Fellows elected?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    New Fellows are chosen through a thorough process that includes peer review by current Fellows. The steps are forming an elector pool, creating a committee based on expertise, randomly selecting electors, evaluating candidates, and voting. A candidate must get at least 4 out of 5 votes to be elected.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>What types of achievements are considered for the Fellowship?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    The Fellowship considers achievements in technological innovation, enterprise leadership, field authority, industry contributions, managing major tech projects, and integrating technology with other fields.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>Can I apply if my achievements are in just one area of expertise?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    The Fellowship values broad expertise, but we recognize that some candidates excel mainly in one area. You can still apply if your achievements in that field are exceptional. Focus on your most significant contributions and their impact on the tech industry. Highlighting even minor achievements in a second area can strengthen your application. The main goal is to show the depth and importance of your expertise, even if it's in just one field.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>How can I provide evidence for confidential projects?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    If confidentiality constraints prevent you from revealing publicly accessible data, your referees can convincingly endorse such claims in their recommendations.
                </p>
                <h4 style={{ fontSize: '24px', color: '#993300', fontWeight: 'bold', marginTop: '20px' }}>How does the Hackathon Raptors Fellowship promote DEI?</h4>
                <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
                    The Fellowship prioritizes diversity and inclusion in its election process. The Expertise-Based Committee Formation guarantees that electors come from various fields of expertise, allowing them to assess candidates from different backgrounds fairly. The Fellowship aims to foster an inclusive and welcoming atmosphere for all members, irrespective of their background or experience.
                </p>
            </div>
        </div>
    );
}