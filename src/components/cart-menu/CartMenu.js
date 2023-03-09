import React from 'react'
import { calcTotalPrice } from '../utils/utils'
import '../cart-menu/CartMenu.scss'

const CartMenu = ({ items, onClick }) => {
    const totalPrice = calcTotalPrice(items);

    return (
        <div className='cart-menu' style={{ backgroundColor: items.length > 0 ? 'rgb(36, 37, 41)' : 'white' }}>

            <div className='game-list'>
                <span className='title'>
                    {
                        items.length > 0 ? items.map(game => <li className='title-list'>
                            <span>{game.title}</span>
                            <span>{game.price} $</span>
                        </li>) : null
                    }
                </span>
            </div>
            {items.length > 0 ?
                <div className='total-price'>
                    <div className='cart-price-sum'>
                        <div className='games-price'>
                            <span className='sum'>Sum:</span>
                            <span className='price-total'>{totalPrice} $</span>
                        </div>
                    </div>
                    <button
                        onClick={onClick}>checkout</button>
                </div>
                : null
            }

        </div>
    )
}

export default CartMenu