import React from 'react'

const page = () => {
  return (
    <div className='text-white h-[70vh] w-full mt-[30px]  flex flex-col md:justify-center md:items-center relative overflow-hidden'>
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
        <source  className='w-full h-full' src="https://rr1---sn-aigl6nl7.googlevideo.com/videoplayback?expire=1694918156&ei=rBEGZcPXOIjigAeevqDgAw&ip=194.110.13.13&id=o-AKV4eedeDcY6qpvQoRKehzGF-BIunLNqdxOUEfPXFjPF&itag=22&source=youtube&requiressl=yes&mh=yn&mm=31%2C29&mn=sn-aigl6nl7%2Csn-aigzrne7&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=2182500&spc=UWF9f8XpKNCu5U5l4-kLg-2svCLymzE&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=211.905&lmt=1676313145565831&mt=1694896196&fvip=1&fexp=24007246%2C51000011&c=ANDROID&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgMgaxnpXcy9xRsnu6d6tfIF_gxG_tlzRPb885Vy_OfOUCIQDVRTUDMF-dKFKLfljds0c_Nbd4QgWK0j0W__IMUW9OtQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAP9S3NWgrYjaj3wTB0ZPcgLfOrJQIWnzX9ABeSOIdguxAiEAu6vpo8KnGHK8h8cxvhuKFpw_XfflDO-K0RXdgGVUR4c%3D&title=Ep.%202%20%7C%202022%20Super%20Hooligan%20Champions%20%7C%20The%20Indian%20FTR%20Story" type="video/mp4" />
      </video>
    </div>

    </div>
  )
}

export default page
