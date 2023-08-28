import React from 'react'
import image1 from '@/../public/brands/brembo.svg'
import image2 from '@/../public/brands/motul.svg'
import image3 from '@/../public/brands/ebc.png'
import image4 from '@/../public/brands//ipone.png'
import Image from 'next/image'

const Mpbrands = () => {
  return (
    <div className='text-[#cacaca]  flex-1 flex flex-col gap-[5px]'>
      <span className='text-[20px]'>Bike Hero ADVANTAGES</span>
      <h2 className='text-[36px] font-bold font leading-none'>OUR MAIN PRINCIPLES</h2>
      <p className='text-[14px] mt-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque porro
         facilis alias? Tempore fugiat incidunt, quidem voluptatum 
        perferendis nisi maiores beatae quia! Minus quia et sint dolor perferendis, eligendi eos?
      </p>
      <h3  className='text-[20px] mt-[20px]'>MOTORCYCLE AWARDS</h3>
      <p  className='text-[14px] mt-[10px]'>
      With so many years of experience in the business, our company is your
       source for the highest quality and motorcycle repair & chopper service.
      </p>
        
        <div className='grid md:grid-flow-col md:grid-rows-2 gap-[15px] mt-[30px]'>
            <div className='h-[150px] brand-box flex items-center justify-center'>
                <Image src={image1} alt='' className='w-[50%] h-[50%] object-contain brand-image'/>
            </div>

            <div className='h-[150px] brand-box flex items-center justify-center'>
                <Image src={image2} alt='' className='w-[50%] h-[50%] object-contain brand-image'/>
            </div>

            <div className='h-[150px] brand-box flex items-center justify-center'>
                <Image src={image3} alt='' className='w-[50%] h-[50%] object-contain brand-image'/>
            </div>

            <div className='h-[150px] brand-box flex items-center justify-center'>
                <Image src={image4} alt='' className='w-[50%] h-[50%] object-contain brand-image'/>
            </div>

        </div>

    </div>
  )
}

export default Mpbrands
