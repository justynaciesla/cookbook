import React, { useContext } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipes from "../components/SearchRecipes/SearchRecipes";
import RootContext from "../context/index";
import "./FavRecipes.css";

const FavRecipes = () => {
  const context = useContext(RootContext);

  const searchedFavRecipesArray = context.searchedFavRecipes;
  const arrayToShow =
    searchedFavRecipesArray.length > 0
      ? context.searchedFavRecipes
      : context.favRecipes;

  return (
    <div>
      <div className="header__wrapper">
        <h1 className="header">FavRecipes</h1>
        <SearchRecipes />
      </div>

      <RecipesList recipesArray={arrayToShow} />
    </div>
  );
};

export default FavRecipes;
