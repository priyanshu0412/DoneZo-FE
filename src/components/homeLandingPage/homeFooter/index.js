"use client"
import { DoneZoLogo } from '@/asset'
import Icon from '@/components/icon'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";


// ---------------------------------------------------

const HomeFooter = () => {

    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center px-8 xl:px-0'>
                <div className='max-w-[1200px] p-8 mt-5 mb-10 rounded-xl bg-[#CBD5E1] w-full flex flex-col lg:flex-row justify-between px-8 items-start gap-y-12'>
                    <div className='flex flex-col gap-y-8 w-full lg:w-[250px] xl:w-[300px]'>
                        <div className='flex flex-col gap-y-1'>
                            <Image src={DoneZoLogo} alt='Logo' height={150} width={150} />
                            <p className='font-bold'>Boost your productivity, and manage tasks seamlessly in one place.</p>
                        </div>
                        <div className='flex gap-2'>
                            <Icon icon={"mdi:linkedin"} height={30} width={30} />
                            <Icon icon={"mdi:twitter"} height={30} width={30} />
                            <Icon icon={"ic:baseline-facebook"} height={30} width={30} />
                            <Icon icon={"mdi:instagram"} height={30} width={30} />
                        </div>
                    </div>
                    <div className='flex justify-between gap-x-8 w-full lg:w-[250px] xl:w-[300px]'>
                        <div>
                            <h1 className='pb-2 font-bold'>
                                Quick Links
                            </h1>
                            <p>Home</p>
                            <p>Feature</p>
                            <p>Pricing</p>
                            <p>Contact</p>
                        </div>
                        <div>
                            <h1 className='pb-2 font-bold'>
                                Support
                            </h1>
                            <p>Help Center</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 w-full lg:w-[250px] xl:w-[300px]'>
                        <h1 className='font-bold'>Stay Updated </h1>
                        <div className='flex flex-col gap-y-4'>
                            <input type="text" className='w-full rounded-lg px-4 py-2 bg-white border-2 border-black ' />
                            <button className='bg-firstColor px-4 py-2 text-white font-semibold rounded-2xl'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='pb-5 text-white'>
                    {year} Donezo. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default HomeFooter