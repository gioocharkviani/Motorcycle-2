import React from 'react'

const page = () => {
  return (
    <div  className='text-white md:h-[70vh] w-full mt-[30px]  flex flex-col md:justify-center md:items-center relative overflow-hidden'>
    <div className='w-full h-full absolute PageInfo'>
      <div className='onVideoHoverContact'>
        <div className='w-[95%] md:w-[70%] text-[13px] md:text-[20px] text-[white]'>
        <p className='hidden md:block'>If you are interested in buying this project and website, please feel free to contact me. 😊</p>
        <p>Mobile: <a href="tel:+559598550076">+559 598 55 00 76 📱</a></p>
        <p>Email: <a href="mailto:gioocharkviani@gmail.com">gioocharkviani@gmail.com ✉️</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/giorgi-charkviani-23273a258/">Giorgi Charkviani 🔗</a></p>
        </div>
      </div>
    </div>

  <div className='VideoBox'>
    <video  autoPlay loop >
      <source  className='w-full h-full' src="https://cdn1.polaris.com/globalassets/library/vault/ab-testing/ind/2023/aug/ind-homepage-hero-options/ind-video-lg.mp4?v=ba7d22cd" type="video/mp4" />
    </video>
  </div>

  </div>
  )
}

export default page
