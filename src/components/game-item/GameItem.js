import React from 'react'
import '../game-item/GameItem.scss'
import GameCover from '../game-cover/GameCover'
const GameItem = ({ game }) => {
    return (
        <div className='game-item'>
            <div className='game-item-element'>
                <GameCover image={game.image} />
                <div className='item-details'>
                    <span className='item-title'>{game.title}</span>
                </div>
                <div className='item-genre'>
                    {game.genres.map(genre => genre)}
                </div>
                <div className='game-buy'>
                    <span className='item-price'>{game.price} $</span>
                    <button className='addToCart'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default GameItem