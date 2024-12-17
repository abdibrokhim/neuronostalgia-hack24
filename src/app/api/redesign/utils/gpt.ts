import { instr } from "./instr";
import fs from 'fs';
import path from 'path';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export const chatCompletion = async (markdown: string) => {
    console.log("loading chatCompletion...");
  
    const systemPrompt = instr;
    console.log("====================================");
    console.log("systemPrompt: ");
    console.log(systemPrompt);
  
    try {
        console.log("====================================");
        console.log("Opening file...")
        
        console.log("====================================");
        console.log("markdown: ");
        console.log(markdown);

        console.log("====================================");
        console.log("Sending request to OpenAI API...");

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: "[Markdown content]:"+"\n\n"+markdown,
                },
            ],
            model: "gpt-4o",
        });

        const responseMessages = completion.choices[0].message.content;
        console.log("====================================")
        console.log("responseMessages or styled nextjs string: ");
        console.log(responseMessages);

        return responseMessages;

    } catch (error) {
        console.error("Error fetching the data:", error);
        return "An error occurred while fetching the data.";
    }
}
