'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: 'rgb(255, 239, 213)', color: 'rgb(34, 34, 34)', fontFamily: 'Comic Sans MS', padding: '10px' }}>
            <center>
                <h1 style={{ fontSize: '3em', color: 'rgb(255, 105, 180)', backgroundColor: 'rgb(0, 0, 255)', display: 'inline-block' }}>Skills</h1>
            </center>
            <center>
                <h2 style={{ color: 'rgb(255, 20, 147)', backgroundColor: 'rgb(0, 255, 255)', display: 'inline-block' }}>Beyond Code — The Importance Of Non-Technical Skills</h2>
            </center>
            <center>
                <p style={{ fontSize: '1.5em' }}>August 6, 2024 . 10 min</p>
            </center>
            <center>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66dd6847faf9998c2dfa8ea1_25442106870_3265a457ef_o-3.jpg" alt="Image" width={400} height={260}/>
            </center>
            <div style={{ padding: '20px', border: '2px dotted rgb(0, 0, 255)' }}>
                <h3 style={{ fontSize: '2em', color: 'rgb(255, 69, 0)' }}>Are you interested in joining hackathons but reluctant because you lack the major skills?</h3>
                <p>Have you ever felt left out of the tech world because you're not a coding wizard? Think hackathons are only for programmers and developers? Think again! This post will explore how non-technical skills can be just as valuable in hackathons and how your unique perspective might be the key to success.</p>
                <h4 style={{ color: 'rgb(148, 0, 211)', backgroundColor: 'rgb(245, 255, 250)' }}>The Role of Non-Technical Skills in Hackathons</h4>
                <ul style={{ listStyleType: 'square', margin: '15px 0 15px 20px' }}>
                    <li>Goal Creation and Objective Setting</li>
                    <li>Discussion Leadership</li>
                    <li>Time Management</li>
                    <li>Product Testing</li>
                    <li>Customer Interviews</li>
                    <li>Creating Presentations</li>
                </ul>
                <p>Your attitude and mindset can play a key role in making hackathons successful! Participants with non-technical skills can define goals, set objectives, lead discussions, or manage time efficiently.</p>
            </div>
            <div style={{ border: '5px dashed rgb(255, 165, 0)', padding: '15px', margin: '20px 0' }}>
                <center>
                    <h3 style={{ fontSize: '2em', color: 'rgb(220, 20, 60)' }}>What Exactly Is a Hackathon?</h3>
                </center>
                <p>A hackathon or codefest is a social coding competition that brings computer programmers together and lets them work together to improve or build new software programs. The word hackathon combines two words: hacker (clever programmer) and marathon.</p>
            </div>
            <div style={{ padding: '20px', border: '2px solid rgb(160, 82, 45)', backgroundColor: 'rgb(255, 250, 205)' }}>
                <center>
                    <h3 style={{ fontSize: '2em', color: 'rgb(139, 0, 0)' }}>Related Blogs</h3>
                </center>
                <center>
                    <div style={{ backgroundColor: 'rgb(255, 228, 181)', border: '3px solid rgb(0, 128, 0)', padding: '10px', margin: '10px' }}>
                        <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66c498b20a91536cfc572899_45530454661_d8a4902d3d_k%20(1).png" alt="Blog Image" width={400} height={260} style={{ border: '2px solid rgb(128, 0, 128)' }} />
                        <p style={{ fontSize: '1.2em', color: 'rgb(85, 107, 47)' }}><b>Mastering Hackathons — Effective Hacking's Guide</b></p>
                        <p style={{ color: 'rgb(0, 100, 0)' }}>By Dmitrii Starikov | August 6, 2024 | 7 min</p>
                    </div>
                </center>
            </div>
        </div>
    );
}