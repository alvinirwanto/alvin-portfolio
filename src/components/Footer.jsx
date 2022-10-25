import React from 'react'
import TitleSection from '../commons/TitleSection'

import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className='section-template shadow-custom mt-[5rem] py-[5rem] bg-[color:var(--base-color)]'>
            <div className='flex flex-col gap-8 text-center justify-center items-center'>
                <h3 className='text-3xl text-white font-semibold'>Alvin</h3>
                <div className='flex gap-8 text-medium text-lg text-white'>
                    <a href="">Home</a>
                    <a href="">Skills</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                </div>
                <div className='flex gap-4'>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer'>
                        <UilLinkedinAlt />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer'>
                        <UilDribbble />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer'>
                        <UilGithubAlt />
                    </div>
                    <div className='p-3 rounded-xl text-[color:var(--base-color)] bg-white cursor-pointer'>
                        <UilInstagram />
                    </div>
                </div>
            </div>
            <p className='mt-[5rem] text-gray-200'>© Alvin. All right reserved</p>
        </div>
    )
}

export default Footer