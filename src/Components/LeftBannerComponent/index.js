import "./index.css";
import { IoIosCheckmark } from "react-icons/io";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";

import React from "react";

const LeftBannerComponent = () => {
  return (
    <>
      <h1 className='left-banner-heading'>
        <span>
          The easiest way to accept <span class='typewriter'>
            <Typewriter  options={{autoStart:true, loop:true, deleteSpeed:40, delay:60, strings:['Stablecoins','Bitcoins','Eutherium' ],}}
            />
          </span>for<br/> online payments.{" "}
          
          
         
        </span>
      
      
      
      {/* <span>The easiest way to accept</span> <span class='typewriter'>
            <Typewriter 
            options={{autoStart:true, loop:true, delay:40, strings:[
              'stablecoins',
              'Bitcoin',
              'Eutherium'
            ],}}
            />

           
          </span><span>for online payments.</span> */}
      </h1>
      <div className='left-banner-textbox'>
        <p className='left-banner-text'>
        Payercoins helps individuals and businesses to accept payments with USDT, BUSD, USDC, DAI and other crypto currencies from customers anywhere in the world.
        </p>
      </div>
      <div className='gasfee-box'>
        <p>
          
            <div className="checkmarks">
            <span className='banner-icon-box'>
              <IoIosCheckmark className='left-icons' />
            </span><span className="gas-text">No gas Fee</span>
            </div>
           
          
          
        </p>
        <p>
          
            <div className="checkmarks">
            <span className='banner-icon-box'>
              <IoIosCheckmark className='left-icons' />
            </span><span className="gas-text">Free withdrawal</span>
            </div>
           
          
          
        </p>
        <p>
          
            <div className="checkmarks">
            <span className='banner-icon-box'>
              <IoIosCheckmark className='left-icons' />
            </span><span className="gas-text">Payouts with the best rate</span>
            </div>
           
          
          
        </p>
      </div>
      <div className="button-box">
        <button className="get-started">Get Started</button>
        <button className="bookademo">Book a Demo</button>


      </div>
    </>
  );
};

export default LeftBannerComponent;
