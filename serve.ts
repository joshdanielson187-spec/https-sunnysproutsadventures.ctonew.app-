// Production server wrapper for Next.js. Frees port 3000 across user
// boundaries, then starts `next start`. The TanStack Start version is
// replaced — same contract: `bun run serve.ts` serves on 0.0.0.0:3000.

import { spawn } from "node:child_process";

const PORT = 3000;
const HOST = "0.0.0.0";

// Free PORT regardless of which user owns the current listener. lsof runs
// under sudo so it can see (and the kill can signal) a process owned by
// another user; the loop waits for the socket to actually release before
// we bind.
const freePort =
  `for _ in $(seq 1 25); do ` +
  `pids=$(lsof -t -iTCP:${PORT} -sTCP:LISTEN 2>/dev/null || true); ` +
  `if [ -z "$pids" ]; then exit 0; fi; ` +
  `kill $pids 2>/dev/null || true; sleep 0.2; ` +
  `done`;

await Bun.$`sudo sh -c ${freePort}`.quiet().nothrow();

// Start Next.js production server.
const child = spawn(
  "npx",
  ["next", "start", "-p", String(PORT), "-H", HOST],
  {
    stdio: "inherit",
    cwd: import.meta.dir,
    env: { ...process.env },
  }
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
