import React from 'react'
import style from "../Pages/CartPage.module.css"

const PriceDetails = () => {
  return (
    <div>
      <h2>PRICE DETAILS</h2>
               <div className={style.price}>
                  <div className={style.priceDet}>
                    <div>
                      <p>Subtotal</p>
                      <p>₹499.00</p>
                    </div>
                    <div>
                      <p>Tax</p>
                      <p>76.12</p>
                    </div>
                    <div>
                      <p>Shipping</p>
                      <p>99.00</p>
                    </div>
                  </div>
                  <div className={style.total}>
                   <h2>Total</h2>
                   <h2>₹598.00</h2>
                  </div>
               </div>
    </div>
  )
}

export default PriceDetails
