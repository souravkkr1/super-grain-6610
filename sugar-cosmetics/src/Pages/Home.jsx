import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'
import style from '../Components/Home.module.css'

const Home = () => {
  return (
    <div className={style.main}>
      <Navbar/>
      <div className={style.banner}>
         <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/7f60a658-5e24-4abb-af2b-13d4e6716c75.gif" alt="" />
      </div>
      <div className={style.bestsellers}></div>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
