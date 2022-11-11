import React from 'react'
import Heading from './Heading'
import ImageBox from './ImageBox'
import style from './HotDeals.module.css'

const images=[
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/d9560110-40f7-4d14-a98d-5599b45a84ef.jpg"},
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/d5b0ca8f-cc40-4f07-b7d4-25aadde11fd1.jpg"},
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/51357219-6066-430b-ad76-87505d2e0de3.jpg"},
]

const HotDeals = () => {
  return (
    <div>
        <Heading text="HOT DEALS"/>
        <div className={style.box}>
        {
            images.map((image)=>
            <ImageBox src={image.src}/>)
        }
        </div>
        

    </div>
  )
}

export default HotDeals
