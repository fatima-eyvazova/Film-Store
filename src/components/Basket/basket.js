import React from 'react'
import '../Basket/basket.scss'
import { BsCart4 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
const Basket = () => {
    const items = useSelector(state => state.cart?.itemsInCart);
    const totalPrice = items?.reduce((acc, game) => acc += game.price, 0);

    return (
        <div className='basket'>
            <BsCart4 className='icon' />
            <span className='price-total'>{totalPrice}$</span>
        </div>
    )
}

export default Basket