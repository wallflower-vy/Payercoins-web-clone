import React from 'react';
import './index.css';
import payercoinslogo from '../../Images/payercoins-logo.png';
import { Link } from "react-router-dom";
import {BsTwitter} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa'


const FooterLowerComponent = () => {
  return (
    <div className='footer-lower-box 5'>
        <img src={payercoinslogo} alt="payercoins-logo"  className='payercoin-logo'/>
        <div className='footer-link-boxs'>
        <div className='footer-link-box'>
            <h1>Product</h1>

            <Link to="" className='footer-links'>Payments Page</Link>
            <Link to="" className='footer-links'>Donation (Fundraising)</Link>
            <Link to="" className='footer-links'>Hosted E-Commerce Store</Link>
            

        </div>
        <div className='footer-link-box'>
            <h1>Learn</h1>

            <Link to="" className='footer-links'>Blog</Link>
            <Link to="" className='footer-links'>Developers</Link>
            <Link to="" className='footer-links'>Help Center</Link>
            

        </div>
        <div className='footer-link-box'>
            <h1>Legal</h1>

            <Link to="" className='footer-links'>Privacy Policy </Link>
            <Link to="" className='footer-links'>Terms and Conditions</Link>
            <Link to="" className='footer-links'>Anti-Money Laundering Policy</Link>
            

        </div>
        <div className='footer-link-box'>
            <h1>Delaware</h1>

            <Link to="" className='footer-links'>256 Chapman Road STE 105-4,<br/> Newark,</Link>
            <Link to="" className='footer-links'>New Castle Delaware,
United States</Link>
          
            

        </div>


        </div>
        <div className='footer-link-boxs contact-footer '>
        <div className='footer-link-box'>
            <h1>Contact</h1>

            <Link to="" className='footer-links contact-link mb-3'>support@payercoins.com</Link>
            <Link to="" className='footericon-links '>  <BsTwitter /></Link>
            <Link to="" className='footericon-links '>  <FaInstagramSquare /></Link>
            <Link to="" className='footericon-links '>  <FaYoutube /></Link>
        </div>
        <div className='footer-link-box'>
            <h1>Lagos</h1>

            <Link to="" className='footer-links'>14, Gardol Street, <br/>Ogba, Lagos.</Link>
           
            

        </div>
        <div className='footer-link-box'>
            <h1>Abeokuta</h1>

            <Link to="" className='footer-links'>Grazac Innovation Hub,<br/> Salawu Olabode Avenue, Ewang Road,<br/> Idi-aba, Abeokuta </Link>
           

        </div>
       


        </div>
        

    </div>
  )
}

export default FooterLowerComponent