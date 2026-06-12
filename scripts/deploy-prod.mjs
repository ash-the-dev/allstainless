#!/usr/bin/env node

import { spawnSync } from "node:child_process";

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "pipe",
    encoding: "utf8",
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  return {
    status: result.status ?? 1,
    stdout: (result.stdout || "").trim(),
    stderr: (result.stderr || "").trim(),
  };
}

function fail(message) {
  console.error(`\n[deploy:prod] ${message}\n`);
  process.exit(1);
}

const status = run("git", ["status", "--porcelain"]);
if (status.status !== 0) {
  fail(`Unable to read git status.\n${status.stderr || status.stdout}`);
}

if (status.stdout.length > 0) {
  fail(
    "Working tree is not clean. Commit/stash your changes first so production always matches source control."
  );
}

const branch = run("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
if (branch.status !== 0) {
  fail(`Unable to read current branch.\n${branch.stderr || branch.stdout}`);
}

if (branch.stdout !== "main") {
  fail(`Current branch is "${branch.stdout}". Switch to "main" before deploying.`);
}

const fetch = run("git", ["fetch", "origin", "main"]);
if (fetch.status !== 0) {
  fail(`Unable to fetch origin/main.\n${fetch.stderr || fetch.stdout}`);
}

const divergence = run("git", ["rev-list", "--left-right", "--count", "origin/main...HEAD"]);
if (divergence.status !== 0) {
  fail(`Unable to compare with origin/main.\n${divergence.stderr || divergence.stdout}`);
}

const [behindRaw, aheadRaw] = divergence.stdout.split(/\s+/);
const behind = Number.parseInt(behindRaw || "0", 10);
const ahead = Number.parseInt(aheadRaw || "0", 10);

if (Number.isNaN(behind) || Number.isNaN(ahead)) {
  fail(`Unexpected git divergence output: "${divergence.stdout}"`);
}

if (behind > 0) {
  fail("Local main is behind origin/main. Pull/rebase first.");
}

if (ahead > 0) {
  fail("Local main has unpushed commits. Push to origin/main first.");
}

console.log("[deploy:prod] Checks passed: clean repo, on main, synced with origin/main.");
console.log("[deploy:prod] Deploying to Vercel production...");

const deploy = spawnSync("npx", ["vercel", "--prod"], { stdio: "inherit", shell: true });
if ((deploy.status ?? 1) !== 0) {
  fail("Vercel production deploy failed.");
}

console.log("\n[deploy:prod] Deployment completed successfully.\n");
