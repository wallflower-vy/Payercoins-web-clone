import React from 'react';
import './index.css';
import settlement from '../../Images/settlement.png';

const LeftSettlementComponent = () => {
  return (
    <div className='left-settlement-box'>
       <img src={settlement} alt="settlement-img" className='settlement-img' />
    </div>
  )
}

export default LeftSettlementComponent