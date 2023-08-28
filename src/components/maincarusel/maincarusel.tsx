import React from 'react'
import Image from 'next/image'



import image1 from '@/../public/carusel/image1.jpg'
import image2 from '@/../public/carusel/image2.jpg'

const Maincarusel = () => {
  return (
    <div className="w-full h-[100vh]  text-[green] relative flex items-center justify-center">
        <Image src={image2 } alt='1' className='w-full h-full object-cover'/>
    </div>
  )
}

export default Maincarusel
