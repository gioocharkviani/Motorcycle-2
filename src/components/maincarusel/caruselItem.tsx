import React from 'react';

const CaruselItem = ({ image, active , desc }: any) => {
  return (
    <div className={`w-full h-full CarouselItem  ${active ? 'activeSlide' : 'inactiveSlide'}`}>
      <img src={image.src} alt="Carousel Image" className={`w-full h-full object-cover ${active ? 'activeSlide' : 'deactiveSlide'}`} />
      <div className='absolute bottom-[40%] left-[30%]'>
        <span>
        {desc}
        </span>
      </div>
    </div>
  );
};

export default CaruselItem;