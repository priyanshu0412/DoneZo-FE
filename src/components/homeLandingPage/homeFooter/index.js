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
            <div className='w-full flex flex-col justify-center items-center px-8 xl:px-0 bg-[#1F2937]'>
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
                    <div className="w-full lg:w-[250px] xl:w-[300px] bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-y-5 border border-gray-100">
                        <h1 className="font-bold text-xl text-gray-800 mb-1 tracking-tight">
                            Stay Updated
                        </h1>
                        <form className="flex flex-col gap-y-3 group">
                            <label
                                htmlFor="newsletter"
                                className="text-sm text-gray-500 pl-1"
                            >
                                Get exclusive news & tips by email
                            </label>
                            <input
                                id="newsletter"
                                type="email"
                                required
                                className="w-full rounded-lg px-4 py-2 text-gray-700 border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-firstColor/70 placeholder-gray-400 transition duration-150"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-1 bg-firstColor hover:bg-firstColor/90 active:bg-firstColor/80 px-4 py-2 text-white font-semibold rounded-xl shadow transition duration-150 focus:outline-none focus:ring-2 focus:ring-firstColor"
                            >
                                Subscribe
                            </button>
                        </form>
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