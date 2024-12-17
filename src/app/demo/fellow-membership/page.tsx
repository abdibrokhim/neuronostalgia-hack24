'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f0fdfa', fontFamily: 'Courier New, Courier, monospace', maxWidth: '950px', margin: 'auto', padding: '20px', border: '3px solid #ff69b4', borderRadius: '5px' }}>
      <h1 style={{ color: '#daa520', textAlign: 'center', fontSize: '2.5em', textShadow: '2px 2px #ff69b4' }}>Discover Fellowship</h1>
      <p style={{ color: '#4b0082', fontSize: '1.2em' }}>
        As the highest category of membership, awarded by your peers, the Hackathon Raptors Fellowship opens up opportunities to you, both in terms of your career and in giving back to the profession. It strengthens your reputation in the workplace and beyond, giving you access to more fulfilling roles and new challenges.
      </p>

      <section style={{ backgroundColor: '#ffe4e1', padding: '15px', border: '2px dashed #ff4500', marginBottom: '20px' }}>
        <h2 style={{ color: '#4169e1', textDecoration: 'underline', fontSize: '1.8em' }}>ENROLLMENT OPEN</h2>
        <h3 style={{ fontSize: '1.5em' }}>Apply for Fellowship</h3>
        <p>
          If you’ve been recognised time and again for your commitment to the industry and professional achievements, Fellowship will be right for you.
        </p>
        <p>We accept applications from both current Raptors contributors and non-members.</p>
        <a href="https://fellowship.raptors.dev/" style={{ color: '#ff4500', display: 'inline-block', margin: '10px 0', fontSize: '1.2em', backgroundColor: '#32cd32', padding: '5px', textDecoration: 'none' }}>Apply for Fellowship</a>
      </section>

      <section style={{ backgroundColor: '#e6e6fa', padding: '15px', border: '2px dotted #9370db', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.5em', textDecoration: 'underline' }}>Am I Eligible?</h3>
        <p>
          Fellowship is the prestigious Hackathon Raptors membership level awarded only to individuals who have demonstrated recent significant achievement(s) sustained at high levels for a period of at least five years in engineering, technology, or related disciplines relevant to the Hackathon Raptors.
        </p>
        <a href="https://s3.amazonaws.com/raptors.dev/raptors_fellowship.pdf" style={{ color: '#00ced1', fontSize: '1em', textDecoration: 'none' }}>Fellowship Criteria — March, 24</a>
        <a href="https://s3.amazonaws.com/raptors.dev/raptors_election_process.pdf" style={{ color: '#00ced1', fontSize: '1em', textDecoration: 'none', marginLeft: '15px' }}>Election Process — August, 24</a>
        <ul style={{ listStyleType: 'square', margin: '20px 0', paddingLeft: '20px', color: '#ff69b4' }}>
          <li>Creativity</li>
          <li>Innovation</li>
          <li>Enterprise</li>
          <li>Authority</li>
          <li>Prestige</li>
          <li>Contribution</li>
          <li>Responsibility</li>
          <li>Interdisciplinary Integration</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#ffa07a', padding: '15px', border: '2px solid #008080', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.5em', textDecoration: 'underline' }}>Frequently Asked Questions About Fellowship</h3>
        <dl style={{ color: '#000080' }}>
          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>What makes the Fellow unique?</dt>
          <dd>Fellows of Hackathon Raptors are known for their outstanding achievements and expertise in technology and innovation. They have shown significant performance for at least five years, usually in the past decade, and their contributions are recognized nationally or internationally. They are chosen through a strict peer-review process, ensuring only top-quality individuals are admitted.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>Do I need to meet all eight criteria?</dt>
          <dd>No, candidates are not required to meet all criteria. The fellowship requirements state that applicants should detail their experience and achievements within at least two of the eight criteria relevant to Hackathon Raptors.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>How long will it take to review my application?</dt>
          <dd>The evaluation process usually takes 3-4 weeks. During this period, our fellows conduct a detailed peer review of each application. We aim for efficiency, ensuring every candidate gets fair and thorough consideration.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>How are new Fellows elected?</dt>
          <dd>New Fellows are chosen through a thorough process that includes peer review by current Fellows. The steps are forming an elector pool, creating a committee based on expertise, randomly selecting electors, evaluating candidates, and voting. A candidate must get at least 4 out of 5 votes to be elected.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>What types of achievements are considered for the Fellowship?</dt>
          <dd>The Fellowship considers achievements in technological innovation, enterprise leadership, field authority, industry contributions, managing major tech projects, and integrating technology with other fields.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>Can I apply if my achievements are in just one area of expertise?</dt>
          <dd>The Fellowship values broad expertise, but we recognize that some candidates excel mainly in one area. You can still apply if your achievements in that field are exceptional. Focus on your most significant contributions and their impact on the tech industry. Highlighting even minor achievements in a second area can strengthen your application. The main goal is to show the depth and importance of your expertise, even if it's in just one field.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>How can I provide evidence for confidential projects?</dt>
          <dd>If confidentiality constraints prevent you from revealing publicly accessible data, your referees can convincingly endorse such claims in their recommendations.</dd>

          <dt style={{ fontWeight: 'bold', marginTop: '10px' }}>How does the Hackathon Raptors Fellowship promote DEI?</dt>
          <dd>The Fellowship prioritizes diversity and inclusion in its election process. The Expertise-Based Committee Formation guarantees that electors come from various fields of expertise, allowing them to assess candidates from different backgrounds fairly. The Fellowship aims to foster an inclusive and welcoming atmosphere for all members, irrespective of their background or experience.</dd>
        </dl>
      </section>
    </div>
  );
}