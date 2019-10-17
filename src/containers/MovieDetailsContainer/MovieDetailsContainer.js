import React, { Component, Fragment } from "react";
import "./MovieDetailsContainer.scss";
import StarRating from "../../components/StarRating/StarRating";

export default class MovieDetailsContainer extends Component {
  state = {
    id: 0,
    movie: null,
    rating: 0,
    userRating: null,
    guestSessionId: null,
    ratedMovies: null,
    ratingLabel: null,
    width: null
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        window.location.href.match(/\d+/g).map(Number) // <--- in development server add [1] after .map(number)
      }?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US`
    ).then(res => {
      if (res.ok) {
        debugger;
        res = res.json().then(res => {
          this.calculateRating(res.vote_average);
          this.setState({ movie: res, id: res.id }, () => {
            this.fetchRatedMovies(this.props.guestSessionId);
          });
        });
      } else {
        return this.props.history.push("/");
      }
    });
  }

  calculateRating = rating => {
    const totalStars = 10;
    const formattedRating = (rating / totalStars) * 100;
    const roundedRating = `${Math.round(formattedRating / 5) * 5}`;

    this.setState({ rating: roundedRating, width: roundedRating });
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
          this.setState({
            ratedMovies: res.results
          });
        })
        .catch(err => console.log(err, "failed to fetch rated movies"));
    }, 1000);
  };

  showRatingLabel = (label, width) => {
    this.setState({
      ratingLabel: label,
      width: width === undefined ? this.state.rating : width
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
                <li>
                  <p className="label">{this.state.ratingLabel}</p>
                </li>
                <li>
                  {" "}
                  Rating: {movie.vote_average}{" "}
                  <span>
                    {" "}
                    {/* Not proud of this code  ¯\_(ツ)_/¯*/}
                    <div className="stars-outer">
                      <StarRating
                        showRatingLabel={this.showRatingLabel}
                        rateMovie={this.rateMovie}
                      />

                      <div
                        className="stars-inner"
                        style={{ width: `${this.state.width}%` }}
                      >
                        <StarRating
                          showRatingLabel={this.showRatingLabel}
                          rateMovie={this.rateMovie}
                        />
                      </div>
                    </div>
                  </span>
                </li>
                {userRating !== null && userRating[0] ? (
                  <li>Your Rating: {userRating[0].rating}</li>
                ) : null}
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
      return (
        <div
          style={{
            height: "100vh",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}
