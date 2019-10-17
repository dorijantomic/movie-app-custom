import React, { Fragment } from "react";

const StarRating = props => {
  return (
    <Fragment>
      <i className="material-icons">
        <span
          onClick={() => props.rateMovie(1)}
          onMouseOver={() => props.showRatingLabel("Horrible")}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(2)}
          onMouseOver={() => props.showRatingLabel("Bad")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(3)}
          onMouseOver={() => props.showRatingLabel("Do not Recommend")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(4)}
          onMouseOver={() => props.showRatingLabel("Dissapointing")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(5)}
          onMouseOver={() => props.showRatingLabel("Ok")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(6)}
          onMouseOver={() => props.showRatingLabel("Fine")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(7)}
          onMouseOver={() => props.showRatingLabel("Good")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(8)}
          onMouseOver={() => props.showRatingLabel("Great")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(9)}
          onMouseOver={() => props.showRatingLabel("Amazing")}
        >
          star
        </span>{" "}
        <span onClick={() => props.rateMovie(10)}>star</span>
      </i>
    </Fragment>
  );
};

export default StarRating;
