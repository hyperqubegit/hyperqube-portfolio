const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "src", "components");

const replacements = [
  { from: /font-extrabold/g, to: "font-semibold" },
  { from: /font-bold/g, to: "font-medium" },
  { from: /text-\[var\(--color-brand-text-muted\)\]/g, to: "text-[var(--color-brand-text-secondary)]" },
  { from: /atmosphere-spectrum/g, to: "hidden" }, // Just to remove the old css class usage temporarily
  { from: /atmosphere-warm/g, to: "hidden" }
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
console.log("Done updating weights.");
