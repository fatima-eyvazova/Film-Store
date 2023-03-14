import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameCover from '../../components/game-cover/GameCover'
import { GameGenre } from '../../components/game-genre/GameGenre'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import '../game-page/GamePage.scss'
const GamePage = () => {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game.currentGame)
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === game.id)
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
        <div className='game-page'>
            <div className='game-page-container'>
                <h1 className='game-page-title'>{game.title}</h1>
                <div className='game-page-content'>
                    <div className='game-page-left'>
                        <iframe
                            width='90%'
                            height='400px'
                            src={game.video}
                            title='youtube'
                        ></iframe>
                    </div>
                    <div className='game-page-right'>
                        <GameCover image={game.image} />
                        <p className='game-page-description'>{game.description}</p>
                        <p className='secondary-text'>Popular tags for this product:</p>
                        <div className='game-page-genre'>
                            {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                        </div>
                        <div className='game-page-game-buy'>
                            <span className='item-price'>{game.price} $</span>
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

export default GamePage