import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const CTA = () => {
  useEffect(()=>{
    Aos.init({
      duration: '3000',
    })
  },[])
  return (
    <div data-aos="fade-up" className='py-[5rem] flex md:flex-row flex-col justify-between'>
      <div  className='flex flex-col gap-5'>
        <h1 className='md:w-[405px] md:h-[52px] font-[700] text-[40px] leading-[52px] text-heading md:text-start text-center '>Try for free!</h1>
        <p className='md:w-[584px] md:h-[29px] md:text-[18px] text-[18px] sm:text-[20px] font-[500] leading-[28.8px] text-paragraph md:text-start text-center '>Get limited 1 week free try our features!</p>
      </div>
      <div className='flex sm:flex-row md:flex-col flex-col md:justify-end justify-center gap-5 mt-[2rem] md:mt-[0rem]'>
        <div>
        <button className='bg-tryBtn sm:ml-0 ml-[5rem] sm:px-5 px-[2rem] py-3 cursor-pointer rounded-full text-white'>Learn more</button>
        </div>
        <div>
        <button className='flex  sm:ml-0 ml-[5rem] items-center bg-white shadow-md px-5 py-3 rounded-full  '>Request Demo</button>
        </div>
      </div>
    </div>
  )
}

export default CTA
