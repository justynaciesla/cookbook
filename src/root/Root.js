import React, { Component } from "react";
import axios from "axios";
import Router from "../routing/Router";
import RootContext from "../context";
import { getFavRecipesFromLocalStorage } from "../utils/localStorageGetters";

// localStorage.setItem("test", "[1,2,3,4]");
// localStorage.setItem("token", "abc");
// localStorage.removeItem("token");
// localStorage.setItem("test", "[1,3,4]");
// console.log(JSON.parse(localStorage.getItem("test")));

class Root extends Component {
  state = {
    recipes: [],
    favRecipes: getFavRecipesFromLocalStorage(),
    query: "",
    searchInputValue: "",
    searchedFavRecipes: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favRecipes !== this.state.favRecipes) {
      localStorage.setItem("favRecipes", JSON.stringify(this.state.favRecipes));
    }

    if (prevState.searchInputValue !== this.state.searchInputValue) {
      this.handleSearchRecipes();
    }
  }

  getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res);

        const recipesWithFullImg = res.data.results.map((recipe) => {
          return {
            ...recipe,
            image: `${res.data.baseUri}${recipe.image}`,
          };
        });

        this.setState({
          recipes: [...recipesWithFullImg],
          query: recipeName,
        });
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  getFiveMoreRecipes = () => {
    const offset = this.state.recipes.length;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${this.state.query}&number=5&offset=${offset}`
      )
      .then((res) => {
        console.log(res);
        const recipesWithFullImg = res.data.results.map((recipe) => {
          return {
            ...recipe,
            image: `${res.data.baseUri}${recipe.image}`,
          };
        });

        this.setState({
          recipes: [...this.state.recipes, ...recipesWithFullImg],
        });
      })
      .catch((err) => console.log(err));
  };

  checkIfRecipeIsInFav = (recipeId) => {
    let isRecipeInFavRecipes;

    this.state.favRecipes.forEach((recipe) => {
      if (recipe.id === recipeId) {
        isRecipeInFavRecipes = true;
      }
    });

    return isRecipeInFavRecipes;
  };

  addToFavRecipes = (recipeId) => {
    const searchedRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );

    if (this.checkIfRecipeIsInFav(recipeId)) {
      this.setState({
        favRecipes: [...new Set([...this.state.favRecipes])],
      });
    } else {
      this.setState({
        favRecipes: [...new Set([...this.state.favRecipes, searchedRecipe])],
      });
    }
  };

  removeFromFavRecipes = (recipeId) => {
    const filteredFavRecipes = this.state.favRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );
    this.setState({ favRecipes: filteredFavRecipes });
  };

  handleSearchInputChange = (e) => {
    this.setState({ searchInputValue: e.target.value });
  };

  handleSearchRecipes = () => {
    const allFavRecipes = [...this.state.favRecipes];

    const searchedRecipes = allFavRecipes.filter((recipe) => {
      return (
        recipe.title
          .toLowerCase()
          .slice(0, this.state.searchInputValue.length) ===
        this.state.searchInputValue
      );
    });
    this.setState({ searchedFavRecipes: searchedRecipes });
  };

  render() {
    const { recipes, favRecipes, searchInputValue, searchedFavRecipes } =
      this.state;
    return (
      <RootContext.Provider
        value={{
          // baseImgUrl,
          recipes,
          favRecipes,
          searchInputValue,
          searchedFavRecipes,
          addToFavRecipes: this.addToFavRecipes,
          getRecipes: this.getRecipes,
          removeFromFavRecipes: this.removeFromFavRecipes,
          getFiveMoreRecipes: this.getFiveMoreRecipes,
          checkIfRecipeIsInFav: this.checkIfRecipeIsInFav,
          handleSearchInputChange: this.handleSearchInputChange,
        }}
      >
        <Router />
      </RootContext.Provider>
    );
  }
}
export default Root;
