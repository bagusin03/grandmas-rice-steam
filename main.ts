// Make the AI Judge Feel Nostalgic: A Childhood Memory — make.fun entry.
// One sentence, 212 characters, written to /output/entry.txt: a summer
// evening in Grandma's kitchen, the steam off a fresh pot of rice fogging
// a child's glasses while they sit on the kitchen floor, bowl already
// held out for the first scoop — and the ache that no dinner since
// has tasted that warm.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program only emits the sentence.
import * as fs from "node:fs";

const ENTRY =
  "On summer evenings Grandma lifted the lid off the rice pot, steam fogging my glasses as I sat on the kitchen floor with my bowl already held out for the first scoop, and no dinner since has ever tasted that warm.";

// Guard the sealed gate ourselves: 1-280 characters, not blank,
// exactly one sentence.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 280 || !ENTRY.trim() || ENTRY.split(".").length - 1 !== 1) {
  throw new Error(`memory violates the 1-280 char single-sentence gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Verify the written file round-trips exactly: same bytes, one sentence.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the memory");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
