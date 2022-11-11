import React from 'react';
import style from './ImageBox.module.css'

function ImageBox({src}){
    return(
            <img src={src} alt="" />
    )
}

export default ImageBox;