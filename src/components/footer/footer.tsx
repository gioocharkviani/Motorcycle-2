import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { socData } from '../socialdata'

const Footer = () => {
  return (
    <div className='pt-[60px]  text-[white] flex flex-col items-center justify-center relative'> 

      <div className='w-[95%] pb-[20px] flex flex-col justify-center  md:flex-row  md:justify-between gap-[40px]'>

      <div className='md:flex-1 gap-[10px] flex flex-col w-full'>
        <h2 className=' uppercase text-[20px]'>About Us</h2>
        <div className='text-[15px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          incidunt alias repellendus assumenda saepe eaque expedita 
          ipsa omnis magnam? Libero laboriosam et numquam tempora deleniti commodi saepe modi nam non?
        </div>
      </div>


      <div className='md:flex-1 md:max-w-max gap-[10px] flex flex-col w-full'>
        <h2 className=' uppercase text-[20px]'>Our Services</h2>
        <div className='text-[15px]'>
          <ul className='flex flex-col gap-[2px]'>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Electric diagnostic</Link></li>
            <li className='FoterLinks'><Link href='/'>Oil change</Link></li>
            <li className='FoterLinks'><Link href='/'>Brake Pad change</Link></li>
            <li className='FoterLinks'><Link href='/'>Wheel change</Link></li>
            <li className='FoterLinks'><Link href='/'>More</Link></li>
          </ul>
        </div>
      </div>

      <div className='md:flex-1 md:max-w-max gap-[10px] flex flex-col items-start w-full'>
        <h2 className=' uppercase text-[20px]'>Fast Service Guide</h2>
        <div className='text-[15px] w-full'>
          <ul className='flex flex-col gap-[2px] w-full '>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
            <li className='FoterLinks'><Link href='/'>Engine rebuilding</Link></li>
          </ul>
        </div>
      </div>


      <div className='md:flex-1 md:max-w-max gap-[10px] flex flex-col items-start w-full workinghours'>
        <h2 className=' uppercase text-[20px]'>Working hours</h2>
        <div className='text-[15px] w-full'>
          <ul className='flex flex-col  gap-[2px] w-full '>

            <li className='workingList'><span>Monday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Tuesday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Wednesday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Thursday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Friday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Saturday</span><span>07:00-17:00</span></li>
            <li className='workingList'><span>Sunday</span><span className='uppercase'>CLOSED</span></li>
            
          </ul>
        </div>
      </div>

      <div className='md:flex-1 md:max-w-max gap-[10px] flex flex-col items-start w-full'>
        <h2 className=' uppercase text-[20px]'>Follow</h2>
        <div className='text-[15px] w-full'>
          <ul className='flex flex-col gap-[2px] w-full '>
            {socData.map(item => {
              return(
                <li className='socLinks' key={item.id}><Image src={item.image} alt={item.alt} /><Link href={item.url}>{item.alt}</Link></li>
              )
            })
            }
          </ul>
        </div>
      </div>

      </div>

      <div className='footerbottom'>
        <div className='w-[95%] flex justify-between text-[13px]'>
          <div>
            Copyright 2023 © 
          </div>

          <div>
            Design By Giorgi Charkviani
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
