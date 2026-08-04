import React, { useState } from "react";
import StoryCard from "../components/StoryCard.jsx";
import StoryView from "../components/StoryView.jsx";

import { useGenerateStory } from "../customhooks/useGenerateStory";
import topStories from "../data/topstories.js"; 

export default function StoryApp() {
  const [selectedStory, setSelectedStory] = useState(null);

  // Custom-Hook 
  const { storyContent, isLoading , imageUrl} = useGenerateStory(
    selectedStory ? selectedStory.title : ""
  );

  // If a story is clicked, show the StoryView
  if (selectedStory) {
    return (
      <StoryView 
        title={selectedStory.title}
        imgsrc={imageUrl}
        storyContent={storyContent}
        isLoading={isLoading}
        onBack={() => setSelectedStory(null)} 
      />
    );
  }

  // Otherwise, show the list of Top Stories
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Top Stories</h1>
      
      <div className="flex flex-wrap justify-center w-full max-w-6xl">
        {topStories.map((story) => (
          <StoryCard 
            key={story.id} 
            title={story.title} 
            onClick={() => setSelectedStory(story)} 
          />
        ))}
      </div>
    </div>
  );
}