'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#00FF00', color: '#000080', fontFamily: 'Times New Roman, serif', textAlign: 'center', margin: '10px', padding: '10px', border: '3px dotted #FF0000' }}>
            <table width="100%" border="1" cellPadding="5" cellSpacing="0" style={{ backgroundColor: '#FFFF00' }}>
                <tbody>
                    <tr>
                        <td colSpan={2}> 
                            <h1>Skills</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <marquee behavior="scroll" direction="left">
                                <h2>Collective Intelligence — Diverse Skills in Hackathons</h2>
                            </marquee>
                            <p>
                                Hackathon teams use collective intelligence to blend diverse skills and views, sparking innovation under tight deadlines. Teamwork, problem-solving, and creativity create stronger technical solutions and business strategies, leading to better results.
                            </p>
                            <p>August 6, 2024 - 5 min read</p>
                            <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/66dd6b88867be43e388f7984_66d348eed3f02abd926d15a0_6172473347_9a3175085d_o%252-2.jpg" width="320" height="240" />
                            <hr />
                            <h3>Understanding Collective Intelligence</h3>
                            <p>
                                When different members work together on a single goal, we call this team management. But it can only be successful if they have relevant knowledge, skills, or data to work as a whole: collective intelligence. It plays an important role in the success of companies or businesses. 
                            </p>
                            <hr />
                            <h3>Hackathon And Its Types</h3>
                            <ul>
                                <li>An <b>internal hackathon</b> is when a company and its employees work together to generate creative ideas or solutions.</li>
                                <li>An <b>external hackathon</b> includes participants or teams from the public to generate innovative solutions.</li>
                                <li>An <b>online hackathon</b> is when a company invites global participants to collaborate remotely.</li>
                                <li>A <b>themed hackathon</b> focuses on a specific field like education, healthcare, or gaming, to develop tools, products, or software.</li>
                            </ul>
                            <hr />
                            <h3>Role Of Collective Intelligence In Hackathon Teams</h3>
                            <p>
                                The success of your hackathon team depends on how well it shares insights to solve a problem with collaboration. 
                            </p>
                            <hr />
                            <h3>Tips For a Successful Hackathon</h3>
                            <ul>
                                <li><b>Set Your Goals</b> - Clarify what you expect.</li>
                                <li><b>Decide a Theme</b> - Explain your project's context and insights.</li>
                                <li><b>Focus On Diversity In Team Selection</b></li>
                                <li><b>Assign Roles Based On Skills</b></li>
                                <li><b>Decide Prizes</b></li>
                            </ul>
                            <hr />
                            <h3>Vadim Goncharov</h3>
                            <p>Vadim Goncharov, Lead Developer and AI enthusiast, combines web development and PHP expertise with a passion for integrating AI technologies into modern web applications.</p>
                            <img src="https://cdn.prod.website-files.com/65de32a5db6b43b048630b6a/670cd4f4772ad7e404fc8dc7_photo_2024-03-04_07-.jpg" width="320" height="240" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}