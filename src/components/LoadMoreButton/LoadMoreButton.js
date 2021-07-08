import React, { useContext } from "react";
import "./LoadMoreButton.css";
import RootContext from "../../context";

const LoadMoreButton = () => {
  const context = useContext(RootContext);
  return (
    <>
      <button
        className="loadMore__button"
        onClick={() => {
          context.getFiveMoreRecipes();
        }}
      >
        Load 5 more recipes
      </button>
    </>
  );
};

export default LoadMoreButton;
