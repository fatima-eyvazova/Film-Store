import React from 'react'
import '../game-item/GameItem.scss'
import { GameGenre } from '../game-genre/GameGenre'
import GameCover from '../game-cover/GameCover'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../redux/reducer'
const GameItem = ({ game }) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }

    return (
        <div className='game-item'>
            <div className='game-item-element'>
                <GameCover image={game.image} />
                <div className='item-details'>
                    <span className='item-title'>{game.title}</span>
                </div>
                <div className='item-genre'>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre} />
                    ))}
                </div>

                <div className='game-buy'>
                    <span className='item-price'>{game.price} $</span>
                    <button className='addToCart' onClick={handleClick}>Add</button>
                </div>

            </div>
        </div>
    )
}

export default GameItem