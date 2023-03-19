import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import FilmCover from '../film-cover/FilmCover'
import { FilmGenre } from '../film-genre/FilmGenre'
import './FilmItem.scss'
import { setCurrentFilm } from '../../redux/films/reducer'
const FilmItem = ({ film }) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === film.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemsInCart) {
            dispatch(deleteItemFromCart(film.id))
        }
        else {
            dispatch(setItemInCart(film))
        }
    }

    const FilmClick = () => {
        dispatch(setCurrentFilm(film))
        navigate(`/app/${film.title}`)
    }

    return (
        <div className='film-item' onClick={FilmClick}>
            <div className='film-item-element'>
                <FilmCover image={film.image} />
                <div className='item-details'>
                    <span className='item-title'>{film.title}</span>
                </div>
                <div className='item-genre'>
                    {film.genres.map((genre) => (
                        <FilmGenre genre={genre} key={genre} />
                    ))}
                </div>

                <div className='film-buy'>
                    <span className='item-price'>{film.price} $</span>

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

export default FilmItem