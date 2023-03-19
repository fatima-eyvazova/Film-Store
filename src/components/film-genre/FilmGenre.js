import React from 'react'
import './FilmGenre.scss'
export const FilmGenre = ({ genre = '' }) => {
    return <div className="item-genre">
        <span className='film-genre'>{genre}</span>
    </div>
}


