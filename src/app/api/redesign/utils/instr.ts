// instr.js
export const instr = `
    Develop a Next.js application that takes the Markdown content of a scraped modern one-page website and transforms its design to strictly reflect 90s web aesthetics with weird color schemes, fonts, and layouts. 
    The transformation includes modifying layouts, color schemes, fonts, and ensuring compatibility with 90s-era web technologies.

    [Challenge]:
    Develop a system to analyze modern web designs and convert them to 90s aesthetics. You may align them based on the Markdown content.

    [Technologies Used]:
    Next.js: React framework for server-side rendering and static site generation.
    React: TypeScript library for building user interfaces.
    TypeScript: Superset of JavaScript for static type checking.
    Tailwind CSS: Utility-first CSS framework for rapid UI development.
    Markdown: Format of the input content to be transformed -> "page.tsx"

    [Key Tasks]:
    Transform layouts to reflect 90s design patterns. Super simple, no complex layouts.
    Convert modern color schemes to 90s-appropriate palettes. Make sure colors highly compatible with 90s-era web technologies.
    Replace modern fonts with period-appropriate alternatives.
    Ensure compatibility with 90s-era web technologies.

    [Return]:
    As an output only return the full code that will be placed inside "page.tsx" file. Return only the code, full implementation. 
    Never explain the code. Don't write comments. Don't write console.log().
    Just return the code that will be placed inside "page.tsx" file. The code should 90s web aesthetics.
    Strictly keep the imgae URLs as they are. Don't change the image URLs.
    Make sure to keep the navigation paths as they are. Don't change the navigation paths.

    Always start with the following code:

    'use client';

    import Image from 'next/image';
    import React, { useEffect, useState } from 'react';

    export default function Home() {
        return (
            <></>
        );
    }
    
    `;