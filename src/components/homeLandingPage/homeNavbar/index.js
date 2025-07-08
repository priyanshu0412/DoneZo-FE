import { DoneZoLogo } from '@/asset'
import Icon from '@/components/icon'
import Image from 'next/image'
import React, { useState } from 'react'

// -----------------------------------------------------------

const HomeNavbar = () => {

    const [dropDownArrow, setdropDownArrow] = useState(false)

    const OnHandleDropdown = () => {
        setdropDownArrow(true)
    }

    const OnHandleDropdownLeave = () => {
        setdropDownArrow(false);
    };

    return (
        <>
            <div className='flex w-full justify-center items-center bg-white'>
                <div className='max-w-[1200px] w-full flex justify-between items-center h-[80px]'>
                    {/* Logo  */}
                    <div>
                        <Image src={DoneZoLogo} alt='Logo' height={120} width={120} />
                    </div>

                    {/* Navigation  */}
                    <div className='h-full flex justify-center items-center'>
                        <ul className='flex h-full gap-8 items-center [&>li]:h-full [&>li]:flex [&>li]:justify-center [&>li]:items-center  [&>li]:text-md [&>li]:cursor-pointer'>
                            <li className='hover:font-semibold hover:text-thirdColor flex justify-center items-center gap-2'
                                onMouseEnter={OnHandleDropdown}
                                onMouseLeave={OnHandleDropdownLeave} >
                                Feature <Icon icon={"gridicons:dropdown"} rotate={dropDownArrow && 90} width={20} />
                            </li>
                            <li className='hover:font-semibold hover:text-thirdColor'>Price</li>
                            <li className='hover:font-semibold hover:text-thirdColor'>About</li>
                            <li className='hover:font-semibold hover:text-thirdColor'>Contact</li>
                        </ul>
                    </div>

                    {/* button  */}
                    <div>
                        <button className='px-8 py-2 rounded-full hover:bg-seventhColor hover:text-white bg-eightthColor text-white font-medium'>
                            Get Start
                        </button>
                    </div>
                </div>
            </div>
            {dropDownArrow &&
                (
                    <div
                        className='p-4 w-[500px] flex flex-wrap justify-center items-center gap-x-10 gap-y-8 bg-white absolute top-[74px] left-[340px] border-2 shadow-2xl shadow-slate-600 rounded-md z-10'
                        onMouseEnter={OnHandleDropdown}
                        onMouseLeave={OnHandleDropdownLeave}
                    >
                        <div className='flex gap-4 w-[200px]'>
                            <Icon icon={"noto:brain"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Smart Tasks</p>
                                <p className='text-xs'>Easily create, organize, and prioritize tasks in one place.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px]'>
                            <Icon icon={"fluent-emoji-flat:calendar"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Adaptive Planner</p>
                                <p className='text-xs'>Visualize your day, week, or month with clarity.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px]'>
                            <Icon icon={"fluent-color:arrow-sync-16"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Seamless Sync</p>
                                <p className='text-xs'>Stay updated across all your devices, effortlessly.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px]'>
                            <Icon icon={"stash:target-duotone"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Focus Mode</p>
                                <p className='text-xs'>Work distraction-free with a minimal, clean workspace.</p>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default HomeNavbar