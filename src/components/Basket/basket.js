import React, { useCallback, useState } from 'react'
import '../Basket/basket.scss'
import { BsCart4 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import CartMenu from '../cart-menu/CartMenu'
import { calcTotalPrice } from '../utils/utils'
import { useNavigate } from 'react-router-dom'
const Basket = () => {
    const items = useSelector(state => state.cart?.itemsInCart);
    const totalPrice = calcTotalPrice(items)
    const [isCartMenuVisible, setisCartMenuVisible] = useState(false)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setisCartMenuVisible(false)
        navigate('/order')
    }, [navigate])
    return (
        <div className='basket'>
            <div className='items-count'>
                <span>{items.length}</span>
            </div>
            <BsCart4 className='icon'
                onClick={() => setisCartMenuVisible(!isCartMenuVisible)}
            />
            {
                totalPrice > 0 ? <span span className='price-total'>{totalPrice}$</span> : null
            }
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div >
    )
}

export default Basket