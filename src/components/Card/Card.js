import React, { Fragment } from "react";
import './Card.scss'

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-container__rating">
        <span>8.2</span>
      </div>
      <div className="card-container__img">
        <img src="https://picsum.photos/id/237/500/400" alt="" srcset="" />
      </div>
      <div className="card-container__text">
        <h1>Crawl (2019)</h1>
        <p>Language: en</p>
      </div>
    </div>
  );
};

export default Card
