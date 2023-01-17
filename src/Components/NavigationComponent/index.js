import React, { useState } from "react";
import "./index.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import arrowdown from "../../Images/arrowdown.png";
import DropdownComponent from "../DropdownComponent";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const NavigationComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  const[ismobile, setisMobile] =useState(false);
  // const[]=useState(false)
 
  const Handleclick=()=>{
    setisMobile(!ismobile)
  }
const handleclose=()=>{
  setisMobile(true)
  
}
  return (
    <>
      <div className='navigation-bar'>
        <div className='logo-box'>
          <img src={logo} alt='payercoin-logo' />
        </div>
        <div id='main-item-box' className={ismobile ? '#main-item-box active' : '#main-item-box'} >
          <div className='nav-item-box'>
            
            <Link
              to=''
              className='nav-links'
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Our Solutions <img src={arrowdown} />{" "}
              {dropdown && <DropdownComponent />}
            </Link>
            <Link to='' className='nav-links'>
              Developers
            </Link>
            <Link to='' className='nav-links'>
              Pricing
            </Link>
            <Link to='' className='nav-links'>
              Exchanged Rates
            </Link>
          </div>

          {/* IoCloseSharp */}

          <div className='nav-item-btn'>
            <Link to='' className='nav-btn1'>
              Sign In
            </Link>
            <Link to='' className='nav-btn2'>
              Create Account
            </Link>
          </div>
        </div>
        <div className='mobile' onClick={Handleclick}>
          {ismobile ? < IoCloseSharp className="menu-icon"/> : <FiMenu  className="menu-icon"/> }
          
          
        </div>
      </div>
      {/* <DropdownComponent/> */}
    </>
  );
};

export default NavigationComponent;
