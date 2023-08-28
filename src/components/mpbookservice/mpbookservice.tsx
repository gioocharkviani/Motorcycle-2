'use client'

import React from 'react'
import { useState ,useEffect} from 'react'
import { data } from './data'


const Mpbookservice = () => {

  const [open , setopen] = useState(false);
  const [brand , setbrand] = useState('');
  const [brandfilter , setbrandfilter] = useState('');
  const [filteredData , setfilteredData] = useState({})


  const [openModel , setOpenModel] = useState(false)
  const [models , setModels] = useState([])
  const [filteredmodels , setfilteredmodels] = useState([])
  const [model , setModel] = useState('')
  const [modelvalue , setnmodelvalue] = useState('')
  

  

  useEffect(()=>{
    const filteredBrands = data.filter(item => item.brand.toLowerCase().includes(brandfilter.toLowerCase()))   
    setfilteredData(filteredBrands) 
  } , [brandfilter])


  useEffect(()=>{
    const filteredmodels = models.filter(item => item.toLowerCase().includes(modelvalue.toLocaleLowerCase()))
    setfilteredmodels(filteredmodels)
  }, [modelvalue])



  useEffect(()=>{
    setopen(false)
    setModel('')
  }, [brand])

  useEffect(()=>{
    setOpenModel(false)
  }, [model])

  useEffect(()=>{
    const modeldata = data.find(item => item.brand === brand)
    setModels(modeldata?.models)
  }, [brand])

  return (
    <div className='flex-1 w-full gap-[20px] py-[20px] bg-[#181818] text-white flex flex-col px-[20px]'>
        <div className='w-full px-[15px] flex flex-col gap-[15px] border-l-[4px] border-[white]'>
            <span className='text-[20px] leading-none'>Book</span>
            <h2 className='text-[40px] leading-none font-bold'>OUR SERVICES</h2>
        </div>

        <form className='mt-[20px]'>
          <div className='grid md:grid-flow-col md:grid-rows-3  gap-[15px]'>

          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>First name</label>
            <input type='text' 
              className='w-full border-[1px] border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '
            />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>Last name</label>
            <input type='text' 
              className='w-full border-[1px] border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '
            />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>Phone Number</label>
            <input type='text' 
              className='w-full border-[1px] border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '
            />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>Email</label>
            <input type='text' 
              className='w-full border-[1px] border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '
            />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>Motorcycle Brand</label>

            
            <div className='w-full border-[1px] relative border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '>
              
              <span  
                onClick={() => {open ? setopen(false) : setopen(true)}} 
                className='cursor-pointer w-[100%] '>{brand? brand : 'Choose your motorcycle'}
              </span>
              
              {open &&
              <div className='absolute z-[99] top-[40px] p-[5px] flex flex-col gap-2 left-0 overflow-y-auto w-full max-h-[300px] rounded-[5px] bg-neutral-700'>
                <input type='text' onChange={(e)=> {setbrandfilter(e.target.value)}} className='py-[5px] px-[10px] outline-none border-[2px] bg-inherit border-[#707070] rounded-[3px] focus:border-[2px] focus:border-[#ff5e00] transition-[0.1s]' autoFocus/>
                <ul className='flex flex-col gap-[5px]'>
                  
                  {filteredData.length >  0 ?  filteredData.map((item) => {
                    return (
                  <li
                  key={item.id} 
                  onClick={() => {setbrand(item.brand)}}
                  className={`py-[5px] px-[5px] bg-[#707070] hover:bg-[#ff5e00]  rounded-[3px] cursor-pointer`}
                  >
                    {item.brand}
                  </li>
                  )}) : 

                  data.map(item => {
                    return(
                      <li
                      key={item.id} 
                      onClick={() => {setbrand(item.brand)}}
                      className={`py-[5px] px-[5px] bg-[#707070] hover:bg-[#ff5e00]  rounded-[3px] cursor-pointer`}
                      >
                        {item.brand}
                      </li>
                    )
                  })
                
                
                }
                </ul>
              </div>
              }

            </div>
          </div>


          {/* SetMotorcycle MOdel */}
          {brand &&
          <div className='flex flex-col gap-[10px]'>
            <label className='text-[14px] '>Choose {brand} model</label>

            
            <div className='w-full border-[1px] relative border-[#707070] px-[10px] py-[5px] bg-inherit outline-none rounded-[3px] focus:border-[1px] focus:border-[#ff5e00] transition-[0.1s] '>
              
              <span  
                onClick={() => {openModel ? setOpenModel(false) : setOpenModel(true)}} 
                className='cursor-pointer w-[100%] '>{model? model : 'choose your model'}
              </span>
              
              {openModel &&
              <div className='absolute top-[40px] z-[99] p-[5px] flex flex-col gap-2 left-0 overflow-y-auto w-full max-h-[300px] rounded-[5px] bg-neutral-700'>
                
                <input 
                  type='text'
                  className='py-[5px] px-[10px] outline-none border-[2px] bg-inherit border-[#707070] rounded-[3px] focus:border-[2px] focus:border-[#ff5e00] transition-[0.1s]' 
                  autoFocus
                  onChange={(e)=> setnmodelvalue(e.target.value)}
                />

                <ul className='flex flex-col gap-[5px]'>
                  {filteredmodels.length > 0 ? filteredmodels.map((item , i) => {
                    return (
                      <li
                      key={i} 
                      onClick={() => {setModel(item)}}
                      className={`py-[5px] px-[5px] bg-[#707070] hover:bg-[#ff5e00]  rounded-[3px] cursor-pointer`}
                      >
                        {item}
                      </li>
                    )
                  }) : models.map((item , i) => {
                    return (
                      <li
                      key={i} 
                      onClick={() => {setModel(item)}}
                      className={`py-[5px] px-[5px] bg-[#707070] hover:bg-[#ff5e00]  rounded-[3px] cursor-pointer`}
                      >
                        {item}
                      </li>
                    )
                  })
                  }
                </ul>
              </div>
              }

            </div>
          </div>
          }
          {/* SetMotorcycle MOdel */}
        

          </div>
        </form>

    </div>
  )
}

export default Mpbookservice
