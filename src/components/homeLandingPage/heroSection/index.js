import { HomeHeroSectoion } from '@/asset'
import { BlurText } from '@/components/reactDevBits'
import Image from 'next/image'
import React from 'react'

// ---------------------------------------------------

const HomeHeroSection = () => {

    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='max-w-[1200px] w-full py-8 flex flex-col-reverse md:flex-row justify-between items-center lg:px-8 xl:px-0 px-8'>
                    <div className='w-full lg:w-[60%]'>
                        <div className='text-white text-4xl lg:text-2xl leading-[3.5rem] lg:leading-[5.5rem] font-bold gap-2'>
                            <BlurText
                                text="Donezo"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="lg:text-7xl text-thirdColor"
                            />
                            <span>Less stress, more done. Welcome to Donezo.</span>
                            <br />
                            <button className='text-sm bg-thirdColor text-firstColor px-8 py-2 rounded-full  hover:bg-fourthColor'>Start Now</button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[40%]'>
                        <Image src={HomeHeroSectoion} className='w-full h-full' alt='...' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeroSection