import React from 'react'

const page = () => {
  return (
    <div className='text-white h-[70vh] w-full mt-[30px]  flex flex-col justify-center items-center relative overflow-hidden'>
    <div className='w-full h-full absolute PageInfo'>
      <div className='onVideoHover'>
        <span className='w-[70%] text-[20px] text-[white]'>
        <p>If you are interested in buying this project and website, please feel free to contact me. 😊</p>
        <p>Mobile: <a href="tel:+559598550076">+559 598 55 00 76 📱</a></p>
        <p>Email: <a href="mailto:gioocharkviani@gmail.com">gioocharkviani@gmail.com ✉️</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/giorgi-charkviani-23273a258/">Giorgi Charkviani 🔗</a></p>
        </span>
      </div>
    </div>

  <div className='VideoBox'>
    <video  autoPlay >
      <source  className='w-full h-full' src="https://rr1---sn-8vm15-j2ue.googlevideo.com/videoplayback?expire=1694916498&ei=MgsGZfPtLZ-hxN8P47aSmA0&ip=209.203.45.122&id=o-ADcMRcRVFWkuJNWZ2A2mVnZqrGQdt1ZPmArYxYRhqGn2&itag=22&source=youtube&requiressl=yes&mh=VJ&mm=31%2C29&mn=sn-8vm15-j2ue%2Csn-woc7ln7y&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=1153750&spc=UWF9f3oAnGBkvu6b7DjIcUn4lHJM6nE&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=202.617&lmt=1673540396129241&mt=1694894525&fvip=1&fexp=24007246&beids=24350017&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOtwdhI6KsPP0jLBztjX1hyLPgUgG83cwU9lhpsINGZiAiEAhzUDJh5Wa9TqrWP5oYp58iZGRLBbbJJ4SVE57WQZ16U%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANmEqw8AXmVN_PhBrPWvN-glz_aFiEszmsdKMUsU54QHAiEAvQfSUgN5PspxzviRgH8QosAThUAt-rQOahpuDYivKGw%3D&title=701%20ENDURO%20-%20The%20Perfect%20Combination%20%7C%20Husqvarna%20Motorcycles" type="video/mp4" />
    </video>
  </div>

  </div>
  )
}

export default page
