import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { SearchContext } from "../../utils/SearchContext";
import SearchBar from "../SearchBar/SearchBar";

import "./NavBar.css";

const NavBar = () => {
  const { setSearchValue } = useContext(SearchContext);
  return (
    <div className="wrapper-nav">
      <div className="navbar">
        <Link to="/" onClick={() => setSearchValue("")}>
          Home
        </Link>
        <SearchBar />
        <Link to="/trending">Trending</Link>
        <Link to="/random">Random</Link>
        <Link to="/favorited">Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
