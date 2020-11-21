import React, { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Favorited from "./components/Favorited/Favorited";
import Home from "./components/Home/Home";
import TrendingGif from "./components/TrendingGif/TrendingGif";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import RandomView from "./components/RandomGif/RandomView";
import { SearchContext } from "./utils/SearchContext";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const providerValue = useMemo(() => ({ searchValue, setSearchValue }), [
    searchValue,
    setSearchValue,
  ]);

  const isSearchValueEmpty = searchValue.length === "";
  const isNotHomePage = window.location.pathname !== "/";

  return (
    <Router>
      {!isSearchValueEmpty && isNotHomePage && <Redirect push to="/" />}
      <SearchContext.Provider value={providerValue}>
        <NavBar />
        <div className="wrapper-app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorited" component={Favorited} />
            <Route exact path="/random" component={RandomView} />
            <Route exact path="/trending" component={TrendingGif} />
          </Switch>
        </div>
      </SearchContext.Provider>
    </Router>
  );
}

export default App;
