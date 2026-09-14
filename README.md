# Personal Portfolio — React + Express

A personal portfolio website built with React and an Express.js backend. The application includes portfolio pages, projects loaded from a backend API, individual project details, and a contact form whose submissions are validated and persisted by the backend.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS
- Fetch API

### Backend

- Node.js
- Express.js
- CORS
- dotenv
- JSON file persistence

## Project Structure

```text
portfolio-react/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── data/
│   │   ├── projects.json
│   │   └── contacts.json
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── package.json
└── README.md
```

## Features

- Responsive personal portfolio interface
- React Router based navigation
- Light and dark theme switching
- Projects loaded dynamically from the Express backend
- Individual project details loaded using the project ID
- Loading and backend error states
- Contact form with client-side validation
- Server-side validation for contact submissions
- Contact submissions persisted in a JSON file
- CORS configuration
- Environment variable configuration using dotenv
- JSON error responses for invalid and unknown routes

## Backend Setup

Open a terminal in the `server` directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
DATA_FILE_PATH=./data
ALLOWED_ORIGIN=http://localhost:5173
```

Start the backend in development mode:

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5000
```

The health endpoint can be tested at:

```text
http://localhost:5000/
```

Expected response:

```json
{
  "status": "ok"
}
```

## Frontend Setup

Open another terminal in the project root:

```bash
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

The backend must be running for the Projects and Contact features to work.

## API Endpoints

### GET `/`

Checks whether the backend is running.

Example:

```bash
curl http://localhost:5000/
```

Response:

```json
{
  "status": "ok"
}
```

### GET `/api/projects`

Returns all portfolio projects.

Example:

```bash
curl http://localhost:5000/api/projects
```

### GET `/api/projects/:id`

Returns one project using its ID.

Example:

```bash
curl http://localhost:5000/api/projects/campus-connect
```

If the project does not exist:

```json
{
  "error": "Project not found"
}
```

### POST `/api/contact`

Creates a new contact submission.

Example:

```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"message\":\"Hello from the portfolio.\"}"
```

A successful request returns HTTP `201`.

The submission is persisted in:

```text
server/data/contacts.json
```

### GET `/api/contact`

Returns all stored contact submissions.

Example:

```bash
curl http://localhost:5000/api/contact
```

**Note:** This endpoint is intentionally open and does not require authentication, as specified by the assignment.

## Error Handling

The backend provides JSON responses for errors.

Unknown routes return:

```json
{
  "error": "Route not found"
}
```

Invalid JSON request bodies return:

```json
{
  "error": "Invalid JSON in request body"
}
```

Internal server errors return:

```json
{
  "error": "Internal server error"
}
```

Project lookup errors return:

```json
{
  "error": "Project not found"
}
```

## Environment Variables

The backend uses dotenv for configuration.

| Variable         | Purpose                               |
| ---------------- | ------------------------------------- |
| `PORT`           | Port on which the Express server runs |
| `DATA_FILE_PATH` | Directory containing JSON data files  |
| `ALLOWED_ORIGIN` | Frontend origin allowed by CORS       |

The `.env` file is excluded from version control.

Use `.env.example` as the configuration template.

## Data Persistence

Project data is stored in:

```text
server/data/projects.json
```

Contact submissions are stored in:

```text
server/data/contacts.json
```

No database or ORM is required for this project. JSON files are used for persistence.

## Frontend-Backend Flow

### Projects

```text
React Projects page
        ↓
GET /api/projects
        ↓
Express server
        ↓
server/data/projects.json
        ↓
JSON response
        ↓
React state
        ↓
Project cards
```

### Project Details

```text
/projects/:projectId
        ↓
React useParams()
        ↓
GET /api/projects/:projectId
        ↓
Express server
        ↓
projects.json
        ↓
Project detail displayed
```

### Contact Form

```text
React Contact Form
        ↓
POST /api/contact
        ↓
Express validation
        ↓
contacts.json
        ↓
201 response
        ↓
Form reset + success message
```

## Testing

The following functionality was tested:

- Backend health endpoint
- Get all projects
- Get individual project
- Project not found handling
- Contact form submission
- Contact form persistence
- Get contact submissions
- Backend unavailable error on Projects page
- Backend unavailable error on Project Details page
- Invalid JSON handling
- Unknown route handling
- CORS configuration
- Environment variable configuration

## Important Commands

### Start backend

```bash
cd server
npm run dev
```

### Start frontend

From the project root:

```bash
npm run dev
```

Both servers should be running simultaneously during development.
