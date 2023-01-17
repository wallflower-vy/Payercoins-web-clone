import React from "react";
import { Container } from "react-bootstrap";
import { IoIosCheckmark } from "react-icons/io";
import "./index.css";
import globe from "../../Images/globea.gif";

const SeamlessPayment = () => {
  return (
    <div className='seamlesspayment-box'>
      <Container>
        <h1 className='simple-heading'>Simple and Seamless payments </h1>
        <p className='pt-4 simple-text'>
          Building a business can be tough, we believe getting paid shouldn't
          be.
        </p>
        <div className='seamless-box mt-5'>
          <div className='globe-box'>
            <img src={globe} alt='globe'  className="globe"/>
          </div>
          <div className=' mt-5 pt-5 simple-seamless-box'>
            <h3 className='seam-text'>Product Offerings</h3>
            <div className='border-bottom'></div>
            <h1 className='seam-heading mt-4'>
              Accept payments from anywhere in the world
            </h1>

            <div className='payment-option'>
              <p>
                Give your customers a chance to pay you with Bitcoin, Ethereum,
                USDT and other cryptocurrencies. No coding knowledge required.
                Sign up now and start accepting cryptocurrency.
              </p>
            </div>
            <div className="payment-checkbox">
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>Payment Page</span>
                </div>
              </p>
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>Donation (Fundraising)</span>
                </div>
              </p>
              <p>
                <div className='checkmarks'>
                  <span className='banner-icon-box'>
                    <IoIosCheckmark className='left-icons' />
                  </span>
                  <span className='api-text'>Hosted E-Commerce <br/> Store</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeamlessPayment;
