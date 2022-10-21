import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    window.addEventListener('scroll', addShadowNav)

    return (
        <div className={shadowNav ? 'shadow-md fixed bottom-0 w-full md:sticky md:top-0 z-[999]' : 'fixed bottom-0 w-full md:sticky md:top-0 z-[999]'}>
            <header className={show
                ? 'rounded-t-xl bg-white py-5 md:py-0'
                : 'bg-white py-5 md:py-0'}>
                <nav className='flex justify-between items-center md:justify-between w-full max-w-[370px] md:max-w-[750px] xl:max-w-[1200px] mx-auto'>
                    <a href="" className={show ? 'hidden' : 'block font-semibold text-lg text-red-500'}>Alvin</a>

                    <div className={show ? 'block ease-out duration-1000 w-full mx-auto' : 'hidden md:block'}>
                        <ul className='grid grid-cols-3 gap-y-8 gap-x-[4rem] py-8 md:flex md:gap-9'>
                            <li>
                                <a href="" className='link-header'><UilEstate className="md:hidden" />Home</a>
                            </li>
                            <li>
                                <a href="" className='link-header'><UilUser className="md:hidden" />About</a>
                            </li>
                            <li>
                                <a href="" className='link-header'><UilFileAlt className="md:hidden" />Skills</a>
                            </li>
                            <li>
                                <a href="" className='link-header'><UilBriefcaseAlt className="md:hidden" />Services</a>
                            </li>
                            <li>
                                <a href="" className='link-header'><UilScenery className="md:hidden" />Portfolio</a>
                            </li>
                            <li>
                                <a href="" className='link-header'><UilMessage className="md:hidden" />Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className={show ? 'hidden' : 'flex md:hidden'}>
                        <button onClick={() => setShow(show => !show)}><UilApps /></button>
                    </div>
                </nav>

                <div className={show ? 'flex justify-end pr-5' : 'hidden'}>
                    <button onClick={() => setShow(show => !show)}><UilMultiply /></button>
                </div>
            </header>
        </div>
    )
}

export default Navbar