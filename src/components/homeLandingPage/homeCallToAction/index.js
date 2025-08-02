import Particles from '@/components/reactDevBits/particles'
import React from 'react'

// ------------------------------------------------

const HomeCallToAction = () => {
    return (
        <>
            <div className='pt-10 lg:pt-28 pb-10 w-full flex justify-center items-center'>
                <div className='relative w-full h-[300px] border-2 border-b-2 bg-white border-t-2 border-black border-opacity-10'>
                    <Particles
                        particleColors={['#1f2937', '#000000']}
                        particleCount={2000}
                        particleSpread={40}
                        speed={0.1}
                        particleBaseSize={70}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[1200px] w-full px-8 lg:px-0'>
                        <h1 className='text-3xl md:text-4xl font-bold text-firstColor pb-10'>
                            Turn your plans into action – get things done faster
                        </h1>
                        <button className='bg-thirdColor text-white px-6 py-3 rounded-lg font-semibold hover:bg-sixthColor transition'>
                            Start Now
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeCallToAction