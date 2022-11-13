import React from 'react'
import style from './Logout.module.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button'

const Logout = ({data}) => {
  const navigate = useNavigate();

  const signOut=()=>{
    localStorage.removeItem("sugarUsers");
   
    return navigate("/login");
  }

  let box=document.getElementsByClassName("drop");

  const handleDrop=()=>{
    style={
      display:"block",
    }
  }

  return (
    <div className={style.container}>
      <p onClick={()=> handleDrop()}>{data}</p> 
      <Button onClick={()=> signOut()} text="Sign Out"/>
    </div>
  )
}

export default Logout
