"use client"
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <>
            <section >
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl dark:text-white">
                            Something is missing.
                        </p>
                        <p className="mb-4 text-lg font-light text-white ">
                            Sorry, we can not find that page. You will find lots to explore on the home page.
                        </p>
                        <Link href={"/"} className='flex justify-center items-center'>
                            <p className='text-black bg-white w-fit px-4 py-2 rounded-3xl'>
                                Back To Home Page
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFoundPage
