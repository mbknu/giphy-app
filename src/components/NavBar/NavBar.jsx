import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/trending">Trending</Link>
      <Link to="/random">Random</Link>
      <Link to="/favorited">Favorites</Link>
    </div>
  );
};

export default NavBar;
