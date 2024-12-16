import { instr } from "./instr";
import fs from 'fs';
import path from 'path';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export const chatCompletion = async (filePath: string) => {
    console.log("loading chatCompletion...");
  
    const systemPrompt = instr;
    console.log("====================================");
    console.log("systemPrompt: ");
    console.log(systemPrompt);
  
    try {
        console.log("====================================");
        console.log("Opening file...")
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        console.log("====================================");
        console.log("fileContent: ");
        console.log(fileContent);

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
                    content: "[Markdown content]:"+"\n\n"+fileContent,
                },
            ],
            model: "gpt-4o",
        });

        const responseMessages = completion.choices[0].message.content;
        console.log("====================================")
        console.log("responseMessages: ");
        console.log(responseMessages);

        // Create the demo directory if it doesn't exist
        const demoDir = path.join(process.cwd(), 'src', 'app', 'demo');
        if (!fs.existsSync(demoDir)) {
            fs.mkdirSync(demoDir, { recursive: true });
        }

        // Define the output file path
        const outputPath = path.join(demoDir, 'page.tsx');

        // remove first and last line
        const processedMessages = removeFirstAndLastLines(responseMessages);

        // Write the response to the file
        fs.writeFileSync(outputPath, processedMessages!, 'utf8');
        console.log("====================================")
        console.log("File written successfully to:", outputPath);

        // Return the relative path from the project root
        return path.relative(process.cwd(), outputPath);

    } catch (error) {
        console.error("Error fetching the data:", error);
        return "An error occurred while fetching the data.";
    }
}

function removeFirstAndLastLines(str: string | null | undefined): string {
    if (!str) {
      return ""; // Or handle null/undefined differently if needed
    }
  
    const lines = str.split('\n');
    if (lines.length <= 1) {  // Handle short strings
      return ""; // Or return the original string if desired: return str;
    }
  
    lines.shift();
    lines.pop();
    return lines.join('\n');
}
  

// add `layout.tsx` to the same directory as `page.tsx`.

export const layoutGenerator = async (filePath: string) => {
    // simply read the file content from `filePath` and write to the `layout.tsx` file. save it in the same directory as `page.tsx`.
    console.log("loading layoutGenerator...");
    try {
        console.log("====================================")
        console.log("Opening file...")
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        console.log("====================================")
        console.log("fileContent: ");
        console.log(fileContent);

        // Create the demo directory if it doesn't exist
        const demoDir = path.join(process.cwd(), 'src', 'app', 'demo');
        if (!fs.existsSync(demoDir)) {
            fs.mkdirSync(demoDir, { recursive: true });
        }

        // Define the output file path
        const outputPath = path.join(demoDir, 'layout.tsx');

        // Write the response to the file
        fs.writeFileSync(outputPath, fileContent, 'utf8');
        console.log("====================================")
        console.log("File written successfully to:", outputPath);

        // Return the relative path from the project root
        return path.relative(process.cwd(), outputPath);

    } catch (error) {
        console.error("Error fetching the data:", error);
        return "An error occurred while fetching the data.";
    }
}


