import React from 'react'

const page = () => {
  return (
    <div className='text-white h-[70vh] w-full mt-[30px]  flex flex-col justify-center items-center relative overflow-hidden'>
    <div className='w-full h-full absolute PageInfo'>
      <div className='onVideoHover'>
        <span className='w-[70%] text-[20px] text-[white]'>
        This page is currently unavailable. If you would like to access this website, 
        please place an order now. Once your order is complete, you can watch the video and enjoy a 
        delightful experience. 😊
        </span>
      </div>
    </div>

  <div className='VideoBox'>
    <video  autoPlay >
      <source  className='w-full h-full' src="https://rr1---sn-q4fl6nz7.googlevideo.com/videoplayback?expire=1694918110&ei=fhEGZbOfI_eclu8Pjva5uAc&ip=191.96.67.165&id=o-AGEYittZ5rg4BzYgtboCpQ6RTCn8RxEvVH8S2qr7HxqR&itag=22&source=youtube&requiressl=yes&mh=Ji&mm=31%2C29&mn=sn-q4fl6nz7%2Csn-q4fzen7e&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=2078750&spc=UWF9f-8sXTFT9U2-KKWNrivru8DYHT4&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=386.519&lmt=1676056392859431&mt=1694895977&fvip=4&fexp=24007246&beids=24472441&c=ANDROID&txp=6318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANtt7LDnFJgr3qtBtg0A_Zf9eIT2yy_VHAJHWSrtWHKgAiEAtX9nycGemANqfkIc7yUxmLzP5h6FwSBkytI0XB6Vx74%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKrvCqc3C5V0qDXMCw5OBgbk3E7lySM_eJnQgw1mLet0AiEA4mDx4zMtgjq0lFjcJZqiRk8dqo_zbVvSSjjg-yEqxh8%3D&title=Ep.%201%20%7C%202022%20Super%20Hooligan%20Champions%20%7C%20The%20Indian%20FTR%20Story" type="video/mp4" />
    </video>
  </div>

  </div>
  )
}

export default page
