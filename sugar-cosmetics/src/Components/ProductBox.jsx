import React, {useState} from 'react'
import Button from './Button'
import style from "./ProductBox.module.css"
import {Link } from 'react-router-dom';

const ProductBox = ({src, name, price}) => {

  const [clicked, setClicked] =useState({name:"", src:"", price:""})

  const clickHandler=()=>{
    localStorage.setItem("sugarUsers", JSON.stringify(clicked))
  }
  return (
    <div className={style.container}>
        <img src={src} alt="" />
        <p>{name}</p>
        <h3>{price}</h3>
        <div>
            <Link to="/product/01"><Button onClick={()=> clickHandler()} text="ADD TO CART" /></Link>
        </div>
    </div>
  )
}

export default ProductBox
