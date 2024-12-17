'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFCC99', fontFamily: 'Comic Sans MS, cursive', color: '#3333FF', textAlign: 'center', padding: '10px' }}>
      <header style={{ backgroundColor: '#FF99CC', padding: '5px' }}>
        <h1 style={{ fontSize: '3em', color: '#FF0000' }}>Humanizing AI Text</h1>
        <p style={{ fontSize: '1.2em', fontStyle: 'italic' }}>Blurring the Lines Between Humans and Machines</p>
      </header>

      <div style={{ maxWidth: '80%', margin: 'auto', border: '3px dashed #FF00FF', padding: '10px' }}>
        <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65de32a5db6b43b048630b66_hover-arrow.svg" alt="" width={100} height={100} />
        
        <section style={{ textAlign: 'left', marginTop: '25px' }}>
          <h3><strong>AI-Generated Text: Crafting Empathy in Code</strong></h3>
          <ul style={{ listStyleType: 'square', fontSize: '1.1em' }}>
            <li><strong>Date:</strong> Oct 2024</li>
            <li><strong>Client:</strong> Raptors</li>
            <li><strong>Website:</strong> <a href="https://aihumanizehack.com" target="_blank" style={{ textDecoration: 'underline', color: '#0000FF' }}>aihumanizehack.com</a></li>
            <li><strong>Category:</strong> Hackathon, Content Tech</li>
          </ul>

          <h3>The Challenge and Results</h3>
          <p>The <strong>Humanizing AI Text Hackathon</strong> brought together innovators from across the globe to tackle the exciting challenge of making AI-generated text indistinguishable from human-authored content.</p>

          <h4>✯ Global Collaboration</h4>
          <p>Participants joined forces virtually, leveraging cutting-edge tools and technologies to reshape how we think about AI-driven language.</p>

          <h4>✯ Top Projects: Excellence in Innovation</h4>
          <ol style={{ fontSize: '1.2em' }}>
            <li><strong>1st Place:</strong> <i>Linguify</i> by Team Cache Me If You Can</li>
            <li><strong>2nd Place:</strong> <i>HumanAIze</i> by Open Community</li>
            <li><strong>3rd Place:</strong> <i>AI Text Humanizer</i> by Sanjay Sah</li>
          </ol>

          <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/6742be7406a920f9986c206c_1%20(2).png" alt="" width={200} height={150} style={{ margin: '15px', border: '3px solid #009900' }} />
          <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/6742be744f0832fc16a0ec51_1%20(1).png" alt="" width={200} height={150} style={{ margin: '15px', border: '3px solid #009900' }} />
          <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/6742be74feec494c242470fa_1.png" alt="" width={200} height={150} style={{ margin: '15px', border: '3px solid #009900' }} />
        </section>

        <footer style={{ backgroundColor: '#66CCFF', padding: '5px', marginTop: '15px' }}>
          <a href="#contact" style={{ color: '#FF0000', fontWeight: 'bold', textDecoration: 'none' }}>Get in Touch —</a>
        </footer>
      </div>
    </div>
  );
}