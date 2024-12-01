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