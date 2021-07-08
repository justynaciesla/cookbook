// export const getFavRecipesFromLocalStorage = () => {
//   let localStorageFavRecipes;

//   if (localStorage.getItem("favRecipes")) {
//     localStorageFavRecipes = JSON.parse(localStorage.getItem("favRecipes"));
//   } else {
//     localStorageFavRecipes = [];
//   }

//   return localStorageFavRecipes;
// };

export const getFavRecipesFromLocalStorage = () =>
  localStorage.getItem("favRecipes")
    ? JSON.parse(localStorage.getItem("favRecipes"))
    : [];
