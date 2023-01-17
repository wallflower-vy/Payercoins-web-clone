import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const FooterUpperComponent = () => {
  return (
    <div className='footerupper-box'>
        <div><h1 className='footer-heading ' >Get started now to grow your <br/>business.</h1>
        <p className='footer-upper-text'>Create an account and start accepting payment.</p>
        </div>
       <div>
       <Link to="" className='nav-btn2 footer-btn1'>Create Account</Link>
       </div>
    </div>
  )
}

export default FooterUpperComponent;