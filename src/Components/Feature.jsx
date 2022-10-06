import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Feature = () => {
  useEffect(()=>{
    Aos.init({
      duration: '1000',
    })
  },[])
  return (
    <div 
    data-aos="fade-up"
    className='flex flex-col justify-center items-center py-[5rem]'>
      <h1 className='w-[405px] h-[52px] font-[700] text-center leading[52px] text-[40px] text-heading '>Features</h1>
      <p className='md:w-[584px] md:h-[58px] text-[18px] md:text-[18px] sm:text-[25px] leading-[28.8px] text-paragraph text-center py-[2rem] '>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
    </div>
  )
}

export default Feature
