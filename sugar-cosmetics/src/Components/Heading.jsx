import React from 'react';
import style from "./Heading.module.css"

function Heading({text}){
    return(
        <div className={style.container}>
            <hr />
            <h2>{text}</h2> 
            <hr />
        </div>
    )  
}

export default Heading;