'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Leadership Principles</h1>
            <div style={styles.paragraph}>
                <p style={styles.italic}>These principles guide our decisions and actions at Hackathon Raptors.</p>
                <h2 style={styles.subHeader}>Foresight With Flexibility</h2>
                <p style={styles.text}>As leaders in the world of technological revolution, we must anticipate the horizon and prepare for the ever-changing landscape. Yet, in doing this, we cannot be rigid. We adapt with agility to the tides of innovation and the needs of our community.</p>
                
                <h2 style={styles.subHeader}>Transparent Integrity</h2>
                <p style={styles.text}>Our actions are our bond. Clear honesty is our bedrock, and we conduct our affairs with a transparency that fosters trust. This principle is integral not just within our leadership but also as a standard for our entire professional ensemble.</p>
                
                <h2 style={styles.subHeader}>Collaborative Strength</h2>
                <p style={styles.text}>None of us is as smart as all of us. We leverage our collective expertise to achieve milestones that individual brilliance alone could not. Collaboration underpins our quest to transcend boundaries and push the frontiers of what's possible.</p>
                
                <h2 style={styles.subHeader}>Altruistic Impact</h2>
                <p style={styles.text}>Guided by a sense of purpose that looks beyond the self, we drive our community to sow seeds of altruism through our events and collaborations. The technology we develop and the solutions we forge are instruments of positive social change.</p>
                
                <h2 style={styles.subHeader}>Respectful Mentorship</h2>
                <p style={styles.text}>Leading is as much about nurturing the next wave of talent as it is about steering the current one. We are mentors first, dedicating time to inspire and impart knowledge that will carry our mission forward into the future.</p>
                
                <h2 style={styles.subHeader}>Promote Inclusivity</h2>
                <p style={styles.text}>In a world divided by countless biases, we stand for unity. We craft a space where all voices are heard, and diversity of thought is not just welcomed but avidly sought after. Our strength lies in the varied perspectives of our global community.</p>
                
                <h2 style={styles.subHeader}>Excellence in Execution</h2>
                <p style={styles.text}>Through our example, we set the bar high for delivering outcomes. It's about more than lofty ideas—it's about translating them into actions that resonate excellence in every facet, ensuring that everything we touch is done to the best of our abilities.</p>
                
                <h2 style={styles.subHeader}>Responsible Stewardship</h2>
                <p style={styles.text}>With great power comes great responsibility. We embrace the authority endowed upon us with a solemn duty to use our position responsibly, not just for our success but for the enrichment of our community and the broader technology ecosystem.</p>
                
                <h2 style={styles.subHeader}>Visionary Leadership</h2>
                <p style={styles.text}>The path to innovation is often uncharted. We lead with a vision that dares to jump beyond the edges of the map, encouraging pioneering ideas and unconventional problem-solving approaches that chart new territories in technology and societal impact.</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#e0f7f4',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        color: '#0b530a',
        padding: '20px',
        maxWidth: '600px',
        margin: '50px auto',
        border: '3px solid #ff00aa',
        borderRadius: '15px',
        boxShadow: '10px 10px 0px #0b530a'
    },
    header: {
        color: '#ff00aa',
        textAlign: 'center',
        fontSize: '2em',
    },
    paragraph: {
        padding: '10px',
    },
    italic: {
        fontStyle: 'italic',
        textAlign: 'center',
    },
    subHeader: {
        color: '#ff00aa',
        margin: '20px 0 10px 0',
        fontSize: '1.5em',
    },
    text: {
        lineHeight: '1.6'
    }
};