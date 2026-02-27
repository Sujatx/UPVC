import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "client", "public");

const targetFiles = fs.readdirSync(publicDir).filter((file) => {
  const lower = file.toLowerCase();
  return (
    (lower.startsWith("door ") || lower.startsWith("window ")) &&
    (lower.endsWith(".jpeg") || lower.endsWith(".jpg"))
  );
});

if (targetFiles.length === 0) {
  console.log("No matching JPEG files found.");
  process.exit(0);
}

for (const file of targetFiles) {
  const inputPath = path.join(publicDir, file);
  const outputName = file.replace(/\.(jpeg|jpg)$/i, ".webp");
  const outputPath = path.join(publicDir, outputName);

  try {
    await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
    console.log(`Converted: ${file} → ${outputName}`);
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err.message);
  }
}

console.log(`\nDone. Converted ${targetFiles.length} files.`);
