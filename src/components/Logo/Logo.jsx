import React from 'react'
import style from './style.module.css'
const Logo = ({ title, subtitle, img }) => {
    return (
        <>
            <div className={style.container}>
                <img src={img} alt='Logo' className={style.img} />
                <div className={style.title}>{title}</div>
            </div>
            <div className={style.subtitle}> {subtitle}</div>
        </>
    )
}

export default Logo