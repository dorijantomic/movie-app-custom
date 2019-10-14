import React from "react";

import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import MovieListContainer from "./containers/MovieListContainer/MovieListContainer";
import MovieDetailsContainer from "./containers/MovieDetailsContainer/MovieDetailsContainer";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={MovieListContainer} />
        <Route path="/:movie" exact component={MovieDetailsContainer} />
      </Switch>
    </HashRouter>
  );
}

export default App;
