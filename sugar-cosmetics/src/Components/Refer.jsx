import React from 'react'
import Heading from './Heading'
import style from './Refer.module.css'

const Refer=()=>{
    return(
        <div className={style.refer}>
            <Heading text="REFER YOUR FRIENDS" />
            <div className={style.box}>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg" alt="" />
            </div>
        </div>
    )
}

export default Refer;