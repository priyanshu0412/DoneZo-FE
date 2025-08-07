"use client"
import { SignUpPageImg } from '@/asset'
import Image from 'next/image'
import React from 'react'

// -----------------------------------------

const GetStartedComponent = () => {

    return (
        <>
            <div className="flex flex-col xl:flex-row max-w-[1200px] mx-auto xl:px-0 px-8 py-12 w-full min-h-screen">
                {/* Left Column */}
                <div className="flex flex-col justify-center flex-1 space-y-6">
                    <h1 className="text-4xl font-bold text-sixthColor mb-4" style={{ color: '#1f2937' }}>
                        "Streamline your team"
                    </h1>
                    <p className="text-seventhColor text-lg mb-8" style={{ color: '#6b7280' }}>
                        Manage employees and tasks effortlessly.
                    </p>
                    {/* Dummy Illustration */}
                    <Image
                        src={SignUpPageImg.src}
                        alt="Team working illustration"
                        className="rounded-md max-w-full"
                        height={300}
                        width={300}
                    />
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full max-w-md bg-white shadow rounded-xl p-8">
                        <h2 className="text-xl font-bold mb-4 text-sixthColor" style={{ color: '#1f2937' }}>
                            Company Name
                        </h2>
                        <p className="text-base font-medium mb-8 text-seventhColor" style={{ color: '#6b7280' }}>
                            Registration Form
                        </p>
                        <form className="space-y-4">
                            <input className="w-full border border-gray-200 rounded px-4 py-2" placeholder="Company name" />
                            <div className="flex space-x-2">
                                <input className="w-1/2 border border-gray-200 rounded px-4 py-2" placeholder="Admin first name" />
                                <input className="w-1/2 border border-gray-200 rounded px-4 py-2" placeholder="Last name" />
                            </div>
                            <input className="w-full border border-gray-200 rounded px-4 py-2" placeholder="Email" type="email" />
                            <input className="w-full border border-gray-200 rounded px-4 py-2" placeholder="Password" type="password" />
                            <button
                                type="submit"
                                className="w-full bg-firstColor text-white font-semibold rounded py-2 mt-2 hover:bg-secondColor transition"
                                style={{ background: '#004250' }}
                            >
                                Register
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-seventhColor" style={{ color: '#6b7280' }}>
                            Already have an account?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default GetStartedComponent