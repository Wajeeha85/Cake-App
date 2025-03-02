"use client";
import React from "react";
import { ColourfullText } from "@/app/Components/ui/colourful-text";
import { motion } from "framer-motion";

export function ColourfulTextDemo() {
  return (
    <div className="flex items-center justify-center ">    
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center ml-6 text-white font-sans">
      <ColourfullText text="Delicious" /> cakes for every occasion! 
       <ColourfullText text="Explore" /> our   <br />collection  of <ColourfullText text="beautifully" /> crafted treats 
       and <br />  find your perfect slice of <ColourfullText text="happiness" />.  
      </h1>
    </div>
  );
}
