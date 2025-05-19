#!/usr/bin/env tsx

import fs from "fs-extra";
import chalk from "chalk";
import path from "path";
import {globby} from "globby";
import prompts from "prompts";

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "packages/ui/src");
const DEST = path.join(ROOT, "packages/cli/templates");

const syncedLogPath = path.join(ROOT, ".synced-files.json");
const copyTasks = [
  { from: "components/ui", to: "components/ui" },
  { from: "hooks", to: "hooks" },
  { from: "types", to: "types" },
];

(async () => {
  console.log(chalk.cyan("🔁 Syncing templates from UI to CLI...\n"));

  const syncedFiles: string[] = [];
  let totalCopied = 0;

  for (const task of copyTasks) {
    const fromDir = path.join(SRC, task.from);
    const toDir = path.join(DEST, task.to);

    const files = await globby(["**/*"], { cwd: fromDir });

    for (const file of files) {
      const fromPath = path.join(fromDir, file);
      const toPath = path.join(toDir, file);
      const relativeToTemplates = path.relative(DEST, toPath); // for logging/undo

      const exists = await fs.pathExists(toPath);

      if (exists) {
        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          message: `⚠️  ${relativeToTemplates} already exists. Overwrite?`,
          initial: false,
        });

        if (!overwrite) {
          console.log(chalk.yellow(`⏭️  Skipped ${file}`));
          continue;
        }
      }

      await fs.ensureDir(path.dirname(toPath));
      await fs.copyFile(fromPath, toPath);
      console.log(chalk.green(`✅ Copied ${relativeToTemplates}`));
      syncedFiles.push(relativeToTemplates);
      totalCopied++;
    }
  }

  await fs.writeJson(syncedLogPath, syncedFiles, { spaces: 2 });
  console.log(chalk.magenta(`\n📝 Wrote ${syncedFiles.length} file(s) to .synced-files.json`));
  console.log(chalk.blue(`✨ Sync complete. ${totalCopied} file(s) copied.\n`));
})();
