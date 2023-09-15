import Image from 'next/image'
import React from 'react'

import image1 from '../../../public/my-profile-image.jpg'

const Mpabout = () => {
  return (
    <div className='mpabout flex  w-full justify-center'>

        <div className='w-[95%] flex justify-center md:flex-row flex-col gap-[50px] md:gap-0'>

            <div className='flex-1 flex flex-col justify-center  items-center md:items-end px-[30px] gap-[15px] md:border-r-[1px] md:border-[#353030]'>
                <span className='text-[#cacaca] text-[18px]'>
                    Welcome to bike
                </span>
                <h2 className='text-[#cacaca] text-[30px] w-full md:w-[60%] text-center md:text-right font-bold'>
                    motorcycle REPAIR & custom services
                </h2>
                <p className='text-[#cacaca] text-center md:text-right text-[14px]'>
                    We are a full service shop and parts department including Aftermarket
                 Parts and OEM / Dealer (Honda, Kawasaki, Suzuki, Yamaha, and Harley Davidson) parts and 
                 apparel. With over 30 Years combined experience we can tackle any repair or 
                 service that you require no matter how small or large of a job it may be.
                </p>
                <button className='text-[#cacaca] px-[25px] py-[8px] rounded-[20px] bg-[#232121]'>About Us</button>
            </div>

            <div className='flex-1 flex flex-col gap-[25px]  px-[30px] '>
                <div className='text-[#cacaca] text-[15px]'>
                    I wanted to THANK the Team for servicing and repairing my Harley Davidson on
                     such short notice. The window works just like new.It is good to know that there
                     are Service companies out there that still stand behind their work and their service
                </div>
                <div className='flex gap-[10px]'>
                    <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[green] relative overflow-hidden'>
                        <Image alt='1' src={image1} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-[#cacaca] font-bold text-[15px]'>Giorgi Charkviani</h2>
                        <p className='text-[#cacaca] text-[12px]'>georgian client</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mpabout
