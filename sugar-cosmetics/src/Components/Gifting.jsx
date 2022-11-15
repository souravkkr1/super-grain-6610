import React from 'react';
import Heading from './Heading';
import ProductBox from './ProductBox';
import style from './Gifting.module.css'

const prods=[
    {
      "name": "SUGAR Prime Sublime Primer",
      "price": "499.00",
      "src": "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973",
      "category": "makeup",
      "tag": "bestseller",
      "id": "1"
    },
    {
      "name": "Contour De Force Face Palette",
      "price": "799.00",
      "src": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
      "category": "makeup",
      "tag": "bestseller",
      "id": "2"
    },
    {
      "name": "Ace Of Face Foundation Stick - 7 gms",
      "price": "₹799.00",
      "src": "https://cdn.shopify.com/s/files/1/0906/2558/products/17-Raf-Mini-1_722c9db9-41f9-4a9f-8084-f121e232d86f.jpg?v=1658851265",
      "category": "makeup",
      "tag": "bestseller",
      "id": "3"
    },
    {
      "name": "Matte As Hell Crayon Lipstick",
      "price": "₹849.00",
      "src": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
      "category": "makeup",
      "tag": "bestseller",
      "id": "3"
    }
  ]

const Gifting = ()=>{
    return(
        <div className={style.gifting}>
            <Heading text="GIFTING"/>
            <div className={style.box}>
                {
                    prods.map((prod)=>
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

export default Gifting;