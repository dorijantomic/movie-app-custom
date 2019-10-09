import React, { Component } from "react";
import "./MovieListContainer.scss";
import Card from "../../components/Card/Card";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

class MovieListContainer extends Component {
  state = {
    movies: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map((movie, i) => {
          return <Card />;
        })}
        <ButtonGroup />
      </div>
    );
  }
}

export default MovieListContainer;
