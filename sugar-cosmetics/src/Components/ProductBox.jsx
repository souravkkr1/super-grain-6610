import React from 'react'
import Button from './Button'
import style from "./ProductBox.module.css"

const ProductBox = ({src, name, price}) => {
  return (
    <div className={style.container}>
        <img src={src} alt="" />
        <p>{name}</p>
        <h3>{price}</h3>
        <div>
            <Button text="ADD TO CART" />
        </div>
    </div>
  )
}

export default ProductBox
