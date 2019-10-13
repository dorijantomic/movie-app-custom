import React, { Fragment } from "react";
import "./Card.scss";

const Card = ({ moviesList }) => {
  console.log(moviesList, "the fuck");
  return (
    <Fragment>
      {moviesList !== null ? (
        moviesList.map((movie, i) => (
          <div className="card-container" key={movie.id}>
            <div className="card-container__rating">
              <span>{movie.vote_average}</span>
            </div>
            <div className="card-container__img">
              {movie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `}
                  alt=""
                  srcset=""
                />
              ) : (
                <img src={`https://i.imgur.com/U69zau9.jpg`} alt="" srcset="" />
              )}
            </div>
            <div className="card-container__text">
              <h1>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p>Language: {movie.original_language}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
};

export default Card;
