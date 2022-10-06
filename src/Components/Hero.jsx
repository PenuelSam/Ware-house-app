import React from 'react'
import heroImg from '../assets/img/hero-img.png'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className=' flex md:flex-row flex-col justify-between md:py-[2rem]'>
      <motion.div 
      initial={{x:-100}}
      animate={{x:0}}
      transition={{
        duration: '3000',
        default: { ease: "linear" }
      }}
      
      className=' sm:px-[2rem] flex-1'>
        <h1 className='sm:w-[645px] sm:h-[184px] font-[700] sm:text-[80px] text-[50px] items-center md:text-start text-center flex leading-[110%] text-heading'>Save your data storage here.</h1>
        <p className='md:w-[380px] md:h-[120px] font-[500] md:text-[18px] sm:text-[30px] text-[17px]  md:leading-[160%] text-paragraph md:py-[3rem] sm:py-[1.5rem] pt-[1rem] md:text-start text-center'>
            Data Warehouse is a data storage area that has been
            tested for security, so you can store your data here
            safely but not be afraid of being stolen by others.
        </p>
        <div className='md:py-[5rem] sm:py-[1rem]  pt-[2rem]'>
        <button className='bg-btnBg md:ml-0 sm:ml-[17rem] ml-[6rem] md:px-5  px-[3rem] py-3 cursor-pointer rounded-full text-white'>Learn more</button>
        </div>

      </motion.div>
      <motion.div 
      initial={{x: 100}}
      animate={{x:0}}
      transition={{
        duration: '3000',
        default: { ease: "linear" }
      }}
      className=' flex flex-1  md:absolute md:w-[650px] md:mt-0 mt-[2rem] right-[5rem]  h-[468px]'>
        <img src={heroImg} alt="" className='md:absolute  w-[100%] top-[8rem]  '/>
      </motion.div>
    </div>
  )
}

export default Hero
