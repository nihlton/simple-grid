// scripts/generate.ts
import * as vars from "../vars.ts";
import fs from "fs";
import path from "path";

function toSassValue(value: any): string {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const entries = Object.entries(value)
      .map(([k, v]) => `${k}: ${toSassValue(v)}`)
      .join(", ");
    return `(${entries})`;
  }
  return String(value);
}

// Ensure dist exists
const srcPath = path.join(__dirname, "../src");
if (!fs.existsSync(srcPath)) fs.mkdirSync(srcPath);

// Generate SCSS
let scssContent = "// GENERATED FILE - DO NOT EDIT\n";
for (const [key, value] of Object.entries(vars)) {
  scssContent += `$${key}: ${toSassValue(value)};\n`;
}

fs.writeFileSync(path.join(srcPath, "vars.module.scss"), scssContent);
console.log("✅ Generated src/vars.module.scss");
