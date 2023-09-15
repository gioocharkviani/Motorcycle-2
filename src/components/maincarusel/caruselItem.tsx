import React from 'react'
import Image, { StaticImageData } from 'next/image'

const CaruselItem = ({image}:any) => {
  return (
    <div className='w-full h-full'>
        <Image src={image} alt='1' className='w-full h-full object-cover'/>
    </div>
  )
}

export default CaruselItem
