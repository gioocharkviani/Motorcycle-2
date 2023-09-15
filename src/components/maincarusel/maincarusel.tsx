import React from 'react'
import CaruselItem from './caruselItem'
import Image from 'next/image'



import image1 from '@/../public/carusel/image1.jpg'
import image2 from '@/../public/carusel/image2.jpg'

const slideData = [
  {
    id: 1 ,
    image: image1,
    desc: ''
  },
  {
    id: 2 ,
    image: image2,
    desc: ''
  },
]

const Maincarusel = () => {
  return (
    <div className="w-full relative mt-[-90px] h-[100vh]  text-[green] overflow-hidden  flex items-center justify-center">
        
      <div className='flex w-full h-full'>
        {slideData.map(item => {
          return (
            <CaruselItem key={item.id} image={item.image}/>
          )
        })}
      </div>  
    
    </div>
  )
}

export default Maincarusel
