'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const colors = ['#FF69B4', '#FFD700', '#00FFFF', '#FF4500']; 
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const [bgColor, setBgColor] = useState(getRandomColor());

    useEffect(() => {
        const interval = setInterval(() => {
            setBgColor(getRandomColor());
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: bgColor, fontFamily: 'Comic Sans MS, cursive', textAlign: 'center', color: '#4B0082', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5em', borderBottom: '2px dotted' }}>Social Good</h1>
            <h2>From Hackathon to Social Impact: Turning Ideas into Sustainable Solutions</h2>
            <p><strong>October 14, 2024</strong></p>
            <p>5 min</p>
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cc90ad81c7673a8010883_38972442855_b24288c648_k%20(4).png" alt="Hackathon" width={500} height={300} />
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>
                Hackathons are platforms, where challenges become opportunities and ideas, are transformed into actionable solutions. That is why hackathons are not limited to coding only anymore. For now, they successfully tackle social and environmental challenges and give a gateway towards a better, energy-efficient, and sustainable world.
            </p>
            <h3 style={{ fontSize: '2em', borderBottom: '2px dotted' }}>What Is A Green Tech Hackathon?</h3>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>
                Several challenges arise with climate change and energy usage. Therefore, people have started participating in green tech hackathons, themed events that bring creative minds together, to help out in the battle for a sustainable future.
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto', listStyleType: 'square', fontSize: '1.2em' }}>
                <li>Grazing livestock identification</li>
                <li>Tracking energy use forecasting</li>
                <li>Deforestation tracking</li>
                <li>Alerting for climate change</li>
                <li>Tracking the methane super-emitters</li>
                <li>Optimizing the performance of solar cars</li>
                <li>Identification of impactful energy technology and power plants with the help of satellite imagery</li>
            </ul>
            <h3 style={{ fontSize: '2em', borderBottom: '2px dotted' }}>What Is The Purpose Of Green Tech Hackathons?</h3>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>
                Now, hackathons are something beyond the coding sessions. They are the platforms where experts develop solutions to intractable problems, and the basic purpose of these green tech hackathons is to:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto', listStyleType: 'disc', fontSize: '1.2em' }}>
                <li>Design Solution For Tomorrow’s Problems</li>
                <li>Provide Solutions That Go Beyond Technology</li>
                <li>Design Solutions That Do Not Harm</li>
            </ul>
            <h3 style={{ fontSize: '2em', borderBottom: '2px dotted' }}>How Are Hackathon Turning Ideas Into Sustainable Solutions?</h3>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>
                In the rapidly evolving world, "sustainability" is no longer a niche concept but a necessity. Therefore, participants come together from all corners of the world to collaborate and work on their ideas to provide solutions centered on sustainability.
            </p>
            <h4>1. OptiEnergy Platform</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>OptiEnergy is a web-based platform created during hackathons. It aims to transform how users manage energy consumption and incorporate renewable energy resources, energy-efficient devices, and electric devices into their lives.</p>
            <h4>2. Reinventing Corporate Creativity</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>Innovations can be used as a tool to drive environmental sustainability. Thousands of corporations develop hundreds of ideas yearly to revolutionize the environmental impact.</p>
            <h4>3. Holographic 3D Scene of Energy Insights</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>This green hackathon aims to design a dynamic 3D scene model that captures time-series parameters to detail the present and predicted behavior of the energy consumption point.</p>
            <h4>4. EcoEats</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>At the hackathon, the participants' challenge is to develop a tool that lets users rate the healthiness of food and emphasizes sustainability.</p>
            <h4>5. GreenMinds</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>Several hackathons, like GreenMinds, encourage the participants to develop solutions that can help them reduce the environmental footprints of AI (artificial intelligence).</p>
            <h3 style={{ fontSize: '2em', borderBottom: '2px dotted' }}>How Can You Run A Green Tech Hackathon?</h3>
            <h4>Step 1: Choose Your Objectives</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>Remember that a hackathon without an object will not have any problems to be solved. Therefore, when you think of running a green tech hackathon, you must take a moment to set your goals.</p>
            <h4>Step 2: Define The Challenges</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>Once you have defined your objectives and audience, it becomes easier to specify the challenges.</p>
            <h4>Step 3: Event Planning</h4>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>After defining the goals and challenges, you can move on to event planning.</p>
            <h3 style={{ fontSize: '2em', borderBottom: '2px dotted' }}>Conclusion</h3>
            <p style={{ margin: '20px auto', maxWidth: '600px' }}>
                Hackathons transform ideas into impactful and sustainable solutions through collaborations and strategic planning. During these events, participants explore innovative solutions to reduce the environmental impacts of technologies and other factors.
            </p>
            <Image src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670ccea21a7ffa2b4d3b1147__0-standard_v2-4x.png" alt="Vladyslav Khambir" width={150} height={150} style={{ border: '4px solid', margin: '20px auto' }} />
            <p style={{ marginBottom: '40px' }}>Vladyslav Khambir, Principal iOS Software Engineer at Capital One, leverages his AWS certification and expertise in SwiftUI to create innovative mobile applications and mentor aspiring developers in the field.</p>
        </div>
    );
}