import React from 'react'
import '../game-item/GameItem.scss'
import { GameGenre } from '../game-genre/GameGenre'
import GameCover from '../game-cover/GameCover'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart, deleteItemFromCart } from '../../redux/reducer'
import { useState } from 'react'
const GameItem = ({ game }) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === game.id)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemsInCart) {
            dispatch(deleteItemFromCart(game.id))
        }
        else {
            dispatch(setItemInCart(game))
        }
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

                    <button className='addToCart' style={{ backgroundColor: isItemsInCart ? 'gray' : '#a72461' }} onClick={handleClick}>
                        {isItemsInCart ? 'Remove' : 'add'}
                    </button>

                </div>

            </div>
        </div >
    )
}

export default GameItem