import React from 'react'
import TitleSection from '../commons/TitleSection'
import SkillBadge from '../commons/SkillBadge'

const Skills = () => {
    return (
        <div className='section-template'>
            <TitleSection title='Skills' subtitle='My Technical Level' />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:max-w-[1000px] gap-5 xl:gap-8 gap-y-[5rem]'>

                <div className='flex flex-col items-center px-7 xl:px-[5rem] py-[3rem] shadow-lg rounded-xl hover:shadow-xl hover:scale-110 duration-300'>
                    <h1 className='text-center text-xl font-semibold mb-8'>Frontend Developer</h1>
                    <div className='grid grid-cols-2 gap-x-8 xl:gap-x-[3rem] gap-y-4'>

                        <SkillBadge skill='HTML' value='Basic' />
                        <SkillBadge skill='CSS' value='Basic' />
                        <SkillBadge skill='JavaScript' value='Basic' />
                        <SkillBadge skill='ReactJS' value='Basic' />
                        <SkillBadge skill='TailwindCSS' value='Basic' />
                        <SkillBadge skill='Bootstrap' value='Basic' />

                    </div>
                </div>

                <div className='flex flex-col items-center px-7 xl:px-[5rem] py-[3rem] shadow-lg rounded-xl hover:shadow-xl hover:scale-110 duration-300'>
                    <h1 className='text-center text-xl font-semibold mb-8'>Other Skills</h1>
                    <div className='grid grid-cols-2 gap-x-8 xl:gap-x-[3rem] gap-y-4'>

                        <SkillBadge skill='Figma' value='Basic' />
                        <SkillBadge skill='Wordpress' value='Basic' />
                        <SkillBadge skill='GitHub' value='Basic' />
                        <SkillBadge skill='Googling' value='Basic' />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills