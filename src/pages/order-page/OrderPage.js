import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/order-item/OrderItem'
import '../order-page/OrderPage.scss'
import { calcTotalPrice } from '../../components/utils/utils.js'
const OrderPage = () => {
    const items = useSelector((state => state.cart.itemsInCart))

    {
        return (items.length < 1 ? <h1>"Your cart is empty!"</h1> :
            <div className='order-page'>
                <div className='order-page-left'>
                    {items.map(game => <OrderItem game={game} />)}
                </div>
                <div className='order-page-right'>
                    <span className='order-page-title'>{items.length} product price sum {calcTotalPrice(items)}</span>
                </div>
            </div>
        )
    }
}

export default OrderPage