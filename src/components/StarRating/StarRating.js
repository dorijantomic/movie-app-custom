import React, { Fragment } from "react";

const StarRating = props => {
  return (
    <Fragment>
      <i className="material-icons">
        <span
          onClick={() => props.rateMovie(1)}
          onMouseOver={() => props.showRatingLabel("😒", 10)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(2)}
          onMouseOver={() => props.showRatingLabel("🥱", 20)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(3)}
          onMouseOver={() => props.showRatingLabel("👎", 30)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(4)}
          onMouseOver={() => props.showRatingLabel("😐", 40)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(5)}
          onMouseOver={() => props.showRatingLabel("👌", 50)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(6)}
          onMouseOver={() => props.showRatingLabel("🙂", 60)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(7)}
          onMouseOver={() => props.showRatingLabel("👍", 70)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(8)}
          onMouseOver={() => props.showRatingLabel("😀", 80)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(9)}
          onMouseOver={() => props.showRatingLabel("😮", 90)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>{" "}
        <span
          onClick={() => props.rateMovie(10)}
          onMouseOver={() => props.showRatingLabel("🤩", 100)}
          onMouseLeave={() => props.showRatingLabel("")}
        >
          star
        </span>
      </i>
    </Fragment>
  );
};

export default StarRating;
