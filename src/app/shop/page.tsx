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
      <source  className='w-full h-full' src="https://rr2---sn-q4flrnss.googlevideo.com/videoplayback?expire=1694918258&ei=EhIGZZWkIJHQgwOXsruoCw&ip=102.129.235.197&id=o-AFo47uDC02u2VEGgRPl5IkrLMHCkCQIkEd030snRNIVX&itag=22&source=youtube&requiressl=yes&mh=xx&mm=31%2C26&mn=sn-q4flrnss%2Csn-vgqsrnll&ms=au%2Conr&mv=m&mvi=2&pl=25&initcwndbps=260000&spc=UWF9fwdPtMs8b7gI2wF2qSdztZR4Hnw&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=203.360&lmt=1657264199444727&mt=1694896196&fvip=3&fexp=24007246%2C24362685&beids=24350018&c=ANDROID&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIga8KKIkZ6CwQC62uG5UnP2Qx9Q4b8I7ZH5DSdxSSBuLgCIQDIxcOvvU-zn2XKymAmMmsZUF_Qgqal2J_mIktLFMBZuA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAP1RI5MUVzpmwrOojCriGiqlItXW--qEuWN03YVTGrzxAiBBXEIhilspKR-9lfpLK_jpVDm4VULKe1zJxcGn8-oxIQ%3D%3D&title=Lloydz%20Supercharger%20on%202021%20Indian%20Chieftain%20-%20175%20Horse%20Power" type="video/mp4" />
    </video>
  </div>

  </div>
  )
}

export default page
