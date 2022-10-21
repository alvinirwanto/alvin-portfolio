import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

const ModalServices = (props) => {
    return (
        <div className='flex flex-col gap-5'>
            <h3 className='text-center text-xl font-semibold'>{props.title}</h3>
            <p className='text-center text-base text-gray-500'>{props.desc}</p>
            <div className='flex flex-col gap-3 text-base text-gray-800 mt-6'>
                <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check1}</p>
                </div>
                <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check2}</p>
                </div>
                <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check3}</p>
                </div>
                {/* <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check4}</p>
                </div>
                <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check5}</p>
                </div>
                <div className='flex gap-2'>
                    <UilCheckCircle className='text-red-500' />
                    <p>{props.check6}</p>
                </div> */}

            </div>
        </div>
    )
}

export default ModalServices