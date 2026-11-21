// joke-ai-agent-acct1: writes one line about reviewing an agent's PR
// to $MAKEFUN_OUTPUT_DIR/entry.txt. The joke must stay a single line
// of 1-280 characters, so it is stored without a trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: one line, no trailing newline, so the file is exactly one line.
const JOKE =
  "Reviewed a PR where an agent wrote the code and another agent wrote the review comments — my job was just to click Approve and pretend I was in the room.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, JOKE, "utf8");
