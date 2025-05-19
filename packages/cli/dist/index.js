#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Template base
const TEMPLATES_DIR = path.join(__dirname, "..", "templates");
program
    .command("init")
    .description("Install the ShadCN-style Kanban Board into your project")
    .option("-p, --path <path>", "Optional path to your project root")
    .action(async (options) => {
    const customPath = options.path
        ? path.resolve(process.cwd(), options.path)
        : process.cwd();
    const projectRoot = customPath;
    const srcPath = path.join(projectRoot, "src");
    // Check if src/ exists
    if (!(await fs.pathExists(srcPath))) {
        console.error(chalk.red(`❌ Could not find 'src' directory at: ${srcPath}`));
        process.exit(1);
    }
    console.log(chalk.blue(`📁 Using project root: ${projectRoot}`));
    console.log(chalk.blue("🚀 Installing Kanban Board components..."));
    try {
        // Define source template paths
        const uiSrc = path.join(TEMPLATES_DIR, "components", "ui");
        const hooksSrc = path.join(TEMPLATES_DIR, "hooks");
        const typesSrc = path.join(TEMPLATES_DIR, "types");
        // Define destination paths inside the user's project
        const uiDest = path.join(srcPath, "components", "ui");
        const hooksDest = path.join(srcPath, "hooks");
        const typesDest = path.join(srcPath, "types");
        // Ensure destination folders exist
        await fs.ensureDir(uiDest);
        await fs.ensureDir(hooksDest);
        await fs.ensureDir(typesDest);
        // Copy files
        await fs.copy(uiSrc, uiDest);
        await fs.copy(hooksSrc, hooksDest);
        await fs.copy(typesSrc, typesDest);
        console.log(chalk.green("✅ Kanban components installed successfully:"));
        console.log(`   📁 ${path.relative(projectRoot, uiDest)}`);
        console.log(`   📁 ${path.relative(projectRoot, hooksDest)}`);
        console.log(`   📁 ${path.relative(projectRoot, typesDest)}`);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(chalk.red("❌ Installation failed:"), message);
    }
});
program.parse();
