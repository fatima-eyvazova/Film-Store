import React from 'react'
import '../game-genre/GameGenre.scss'
export const GameGenre = ({ genre = '' }) => {
    return <div className="item-genre">
        <span className='game-genre'>{genre}</span>
    </div>
}


