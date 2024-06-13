import React from 'react'
import style from './style.module.css'
import { SMALL_IMG_COVER_BASE_URL } from '../../config'
const MAX_TITLE_CHAR = 20
const TVShowListItems = ({ tvShow, onClick }) => {
    const handleClick = () => {
        onClick(tvShow)
    }
    return (
        <div className={style.container} onClick={handleClick}>
            <img src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} alt={tvShow.name} className={style.img} />
            <div className={style.title}>{tvShow.name.length > MAX_TITLE_CHAR ? tvShow.name.slice(0, MAX_TITLE_CHAR) + '...' : tvShow.name}</div>
        </div>
    )
}

export default TVShowListItems