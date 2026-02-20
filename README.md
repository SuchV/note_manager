# Note Manager

Note Manager is a full-stack web application for creating, organizing, and managing personal notes with user authentication.

It provides a clean, card-based workspace to create, edit, and delete notes with per-user data isolation and session-based auth.

Built to demonstrate practical product engineering: typed REST API design, authenticated CRUD data modeling, and clean UI composition in a React + Express stack.

## Features

- **Note management** with create, edit, and delete operations
- **Card-based dashboard** with title, body preview, and timestamp display
- **User authentication** with sign up, login, logout, and session cookies
- **Per-user data isolation** — each user sees only their own notes
- **Responsive UI** with Bootstrap grid layout
- **Client-side routing** with React Router

## Portfolio Highlights

- **Full-stack architecture:** React SPA frontend with Express.js REST API backend
- **Data modeling:** Mongoose schemas with user-scoped relational notes
- **Authentication:** Session-based auth with bcrypt password hashing, express-session, and MongoStore persistence
- **Type safety:** End-to-end TypeScript across client and server with shared model interfaces
- **Error handling:** Custom HTTP error classes on the client matched to structured API error responses
- **Form management:** React Hook Form with validation for all user input

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript, React Bootstrap
- **API:** Express.js (REST)
- **Database:** MongoDB Atlas + Mongoose ODM
- **Auth:** express-session + bcrypt + connect-mongo
- **Routing:** React Router v6
- **Forms:** React Hook Form
- **Dev tooling:** Nodemon, ESLint, Morgan logger

## Repository Structure

```text
backend/
  src/
    app.ts              # Express app setup, middleware, routes
    server.ts           # MongoDB connection and server bootstrap
    controllers/
      notes.ts          # CRUD handlers for notes
      users.ts          # Auth handlers (signup, login, logout)
    middleware/
      auth.ts           # Session authentication guard
    models/
      note.ts           # Mongoose note schema
      user.ts           # Mongoose user schema
    routes/
      notes.ts          # /api/notes route definitions
      users.ts          # /api/users route definitions
    types/
      session.d.ts      # Express session type augmentation
    util/
      assertIsDefined.ts
      validateEnv.ts    # Environment variable validation (envalid)
frontend/
  src/
    App.tsx             # Root component with routing and auth state
    main.tsx            # React entry point
    components/
      AddEditNoteDialog.tsx
      LoginModal.tsx
      NavBar.tsx
      Note.tsx
      NotesPageLoggedInView.tsx
      NotesPageLoggedOutView.tsx
      SignUpModal.tsx
      form/
        TextInputField.tsx
      pages/
        NotesPage.tsx
        NotFoundPage.tsx
        PrivacyPage.tsx
    errors/
      http_errors.ts    # Custom HTTP error classes
    models/
      note.ts           # Note interface
      user.ts           # User interface
    network/
      notes_api.ts      # API client (fetch wrapper)
    styles/             # CSS Modules
    utils/
      formatDate.ts
```

## Getting Started

### 1) Prerequisites

- Node.js **18+**
- npm **9+**
- A MongoDB Atlas cluster (or local MongoDB instance)

### 2) Install dependencies

```bash
# From the repo root
npm run install:all
```

Or install each workspace separately:

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3) Configure environment

Create a `.env` file inside the `backend/` directory:

```env
MONGO_CONNECTION_STRING="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority"
PORT=5000
SESSION_SECRET="replace-with-a-long-random-secret"
```

> **Notes:**
> - `MONGO_CONNECTION_STRING` must point to a valid MongoDB instance.
> - `SESSION_SECRET` should be a strong random value (e.g. generated via `openssl rand -base64 32`).

See [`.env.example`](.env.example) for a template.

### 4) Run the app

Start backend and frontend in separate terminals:

```bash
# Terminal 1 — API server (port 5000)
npm run dev:backend

# Terminal 2 — React dev server (port 3000)
npm run dev:frontend
```

Open `http://localhost:3000`.

The Vite dev server proxies `/api` requests to the Express backend automatically.

## Developer Commands

From the repository root:

```bash
npm run dev:backend      # Start backend with nodemon
npm run dev:frontend     # Start Vite dev server
npm run install:all      # Install deps for both workspaces
npm run lint:backend     # Lint backend
npm run lint:frontend    # Lint frontend
npm run build:frontend   # Production build (frontend)
```

## Architecture Notes

- API entrypoint: `backend/src/app.ts`
- All note data is scoped to the authenticated user via `req.session.userId`
- The frontend communicates with the backend through a fetch wrapper in `network/notes_api.ts`
- Vite proxies `/api` to `http://localhost:5000` during development
- Session cookies are set with a 1-hour rolling expiry, stored in MongoDB via `connect-mongo`

## License

Licensed under the MIT License. See [`LICENSE`](LICENSE).
