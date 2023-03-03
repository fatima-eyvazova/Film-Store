import React from 'react'
import '../Basket/basket.scss'
import { BsCart4 } from 'react-icons/bs'
const Basket = () => {
    return (
        <div className='basket'>
            <BsCart4 className='icon' />
            <span className='price-total'>223 $</span>
        </div>
    )
}

export default Basket