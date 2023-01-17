import React from 'react';
import banner from '../../Images/banner.png';
import { useEffect, useRef } from 'react';
import  gsap  from 'gsap';
import './index.css'


const animateMainShape = () => {
    const infiniteTl = gsap.timeline({
      repeat: -1,
    });
  
    infiniteTl
      .fromTo('.anime', { x: 400 }, { x: 0, ease: 'powe1.inOut', duration: 1 })
      .fromTo(
        '.anime',
        { y: -10 },
        {
          y: 30,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 1,
        }
      );
  };


const RightBannerComponent = () => {
    useEffect(() => {
        animateMainShape();
      }, []);
  return (
    <div className='right-banner-imgbox'>
        <img src={banner} alt='banner' className='anime banner-img' />
    </div>
  )
}

export default RightBannerComponent