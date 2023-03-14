import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import GameCover from '../game-cover/GameCover'
import { GameGenre } from '../game-genre/GameGenre'
import '../game-item/GameItem.scss'
import { setCurrentGame } from '../../redux/games/reducer'
const GameItem = ({ game }) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === game.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemsInCart) {
            dispatch(deleteItemFromCart(game.id))
        }
        else {
            dispatch(setItemInCart(game))
        }
    }

    const GameClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }

    return (
        <div className='game-item' onClick={GameClick}>
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

                    <button className='addToCart'
                        style={{ backgroundColor: isItemsInCart ? 'gray' : '#ff347f' }}
                        onClick={handleClick}>
                        {isItemsInCart ? 'Remove' : 'Add'}
                    </button>

                </div>

            </div>
        </div >
    )
}

export default GameItem