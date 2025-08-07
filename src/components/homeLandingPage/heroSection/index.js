"use client"
import { HomeHeroSectoion } from '@/asset'
import { BlurText } from '@/components/reactDevBits'
import Image from 'next/image'
import React from 'react'

// ---------------------------------------------------

const HomeHeroSection = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='max-w-[1200px] w-full py-20 flex flex-col-reverse md:flex-row justify-between items-center lg:px-8 xl:px-0 px-6 gap-10'>

                    {/* Left Content */}
                    <div className='w-full lg:w-[55%] flex flex-col gap-6'>
                        <div className='text-white font-bold'>
                            <BlurText
                                text="Manage tasks. Lead teams. Get more done with Donezo."
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-4xl lg:text-5xl xl:text-5xl text-thirdColor !leading-[3.5rem]"
                            />
                        </div>
                        <p className='text-gray-200 text-base lg:text-lg leading-relaxed'>
                            Donezo is your all-in-one workspace to plan projects, assign tasks,
                            and track progress with ease. Designed for modern teams who value
                            simplicity and speed.
                        </p>
                        <div>
                            <button className='text-sm lg:text-base bg-thirdColor text-firstColor px-8 py-3 rounded-full hover:bg-fourthColor transition-all duration-300 shadow-md'>
                                Start Now
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='w-full lg:w-[40%]'>
                        <Image
                            src={HomeHeroSectoion}
                            className='w-full h-auto object-cover'
                            alt='Donezo dashboard preview'
                            priority
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeHeroSection
