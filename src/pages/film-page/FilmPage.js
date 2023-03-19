import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilmCover from '../../components/film-cover/FilmCover'
import { FilmGenre } from '../../components/film-genre/FilmGenre'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import './FilmPage.scss'
const FilmPage = () => {
    const dispatch = useDispatch()
    const film = useSelector((state) => state.films
    .currentFilm)
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === film.id)
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemsInCart) {
            dispatch(deleteItemFromCart(film.id))
        }
        else {
            dispatch(setItemInCart(film))
        }
    }
    return (
        <div className='film-page'>
            <div className='film-page-container'>
                <h1 className='film-page-title'>{film.title}</h1>
                <div className='film-page-content'>
                    <div className='film-page-left'>
                        <iframe
                            width='90%'
                            height='400px'
                            src={film.video}
                            title='youtube'
                        ></iframe>
                    </div>
                    <div className='film-page-right'>
                        <FilmCover image={film.image} />
                        <p className='film-page-description'>{film.description}</p>
                        <p className='secondary-text'>Popular tags for this product:</p>
                        <div className='film-page-genre'>
                            {film.genres.map((genre) => <FilmGenre genre={genre} key={genre} />)}
                        </div>
                        <div className='film-page-film-buy'>
                            <span className='item-price'>{film.price} $</span>
                            <button className='addToCart'
                                style={{ backgroundColor: isItemsInCart ? 'gray' : '#ff347f' }}
                                onClick={handleClick}>
                                {isItemsInCart ? 'Remove' : 'Add'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage