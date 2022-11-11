import React from 'react'
import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTumblr, FaYoutube, FaTwitter, FaInstagram, FaPinterestP} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

function Footer(){
    return(
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.first}>
                    <div className={style.logo}>
                        <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg" alt="" />
                    </div>
                    <div className={style.social}>
                        <div><FaFacebookF/></div>
                        <div><FaTumblr/></div>
                        <div><FaYoutube/></div>
                        <div><FaTwitter/></div>
                        <div><FaInstagram/></div>
                        <div><FiMail/></div>
                        <div><FaPinterestP/></div>
                    </div>
                </div>
                <div className={style.second}>
                    <div className={style.links}>
                        <Link to="/stores">Stores</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/returns">Returns</Link>
                        <Link to="/faqs">FAQs</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                </div>
                <div className={style.third}>
                    <div className={style.box}>
                        <h1>GET IN TOUCH</h1>
                        <div className={style.touch}>
                                <div>
                                    <h3>Call us</h3>
                                    <p>1800-209-9933</p>
                                    <p>Monday to Friday : 9 AM to 7 PM</p>
                                </div>
                                <div>
                                    <h3>Support</h3>
                                    <p>hello@sugarcosmetics.com</p>
                                </div>
                                <div>
                                    <h3>Careers</h3>
                                    <p>We're hiring!</p>
                                </div>
                                <div>
                                    <h3>Press & Media</h3>
                                    <p>pr@sugarcosmetics.com</p>
                                </div>
                                <div>
                                    <h3>Influencer Collab</h3>
                                    <p>Join Us</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={style.fourth}>
                    <div>
                        <h3>GET THE NEW SUGAR APP TODAY!</h3>
                        <p>Tap into a better shopping experience.</p>
                    </div>
                    <img src="https://in.sugarcosmetics.com/playstore.png" alt="playstore" />
                    <img src="https://in.sugarcosmetics.com/apple-store.png" alt="appstore" />
                </div>
            </div>
            <div className={style.bottom}>
                <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;