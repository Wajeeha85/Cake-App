"use client"
import { getCakeReceipes } from '@/app/lib/api';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Recipe {
  id: number;
  difficulty: string;
  title: string;
  portion: string;
  time: string;
  image: string;
  description: string;
  ingredients: string;
  method: string;
}

const CakeRecipe = () => {
  // const [recipe, setRecipe] = useState<Recipe[]>([]);

  // const cakeRecipe = async () => {
  //   try {
  //     const get = await getCakeReceipes();
  //     console.log("Raw API Response:", get);
  
  //     // If the API response is a single object, wrap it in an array
  //     setRecipe(Array.isArray(get) ? get : [get]);
  //   } catch (error) {
  //     console.error("Error fetching recipes:", error);
  //     setRecipe([]); 
  //   }
  // };
  

  // useEffect(() => {
  //   cakeRecipe();
  // }, []);

  return (
    <div>
      <h1>hello</h1>
      </div>)}
    {/* </div>
    <div className="flex justify-center items-center text-xl">
      {recipe.length > 0 ? (
        recipe.map((rec) => (
          <div className="flex flex-col" key={rec.id}>
            <Image alt="Cake Image" src={rec.image} width={300} height={160} className="rounded-xl object-cover mt-4" />
            <h1>Id:{rec.id}</h1>
            <h2>Difficulty:{rec.difficulty}</h2>
            <h2 className="text-lg  text-black font-bold mt-2">Title:{rec.title}</h2>
            <p className="text-lg  text-black font-bold mt-2">Description:{rec.description}</p>
            <h2>ingriedients:{rec.ingredients}</h2>
            {/* <h2>{rec.method}</h2> */}
      
      //   ))
      // ) : (
      //   <p className="text-black">No recipes found.</p>
      // )}
//     </div> */}
//   );
// };

export default CakeRecipe;
