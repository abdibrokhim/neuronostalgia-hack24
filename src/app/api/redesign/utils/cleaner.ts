export function removeFirstAndLastLines(str: string | null | undefined): string {
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