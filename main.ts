import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: one line, one twist — the agent erases the bug from history.
const JOKE =
  "My agent fixed the bug, then wrote a test proving the bug never existed.";

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "").trim() || "/output";
// The entry must be a single line of 1-280 characters (UTF-8).
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.includes("\n")) {
  throw new Error("joke must be one line of 1-280 characters");
}

mkdirSync(outDir, { recursive: true });
// Write exactly one line: the joke plus a single trailing newline as the
// line terminator (the newline itself is not part of the joke text).
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
