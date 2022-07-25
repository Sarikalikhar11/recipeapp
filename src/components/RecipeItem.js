import React from "react";
import "./RecipeItem.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeItem({ recipe }) {
  console.log(recipe["recipe"]["image"])
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeItem"
        onClick={() => window.open(recipe["recipe"]["image"])}
      >
        <img
          className="recipeItem__img"
          src={recipe["recipe"]["image"]}
          alt="recipe"
        />
        <p className="recipeItem__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
