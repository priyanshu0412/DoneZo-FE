import React from 'react';

// -----------------------------------------

const Navbar = () => {
    return (
        <>
            <div className="w-full h-20 flex justify-center items-center backdrop-blur-sm bg-transparent">
                <div className="max-w-[1200px] flex h-full w-full justify-between items-center px-8 lg:px-0">
                    <div className="text-white text-2xl font-bold ">
                        DoneZo
                    </div>
                    <div className="flex items-center ">
                        Dont Have Account
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
