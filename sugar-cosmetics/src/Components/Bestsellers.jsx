import React from 'react'
import Heading from './Heading'
import style from './Bestsellers.module.css'
import ProductBox from './ProductBox'
import prods from "../products.json";

console.log(prods.data)

const Bestsellers = () => {
  return (
    <div className={style.bestsellers}>
      <Heading text="BESTSELLERS" />
      <div className={style.box}>
      {
        prods.data.map((prod)=>
        <ProductBox 
        src={prod.src}
        name={prod.name}
        price={prod.price}
        key={prod.id}
         />
        )
      }
      </div>
      
      
    </div>
  )
}

export default Bestsellers
