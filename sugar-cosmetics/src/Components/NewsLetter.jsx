import React from "react";
import style from './NewsLetter.module.css'
import utility from './Utilities.module.css'

function NewsLetter(){
    return(
        <div className={style.container}>
            <h1>LET’S STAY IN TOUCH</h1>
            <p>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>
            <div id={style.box}>
                <input className={utility.searchBoxLight} type="text" name="" id="" placeholder='Enter Email' />
                <button className={utility.searchBtnDark}>SUBSCRIBE</button>
            </div>
            
        </div>
    )
}

export default NewsLetter