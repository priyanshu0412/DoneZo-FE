import { DoneZoLogo } from '@/asset'
import Icon from '@/components/icon'
import Image from 'next/image'
import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

// -----------------------------------------------------------

const HomeNavbar = () => {

    const [dropDownArrow, setdropDownArrow] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const OnHandleDropdown = () => {
        setdropDownArrow(true)
    }

    const OnHandleDropdownLeave = () => {
        setdropDownArrow(false);
    };

    const handleToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className='lg:flex w-full justify-center items-center bg-white hidden lg:px-8 xl:px-0'>
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
                        <div className='flex gap-4 w-[200px] justify-start'>
                            <Icon icon={"noto:brain"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Smart Tasks</p>
                                <p className='text-xs'>Organize and prioritize tasks with confidence</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px] justify-start'>
                            <Icon icon={"fluent-emoji-flat:calendar"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Adaptive Planner</p>
                                <p className='text-xs'>Visualize your day, week, or month with clarity.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px] justify-start'>
                            <Icon icon={"fluent-color:arrow-sync-16"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Seamless Sync</p>
                                <p className='text-xs'>Stay updated across all your devices, effortlessly.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[200px] justify-start'>
                            <Icon icon={"stash:target-duotone"} width={20} height={20} />
                            <div >
                                <p className='text-sm font-semibold'>Focus Mode</p>
                                <p className='text-xs'>Distraction-free and clean working layout.</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='flex lg:hidden w-full bg-white'>
                <div className='h-[50px] w-full flex items-center justify-between px-6'>
                    <Image src={DoneZoLogo} alt='Logo' height={100} width={100} />
                    <div >
                        <Hamburger
                            toggled={isMenuOpen}
                            toggle={setIsMenuOpen}
                            size={25}
                            duration={0.4}
                            color="#1F2937"
                            direction="left"
                            rounded
                        />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <>
                    {/* Overlay for focus and dimming background */}
                    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"></div>
                    <div className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 animate-slideIn">
                        {/* Close button on top right */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                className="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <Icon icon="ph:x" width={28} height={28} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-8 px-8 pb-8">
                            <div>
                                <p className="text-lg font-semibold mb-2 text-end">Features</p>
                                <div className="flex flex-col gap-3">
                                    <button className="text-sm flex justify-end items-center text-gray-700 hover:text-gray-900 transition">
                                        <span>Smart Tasks</span>
                                        <Icon icon="noto:brain" width={20} height={20} className="pl-2" />
                                    </button>
                                    <button className="text-sm flex justify-end items-center text-gray-700 hover:text-gray-900 transition">
                                        <span>Adaptive Planner</span>
                                        <Icon icon="fluent-emoji-flat:calendar" width={20} height={20} className="pl-2" />
                                    </button>
                                    <button className="text-sm flex justify-end items-center text-gray-700 hover:text-gray-900 transition">
                                        <span>Seamless Sync</span>
                                        <Icon icon="fluent-color:arrow-sync-16" width={20} height={20} className="pl-2" />
                                    </button>
                                    <button className="text-sm flex justify-end items-center text-gray-700 hover:text-gray-900 transition">
                                        <span>Focus Mode</span>
                                        <Icon icon="stash:target-duotone" width={20} height={20} className="pl-2" />
                                    </button>
                                </div>
                            </div>
                            <button className="text-lg font-semibold text-end text-gray-700 hover:text-indigo-600 transition">Price</button>
                            <button className="text-lg font-semibold text-end text-gray-700 hover:text-indigo-600 transition">About</button>
                            <button className="text-lg font-semibold text-end text-gray-700 hover:text-indigo-600 transition">Contact</button>
                        </nav>
                    </div>
                    <style jsx>{`
      @keyframes slideIn {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
      .animate-slideIn {
        animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
      }
    `}</style>
                </>
            )}

        </>
    )
}

export default HomeNavbar