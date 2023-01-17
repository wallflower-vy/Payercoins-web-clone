import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import nigeria from "../../Images/nigeria.svg";

const RateComponent = () => {
  return (
    <div className='rate-box'>
      <Container className="carosel">
        <div className='main-rate-box carosel-slider'>
         
          <div className='mini-rate-box '>
            <span className='flag'>
              <img src={nigeria} alt='nigeria-flag' />
            </span>
            <span className='nigeria'>NGN</span>
          </div>
          
          <div className='min-rate-box slide'>
            <p className='rate'>USDT/NGN</p>
            <p className='text-span'>605.00</p>
          </div>
          <div className='min-rate-box slide'>
            <p className='rate'>BUSD/NGN</p>
            <p className='text-span'>605.00</p>
          </div>
          <div className='min-rate-box slide'>
            <p className='rate'>DAI/NGN</p>
            <p className='text-span'>605.00</p>
          </div>
          <div className='min-rate-box last slide'>
            <p className='rate '>USDC/NGN</p>
            <p className='text-span'>605.00</p>
          </div>

          
         
        </div>
      </Container>
    </div>
  );
};

export default RateComponent;
