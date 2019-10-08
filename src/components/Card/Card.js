import React, { Fragment } from 'react'

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-container__rating">
                <span>8.2</span>
            </div>
            <div className="card-container__img">
                <img src="https://picsum.photos/id/237/200/300" alt="" srcset=""/>
            </div>
            <div className="crad-container__text">
                <p>Crawl (2019)</p>
                <p>Language: en</p>
            </div>
        </div>
    )
}

export default Card
