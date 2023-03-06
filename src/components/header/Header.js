import React from 'react'
import { Link } from 'react-router-dom'
import '../header/Header.scss'
import Basket from '../Basket/basket.js'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-counter'>
                <div className='wrapper'>
                    <Link to='/' className='header-title'>Game Store</Link>
                </div>
                <div className='basket-btn'>
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Header