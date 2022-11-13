import React, { useState } from 'react'
import style from './CartPage.module.css'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'
import Button from '../Components/Button'
import CartSummary from '../Components/CartSummary'
import PriceDetails from '../Components/PriceDetails'

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
               <CartSummary />
            </div>

            <div className={style.right}>
               <h2>APPLY COUPON</h2>
               <div className={style.prod}>
                  <div>
                    <input placeholder='Enter Gift Code or Discount Code' type="text" />
                  </div>
                  <div className={style.counter}>
                    <Button text="APPLY"/>
                  </div>
               </div>

               <PriceDetails/>
            </div>
        </div>
        <div className={style.placebtn}>
        <Link to="/payment"><button className={style.place}>₹598.00 PLACE ORDER</button></Link>
        </div>
        
    </div>

    <NewsLetter />
    <Footer />
    </>
  )
}

export default CartPage
