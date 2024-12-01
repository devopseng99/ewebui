# ECOM-UI Mono Repository

This is a monorepo containing the ECOM UI project and its related packages.

## Packages

- `eui`: Node-based web UI interface
- `eapi`: Backend storage providers implementation (Google Sheets, S3, PostgreSQL, SQLite)

## Development

This project uses Turborepo for managing the monorepo structure.

### Prerequisites

- Node.js 16+
- yarn or npm

### Getting Started

1. Install dependencies:
```bash
yarn install
```

2. Run development servers:
```bash
yarn dev
```

### Project Structure

```
packages/
  ├── eui/         # Web UI interface
  └── eapi/        # Backend storage providers
```


###############################################

{
  `owner`: `devopseng99`,
  `repo`: `ewebui`,
  `path`: `README.md`,
  `message`: `Update README with comprehensive project information`,
  `content`: `# E-Web UI Monorepo

A modern, scalable e-commerce UI platform with multiple backend storage provider integrations.

## 🌟 Features

- 📱 Modern React-based web interface
- 🔌 Multiple backend storage providers:
  - Google Sheets integration
  - AWS S3 storage
  - PostgreSQL database
  - SQLite local storage
- 🏗️ Monorepo architecture using Turborepo
- 📦 Workspace optimization

## 📦 Package Structure

```
packages/
├── eui/          # Web UI interface
│   ├── components/   # Reusable UI components
│   ├── pages/       # Next.js pages
│   └── styles/      # UI styling
└── eapi/         # Backend storage providers
    ├── google-sheets/
    ├── s3/
    ├── postgres/
    └── sqlite/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- Yarn or npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devopseng99/ewebui.git
cd ewebui
```

2. Install dependencies:
```bash
yarn install
```

3. Start development servers:
```bash
yarn dev
```

## 🛠️ Development

### Package Scripts

- `yarn dev`: Start all packages in development mode
- `yarn build`: Build all packages
- `yarn test`: Run tests across all packages
- `yarn lint`: Lint all packages

### Working with Packages

Each package can be worked on independently:

```bash
# Work on UI
cd packages/eui
yarn dev

# Work on API
cd packages/eapi
yarn dev
```

## 📄 License

MIT`,
  `branch`: `EWEB-001`
}
