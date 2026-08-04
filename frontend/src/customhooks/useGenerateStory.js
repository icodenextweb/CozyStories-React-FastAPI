import { useState, useEffect } from "react";

export function useGenerateStory(title) {
  const [storyContent, setStoryContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!title) {
        setIsLoading(false);
        return;
    }

    const fetchStory = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/stories/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title }), 
        });
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        setStoryContent(data.story); 
        if (data.imageUrl) setImageUrl(data.imageUrl);
      } catch (error) {
        console.error("Error generating story:", error);
        setStoryContent("Failed to load the story. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStory();
  }, [title]);
  return { storyContent, isLoading , imageUrl};
}