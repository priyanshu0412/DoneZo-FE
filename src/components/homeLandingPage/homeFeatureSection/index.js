import Icon from '@/components/icon'
import { SpotLightCard } from '@/components/reactDevBits'
import serviceData from '@/data/serviceData'
import React from 'react'

// --------------------------------------------

const HomeFeatureSection = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='pb-8 pt-10'>
                    <h1 className='text-5xl md:text-6xl font-bold text-thirdColor'>
                        Services
                    </h1>
                </div>
                <div className='max-w-[1200px] w-full flex px-8 xl:px-0 justify-between gap-y-12 flex-wrap py-10'>
                    {
                        serviceData.length > 0 ? (
                            serviceData.map((ele, index) => {
                                return (
                                    <div className='w-full md:w-[330px] lg:w-[300px] xl:w-[350px] h-fit' key={index}>
                                        <SpotLightCard className='!bg-[#CBD5E1]' spotlightColor={"#f9c54b"} >
                                            <div className='flex flex-col gap-y-4 items-start'>
                                                <span>
                                                    <Icon icon={ele?.icon} className={"text-black"} width={50} />
                                                </span>
                                                <p className='text-black text-2xl font-semibold'>
                                                    {ele.title}
                                                </p>
                                                <p className='text-black text-sm font-normal h-5'>
                                                    {ele?.desc}
                                                </p>
                                            </div>
                                        </SpotLightCard>
                                    </div>
                                )
                            })
                        ) : <p>Features not Found</p>
                    }

                </div>
            </div>
        </>
    )
}

export default HomeFeatureSection