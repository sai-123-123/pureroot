# PureRoot Store

A clean ecommerce starter inspired by the provided Konaseema Foods reference UI, redesigned for a focused catalog:
- Ghee
- Karam / spice powders
- Essentials

## Stack
- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: Python FastAPI
- Database-ready: Supabase/PostgreSQL can be connected later
- Cart: localStorage for the starter version

## Run

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
API: http://localhost:8000

The frontend currently uses local product data so the UI works immediately. To connect FastAPI, set:
NEXT_PUBLIC_API_URL=http://localhost:8000
