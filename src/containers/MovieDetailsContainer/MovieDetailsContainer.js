import React, { Component } from "react";
import "./MovieDetailsContainer.scss"

export default class MovieDetailsContainer extends Component {
  state = {
    id: 0,
    movie: null
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        window.location.href.match(/\d+/g).map(Number)[1]
      }?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ movie: res });
      });
  }
  render() {
    if (this.state.movie) {
      const { movie } = this.state;

      return (
        <div className="movie-details-container">
          <div className="card">
            <div className="card__title">
              <h1>{movie.title}</h1>
            </div>
            <div className="card__img">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `}
                alt=""
                srcset=""
              />
              <p>{movie.overview}</p>
            </div>
            <div className="card__info">
              <ul>
                <li>
                  {movie.vote_average} <span>stars lovely stars</span>
                </li>
                <li>{movie.popularity}</li>
                <li>{movie.original_language}</li>
                <li>
                  {movie.production_companies.forEach(company => {
                    return company;
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
