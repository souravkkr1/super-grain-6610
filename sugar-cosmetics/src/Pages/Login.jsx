import React from 'react'
import Button from '../Components/Button'
import style from './Login.module.css'
import {FaArrowCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src="https://media.sugarcosmetics.com/upload/authSIe2.jpg" alt="" />
      </div>
      <div className={style.right}>
        <img src="https://media.sugarcosmetics.com/upload/Hi!.png" alt="" />
        <h2>Login/Sign Up Using Phone</h2>
        <input type="text" placeholder='Enter mobile number'/>
        <p>Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <Button text="SEND ME OTP"/>
        <Link to="/"><FaArrowCircleLeft/></Link>
      </div>
    </div>
  )
}

export default Login
