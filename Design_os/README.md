# Design OS

Design OS is a product workspace for turning product intent into organized requirements and consistent design work. The existing Design OS visual tools remain the core experience; the product layer now gives them a persistent project context.

## Current Product

- Protected landing, login, and dashboard routes
- Persistent projects stored in browser storage
- Project creation, selection, rename, and deletion safeguards
- Structured requirements with title, description, priority, status, and user story
- Requirement search and JSON workspace export
- Existing Color Realm, Typography Lab, Motion Playground, Gradient Studio, Shadow Hub, and Community tools
- Central reference tokens in `src/data/designTokens.js`
- FastAPI/PostgreSQL API boundary for projects and requirements

The frontend currently operates offline-first with localStorage. The API is an independent foundation and is not yet connected to the browser session.

## Architecture

```text
React + Vite
    |
    +-- AuthContext / WorkspaceContext
    +-- Dashboard shell and existing design tools
    +-- Project and requirement artifacts
    |
FastAPI REST API
    |
PostgreSQL
```

The intended product graph is:

```text
Project -> Requirements -> Flows -> Screens -> Components -> Tokens -> Handoff
```

## AI, RAG, And MCP

These are deliberately documented as roadmap items rather than simulated features. The planned architecture is an orchestrator with Product, UX, Design System, Component, and QA agents. Retrieval will index requirements, component documentation, tokens, decisions, and versions using PostgreSQL plus pgvector. An MCP server will expose authenticated tools over the same service layer.

## Tech Stack

- React 19, React Router, Vite
- Tailwind CSS, Framer Motion, Lucide
- FastAPI, SQLAlchemy, PostgreSQL, psycopg
- Oxlint and GitHub Actions CI

## Setup

```bash
cd Design_os
npm install
npm run dev
```

The frontend runs on `http://localhost:3000`. The demo login is `demo@example.com` with password `password`.

To run the API, see [backend/README.md](backend/README.md). The API expects `DATABASE_URL` and a running PostgreSQL database.

## Project Structure

```text
Design_os/
├── src/
│   ├── components/       Existing visual tools and dashboard surfaces
│   ├── context/          Auth and persistent workspace state
│   ├── data/             Navigation and approved design tokens
│   └── pages/            Public and protected routes
├── backend/              FastAPI and PostgreSQL service boundary
├── .github/workflows/    Frontend and backend CI
└── docs/                 Product architecture documentation
```

## Roadmap

1. Connect the frontend workspace to authenticated API sessions.
2. Add flows, screens, component registry, versions, and developer handoff entities.
3. Add migrations, user accounts, ownership, authorization, and audit history.
4. Add AI orchestration with structured output validation.
5. Add document ingestion, embeddings, retrieval, and MCP tools.
6. Add unit, component, API, agent, RAG, MCP, and browser tests.

## Design Preservation

New product surfaces intentionally reuse the existing dashboard shell, neutral palette, typography, spacing, borders, radii, and interaction patterns. The approved visual system is treated as a constraint and is formalized, not replaced.
