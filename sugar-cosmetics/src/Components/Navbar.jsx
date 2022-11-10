import React from 'react';
import style from './Navbar.module.css'
import utility from './Utilities.module.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className={style.navbar}>
            <div className={style.top}>
                <div className={style.logo}>
                   <img src="../logo.png" alt="logo" />
                </div>
                <div className={style.search}>
                    <input className={utility.searchBox} type="text" name="" id="" placeholder='Type "Liquid Lipstick"' />
                    <button className={utility.searchBtn}>Search</button>
                </div>
                <div className={style.user}>
                    <h3>Hi, Sourav Kumar</h3>
                </div>
                <div className={style.btns}>

                </div>
            </div>
            <div className={style.bottom}>
                <Link to='/makeup'>Makeup</Link>
                <Link to='/'>Brushes</Link>
                <Link to='/'>Skincare</Link>
                <Link to='/'>Gifting</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Offers</Link>
                <Link to='/'>Stores</Link>
            </div>
           
        </div>
    )
}

export default Navbar;