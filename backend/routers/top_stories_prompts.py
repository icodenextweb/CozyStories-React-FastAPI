import base64
from io import BytesIO
import urllib.parse
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google.genai import types
from gen_ai.gen_ai_connection import client

router = APIRouter(
    prefix="/api/stories",
    tags=["stories"]
)

class StoryRequest(BaseModel):
    title: str

@router.post("/generate")
def generate_story(request: StoryRequest):
    try:
        # 1. Generate the text story
        story_prompt = f"Write a short story based on this title and make it dramatic with simple english: '{request.title}'"
        story_response = client.models.generate_content(
            model='gemini-3.5-flash', 
            contents=story_prompt,
        )
        
        # # 2. Generate the image using Gemini image generation modality
        # image_prompt = f"A beautiful, artistic storybook illustration representing the theme: {request.title}"
        # image_response = client.models.generate_content(
        #     model='gemini-3.1-flash-image',
        #     contents=image_prompt,
        #     config=types.GenerateContentConfig(
        #         response_modalities=["IMAGE"],
        #         image_config=types.ImageConfig(
        #             aspect_ratio="1:1",
        #         ),
        #     ),
        # )
        
        # # 3. Safely parse and convert image data to a Base64 URL string
        # image_url = ""
        # for part in image_response.parts:
        #     if hasattr(part, 'inline_data') and part.inline_data:
        #         base64_encoded = base64.b64encode(part.inline_data.data).decode('utf-8')
        #         image_url = f"data:image/jpeg;base64,{base64_encoded}"
        #         break
        #     # Alternative fallback if using SDK helper method
        #     elif hasattr(part, 'as_image'):
        #         pil_img = part.as_image()
        #         buffered = BytesIO()
        #         pil_img.save(buffered, format="JPEG")
        #         base64_encoded = base64.b64encode(buffered.getvalue()).decode('utf-8')
        #         image_url = f"data:image/jpeg;base64,{base64_encoded}"
        #         break


        # # 2. Use a thematic placeholder image URL to prevent 429 quota crashes
        # encoded_title = request.title.replace(" ", "%20")
        # image_url = f"https://picsum.photos/seed/{encoded_title}/600/600"

    
        # prompt_text = f"A beautiful storybook illustration of {request.title}"
        # encoded_prompt = urllib.parse.quote(prompt_text)
        # image_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}"


        return {
            "story": story_response.text,
            "imageUrl": image_url
        }
        
    except Exception as e:
        print(f"Error generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))