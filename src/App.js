import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favorited from "./components/Favorited/Favorited";
import Home from "./components/Home/Home";
import TrendingGif from "./components/TrendingGif/TrendingGif";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import RandomView from "./components/RandomGif/RandomView";
import { SearchContext } from "./utils/SearchContext";

function App() {
  const [searchValue, setSearchValue] = useState("boobs");

  const providerValue = useMemo(() => ({ searchValue, setSearchValue }), [
    searchValue,
    setSearchValue,
  ]);

  return (
    <Router>
      <div className="App">
        <SearchContext.Provider value={providerValue}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Switch>
            <Route path="/favorited" component={Favorited} />
            <Route path="/random" component={RandomView} />
            <Route path="/trending" component={TrendingGif} />
          </Switch>
        </SearchContext.Provider>
      </div>
      ;
    </Router>
  );
}

export default App;
