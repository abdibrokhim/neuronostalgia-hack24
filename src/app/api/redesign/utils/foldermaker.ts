import fs from 'fs';
import path from 'path';

export function ensureFolderStructure(folderName: string) {
    const demoDir = path.join(process.cwd(), 'src', 'app', 'demo');
    if (!fs.existsSync(demoDir)) {
      fs.mkdirSync(demoDir, { recursive: true });
    }
  
    // create subfolder under demo
    const folderPath = path.join(demoDir, folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  
    return folderPath;
}