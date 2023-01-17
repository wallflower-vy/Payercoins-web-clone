import React from "react";
import "./index.css";
import icon1 from "../../Images/group1.png";
import icon2 from "../../Images/group2.png";
import icon3 from "../../Images/group3.png";
import { BsArrowRight } from "react-icons/bs";

const CardsCompnent = () => {
  return (
    <div className='home-cards-box'>
      <div className='home-card'>
        <div className='card-icon-box'>
          <img src={icon3} alt='icon-one' />
        </div>
        <p className='cards-heading'>Payment Page</p>
        <p className='cards-paragraph'>
          Create a payment form to accept cryptocurrency payments. Collect
          important customer information at the time of payments.
        </p>
        <a href='#' className='cards-link mt-2'>
          Learn more <BsArrowRight className='card-icon' />
        </a>
      </div>
      <div className='home-card'>
        <div className='card-icon-box'>
          <img src={icon2} alt='icon-one' />
        </div>
        <p className='cards-heading'>Donation (Fundraising)</p>
        <p className='cards-paragraph'>
        Create a simple page to raise funds in Bitcoin and other cryptocurrencies.

        </p>
        <a href='#' className='cards-link mt-2'>
          Learn more <BsArrowRight className='card-icon' />
        </a>
      </div>
      <div className='home-card'>
        <div className='card-icon-box'>
          <img src={icon1} alt='icon-one' />
        </div>
        <p className='cards-heading'>Hosted E-commerce Store</p>
        <p className='cards-paragraph'>
        Scale your business to accept payment from anywhere in the world by setting up your online store with Payercoins.
        </p>
        <a href='#' className='cards-link mt-2'>
          Learn more <BsArrowRight className='card-icon' />
        </a>
      </div>
    </div>
  );
};

export default CardsCompnent;
