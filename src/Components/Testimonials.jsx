import React, { useEffect } from 'react'
import TestimonialSlider from './TestimonialSlider'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonials = () => {
  useEffect(()=>{
    Aos.init({
      duration: '3000',
    })
  },[])
  return (
    <section className='mt-[2rem] relative'>
      <div className='container mx-auto'>
        <div data-aos="zoom-in" className='bg-accent-primary min-h-[800px] rounded-[50px]'>
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
            <h2 className='text-white text-[40px] font-Roboto font-[900] leading-[1.1] text-center mb-[80px]'>
              Testimonials
              </h2>
              <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
