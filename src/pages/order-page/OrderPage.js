import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/order-item/OrderItem'
import '../order-page/OrderPage.scss'
import { calcTotalPrice } from '../../components/utils/utils.js'
const OrderPage = () => {
    const items = useSelector((state => state?.cart?.itemsInCart))
    const films = useSelector((state => state?.films?.currentFilm))

    {
        return (items.length < 1 ? <h1>"Your cart is empty!"</h1> :
            <div className='order-page'>
                <div className='order-page-left'>
                    {items.map((film, index) => <OrderItem key={`${film?.title}-${index}`} film={film} />)}
                </div>
                <div className='order-page-right'>
                    <div className='page-right-child'>
                        {items.map((film) => <p>{film.title}</p>)}
                        <span className='order-page-title'>{items.length} products price {calcTotalPrice(items)}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderPage