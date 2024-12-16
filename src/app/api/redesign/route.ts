// app/api/redesign/route.ts
import { NextResponse } from 'next/server';
import { chatCompletion, layoutGenerator } from './utils/ass';

export async function POST(request: Request) {
  try {
    const { filePath } = await request.json();

    const response = await chatCompletion(filePath);
    console.log("====================================")
    console.log('response:');
    console.log(response);

    const layoutPath = await layoutGenerator('src/app/api/redesign/utils/layout.txt');
    console.log("====================================")
    console.log('layoutPath:');
    console.log(layoutPath);

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
