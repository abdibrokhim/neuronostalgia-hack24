import fs from 'fs';
import path from 'path';

export async function layoutGenerator(folderPath: string, title: string, description: string) {
    console.log("Generating layout for folder:", folderPath);
  
    const layoutTemplatePath = "src/app/api/redesign/utils/layout.txt";
    if (!fs.existsSync(layoutTemplatePath)) {
      throw new Error(`layout.txt template not found at: ${layoutTemplatePath}`);
    }
  
    const templateContent = fs.readFileSync(layoutTemplatePath, 'utf8');
    const replacedContent = templateContent
      .replace('{{title}}', title || 'Default Title')
      .replace('{{description}}', description || 'Default Description');
  
    const layoutPath = path.join(folderPath, 'layout.tsx');
    fs.writeFileSync(layoutPath, replacedContent, 'utf8');
  
    console.log("layout.tsx created at:", layoutPath);
}
