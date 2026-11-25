// Entry program for the make.fun bounty "Get the most reposts and likes on
// make.fun's newest X posts" (makefun-x-reposts-02). Node 22, standard
// library only, no network.
//
// The entry is the X posts themselves, not this code: up to 15 posts from one
// public X account, each a quote of, or a direct reply to, a different one of
// make.fun's newest posts on x.com/makefunai, each carrying make.fun (written
// out or a link) and/or a tag of @makefunai, plus this account's play code
// makefun-pitcher-cottage-hilltop. Their addresses go in POSTS.json at the
// repository root, and this program's only job is to copy that file to the
// output directory, where the house reads it and scores each post (2 points
// per repost, 2 per quote, 1 per like, summed over all posts).
//
// POSTS.json as shipped holds a placeholder address: replace it with the real
// post addresses (Share -> Copy link on each X post) after posting, before
// submitting. The program scores nothing itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
