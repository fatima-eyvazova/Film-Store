import React from 'react'
import './FilmCover.scss'
const FilmCover = ({ image = '' }) => {
    return (
        <div className="film-cover" style={{ backgroundImage: `url(${image})` }}></div>
    )
}

export default FilmCover