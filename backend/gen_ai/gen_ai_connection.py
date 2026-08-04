import os
from google import genai
from dotenv import load_dotenv

# Force Python to read the .env file
load_dotenv()

# Initialize the NEW Gemini Client (Do NOT use genai.configure)
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
