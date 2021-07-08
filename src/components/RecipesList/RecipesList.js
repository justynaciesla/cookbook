import React from "react";
import "./RecipesList.css";
import RecipesListItem from "../RecipesListItem/RecipesListItem";

const RecipesList = ({ recipesArray }) => {
  return (
    <>
      <ul className="recipesList">
        {recipesArray.map((recipe) => (
          <li key={recipe.id} className="recipesListItem">
            {/* <RecipesListItem {...recipe} /> */}
            <RecipesListItem recipe={recipe} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipesList;
