import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import offering from '../../Images/offering.svg'

const ChargesComponent = () => {
  return (
    <div className='charges-box'>
    <Container>
      
      <div className='seamless-box mt-5'>
        <div className='globe-box offering-box'>
          <img src={offering} alt='offering'  className='offering'/>
        </div>
        <div className=' mt-5 pt-5 simple-seamless-box charges-offering'>
          <h3 className='seam-text'>No hidden charges</h3>
          <div className='border-bottom'></div>
          <h1 className='seam-heading mt-4'>
          Zero Gas fee and Free Withdrawal
          </h1>

          <div className='payment-option'>
            <p>
            Say goodbye to high gas and chargeback fees. We pay the gas fee and offer a very high speed transaction with the best payout rate in the market.
            </p>
          </div>
          
        </div>
      </div>
    </Container>
  </div>
  )
}

export default ChargesComponent