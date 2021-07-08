import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import FavRecipes from "../views/FavRecipes";
import Navbar from "../components/Navbar/Navbar";
import { routes } from "../routes";
import SingleRecipe from "../views/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.favRecipes} component={FavRecipes} />
        <Route path={routes.singleRecipe} component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
