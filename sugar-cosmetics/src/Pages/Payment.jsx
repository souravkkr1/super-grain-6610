import React from 'react'
import style from './Payment.module.css'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import PriceDetails from '../Components/PriceDetails';
import CartSummary from '../Components/CartSummary';
import Button from '../Components/Button'
import {Link} from 'react-router-dom';

const Payment = () => {

  return (
    <>
    <Navbar />
    <div className={style.main}>
      <div className={style.left}>
        <PriceDetails/>
        <CartSummary/>
      </div>
      <div className={style.right}>
        <h2>PAYMENT METHOD</h2>
        <div className={style.cardDet}>
          <input type="number" placeholder='Enter 16-Digit Number' />
          <div className={style.moreDet}>
          <input type="number" placeholder='CVV'/>
          <input type="number" placeholder='Expiry Date'/>
          </div>
          <input type="text" placeholder='Name'/>
          <Link to="/"><Button onClick={()=> alert("Order Placed")} text="PAY NOW"/></Link>
        </div>
      </div>
    </div>
    <NewsLetter />
    <Footer/>
    </>
    
  )
}

export default Payment
