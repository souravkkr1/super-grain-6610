import React from 'react';
import style from './Navbar.module.css'
import Link from 'react-router-dom'

function Navbar(){
    return(
        <div className={style.navbar}>
            <div className={style.top}>
                <div className={style.logo}>
                    <h1>Sugar Cosmetics</h1>
                </div>
                <div className={style.search}>
                    <input type="text" name="" id="" placeholder='Type "Liquid Lipstick"' />
                </div>
                <div className={style.user}>
                    <h3>Hi, Sourav Kumar</h3>
                </div>
                <div className={style.btns}>

                </div>
            </div>
            <div className={style.bottom}>
                {/* <Link to='/'>Makeup</Link> */}
                {/* <Link to='/'>Makeup</Link> */}
            </div>
           
        </div>
    )
}

export default Navbar;