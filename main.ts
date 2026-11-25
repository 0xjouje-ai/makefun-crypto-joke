// Laugh Track: The Crypto Trading Joke Contest — make.fun bounty entry.
// The program writes one line to /output/entry.txt: a single joke about
// crypto and trading life. The trader's two rules — sell winners too early,
// hold losers forever — the oldest, truest joke on the chart.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My trading plan has two rules: sell the green candle too early, and hold the red candle forever.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace: refuse to write anything that would fail it. The contest
// wants exactly one line, so also reject leading/trailing whitespace
// (a stray space or newline would change the joke) and require the line
// to end with a period, matching the entry's one-sentence format.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === "" ||
  LINE.includes("\n") ||
  LINE !== LINE.trim() ||
  !LINE.endsWith(".")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

// MAKEFUN_OUTPUT_DIR exists only so local tests can point at a private
// temp dir; the grader runs with /output.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
