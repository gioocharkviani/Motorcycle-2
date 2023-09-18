'use client'

import React, { useEffect, useState } from 'react';
import image1 from '@/../public/carusel/image1.jpg';
import image2 from '@/../public/carusel/image2.jpg';
import CaruselItem from './caruselItem';

const slideData = [
  {
    id: 1,
    image: image1,
    desc: '',
  },
  {
    id: 2,
    image: image2,
    desc: '',
  },
];

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slideData.length) % slideData.length);
  };

  const paginationActive = (i:number) =>{
    setCurrentSlide(i)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full relative mt-[-90px] h-[100vh] text-[green] overflow-hidden flex items-center justify-center">
      <div className="flex w-full h-full">
        {slideData.map((item, index) => (
          <CaruselItem key={item.id} image={item.image} desc={item?.desc} active={index === currentSlide} />
        ))}
      </div>


      <div className='absolute bottom-[100px] flex gap-[5px]'> 
          {slideData.map((item, index) => (
            <div 
            key={item.id} 
            onClick={()=> paginationActive(index)}
            className={`CaruselPagination ${index === currentSlide ? 'activeSlidePagination' : ''}`}>
            </div>
          ))} 
      </div>
      
    </div>
  );
};

export default MainCarousel;