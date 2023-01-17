import React from 'react';
import { Container } from 'react-bootstrap';
import CardsCompnent from '../CardsComponent';
import './index.css'

const Prebuilt = () => {
  return (
    <div className='prebult-component'>
        <Container>
        <h3 className='seam-text'><b>Pre-built</b></h3>
        <div className='Api-border-bottom'></div>
            <h1 className='simple-heading mt-5'>Simple Solutions </h1>

            <p className='pt-4 simple-text'>
            Our ready-made solutions can be used to accept quick payment, no website is needed, everything is managed from the dashboard.
        </p>
        <CardsCompnent />
            
          
        </Container>
      
    </div>
  )
}

export default Prebuilt
