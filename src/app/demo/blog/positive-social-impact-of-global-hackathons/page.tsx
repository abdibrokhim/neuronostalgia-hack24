'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#FFCC00', fontFamily: 'Comic Sans MS, Arial, sans-serif', color: 'black', padding: '20px' }}>
            <header style={{ padding: '10px', borderBottom: '2px dashed black', textAlign: 'center' }}>
                <h1 style={{ fontSize: '40px', color: 'darkblue' }}>Social Good</h1>
            </header>
            <main>
                <article style={{ marginTop: '20px' }}>
                    <h1 style={{ fontSize: '35px' }}>Positive Social Impact of Global Hackathons</h1>
                    <p style={{ fontSize: '18px' }}>October 24, 2024 • 7 min</p>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/671a5e39eca6cb56d3a8be86_7930406796_0e2a496f0e_k%20(2)%20(1).png" width={600} height={400} />
                    <section style={{ marginTop: '30px' }}>
                        <h2 style={{ fontSize: '30px', color: 'darkred' }}>The Impact of Global Hackathons: Building Connections and Driving Change Worldwide</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Hackathons have become a more professional source for career growth...</p>
                        <h3 style={{ fontSize: '28px', color: 'darkgreen' }}>How Do Global Hackathons Build Connections?</h3>
                        <p style={{ fontSize: '16px' }}>Because of the technical era, hackathons emerged as a powerful source...</p>
                    </section>
                    <section style={{ marginTop: '20px', backgroundColor: '#FFFF99', border: '1px solid black', padding: '10px' }}>
                        <h3 style={{ fontSize: '28px', color: 'darkred' }}>Positive Impact of Global Hackathons</h3>
                        <p style={{ fontSize: '16px' }}>Hosting a global hackathon will positively impact the participants and their skills...</p>
                    </section>
                    <h3 style={{ fontSize: '28px', color: 'purple' }}>Impact of Global Hackathons on Students</h3>
                    <p style={{ fontSize: '16px' }}>Hackathons for students are excellent opportunities...</p>
                    <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd9f8ee20442cbf9847f7_dd.jpg" width={600} height={400} />
                    <section style={{ marginTop: '20px' }}>
                        <h3 style={{ fontSize: '28px', color: 'darkblue' }}>Impact of Global Hackathons on Healthcare Innovation</h3>
                        <p style={{ fontSize: '16px' }}>Hackathons are an effective source of developing advancements in healthcare technology...</p>
                    </section>
                </article>
                <footer style={{ marginTop: '20px', borderTop: '2px dashed black', padding: '10px', textAlign: 'center' }}>
                    <p style={{ fontSize: '18px', color: 'darkblue' }}>Diana Dvoryak</p>
                </footer>
            </main>
        </div>
    );
}