import React from 'react'
import Image from 'next/image'

import { data , datageo } from './data'

const Mpservices = () => {
  return (
    <div className='w-[100%] flex justify-center py-[70px] bg-[#171717]'>
      <div className='w-[95%] flex flex-col sm:flex-row justify-between sm:gap-[50px] gap-[20px]'>

        {data.map(item => {
          return (
            <div key={item.id} className='h-[200px] w-full relative overflow-hidden mpservice-wrapper'>
              <div className='absolute z-[1] w-full h-full '>
                <Image src={item.image} alt={item.title} className='w-full h-full object-cover'/>
              </div>
                <div className='absolute z-[2] w-full h-full '>
                  <div className='mp-service-desc'>{item.desc}</div>
                  <div className='mpservice-title'><span>{item.title}</span></div>
                </div>
             </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default Mpservices
