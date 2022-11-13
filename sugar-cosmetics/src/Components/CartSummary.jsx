import React, {useState} from 'react'
import style from '../Pages/CartPage.module.css'
import {RiDeleteBinLine} from 'react-icons/ri'
const CartSummary = () => {
    const [count , setCount] =useState(1);
  return (
    <div>
      <h2>CART SUMMARY</h2>
               <div className={style.prod}>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973" alt="" />
                    <div>
                      <p>SUGAR Prime Sublime Primer</p>
                      <p>Brightening</p>
                      <p>₹499</p>
                    </div>
                </div>
                <div className={style.counter}>
                  <RiDeleteBinLine/>
                  <div>
                    <button disabled={count <=0} onClick={()=> setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button onClick={()=> setCount(count + 1)} >+</button>
                  </div>
                </div>
                
               </div>
    </div>
  )
}

export default CartSummary
