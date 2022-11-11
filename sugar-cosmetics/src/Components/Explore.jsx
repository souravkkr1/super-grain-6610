import React from 'react';
import Heading from '../Components/Heading';
import style from './Explore.module.css'
import ImageBox from './ImageBox'

const exploreImg=[
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg"},
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg"},
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/a7b72adf-7e02-45c4-a208-552d46eefc4c.jpg"},
    {src:"https://d32baadbbpueqt.cloudfront.net/Homepage/88ee8d58-7cc5-450a-953b-aa16ef190d52.jpg"}
  ]

function Explore({src}){
    return(
        <div>
            <Heading text="EXPLORE"/>
            <div className={style.image}>
            {
                exploreImg.map((image)=> <ImageBox 
                src={image.src}
                />)
            }
            </div>
                
        </div>
    )
}

export default Explore;