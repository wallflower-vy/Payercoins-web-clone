import React from 'react'
import { Container } from 'react-bootstrap';
import './index.css';
import { IoIosCheckmark } from "react-icons/io";
import {BsArrowRight} from 'react-icons/bs'
import api from "../../Images/api_code.svg";


const ApisComponent = () => {
  return (
    <div className='Api-box pt-5'>
        <Container>
       
         <h3 className='seam-text'><b>APIs</b></h3>
        <div className='Api-border-bottom'></div>
            <h1 className='simple-heading mt-5'>Build with Payercoins APIs </h1>
            <div className='seamless-box mt-5'>
            <div className=' simple-api-box'>
            <div className='payment-option'>
              <p>
              Robust API integration for processing cryptocurrency payment (fully customizable). Integrate Payercoins once and let your customers pay you however they want.

              </p>
            </div>
            <div className="apifee-box">
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>Payment PageAccept cryptocurrency and get paid in your local currency instantly</span>
                </div>
              </p>
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>Collect one-time or recurring payment from your customers</span>
                </div>
              </p>
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>View all transactions and customer data</span>
                </div>
              </p>
            </div>
            <button className='api-btn'>View API Docs <BsArrowRight /></button>
          </div>
      
          <div className='apicode-box'>
            <img src={api} alt='api-code'  className='api-code'/>
          </div>
          
          </div> 
          
        </Container>
        
    </div>
  )
}

export default ApisComponent