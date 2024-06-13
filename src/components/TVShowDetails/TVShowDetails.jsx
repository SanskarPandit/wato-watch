import React from 'react'
import style from './style.module.css'
import FiveStarRating from '../FiveStarRating/FiveStarRating'
const TVShowDetails = ({ tvShow }) => {
    const rating = tvShow.vote_average / 2;
    return (
        <div>
            <div className={style.title}>{tvShow.name}</div>
            <div className={style.rating_container}>
                <FiveStarRating rating={rating} />
                <span className={style.rating}> {rating}/5</span>
            </div>
            <div className={style.overview}>{tvShow.overview}</div>
        </div>
    )
}

export default TVShowDetails