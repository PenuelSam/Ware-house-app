import React, { useState } from 'react'
import { navigationData } from '../data'
import logo from '../assets/img/logo.png'
import { motion } from 'framer-motion'
import {BsArrowRightShort} from 'react-icons/bs'
import menu from '../assets/img/icon-hamburger.svg'
import close from '../assets/img/icon-close.svg'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav 
    initial={{y:-100}}
    animate={{y: 0}}
    transition={{
      duration: '3000',
      default: { ease: "linear" }
    }}
    className='navbar  flex justify-between items-center py-[2rem]'>
      <div className='flex gap-[5rem]'>
        <div>
        <img src={logo} alt="" />
        </div>
        <ul className='list-none md:flex hidden items-center'>
          {
            navigationData.map((nav,index)=>(
              <li 
              key={index}
              className={`cursor-pointer text-heading font-Roboto font-normal text-[16px] ${index === navigationData.length - 1 ? 'mr-0' : 'mr-5'}`}
              >
                <a href={nav.href}>{nav.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='flex items-center sm:gap-[15rem] gap-[2rem]'>
        <button className='flex justify-center items-center bg-white shadow-lg px-[2rem] py-2 rounded-full'>
          Request Demo <BsArrowRightShort />
        </button>
        <div className='md:hidden mr-[1rem] flex items-center'>
          <img src={`${toggle ? close : menu }`} alt="" onClick={() => setToggle(prev => !prev)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 z-[5] bg-black
          absolute top-20 right-0 mx-4 sm:mx-0 my-2 sm:h-[50%] sm:min-w-[100%] min-w-[240px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end item-center flex-1'>
              {
                navigationData.map((nav,index)=>(
                  <li key={index}
                  className={`font-poppins
              font-normal
              sm:relative
              top-[-10rem]
              cursor-pointer sm:text-[30px] text-[18px]
              text-center
              text-white ${index === navigationData.length - 1
               ? 'mb-0' : 'mb-5'}`}>
                    <a href={nav.href}>{nav.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
