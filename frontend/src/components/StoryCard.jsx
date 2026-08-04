import React from "react";
import { Link } from "react-router-dom";
    

export default function StoryCard({onClick,title}){
    return(
    <div onClick={onClick} className="StoryCard flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4 m-4 w-64">
        <h1 className=" font-bold text-rose-500">{title}</h1>
    </div>
    
    );
}