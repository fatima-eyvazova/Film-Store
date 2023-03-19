import React from 'react'
import { useDispatch } from 'react-redux'
import FilmCover from '../film-cover/FilmCover'
import '../order-item/OrderItem.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'
const OrderItem = ({ film }) => {
    const dispatch = useDispatch()
    function removeClick() {
        dispatch(deleteItemFromCart(film.id))
    }
    return (
        <>
            <div className='order-item'>
                <div className='order-item-cover'>
                    <FilmCover image={film.image} />
                </div>
                <div className='order-item-title'>
                    <span>{film.title}</span>
                </div>
                <div className='order-item-price'>
                    <span>{film.price} $</span>
                    <AiOutlineCloseCircle
                        className='close-icon'
                        onClick={removeClick}
                    />
                </div>
            </div>
        </>

    )
}

export default OrderItem