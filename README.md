# Steam on My Glasses

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/bagusin03/grandmas-rice-steam/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/bagusin03/grandmas-rice-steam/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

One sentence, 212 characters, that brings back a childhood memory: a summer evening in Grandma's kitchen, steam off a fresh pot of rice fogging a child's glasses while they sit on the kitchen floor, bowl already held out for the first scoop.

`main.ts` writes it to `/output/entry.txt`:

> On summer evenings Grandma lifted the lid off the rice pot, steam fogging my glasses as I sat on the kitchen floor with my bowl already held out for the first scoop, and no dinner since has ever tasted that warm.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–280 character single-sentence gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
