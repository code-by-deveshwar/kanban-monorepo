#!/usr/bin/env tsx

import fs from "fs-extra";
import chalk from "chalk";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const DEST = path.join(ROOT, "packages/cli/templates");
const LOG_PATH = path.join(ROOT, ".synced-files.json");

(async () => {
  console.log(chalk.cyan("🧹 Undoing last sync...\n"));

  if (!(await fs.pathExists(LOG_PATH))) {
    console.log(chalk.yellow("⚠️  No .synced-files.json found. Nothing to unsync.\n"));
    process.exit(0);
  }

  const syncedFiles: string[] = await fs.readJson(LOG_PATH);
  let deleted = 0;
  let missing = 0;

  for (const relPath of syncedFiles) {
    const absPath = path.join(DEST, relPath);
    if (await fs.pathExists(absPath)) {
      await fs.remove(absPath);
      console.log(chalk.green(`🗑️  Deleted ${relPath}`));
      deleted++;
    } else {
      missing++;
    }
  }

  await fs.remove(LOG_PATH);
  console.log(chalk.blue(`\n✅ Unsync complete. Deleted ${deleted} file(s). ${missing} already missing.`));
})();
