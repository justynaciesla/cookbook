import React, { useContext } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipeForm from "../components/SearchRecipeForm/SearchRecipeForm";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import RootContext from "../context/index";

const Home = () => {
  const context = useContext(RootContext);
  return (
    <>
      <SearchRecipeForm />
      <RecipesList recipesArray={context.recipes} />
      <LoadMoreButton />
    </>
  );
};

export default Home;
