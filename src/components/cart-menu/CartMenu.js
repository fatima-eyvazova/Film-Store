import React from 'react'
import { calcTotalPrice } from '../utils/utils'
import '../cart-menu/CartMenu.scss'

const CartMenu = ({ items, onClick }) => {
    const totalPrice = calcTotalPrice(items);

    return (
        <div className='cart-menu'>
            <div className='film-list'>
                <span className='title'>
                    {
                        items.length > 0 ? items.map(film => <li className='title-list'>
                            <span>{film.title}</span>
                            <span>{film.price} $</span>
                        </li>) : 'Basket empty'
                    }
                </span>
            </div>
            {items.length > 0 ?
                <div className='total-price'>
                    <div className='cart-price-sum'>
                        <div className='films-price'>
                            <span className='sum'>Sum:</span>
                            <span className='price-total'>{totalPrice} $</span>
                        </div>
                    </div>
                    <button onClick={onClick} className='btn'>checkout</button>
                </div>
                : null
            }

        </div>
    )
}

export default CartMenu