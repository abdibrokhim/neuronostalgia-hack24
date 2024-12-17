'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#ff00ff',
      fontFamily: 'Courier New, monospace',
      color: '#00ff00',
      textAlign: 'center',
      padding: '20px',
      border: '5px dotted #0000ff'
    }}>
      <marquee scrolldelay="100" style={{
        backgroundColor: '#0000ff',
        color: '#ffff00',
        fontSize: '24px',
        margin: '10px',
        padding: '10px',
        border: '5px dashed #ff0000'
      }}>Welcome to Our Fellows Page</marquee>
      <h1>Our Fellows</h1>
      <p>Our association's impact is driven by the collective efforts of our fellows, who contribute their skills and knowledge to our great.</p>
      <table border="1" width="90%" style={{ margin: '0 auto', tableLayout: 'fixed', wordWrap: 'break-word' }}>
        <thead style={{ backgroundColor: '#ff6600', color: '#0000ff' }}>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Position</th>
            <th>LinkedIn</th>
            <th>Tech</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ffff00' }}>
          <tr>
            <td>Vineet Dhanawat</td>
            <td><Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/668ec3def9b738c480b22a73_66375693d24d4bea08c1a7f8_lhSdZFrH_400x400-p-500.png" alt="Vineet Dhanawat" width={50} height={50} /></td>
            <td>Software Engineer at Meta</td>
            <td><a href="https://www.linkedin.com/in/vineetdhanawat/">LinkedIn</a></td>
            <td>Tech</td>
            <td>United States</td>
          </tr>
          {/* Add more fellows as needed */}
        </tbody>
      </table>
      <div style={{
        backgroundColor: '#ff0000',
        color: '#ffffff',
        padding: '10px',
        margin: '20px 0',
        fontSize: '20px'
      }}>
        Thank you! Your submission has been received!
      </div>
    </div>
  );
}