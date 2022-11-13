import React from 'react'
import style from './CartPage.module.css'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'

const CartPage = () => {
  return (
    <>
    <Navbar />
    <div className={style.main}>
    <div className={style.linkbar}>
            <Link to="/">Home</Link> 
            <Link>Makeup</Link>
        </div>
        <div className={style.container}>
            <div className={style.left}>
               
            </div>
            <div className={style.right}>
                
            </div>
        </div>
    </div>
    <NewsLetter />
    <Footer />
    </>
  )
}

export default CartPage
