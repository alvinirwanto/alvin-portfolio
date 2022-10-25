import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";

import TitleSection from '../commons/TitleSection'

import { Data } from '../data/DataTestimonial'

const Testimonial = () => {
    return (
        <div className='section-template'>
            <TitleSection title='Testimonial' subtitle='My Client Saying' />

            <Swiper className='max-w-[1000px] py-[15rem]'
                loop={true}
                loopFillGroupWithBlank={true}
                slidesPerView={2}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {
                    Data.map((item) => {
                        return (
                            <SwiperSlide className='' key={item.id}>
                                <div className='shadow-xl rounded-xl flex flex-col justify-start m-4 md:m-0 xl:m-2 gap-2 px-[3rem] py-[3rem] h-[45vh] md:h-[35vh]'>
                                    <img src={item.image} alt="profile-img" className='h-[4rem] w-[4rem] rounded-full object-cover mb-4' />
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonial