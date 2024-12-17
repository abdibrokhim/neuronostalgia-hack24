'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ border: '5px solid purple', margin: '20px', backgroundColor: 'yellow', color: 'green', fontFamily: 'Courier New, monospace', textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', textDecoration: 'underline', color: 'blue' }}>Beyond Code — The Importance Of Non-Technical Skills</h1>
            <a href="/blog/beyond-code-the-importance-of-non-technical-skills-in-hackathon-success">
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66dd6847faf9998c2dfa8ea1_25442106870_3265a457ef_o-3.jpg" alt="Beyond Code" width={640} height={480} />
            </a>
            <p style={{ fontSize: '24px', marginTop: '20px', color: 'red' }}>
                Have you ever felt left out of the tech world because you're not a coding wizard? Think hackathons are only for programmers and developers? Think again! This post will explore how non-technical skills can be just as valuable in hackathons and how your unique perspective might be the key to success.
            </p>
            <div>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd31956997bc07f46274a_1676826279102.jpeg" alt="Beyond Code" width={640} height={480} />
            </div>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>Aleksei Naumov</p>
            <p style={{ fontSize: '16px' }}>August 6, 2024</p>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>10 min read</p>
            <hr style={{ border: '2px dotted green' }} />
            <h3 style={{ fontSize: '32px', textDecoration: 'underline', marginTop: '40px' }}>More Articles</h3>
            <a href="/blog/designing-altruistic-hackathons-for-socia-good" style={{ display: 'block', textDecoration: 'none', color: 'blue', marginTop: '20px' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/671b679d735faf3d0073923e_53924764136_d320c4c847_k.jpg" alt="Designing Altruistic Hackathons" width={320} height={240} />
                <span style={{ fontSize: '20px' }}>Designing Altruistic Hackathons For Social Good</span>
            </a>
            <a href="/blog/efficient-methods-of-scientific-rigor-in-hackathon" style={{ display: 'block', textDecoration: 'none', color: 'blue', marginTop: '20px' }}>
                <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/671a66e44b03b6cd6b41ceb4_7927541018_d15b874948_k%20(1).png" alt="Efficient Methods" width={320} height={240} />
                <span style={{ fontSize: '20px' }}>Efficient Methods of Scientific Rigor in Hackathon</span>
            </a>
        </div>
    );
}