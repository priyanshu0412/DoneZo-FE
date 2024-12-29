import React from 'react'

// -------------------------------

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 flex justify-center items-center backdrop-blur-sm bg-transparent'>
                <div className='max-w-[1200px] flex h-full w-full justify-between items-center'>
                    <div className='text-white'>
                        Donezo
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='text-white hover:underline px-4 py-2 rounded-3xl'>
                            Dont have account Login ?
                        </button>
                        <div className='text-white'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
