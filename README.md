# The Absurd Clause Contest

[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/maezageryan-del/absurd-clause-contest/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/maezageryan-del/absurd-clause-contest/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

An absurd clause hidden deep inside a terms-of-service agreement — an
entry for the
[The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
bounty on [make.fun](https://make.fun).

## The clause

> Section 8.3: the user agrees to apologize in writing to the software after every crash, including crashes caused by the software.

129 characters, one line. The joke: deadpan legal boilerplate that quietly
turns absurd — the user must apologize in writing to the software after
every crash, including crashes caused by the software itself. The software
is the victim of its own failures, and the user owes it an apology.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The output is deterministic: the
same line, byte for byte, on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
