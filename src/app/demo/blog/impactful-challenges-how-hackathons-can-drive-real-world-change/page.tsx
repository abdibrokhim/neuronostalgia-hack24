'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#E0F0E9', fontFamily: 'Comic Sans MS, sans-serif', color: '#000080', fontSize: '16px', textAlign: 'center', padding: '20px' }}>
            <table border="1" align="center" width="800" cellPadding="10" style={{ backgroundColor: '#FFFFCC', borderCollapse: 'collapse', borderColor: '#000080' }}>
                <tr>
                    <td>
                        <h1 style={{ color: '#FF00FF' }}>Impactful Challenges: How Hackathons Can Drive Real-World Change</h1>
                        <font size="4">October 14, 2024</font>
                        <br />
                        <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cbb7b60395438472a7637_15558940522_e111861eb5_k%20(1).png" alt="hackathon" width={600} height={400} style={{ border: '3px dashed #000080' }} />
                        <p style={{ color: '#FF00FF', fontWeight: 'bold' }}>When anyone thinks of hackathons, the only thing that comes to mind is coding. No doubt, that is where the idea of hackathons came from. But now the situation is different as hackathons are taking a new meaning.</p>
                        <h2 style={{ backgroundColor: '#C0C0C0', padding: '10px' }}>Understanding Hackathons And Their Types</h2>
                        <p style={{ textAlign: 'left' }}>
                            A hackathon is a social occasion where individuals around the globe get together to find solutions to problems. It can also be considered an innovative marathon, where creative minds collaborate and devise inventive solutions within a limited timeframe.
                        </p>
                        <h3 style={{ color: '#FF0000' }}>Types of Hackathons</h3>
                        <p style={{ textAlign: 'left' }}>
                            — Online Hackathons: Virtual or online hackathons are held online. These events let the participants join in and collaborate from anywhere worldwide. Companies can also locate and recruit talented individuals through these hackathons without geographical restrictions.
                        </p>
                        <p style={{ textAlign: 'left' }}>
                            — Offline Hackathons: Offline hackathons are traditional in-person events at a specific venue. All the participants can interact with each other at the venue or a physical location.
                        </p>
                        <h3 style={{ color: '#FF0000' }}>How Hackathons Can Drive Real-World Changes?</h3>
                        <p style={{ textAlign: 'left' }}>
                            Yun can never underestimate the power of a small group of people who are enthusiastic, committed, and determined to change the world. Hackathons have proved it and that is why they are driving real-world changes.
                        </p>
                        <h3 style={{ backgroundColor: '#FFEFD5', padding: '10px' }}>Hackathons Trying to Change the World: Real-Life Examples</h3>
                        <p style={{ textAlign: 'left' }}>
                            — <strong>Code For America</strong>: When the heavy snowstorm hit Boston, Code For America took advantage of hackathons and created mobile apps that helped parents find their kids' school buses.
                        </p>
                        <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670ccf6bb4676b7f1de56b5e__0%20(1).png" alt="code for america" width={600} height={400} style={{ border: '3px dashed #000080' }} />
                        <h3 style={{ color: '#FF00FF' }}>Igor Aleksandrov</h3>
                        <p>Igor Aleksandrov, Ruby and open-source evangelist, developer, CTO, and co-founder of a software development company, is dedicated to building scalable solutions and fostering open-source contributions in the tech community.</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}