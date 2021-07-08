import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation__wrapper">
      <nav>
        <ul className="nav-ul">
          <li className="nav-list">
            <Link className="nav-link" to={routes.home}>
              Home
            </Link>
          </li>

          <li className="nav-list">
            <Link className="nav-link" to={routes.favRecipes}>
              Fav Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
