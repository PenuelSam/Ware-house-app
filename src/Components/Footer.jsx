import React, { useEffect } from 'react'
import logo from '../assets/img/logo-v2.png'
import { footerData } from '../data'
import { copyrightData } from '../data'
import Foot from './Foot'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({
      duration: '3000',
    })
  },[])
  return (
    <>
      <div data-aos="fade-up" className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <div className=''>
            <img src={logo} alt="" />
            <Foot />
        </div>
        <div className='md:ml-[7rem] md:mt-2 mt-[2rem]  flex '>
          <div className='flex-1'>
          <h1 className='text-[16px] font-[900] leading-[25.6px] text-heading '>About</h1>
          <ul className='list-none w-[166px] h-[160px] pt-[1rem]'>
          {
            footerData.list1.map((about,index)=>(
                <li key={index}
                className={`font-Roboto
                font-[400] leading-[40px] text-heading cursor-pointer text-[16px]
                `}>
                  <a href={about.href}>{about.name}</a>
                  </li>
            ))
          }
          </ul>
          </div>
          <div className='flex-1'>
          <h1 className='text-[16px] font-[900] leading-[25.6px] text-heading '>Help</h1>
          <ul className='list-none w-[166px] h-[190px] pt-[1rem]'>
          {
            footerData.list2.map((help,index)=>(
                <li key={index}
                className={`font-Roboto
                font-[400] leading-[40px] text-heading cursor-pointer text-[16px]
                `}>
                  <a href={help.href}>{help.name}</a>
                  </li>
            ))
          }
          </ul>
          </div>
          </div>
        <div className='md:ml-[8rem] mt-2'>
          <h1 className='text-[16px] font-[900] leading-[25.6px] text-heading '>Socials</h1>
          <div  className='flex justify-between mt-[1rem]'>
          {
            footerData.socialList.map((social,index)=>(
              <div key={index} className='text-[1.5rem] bg-opacity-[0.2] grid place-items-center text-white rounded-full bg-heading w-[50px] h-[50px]'>
               {social.icon} 
              </div>
            ))
          }
          </div>
          </div>
      </div>
      <div data-aos="fade-up" className='flex my-[5rem]  justify-between'>
        <span className='w-[360px] h-[50px] text-[12px] font-[400] leading-[21.6px] text-heading '>{copyrightData.text}</span>
        <div className='w-[60px] h-[60px] text-heading text-[20px] bg-heading bg-opacity-[0.2] grid place-items-center rounded-full '>{copyrightData.icon}</div>
      </div>
    </>
  )
}

export default Footer
