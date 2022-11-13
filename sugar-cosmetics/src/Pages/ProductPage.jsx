import React from 'react'
import Navbar from '../Components/Navbar'
import style from './ProductPage.module.css'
import Button from '../Components/Button'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'

const ProductPage = () => {
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
                <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973" alt="" />
            </div>
            <div className={style.right}>
                <h2>SUGAR Prime Sublime Primer </h2>
                <p>₹499.00</p>
                <div className={style.offers}>
                    <p>AVAILABLE OFFERS!!</p>
                    <ul>
                        <li>Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson (Crimson Red) And A Flat Glitter Gold Pouch Free On A Minimum Spend Of Rs. 799</li>
                        <li>Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson (Crimson Red) And A Flat Glitter Gold Pouch Free On A Minimum Spend Of Rs. 799</li>
                    </ul>
                    <p className={style.pinktext}>+view more</p>
                </div>
                <Link to="/cartpage"><Button text="ADD TO CART" /></Link>
                <hr style={{marginLeft:"10px"}}/>
                <input type="text" id={style.pincode} placeholder="Enter Delivery Pincode "/> <Button text="CHECK" />
            </div>
        </div>
    </div>
    <NewsLetter />
    <Footer />
    </>
  )
}

export default ProductPage
