const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const { createCanvas } = require("canvas");
const sharp = require("sharp");
const fs = require("fs");
const { execSync } = require("child_process");

const PDF_PATH = "C:/Users/Eshwar Paygude/Downloads/Win Win End Mills_Brochure Final 28.10.2025 (Compressed).pdf";
const PAGE_NUM = parseInt(process.argv[2] || "4", 10);
const SCALE    = parseFloat(process.argv[3] || "4");
const OUT_IMG  = `C:/Users/Eshwar Paygude/Downloads/page${PAGE_NUM}_proc.png`;
const TESSERACT = '"C:/Program Files/Tesseract-OCR/tesseract.exe"';

async function main() {
  const buf  = fs.readFileSync(PDF_PATH);
  const data = new Uint8Array(buf);
  const doc  = await pdfjsLib.getDocument({ data }).promise;

  const page     = await doc.getPage(PAGE_NUM);
  const viewport = page.getViewport({ scale: SCALE });
  const canvas   = createCanvas(viewport.width, viewport.height);
  const ctx      = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, viewport.width, viewport.height);

  await page.render({ canvasContext: ctx, viewport }).promise;
  const rawPng = canvas.toBuffer("image/png");

  await sharp(rawPng)
    .grayscale()
    .normalize()
    .sharpen()
    .png()
    .toFile(OUT_IMG);

  console.log(`Preprocessed page ${PAGE_NUM} -> ${OUT_IMG}`);

  const outBase = OUT_IMG.replace(".png", "");
  execSync(`${TESSERACT} "${OUT_IMG}" "${outBase}" --psm 6 -l eng`);
  const ocrText = fs.readFileSync(outBase + ".txt", "utf8");
  console.log("\n===== OCR PAGE", PAGE_NUM, "=====\n");
  console.log(ocrText);
}

main().catch(e => console.error("ERROR:", e.message));
