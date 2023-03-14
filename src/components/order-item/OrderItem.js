import React from 'react'
import { useDispatch } from 'react-redux'
import GameCover from '../game-cover/GameCover'
import '../order-item/OrderItem.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'
const OrderItem = ({ game }) => {
    const dispatch = useDispatch()

    function removeClick() {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item-cover'>
                <GameCover image={game.image} />
            </div>
            <div className='order-item-title'>
                <span>{game.title}</span>
            </div>
            <div className='order-item-price'>
                <span>{game.price} $</span>
                <AiOutlineCloseCircle
                    className='close-icon'
                    onClick={removeClick}
                />
            </div>
        </div>
    )
}

export default OrderItem