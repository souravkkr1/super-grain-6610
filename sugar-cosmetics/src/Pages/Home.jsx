import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'
import style from '../Pages/Home.module.css'
import Explore from '../Components/Explore'
import Banner from '../Components/Banner'
import SugarStreaming from '../Components/SugarStreaming'
import Bestsellers from '../Components/Bestsellers'
import HotDeals from '../Components/HotDeals'
import ShukarHai from '../Components/ShukarHai'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <Banner/>
      <Bestsellers/>
      <HotDeals/>
      <ShukarHai/>
      <SugarStreaming/>
      <Banner src="https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg" />
      <Explore/>
      <NewsLetter/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
