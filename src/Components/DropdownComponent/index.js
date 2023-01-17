import React, { useState } from 'react';
import './index.css';
import icon1 from '../../Images/icon1.png';
import icon2 from '../../Images/icon2.png'
import icon3 from '../../Images/icon3.png';
import { Link } from "react-router-dom";

const DropdownComponent = () => {
    const[dropdown, setDropdown] =useState()
  return (
    <div className={dropdown ? "dropdown-box clicked" : "dropdown-box"}
    onClick={() => setDropdown(!dropdown)}>
        <p  >
           <Link to ="" className='dropdown-text'><img src={icon1} className='dropdown-icons'/> Payment Page</Link>
        </p>
        <p className='dropdown-text'>
        <Link to ="" className='dropdown-text'> <img src={icon2} className='dropdown-icons'/>  Donation (Fundraising)</Link>
        </p>
        <p className='dropdown-text'>
        <Link to ="" className='dropdown-text'> <img src={icon3} className='dropdown-icons'/> Hosted E-commerce Store</Link>
           
        </p>
    </div>
  )
}

export default DropdownComponent