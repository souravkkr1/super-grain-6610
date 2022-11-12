import React from 'react'
import Navbar from '../Components/Navbar';
import style from './Makeup.module.css'
import {Link} from 'react-router-dom';
import prods from "../products.json";
import ProductBox from '../Components/ProductBox'

const Makeup = () => {
  return (
    <>
    <Navbar/>
    <div className={style.main}>
        
        <div className={style.container}>
          <img src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="" />
          <img src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="" />
        </div>
        <div className={style.linkbar}>
            <Link to="/">Home</Link> 
            <Link>Makeup</Link>
        </div>
        <div className={style.listing}>
            <div className={style.tools}>
              <select name="" id={style.sort}>
                <option selected value="relevence">Sort by: Relevence</option>
                <option value="relevence">Price: High To Low</option>
                <option value="relevence">Price: Low To High</option>
              </select>
              <div className={style.more}>
                <p>Filter</p>
                <p>Product Type</p>
                <p>Feature</p>
                <p>Finish</p>
                <p>Formulation</p>
                <p>Concern</p>
              </div>
            </div>
            <div className={style.grid}>
              {
                prods.data.map((item)=>
                <ProductBox 
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  key={item.id}
                />
                )
              }
            </div>
        </div>
    </div>
    </>
  )
}

export default Makeup;
