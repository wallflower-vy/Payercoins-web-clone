import React from "react";
import "./index.css";
import cardlogo1 from '../../Images/card-logo1.png';
import cardlogo2 from '../../Images/card-logo2.png';
import cardlogo3 from '../../Images/card-logo3.png'
import cardlogo4 from '../../Images/card-logo4.png'

const PaymentCardsComponent = () => {
  const cardcontent = [
    {
      image: <img src={cardlogo1} alt='wallet' />,

      heading: "Low Transaction Fees",
      text: "We charge 0.8% for both local and global transactions and offer free withdrawal with no gas fee",
    },
    {
      image: <img src={cardlogo2} alt='wallet' />,

      heading: "Global Payment",
      text: "Accept payment from anywhere in the world and get settled in your local currency",
    },
    {
      image: <img src={cardlogo3} alt='wallet' />,

      heading: "24 hours Support",
      text: "We are always available to respond to your requests round the clock.",
    },
    {
      image: <img src={cardlogo4} alt='wallet' />,

      heading: "Free Setup",
      text: "You don’t have to pay for monthly and maintenance costs. Payercoins setups are completely free.",
    },
  ];
  return (
    <div className='vector-image'>
      <div className="payment-background-box">
      {cardcontent.map((item, index, arr) => {
        return (
          <>
            <div className='pay-card-box'>
            <div  className="card-img-box">
              {item?.image}
            </div>
            <h6 className='paycard-heading'>{item?.heading}</h6>
            <p className='paycard-paragraph'>{item?.text}</p>
          </div>
          
          </>
          
        );
      })}
      </div>

    </div>
  );
};

export default PaymentCardsComponent;
