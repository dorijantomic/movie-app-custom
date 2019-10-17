import React, { Component } from "react";
import "./MovieDetailsContainer.scss";
import StarRating from "../../components/StarRating/StarRating";

export default class MovieDetailsContainer extends Component {
  state = {
    id: 0,
    movie: null,
    rating: 0,
    guestSessionId: null,
    ratedMovies: null,
    ratingLabel: null
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
        this.calculateRating(res.vote_average);
        this.setState({ movie: res, id: res.id }, () => {
          this.fetchRatedMovies(this.props.guestSessionId);
        });
      });
  }

  calculateRating = rating => {
    const totalStars = 10;
    const formattedRating = (rating / totalStars) * 100;
    const roundedRating = `${Math.round(formattedRating / 5) * 5}`;

    this.setState({ rating: roundedRating });
  };

  rateMovie = rating => {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}/rating?guest_session_id=${this.props.guestSessionId}&api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3`,
      {
        method: "POST",
        body: JSON.stringify({
          value: rating
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      }
    )
      .then(res => res.json())
      .then(res => this.fetchRatedMovies(this.props.guestSessionId));
  };

  fetchRatedMovies = guestSessionId => {
    setTimeout(() => {
      fetch(
        `
        https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?sort_by=created_at.asc&language=en-US&api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3`,
        {
          method: "GET",
          cache: "no-cache"
        }
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            ratedMovies: res.results
          });
        })
        .catch(err => console.log(err, "failed to fetch rated movies"));
    }, 1000);
  };

  showRatingLabel = label => {
    this.setState({
      ratingLabel: label
    });
  };

  render() {
    if (this.state.movie) {
      const { movie, id } = this.state;
      let userRating = null;
      if (this.state.ratedMovies) {
        userRating =
          this.state.ratedMovies.filter((movie, i) => movie.id === id) || null;
      }

      console.log(userRating);
      return (
        <div className="movie-details-container">
          <div className="card">
            <div className="card__img">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `}
                alt=""
                srcset=""
              />
            </div>
            <div className="card__info">
              <h1>{movie.original_title}</h1>
              <p>{movie.overview}</p>
              <ul>
                <li> Rating: {movie.vote_average}</li>
                <li>
                  {/* Not proud of this code  ¯\_(ツ)_/¯*/}
                  <div className="stars-outer">
                    <StarRating
                      showRatingLabel={this.showRatingLabel}
                      rateMovie={this.props.rateMovie}
                    />
                    <p>{this.state.ratingLabel}</p>
                    <div
                      className="stars-inner"
                      style={{ width: `${this.state.rating}%` }}
                    >
                      <StarRating
                        showRatingLabel={this.showRatingLabel}
                        rateMovie={this.props.rateMovie}
                      />
                    </div>
                  </div>
                </li>

                <li>Popularity: {movie.popularity} </li>
                <li>Language: {movie.original_language}</li>
                <li>
                  Production companies:{" "}
                  {movie.production_companies.map((company, i) => {
                    if (movie.production_companies[++i] !== undefined) {
                      return company.name + ", ";
                    } else {
                      return "and " + company.name;
                    }
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
