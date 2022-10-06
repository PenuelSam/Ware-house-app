import React, { useEffect } from 'react'
import Feature from './Feature'
import { featuresData } from '../data'
import {BsArrowRight} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Features = () => {
  useEffect(()=>{
    Aos.init({
      duration: '3000',
    })
  },[])
  return (
    <section>
      <Feature />
      <div className='grid md:grid-cols-2 grid-cols-1 gap-[5rem] place-items-center'>
        {featuresData.map((feat, index)=> (
            <div data-aos="flip-left" className={`flex sm:flex-row flex-col`}>
                <div className='sm:flex hidden relative'><img src={feat.bgImage} alt="" /></div>
                <div className='sm:absolute'>
                    <img src={feat.image} alt="" className='sm:ml-[-3.5rem] mt-[5rem] ml-[3rem]' />
                </div>
                <div className='sm:absolute '>
                    <h1 className='sm:ml-[10rem] md:ml-[8rem] md:text-[18px] sm:text-[20px] sm:text-start text-center sm:pt-[2rem]'>{feat.title}</h1>
                    <p className='sm:w-[220px] sm:h-[160px] sm:ml-[10rem] md:ml-[8rem] pt-[1rem] md:text-[16px] text-[16px] sm:text-[18px]  sm:text-start text-center font-[400] leading-[25.6px] text-paragraph '>{feat.description}</p>
                    <button className='flex  gap-3 sm:ml-[10rem] md:ml-[8rem] ml-[8.5rem] md:pt-[1rem] sm:pt-[3rem] pt-[1rem] items-center'>
                        {feat.linkText}
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Features
