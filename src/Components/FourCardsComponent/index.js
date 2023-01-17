import React from 'react';
import { Container } from 'react-bootstrap';
import LeftPaymentComponent from '../LeftPaymentComponent';
import PaymentCardsComponent from '../PaymentCardsComponent';
import './index.css'

const FourCardsComponent = () => {
  return (
    <div className=''>
        <Container className='fourcards-main'>
        <div className='main-payment-cardsbox'>
            <PaymentCardsComponent />
            
        </div>
        <div className='text-payment-box'>
            <LeftPaymentComponent />
        </div>
        
        </Container>

    </div>
  )
}

export default FourCardsComponent