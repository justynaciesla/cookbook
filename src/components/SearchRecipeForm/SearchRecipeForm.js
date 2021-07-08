import React, { useContext } from "react";
import RootContext from "../../context";
import "./SearchRecipeForm.css";

const SearchRecipeForm = () => {
  const context = useContext(RootContext);
  return (
    <>
      <form onSubmit={context.getRecipes} className="form">
        <div className="searchWrapper">
          <label htmlFor="recipeName" className="recipeName">
            Recipe name:{" "}
          </label>
          <input
            type="search"
            id="recipeName"
            name="recipeName"
            className="recipeName__input"
          />
        </div>
        <div className="recipeNumberWrapper">
          <label htmlFor="recipeNumber" className="recipeNumber">
            Choose number of recipes:{" "}
          </label>
          <select
            name="recipeNumber"
            id="recipeNumber"
            className="recipeNumber__select"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <button type="submit" className="submit__button">
          SEARCH
        </button>
      </form>
    </>
  );
};

export default SearchRecipeForm;
