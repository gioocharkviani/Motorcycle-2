'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from "next/navigation";

import cart from '@/../public/Cart.svg'
import search from '@/../public/search.svg'
import logo from '@/../public/harley.png'

import { navdata } from './navdata'

const navbarleft = navdata.slice(0 , navdata.length/2);
const navbarright = navdata.slice(navdata.length/2 , navdata.length);





const Header = () => {
  const pathName = usePathname();  
  const [burgermenu, setBurgermenu] = useState(false)  

  return (
    <div className='absolute z-[99]  w-full flex justify-center flex-col items-center gap-[15px]'>
        
        <div className='flex relative flex-col  w-full items-center header-top-section'>
          <div className='w-[95%] flex justify-between h-full'>

            <Link href='/' target='blank'  className='text-[#DC0000] text-[14px]  items-center gap-2 flex header-location'>
                <span className='hidden sm:inline-block'>კახეთის გზატკეცილი</span>
            </Link>

              <div className='flex items-center'>
                <ul className='flex gap-4'>
                  <li><Image src={search} alt='search' /></li>
                  <li><Image src={cart} alt='cart' /></li>
                </ul>
              </div>
          </div>
        </div>

      


        <div className='flex justify-between items-center w-[95%] gap-[50px] '>

          <div className='flex-1 hidden md:flex items-center justify-end'>
            <ul className='flex gap-[20px]'>
                {navbarleft.map(link => 
                  <li key={link.id}><Link className={`text-[white] text-[15px] font-medium py-[8px] ${pathName === link.url ? 'active' : ''} navbar `} href={link.url} >{link.title}</Link></li>
                )}
            </ul>
          </div>

          <div><Image src={logo} alt='logo' width={100} /></div>


          {!burgermenu &&
            <div 
            className='burgermenuBox flex md:hidden'
            onClick={()=> setBurgermenu(burgermenu? false : true)}
            >
            <div className='burgermenuBar'></div>
            <div className='burgermenuBar'></div>
            <div className='burgermenuBar'></div>
          </div>
          }

          
          {burgermenu &&
            <div 
            className={`
             ${burgermenu && 'ActiveBurgermenu'} 
             fixed py-[10px] px-[20px] top-[0px] z-[99] flex md:hidden  h-[100vh] flex-col`}
             >

              <div 
                className='cursor-pointer relative flex items-center justify-center w-[15px] h-[15px] closeButton' 
                onClick={()=> setBurgermenu(false)}>
              </div>
                
                <ul className='flex flex-col mt-[10px] w-full justify-center gap-[3px] '>
                  {navdata.map(link=> 
                  <li key={link.id} className='border-b-[1px] text-white py-[5px]   w-full text-[12] burgerMenuLink'>
                    <Link   href={link.url}>{link.title}</Link>
                  </li>
                  )}
                </ul>

            </div>
          }


          <div className='flex-1  hidden md:flex items-center'>
            <ul className='flex gap-[20px]'>
                {navbarright.map(link => 
                  <li key={link.id}><Link className={`text-[white] text-[15px] font-medium py-[8px] ${pathName === link.url ? 'active' : ''} navbar `}  href={link.url} >{link.title}</Link></li>
                )}
            </ul>
          </div>

        </div>

    </div>
  )
}

export default Header
