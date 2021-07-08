import React, { useContext } from "react";
import RootContext from "./../../context";

const SearchRecipes = () => {
  const context = useContext(RootContext);
  return (
    <div className="searchWrapper">
      <label htmlFor="searchRecipe" className="recipeName">
        Search Recipes:
      </label>
      <input
        className="recipeName__input"
        type="text"
        id="searchRecipe"
        value={context.searchInputValue}
        onChange={context.handleSearchInputChange}
      />
    </div>
  );
};

export default SearchRecipes;
