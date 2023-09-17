import React from 'react'

const page = () => {
  return (
    <div className='text-white md:h-[70vh] w-full mt-[30px]  flex flex-col md:justify-center md:items-center relative overflow-hidden'>
      <div className='w-full h-full absolute PageInfo'>
        <div className='onVideoHover'>
          <span className='w-[70%] text-[20px] text-[white]'>
          This page is currently unavailable. If you would like to access this website, 
          please place an order now. Once your order is complete, you can watch the video and enjoy a 
          delightful experience. 😊
          </span>
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
