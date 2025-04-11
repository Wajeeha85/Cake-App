"use client";
import { getCakeReceipes } from "@/app/lib/api";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Recipe {
  id: number;
  difficulty: string;
  title: string;
  portion: string;
  time: string;
  image: string;
  description: string;
  ingredients: string;
}

const CakeRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  const cakeRecipe = async () => {
    try {
      const get = await getCakeReceipes();
      console.log("Raw API Response:", get);

      // Ensure response is an array
      setRecipe(Array.isArray(get) ? get : [get]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipe([]);
    }
  };

  useEffect(() => {
    cakeRecipe();
  }, []);

  return (
    <>
      {" "}
      <div className="bg-lightBrown flex flex-col justify-center items-center text-center text-xl">
        <h1 className=" text-brownie font-bold text-4xl mt-5">
          Recipe Section
        </h1>
        <div>
          {recipe.length > 0 ? (
            recipe.map((rec) => (
              <div className="flex text-brown text-xl flex-col" key={rec.id}>
                <div className="flex flex-row gap-7">
                  <Image
                    alt="Cake Image"
                    src={rec.image}
                    width={330}
                    height={140}
                    className="flex justify-center items-center rounded-xl  m-4"
                  />
                  <p className=" text-brown relative left-40 top-40 text-4xl  font-bold ">
                    {" "}
                    A quick recipe of ur favorite cake!{" "}
                  </p>
                </div>
                <div className=" font-bold text-3xl ">
                  {" "}
                  <h2 className="  mt-2">Difficulty: {rec.difficulty}</h2>
                  <h2 className=" text-brownie mt-5 ">Title: {rec.title}</h2>
                  <p className="  mt-5  ">Description: {rec.description}</p>
                  <h2 className="  text-brownie  mt-5">
                    Ingredients: {rec.ingredients}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black">No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CakeRecipe;
