# CozyStories

A full-stack web application for AI-assisted storytelling. 

# Tech Stack

* **Frontend:** React, Vite, React Router DOM, JavaScript
* **Backend:** FastAPI, Python, Uvicorn
* **Database:** SQLAlchemy 
* **AI Integration:** GenAi 

# Project Structure

* `/frontend` - React application handling the UI (includes `StoryCard` and `StoryView` components).
* `/backend` - FastAPI server managing the database and AI generation endpoints.

# Local Setup Instructions

# 1. Backend Setup
Navigate to the backend directory:
\`\`\`bash
cd backend
\`\`\`

Activate your virtual environment and install dependencies:
\`\`\`bash
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install fastapi uvicorn sqlalchemy python-dotenv google-generativeai
\`\`\`

Start the FastAPI server:
\`\`\`bash
uvicorn main:app --reload
\`\`\`

# 2. Frontend Setup
Open a new terminal and navigate to the frontend directory:
\`\`\`bash
cd frontend
\`\`\`

Install dependencies and start the development server:
\`\`\`bash
npm install
npm run dev
\`\`\`