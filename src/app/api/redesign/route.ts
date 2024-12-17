// app/api/redesign/route.ts
import { NextResponse } from 'next/server';
import { chatCompletion, layoutGenerator } from './utils/ass';
import { buildSite } from './utils/webbuilder';

export async function POST(request: Request) {
  try {
    // we will get JSON file path.
    const { filePath, ptype } = await request.json();

    if (ptype === 1) {
      const response = await chatCompletion(filePath);
      console.log("====================================")
      console.log('response:');
      console.log(response);
      
      const layoutPath = await layoutGenerator('src/app/api/redesign/utils/layout.txt');
      console.log("====================================")
      console.log('layoutPath:');
      console.log(layoutPath);
    } else {
      const buildResponse = await buildSite(filePath);
      const msg = buildResponse.message;
      const fdir = buildResponse.demoDir;
      
      console.log("====================================")
      console.log('msg: ', msg);
      console.log('fdir: ', fdir);
    }
    const newwebsitepath = "demo";

    return NextResponse.json({ newwebsitepath });
  } catch (error: any) {
    console.error('Error in /api/redesign:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
