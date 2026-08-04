import React from "react";
import StoryWrite from "./StoryWrite";
import Button from "./Button";

export default function StoryView({ onBack, title, imgsrc, storyContent, isLoading }) {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-[#fcf8f2] via-[#f4ebd0] to-[#e8dcc4] text-[#3d2c1e] p-4 md:p-8 min-h-screen">
      <div className="story-view-card flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        
        {/* First-column: Content & Actions */}
        <div className="col md:w-1/2 flex flex-col items-start justify-start">
          {/* Back Button */}
          <Button btnText="Back" onClick={onBack} />
          
          <h1 className="text-3xl font-extrabold tracking-tight mt-6 text-[#2c1d11] drop-shadow-sm">{title}</h1>
          
          {/* Story content block */}
          <div className="overflow-y-auto min-h-[300px] max-h-[80vh]  w-full custom-scrollbar mt-4 p-6 bg-gradient-to-b from-[#ffffff] to-[#f9f3ea] border-2 border-[#d4be9f] shadow-2xl shadow-[#5c3a21]/15">
            {isLoading ? (
              <p className="animate-pulse text-center mt-10 text-[#8c6d53]">Weaving your story with AI...</p>
            ) : (
              <p className="text-lg leading-relaxed whitespace-pre-wrap text-[#4a3525]">{storyContent}</p>
            )}
          </div>
          
          {/* Write story block */}
          <div className="w-full ">
            <StoryWrite />
          </div>
        </div>

        {/* Second-column: Image Display */}
        <div className="col md:w-1/2 bg-gradient-to-tr from-[#ffffff] via-[#f7f0e6] to-[#eee2cf] border-2 border-[#d4be9f] flex justify-center items-center p-6 shadow-2xl shadow-[#5c3a21]/15">
          <img 
            src={imgsrc} 
            alt={`${title} representation`} 
            className="max-w-full max-h-[600px] object-contain shadow-xl" 
          />
        </div>

      </div>
    </section>
  );
}