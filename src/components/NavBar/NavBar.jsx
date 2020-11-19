import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="wrapper-nav">
      <div className="navbar">
        <Link to="/">Home</Link>
        <SearchBar />
        <Link to="/trending">Trending</Link>
        <Link to="/random">Random</Link>
        <Link to="/favorited">Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
