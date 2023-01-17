import React from 'react';
import { Col, Container,   } from 'react-bootstrap';
import DropdownComponent from '../DropdownComponent';
import LeftBannerComponent from '../LeftBannerComponent';
import NavigationComponent from '../NavigationComponent';
import RightBannerComponent from '../RightBannerComponent';
import './index.css';

const BannerComponent = () => {
  return (
    <div className='home-banner-box '>
      <Container>
         <NavigationComponent />
         

         
      </Container>
      <div className='banner-box'>
          <div className='left-banner-box'>
            <LeftBannerComponent />
           
          </div>
          <div className='right-banner-box'>
          <RightBannerComponent />
          </div>

         </div>
      


    </div>
  )
}

export default BannerComponent