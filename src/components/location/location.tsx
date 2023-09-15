import React from 'react'

const Location = () => {
  return (
    <div className='w-full h-[500px] relative overflow-hidden'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11917.446685706458!2d44.815565502645526!3d41.691127447645066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dad6161db31%3A0x59b6bdecf289fc13!2sTbilisi-Bakurtsikhe-Lagodekhi%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1694282841013!5m2!1sen!2sge" 
        loading="lazy" 
        className='googleLocation'
        ></iframe>
    </div>
  )
}

export default Location
