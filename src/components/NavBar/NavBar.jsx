import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { SearchContext } from "../../utils/SearchContext";

import "./NavBar.css";

const NavBar = () => {
  const { setSearchValue } = useContext(SearchContext);
  return (
    <div className="wrapper-nav">
      <div className="navbar">
        <Link className="nav-link" to="/" onClick={() => setSearchValue("")}>
          Home
        </Link>
        <SearchBar />
        <Link className="nav-link" to="/trending">
          Trending
        </Link>
        <Link className="nav-link" to="/random">
          Random
        </Link>
        <Link className="nav-link" to="/favorited">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
