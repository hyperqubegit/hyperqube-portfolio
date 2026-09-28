const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "src", "components");

const replacements = [
  // Typography weights
  { from: /font-semibold/g, to: "font-medium" }, // 600 -> 500
  { from: /font-medium/g, to: "font-normal" },   // 500 -> 400 (only for non-headings if possible, maybe I should just use regex on text-[var(--color-brand-accent)])
  
  // Pill labels
  { 
    from: /className="text-\[11px\] font-[a-z]+ tracking-\[0\.22em\] text-\[var\(--color-brand-accent\)\] uppercase"/g, 
    to: 'className="inline-flex items-center px-3 py-1 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase"' 
  },
  {
    from: /<span className="h-\[2px\] w-6 bg-\[var\(--color-brand-accent\)\]" \/>\s*<span className="inline-flex/g,
    to: '<span className="inline-flex'
  },
  {
    from: /<span className="h-\[1px\] w-8 bg-\[var\(--color-brand-accent\)\]" \/>\s*<span className="inline-flex/g,
    to: '<span className="inline-flex'
  }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith(".tsx")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      let changed = false;
      for (const { from, to } of replacements) {
        if (content.match(from)) {
          content = content.replace(from, to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDir(componentsDir);
console.log("Done updating v7 styles.");
