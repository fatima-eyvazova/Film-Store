import React from 'react'
import '../game-cover/GameCover.scss'
const GameCover = ({ image = '' }) => {
    return (
        <div className="game-cover" style={{ backgroundImage: `url(${image})` }}></div>
    )
}

export default GameCover