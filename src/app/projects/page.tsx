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
      <source  className='w-full h-full' src="https://rr2---sn-5go7ynlk.googlevideo.com/videoplayback?expire=1694918067&ei=UxEGZaOtEv6Wv_IP-9Wm4Ag&ip=188.126.89.38&id=o-AIy8Ly15QaGEw1iwIKTzlazSgzoV05-ZojAaLHGUa5CZ&itag=22&source=youtube&requiressl=yes&mh=EH&mm=31%2C29&mn=sn-5go7ynlk%2Csn-5goeenez&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=1898750&spc=UWF9f66iROtouXgMuvRTESSzs5VGlLI&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=85.844&lmt=1678319240592748&mt=1694895977&fvip=3&fexp=24007246&c=ANDROID&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgW_OMt0B9x1PbJhZV-wfb5ya3ahJxZuAquwTWpZilFVoCIFRvm-hEiC6vk_TF-gkG8D9TKdyrjKmZEHKMet32BttD&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLuib0UcAJGCQgH4JPjA0s5AjOBnl6SEcldk6o00aFKYCIQCvQ3x0gOoVNhPqbTJhVPjAA30abITLHb0EtfMI1LH9yA%3D%3D&title=The%20Triple%20Crown%20%7C%20Indian%20Motorcycle%20Racing" type="video/mp4" />
    </video>
  </div>

  </div>
  )
}

export default page
