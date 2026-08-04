import React from "react";
import Button from "./Button";

export default function StoryWrite(){
    return(
        <div className="flex flex-row items-center justify-between gap-[20px]  bg-[#d6ae9f]  p-[10px] w-full">
            <textarea className="w-full" placeholder="Start writing your story here..." />
           <Button btnText="Continue..." onClick ={()=>{
            const placeholderText = document.querySelector('textarea').value;
            placeholderText ? alert(`You wrote: ${placeholderText}`) : alert("Please write something before continuing.");
           }}/>
        </div>
    )
}