import React, { Component } from "react";

import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import MovieListContainer from "./containers/MovieListContainer/MovieListContainer";
import MovieDetailsContainer from "./containers/MovieDetailsContainer/MovieDetailsContainer";
import { withCookies } from "react-cookie";

class App extends Component {
  state = {
    guestSessionId: null
  };

  componentDidMount() {
    if (this.props.cookies.get("guestSessionId")) {
      this.setState({
        guestSessionId: this.props.cookies.get("guestSessionId")
      });
    } else {
      const { cookies } = this.props;
      fetch(
        `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3`
      )
        .then(res => res.json())
        .then(res => {
          cookies.set("guestSessionId", res.guest_session_id, {
            path: "/",
            expires: new Date(new Date().getTime() + 60 * 60 * 1000 * 24)
          });
          this.setState({
            guestSessionId: res.guest_session_id
          });
        });
    }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={MovieListContainer} />
          <Route
            path="/:movie"
            exact
            render={props => (
              <MovieDetailsContainer
                guestSessionId={this.state.guestSessionId}
                history={props.history}
              />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default withCookies(App);
