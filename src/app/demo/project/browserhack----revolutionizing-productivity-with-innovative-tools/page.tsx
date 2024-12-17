'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#ccffcc', color: '#000080', fontFamily: 'Comic Sans MS, cursive', padding: '10px' }}>
            <center>
                <Image
                    src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg"
                    alt="Arrow"
                    width={100}
                    height={50}
                    style={{ border: '3px dashed #ff00ff' }}
                />
                
                <h1 style={{ fontSize: '24pt', textShadow: '2px 2px #ff0000', margin: '20px 0' }}>
                    BrowserHack — Revolutionizing Productivity With Innovative Tools
                </h1>
                
                <marquee style={{ width: '80%', backgroundColor: '#ffff00', fontSize: '14pt' }}>
                    Boosting Productivity with Browser Extensions!
                </marquee>
                
                <div style={{ border: '3px solid #800080', padding: '15px', margin: '20px', backgroundColor: '#ffffff' }}>
                    <h2>Coming soon</h2>
                    <p style={{ fontSize: '12pt' }}>Stay tuned.</p>
                </div>

                <h3 style={{ fontSize: '16pt', margin: '20px 0', textDecoration: 'underline' }}>Related Works</h3>
                
                <div>
                    <a href="/demo/project/browserhack----revolutionizing-productivity-with-innovative-tools">
                        <Image
                            src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/675c348375ac04ef915f8091_673715109f3ef9cfe2326596_67151330e6e7559ec09923bb_neuro_nostalgia%20(1)%20(1)%20(1).png"
                            alt="BrowserHack Image"
                            width={200}
                            height={100}
                        />
                    </a>
                </div>
                
                <p style={{ fontSize: '10pt' }}>Hackathon // Social Impact</p>
                
                <a href="/demo/project/neuro-nostalgia">
                    <Image
                        src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/67151330e6e7559ec09923bb_neuro_nostalgia%20(1).png"
                        alt="Neuro Nostalgia"
                        width={200}
                        height={100}
                    />
                    <p style={{ fontSize: '10pt' }}>Neuro Nostalgia — AI-Powered Time Machine for Web Design</p>
                </a>
                
                <div style={{ border: '2px dotted #0000ff', padding: '20px', marginTop: '30px', fontSize: '14pt' }}>
                    <a href="/#contact" style={{ color: '#000080', textDecoration: 'none' }}>
                        Get in Touch — Get in Touch — Get in Touch — <br />
                        Get in Touch — Get in Touch — Get in Touch — <br />
                        Get in Touch — Get in Touch — Get in Touch — <br />
                        Get in Touch — Get in Touch — Get in Touch —
                    </a>
                </div>
            </center>
        </div>
    );
}