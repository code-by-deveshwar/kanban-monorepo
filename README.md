# 🧠 shadcn-kanban-monorepo

A TypeScript monorepo containing:

- 🛠️ [`shadcn-kanban`](https://www.npmjs.com/package/shadcn-kanban): CLI tool to scaffold a Kanban UI into any React/Vite app
- 🎨 ShadCN-style component kit
- ⚡ Example Vite app to preview installs

[![npm version](https://img.shields.io/npm/v/shadcn-kanban?color=blue&label=shadcn-kanban)](https://www.npmjs.com/package/shadcn-kanban)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📦 Monorepo Structure

shadcn-kanban-monorepo/
├── packages/
│ ├── cli/ # Published CLI
│ └── ui/ # Component library
├── examples/
│ └── vite-app/ # Integration test/demo project
├── scripts/ # Template sync script
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── README.md

---

## 🚀 CLI Usage

Install Kanban components into any React project with a `src/` folder:

```bash
npx shadcn-kanban@latest init

✅ This creates:
src/components/ui/
src/hooks/
src/types/


🛠 Monorepo Setup
Uses pnpm workspaces
pnpm install



🔧 Dev Scripts
Command	Description
pnpm sync-templates	Sync ui/ components → CLI templates
pnpm --filter=cli build	Build CLI from TypeScript
npm publish (from cli)	Publish CLI to npm


🧪 Local Testing

🧪 Local Testing
1. Build the CLI
pnpm --filter=cli build

2. Link CLI globally
cd packages/cli
npm link

3. Run the CLI in the test app
cd ../../examples/vite-app
shadcn-kanban init


🤝 Contributing
Fork the repo

Sync templates:
pnpm sync-templates

Make changes to packages/ui/src/

Submit a PR 🚀


🧠 Inspiration
Built for dev teams using shadcn/ui and component-based architectures who want:

Reusable CLI scaffolding

Consistent design systems

Rapid onboarding for new apps


📄 License
MIT © code-by-deveshwar
```
