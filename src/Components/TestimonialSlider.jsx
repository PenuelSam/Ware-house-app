import React from 'react'

import { testimonialsData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css'

// import required modules
import { Pagination } from 'swiper';


const TestimonialSlider = () => {
  return (
    <Swiper
    slidesPerView={'auto'}
    centeredSlides={true}
    spaceBetween={20}
    pagination={{
        clickable: true
    }}
    modules={[Pagination]}
    className='mySwiper'
    >
       {
        testimonialsData.map((slide,index)=> {
            const {image, message, name, web} = slide;
            return (
                <SwiperSlide
                key={index}
                className='bg-white rounded-[20px] border border-accent-primary md:max-w-[645px] max-w-[330px] pt-[60px] px-[35px] md:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
                >
                    <img src={image} alt="" />
                    <div>
                        <div className='text-lg text-accent-primary font-[900]'>{name}</div>
                        <div className='mb-4 font-semibold text-accent-primary'>{web}</div>
                        <p className='max-w-[340px]'>{message}</p>
                    </div>
                </SwiperSlide>
            )
        })
       }
    </Swiper>
  )
}

export default TestimonialSlider
