import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = "The diver found the door at the bottom of the lake standing upright, its handle polished bright, as if someone had gone through it that morning. On the other side of the door the water was warmer, and it was raining upward.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
