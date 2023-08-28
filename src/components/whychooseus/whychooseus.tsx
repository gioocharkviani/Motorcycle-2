import React from 'react'
import Image from 'next/image'

import { data } from './data'

const data1 = data.slice(0 , data.length/2)
const data2 = data.slice(data.length/2 , data.length)

const Whychooseus = () => {
  return (
    <div className='w-full flex justify-center py-[50px] md:py-[100px] bg-[#0f0f0f]'>
        <div className='w-[95%] flex flex-col items-center justify-center gap-[50px]'>
            <h2 className='text-[42px] text-[#cacaca] font-bold'>Six reasons why choose us</h2>

            <div className='w-full flex flex-col md:flex-row justify-center gap-[70px]'>


                {
                    data1.map(item => {
                        return (
                        <div className='flex-1 flex gap-[15px] ' key={item.id}>

                            <div className='w-[100px] h-[100px] rounded-[50%] bg-[#ff7729] flex justify-center items-center'>
                                <Image alt={item.desc} src={item.image} />
                            </div>
        
                            <div className='flex flex-col gap-[10px] flex-1'>
                                <h2 className='text-[#cacaca] text-[17px] uppercase font-bold'>{item.title}</h2>
                                <span className='text-[#cacaca] text-[13px] '>{item.desc}</span>
                            </div>
                        </div>
                        )
                    })
                }

            </div>

            <div className='w-full flex flex-col md:flex-row justify-center gap-[70px]'>
 
            {
                    data2.map(item => {
                        return (
                        <div className='flex-1 flex gap-[15px] ' key={item.id}>

                            <div className='w-[100px] h-[100px] rounded-[50%] bg-[#ff7729] flex justify-center items-center'>
                                <Image alt={item.desc} src={item.image} />
                            </div>
        
                            <div className='flex flex-col gap-[10px] flex-1'>
                                <h2 className='text-[#cacaca] text-[17px] uppercase font-bold'>{item.title}</h2>
                                <span className='text-[#cacaca] text-[13px] '>{item.desc}</span>
                            </div>
                        </div>
                        )
                    })
                }

            </div>

        </div>
    </div>
  )
}

export default Whychooseus
