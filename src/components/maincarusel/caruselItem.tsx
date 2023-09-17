import React from 'react';

const CaruselItem = ({ image, active }: any) => {
  return (
    <div className={`w-full h-full CarouselItem  ${active ? 'activeSlide' : 'inactiveSlide'}`}>
      <img src={image.src} alt="Carousel Image" className={`w-full h-full object-cover ${active ? 'activeSlide' : 'deactiveSlide'}`} />
    </div>
  );
};

export default CaruselItem;