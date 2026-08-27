# Design OS API

The backend boundary is a FastAPI service backed by PostgreSQL. It currently exposes health, project, and requirement endpoints; the frontend still uses localStorage until API authentication and deployment configuration are connected.

## Run

```bash
createdb design_os
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
DATABASE_URL=postgresql+psycopg://design_os:design_os@localhost:5432/design_os uvicorn app.main:app --reload
```

Future modules for auth, screens, flows, AI orchestration, RAG, and MCP should be added behind this API rather than embedded in the browser.
