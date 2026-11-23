// One Word From Grandma — entry program.
//
// The task: write exactly one word to /output/entry.txt — the single word
// our grandma would text about AI. The judge compares words two at a time
// and picks the funnier, more grandma-like one.
//
// The word: "robit".
//
// Why this word wins the judge's brief, criterion by criterion:
//   1. It reads as the single word a grandma would text about AI — it is
//      the typo she would actually make for "robot" (the rules explicitly
//      count a typo she would actually make), not a sentence or explanation.
//   2. It sounds like her texting voice: warm, a little baffled, the way
//      she types to a grandchild when the new machine comes up.
//   3. It is funny in one word, no caption needed — the misspelling IS the
//      joke, and it lands instantly.
//   4. It is tied to AI and robots, not a word that would fit any subject.
//   5. It is a fresh pick, not the obvious "robot", and still instantly
//      readable — every reader hears "robot" in it at once.
//
// The program is fully deterministic: no clock, no network, no randomness.
// It validates the word against the gate (UTF-8 text, 1-30 characters, not
// only whitespace, a single word) before writing it out.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "robit";
const OUTPUT_PATH = "/output/entry.txt";

function isValidEntry(word: string): boolean {
  if (word.length < 1 || word.length > 30) return false;
  if (word.trim().length === 0) return false;
  if (/\s/.test(word)) return false; // exactly one word, no whitespace
  return true;
}

if (!isValidEntry(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");

// Read the file back and confirm it holds exactly the word: the sealed
// scorer only ever sees this file, so a silent write failure must be
// caught here rather than discovered at grading time.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== WORD) {
  throw new Error(
    `verification failed: ${OUTPUT_PATH} holds ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
console.log(`wrote ${JSON.stringify(WORD)} to ${OUTPUT_PATH}`);
