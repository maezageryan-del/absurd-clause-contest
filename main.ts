// The Absurd Clause Contest
// make.fun bounty: u-donrulezz-the-absurd-clause-contest-035cc0f1
//
// Writes an absurd clause hidden deep inside a terms-of-service
// agreement to /output/entry.txt. The clause is one line of at most
// 200 characters. No input is read; the output is deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The clause. 129 characters, one line, no trailing newline in
// the entry itself (the file ends after the final full stop). Deadpan
// legal boilerplate — "Section 8.3" — that quietly turns absurd: the
// user must apologize in writing to the software after every crash,
// including crashes caused by the software. The software is the victim
// of its own failures, and the user owes it an apology — in writing,
// so there is a record.
const REPLY =
  "Section 8.3: the user agrees to apologize in writing to the software after every crash, including crashes caused by the software.";

function main(): void {
  // Guard the gate before writing: an entry must be one line of
  // 1-200 characters, not whitespace-only. Fail loudly instead of
  // shipping an invalid entry.
  if (
    REPLY.length < 1 ||
    REPLY.length > 200 ||
    REPLY.includes("\n") ||
    REPLY.trim().length === 0
  ) {
    throw new Error(
      `invalid entry: ${REPLY.length} chars, must be one line of 1-200 chars`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REPLY, "utf8");
}

main();
