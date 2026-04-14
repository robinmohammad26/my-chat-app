import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="hero min-h-[40vh]">
                    <div className="hero-content text-center">
                        <div className="max-w-full">
                            <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                            <p className="py-6">
                                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
                            </p>
                            <button className="btn bg-[#244D3F] text-white"><FaPlus />Add Friend</button>
                        </div>
                    </div>
                </div>
                {/* Tab Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
                    <div className='px-1 py-10 rounded-md shadow-xl/30 text-center space-y-2'>
                        <h3 className='font-bold text-3xl text-[#244D3F]'>10</h3>
                        <p className='text-[#64748B] text-[1.1rem]'>Total Friends</p>
                    </div>
                    <div className='px-1 py-10 rounded-md shadow-xl/30 text-center space-y-2'>
                        <h3 className='font-bold text-3xl text-[#244D3F]'>3</h3>
                        <p className='text-[#64748B] text-[1.1rem]'>On Track</p>
                    </div>
                    <div className='px-1 py-10 rounded-md shadow-xl/30 text-center space-y-2'>
                        <h3 className='font-bold text-3xl text-[#244D3F]'>6</h3>
                        <p className='text-[#64748B] text-[1.1rem]'>Need Attention</p>
                    </div>
                    <div className='px-1 py-10 rounded-md shadow-xl/30 text-center space-y-2'>
                        <h3 className='font-bold text-3xl text-[#244D3F]'>12</h3>
                        <p className='text-[#64748B] text-[1.1rem]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;