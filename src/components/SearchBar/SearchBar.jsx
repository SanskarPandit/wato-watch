import React, { useState } from 'react'
import style from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'
const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            onSubmit(e.target.value)
            setValue('')
        }
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <SearchIcon size={25} className={style.icon} />
            <input type="text" className={style.input} placeholder='Search a tv show you may like' onKeyUp={handleSubmit} value={value} onChange={handleChange} />
        </>
    )
}

export default SearchBar