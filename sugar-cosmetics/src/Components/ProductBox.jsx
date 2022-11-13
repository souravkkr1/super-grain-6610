import React from 'react'
import Button from './Button'
import style from "./ProductBox.module.css"
import {Link } from 'react-router-dom';

const ProductBox = ({src, name, price}) => {
  return (
    <div className={style.container}>
        <img src={src} alt="" />
        <p>{name}</p>
        <h3>{price}</h3>
        <div>
            <Link to="/product"><Button text="ADD TO CART" /></Link>
        </div>
    </div>
  )
}

export default ProductBox
