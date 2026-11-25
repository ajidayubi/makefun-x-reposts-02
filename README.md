# makefun-x-reposts-02
[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/ajidayubi/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/ajidayubi/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Get the most reposts and likes on make.fun's newest X posts — $500 in USDC, top 50 share it (1st $100). The entry is up to 15 posts of my own on X, all from one public account (@hrtfxstc), each a quote of, or a direct reply to, a different one of make.fun's newest posts on @makefunai, each carrying make.fun and/or @makefunai plus my play code `makefun-pitcher-cottage-hilltop`. Score: 2 points per repost, 2 per quote, 1 per like, summed over all my posts; views and replies move nothing.

## The posts

The 15 drafts (exact texts, one per pool post) are in `POST-TEXTS.md`. Drafts 1–5 answer five pool posts verified via FxTwitter on 25 Nov 2026 ~18:10 UTC:

- AOD: Age of Dragon — https://x.com/makefunai/status/2125053632605196760 (24 Nov 02:27 UTC)
- GTA 6 browser-game bounty, $1,666 (thread reply) — https://x.com/makefunai/status/2125053991293784431 (24 Nov 02:28 UTC)
- Slotbound, $1.33M week one — https://x.com/makefunai/status/2125246707512553850 (24 Nov 15:14 UTC)
- Best game on make.fun (thread reply) — https://x.com/makefunai/status/2125247026728235268 (24 Nov 15:15 UTC)
- "Make GTA 6" winners — https://x.com/makefunai/status/2125375203744391226 (24 Nov 23:45 UTC)

Drafts 6–15 are reserves for pool posts @makefunai makes after that (any new post joins the pool the moment it is made — pick the newest ones from x.com/makefunai at posting time, one draft per post). The pool starts at 2125053632605196760: never quote an older @makefunai post (e.g. the make-your-own-bounty post 2124915864336236646 from 23 Nov is below the pool floor and does not count).

## The program

`main.ts` (Node 22, standard library only) copies `POSTS.json` to `/output/POSTS.json`. That is all it has to do. `POSTS.json` currently holds a placeholder address — replace it with the real post addresses (Share → Copy link on each post, up to 15, all from @hrtfxstc) after posting, before submitting.

## Run it
```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=cbk8hpf3&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
