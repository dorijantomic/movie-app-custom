import React, { Component } from "react";
import './MovieListContainer.scss'
import Card from "../../components/Card/Card";


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
        </div>
    
    );
  }
}

export default MovieListContainer