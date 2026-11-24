import { writeFileSync, mkdirSync } from "node:fs";
import { join } from 'node:path';
const emoji = "🫶";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPath = join(outDir, 'entry.txt');
const text = `${emoji}\n`;
mkdirSync(outDir, { recursive: true, mode: 0o755 });
writeFileSync(entryPath, text, "utf-8");
