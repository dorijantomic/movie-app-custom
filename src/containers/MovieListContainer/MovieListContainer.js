import React, { Component, Fragment } from "react";
import "./MovieListContainer.scss";
import Card from "../../components/Card/Card";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

class MovieListContainer extends Component {
  state = {
    movies: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };
  render() {
    return (
      <Fragment>
        <div className="movie-list">
          {this.state.movies.map((movie, i) => {
            return <Card />;
          })}
        </div>
        <div className="buttons-container">
          <ButtonGroup />
        </div>
      </Fragment>
    );
  }
}

export default MovieListContainer;
