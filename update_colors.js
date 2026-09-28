const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
files.push('src/app/page.tsx');

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/--color-brand-blue-light/g, '--color-brand-accent-light');
  content = content.replace(/--color-brand-border-blue/g, '--color-brand-border-accent');
  content = content.replace(/--color-brand-blue/g, '--color-brand-accent');
  
  content = content.replace(/atmosphere-blue-soft/g, 'atmosphere-warm-soft');
  content = content.replace(/atmosphere-blue/g, 'atmosphere-warm');
  
  content = content.replace(/shadow-blue-500\/20/g, 'shadow-orange-500/20');
  content = content.replace(/rgba\(0,102,255,/g, 'rgba(255,75,62,');
  
  fs.writeFileSync(file, content);
});

console.log("Colors updated.");
