import React from 'react'
import Heading from './Heading'
import Poster from './Poster'
import style from './ShukarHai.module.css'

const ShukarHai = () => {
  return (
    <div className={style.container}>
        <Heading text="SHUKAR HAI, SUGAR HAI"/>
        <Poster src="https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg" />
    </div>
  )
}

export default ShukarHai
