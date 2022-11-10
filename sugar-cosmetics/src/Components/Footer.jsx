import React from 'react'
import style from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.first}>
                    <div className={style.logo}>
                        <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg" alt="" />
                    </div>
                </div>
                <div className={style.second}>
                    <div className={style.links}>
                        <Link to="/stores">Stores</Link>
                        <Link to="/stores">Stores</Link>
                        <Link to="/stores">Stores</Link>
                        <Link to="/stores">Stores</Link>
                    </div>
                </div>
                <div className={style.third}>
                    <div className={style.touch}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                     </div>
                </div>
                <div className={style.fourth}></div>
            </div>
            <div className={style.top}></div>
        </div>
    )
}

export default Footer;