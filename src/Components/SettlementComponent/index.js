import React from 'react';
import { Container } from 'react-bootstrap';
import LeftSettlementComponent from '../LeftSettlementComponent';
import RightSettlementComponent from '../RightSettlementComponent';
import './index.css';


const SettlementComponent = () => {
  return (
    <Container>
      <div className='settlement-box'>
      <div>
        <RightSettlementComponent />
      </div>
      <div>
        <LeftSettlementComponent />
      </div>
      </div>


    </Container>
  )
}

export default SettlementComponent;