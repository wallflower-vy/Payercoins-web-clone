import React from 'react';
import { Container } from 'react-bootstrap';
import FooterLowerComponent from '../FooterLowerComponent';
import FooterUpperComponent from '../FooterUpperComponent';
import './index.css'

const FooterComponent = () => {
  return (
    <div className='footer-box'>
        <Container>
            <div className='footer-upperpart'>
                <FooterUpperComponent />

            </div>
            <hr  className='footer-divider'/>
            <div className='footer-lower-part'>
                <FooterLowerComponent />
            </div>
        </Container>

    </div>
  )
}

export default FooterComponent