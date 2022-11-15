import React from 'react';
import style from './Navbar.module.css'
import utility from './Utilities.module.css'
import {Link} from 'react-router-dom'
import {FaUserCircle, FaRegHeart} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import Logout from './Logout';

function Navbar(){

    const userData= JSON.parse(localStorage.getItem("sugarUsers")) || undefined;

    return(
        <div className={style.navbar}>
            <div className={style.top}>
                <div className={style.logo}>
                   <img src="../logo.png" alt="logo" />
                </div>
                <div className={style.search}>
                    <input className={utility.searchBox} type="text" name="" id="" placeholder='Type "Liquid Lipstick"' />
                    <button className={style.searchBtn}>Search</button>
                </div>
                <div className={style.user}>
                    <h4><FaUserCircle/>{userData ? <Logout data={userData.name}/> : <Link to="/login"> Login/Register </Link>}</h4>
                </div>
                <div className={style.btns}>
                    <FaRegHeart/>
                    <Link to="/cartpage"><BiShoppingBag className={style.cartIcon}/></Link>
                    <TbDiscount2/>
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