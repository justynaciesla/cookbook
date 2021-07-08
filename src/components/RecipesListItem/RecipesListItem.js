import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./RecipesListItem.css";
import heartBorder from "./../../assets/icons/heart_border.svg";
import heartFull from "./../../assets/icons/heart_full.svg";
import RootContext from "../../context";

const RecipesListItem = ({ recipe: { id, title, image }, recipe }) => {
  const context = useContext(RootContext);
  const { addToFavRecipes, removeFromFavRecipes, checkIfRecipeIsInFav } =
    context;

  const isRecipeInFavRecipes = checkIfRecipeIsInFav(id);

  return (
    <div className="recipeWrapper">
      <Link
        to={{
          pathname: `/recipe/${title.replace(/\s/g, "")}`,
          // Nie mylic ze stanem aplikacji to jest stan linku(magazyn linku)
          state: {
            ...recipe,
          },
        }}
      >
        <img src={image} alt={title} className="image" />
      </Link>
      <h3 className="recipeTitle">{title}</h3>
      <img
        className="favIcon"
        onClick={() =>
          isRecipeInFavRecipes ? removeFromFavRecipes(id) : addToFavRecipes(id)
        }
        src={isRecipeInFavRecipes ? heartFull : heartBorder}
      />

      {/* <button
        onClick={() => addToFavRecipes(id)}
        className={
          favRecipes.includes(recipe)
            ? "addToFav__button isInFav"
            : "addToFav__button"
        }
      >
        <FaHeart className="heart__icon" size="3x" />
      </button> */}
    </div>
  );
};

export default RecipesListItem;
