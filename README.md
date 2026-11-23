# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Erwinsays12/makefun-one-word-grandma/rank.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Erwinsays12/makefun-one-word-grandma/reward.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)

An entry for the [One Word From Grandma](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16) competition on [make.fun](https://make.fun).

## The word

**robit**

The single word our grandma would text about AI: the typo she would
actually make for "robot". Warm, a little baffled, funny in one word with
no caption needed — and unmistakably about robots and AI, not the obvious
"robot" itself.

## How it works

`main.ts` writes exactly that one word to `/output/entry.txt` (5 bytes,
no trailing newline), after validating it against the gate: UTF-8 text,
1–30 characters, a single word with no whitespace. It then reads the file
back and verifies it holds exactly the word. Fully deterministic — no
clock, no network, no randomness.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
