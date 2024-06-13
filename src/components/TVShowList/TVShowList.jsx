import React from 'react'
import style from './style.module.css'
import TVShowListItems from '../TVShowListItems/TVShowListItems'
const TVShowList = ({ tvShowList, onClickItem }) => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                You'll probably like:
            </div>
            <div className={style.list}>
                {tvShowList.map((tvShow) => {
                    return <span key={tvShow.id} className={style.tv_show_item}><TVShowListItems onClick={onClickItem} tvShow={tvShow} /></span>
                })}
            </div>
        </div>
    )
}

export default TVShowList