from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import top_stories_prompts

app = FastAPI(title="CozyStories")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Vite default port[cite: 3]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Server Up & Running!"}

app.include_router(top_stories_prompts.router)