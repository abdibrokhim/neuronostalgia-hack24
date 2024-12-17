'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#f0f0f0', color: '#0000cc', fontFamily: '"Comic Sans MS", "Arial", sans-serif', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '36px', color: '#ff00ff' }}>Leadership Principles</h1>
            <hr style={{ border: '1px dashed #ff00ff', margin: '20px auto', width: '50%' }} />
            <div style={{ maxWidth: '640px', margin: '0 auto', backgroundColor: '#ffffff', padding: '10px', border: '3px double #00cc00' }}>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Foresight With Flexibility</b><br />
                    As leaders in the world of technological revolution, we must anticipate the horizon and prepare for the ever-changing landscape. Yet, in doing this, we cannot be rigid. We adapt with agility to the tides of innovation and the needs of our community.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Transparent Integrity</b><br />
                    Our actions are our bond. Clear honesty is our bedrock, and we conduct our affairs with a transparency that fosters trust. This principle is integral not just within our leadership but also as a standard for our entire professional ensemble.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Collaborative Strength</b><br />
                    None of us is as smart as all of us. We leverage our collective expertise to achieve milestones that individual brilliance alone could not. Collaboration underpins our quest to transcend boundaries and push the frontiers of what's possible.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Altruistic Impact</b><br />
                    Guided by a sense of purpose that looks beyond the self, we drive our community to sow seeds of altruism through our events and collaborations. The technology we develop and the solutions we forge are instruments of positive social change.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Respectful Mentorship</b><br />
                    Leading is as much about nurturing the next wave of talent as it is about steering the current one. We are mentors first, dedicating time to inspire and impart knowledge that will carry our mission forward into the future.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Promote Inclusivity</b><br />
                    In a world divided by countless biases, we stand for unity. We craft a space where all voices are heard, and diversity of thought is not just welcomed but avidly sought after. Our strength lies in the varied perspectives of our global community.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Excellence in Execution</b><br />
                    Through our example, we set the bar high for delivering outcomes. It's about more than lofty ideas—it's about translating them into actions that resonate excellence in every facet, ensuring that everything we touch is done to the best of our abilities.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Responsible Stewardship</b><br />
                    With great power comes great responsibility. We embrace the authority endowed upon us with a solemn duty to use our position responsibly, not just for our success but for the enrichment of our community and the broader technology ecosystem.
                </div>
                <div style={{ fontSize: '18px', margin: '20px 0' }}>
                    <b>Visionary Leadership</b><br />
                    The path to innovation is often uncharted. We lead with a vision that dares to jump beyond the edges of the map, encouraging pioneering ideas and unconventional problem-solving approaches that chart new territories in technology and societal impact.
                </div>
            </div>
        </div>
    );
}