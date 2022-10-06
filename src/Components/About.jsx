import React, { useEffect } from 'react'
import about from '../assets/img/about.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({
      duration: '3000'
    })
  },[])
  return (
    <div 
    data-aos="flip-left"
    className='bg-abouttBg sm:px-[5rem] md:mt-0 mt-[3rem] rounded-[50px] flex md:flex-row flex-col md:h-[400px]  justify-between'>
      <div className='flex-2'>
        <img src={about} alt="" className='w-[100%]' />
      </div>
      <div className='flex-1 md:py-[5rem]  '>
        <h1 className='md:w-[475px] md:h-[100px] font-[700] text-[40px] sm:text-[40px] leading-[52px] md:text-start text-center text-heading sm:px-[3rem] px-[3rem] '>We are a high-level data storage bank</h1>
        <p className='md:w-[474px] md:h-[170px] font-[500] md:text-[18px] sm:text-[30px] text-[18px] text-paragraph md:text-start text-center md:leading-[25px] p-[2rem]  '>The place to store various data that you can access at any time through the internet  and where you can carry it.This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
      </div>
    </div>
  )
}

export default About
