import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';
import { Comp1, Comp2, Comp3, Comp5, Comp6 } from '@/asset';

// ----------------------------------------

const HomeCompanySection = () => {

    const logos = [
        Comp1,
        Comp2,
        Comp3,
        Comp5,
        Comp6
    ];

    return (
        <div className='w-full bg-fifthColor flex justify-center items-center mt-20 mb-10 overflow-hidden'>
            <div className='w-full flex flex-col justify-center items-center pb-10'>
                <div className='py-12 flex flex-col justify-center items-center px-8 lg:px-0'>
                    <h1 className='text-4xl font-bold text-black'>
                        Proudly Partnered With
                    </h1>
                    <p className="text-gray-500 text-lg pt-2">
                        We are proud to be associated with these amazing brands
                    </p>

                </div>
                <div className='overflow-x-auto'>
                    <Splide
                        options={{
                            type: 'loop',
                            drag: 'free',
                            focus: 'center',
                            perPage: 5,
                            arrows: false,
                            pagination: false,
                            gap: '2rem',
                            autoScroll: {
                                speed: 1,
                            },
                            breakpoints: {
                                768: { perPage: 3 },
                                480: { perPage: 2 },
                            },
                        }}
                        extensions={{ AutoScroll }}
                        className='flex justify-center items-center'
                    >
                        {logos.map((logo, index) => (
                            <SplideSlide key={index}>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        src={logo}
                                        alt={`Logo ${index}`}
                                        className='h-15 w-auto grayscale hover:grayscale-0 transition duration-300'
                                    />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div>
    );
}

export default HomeCompanySection