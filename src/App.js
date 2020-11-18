import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favorited from "./components/Favorited/Favorited";
import Home from "./components/Home/Home";
import TrendingGif from "./components/TrendingGif/TrendingGif";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import RandomView from "./components/RandomGif/RandomView";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/favorited" component={Favorited} />
          <Route path="/random" component={RandomView} />
          <Route path="/trending" component={TrendingGif} />
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
