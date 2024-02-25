import React from 'react';
import Bump from '@/public/images/thebump.png'
import Image from 'next/image';
import Good from '@/public/images/goodhousekeeping.png'
import Have from '@/public/images/musthave.png'

const Awards = () => {
    return (
        <>
            <div className='mt-52 hidden lg:flex w-full'>
                <div className='flex flex-row space-x-2 mb-16 '>
                    <span className='flex drop-shadow-md flex-col space-y-5 font-semibold px-5 border-r-4 border-black text-5xl justify-start items-center w-32'>
                        <h1>A</h1>
                        <h1>W</h1>
                        <h1>A</h1>
                        <h1>R</h1>
                        <h1>D</h1>
                        <h1>E</h1>
                        <h1>S</h1>
                    </span>
                    <span className='flex px-32 justify-center items-center flex-row space-x-20 align-middle'>
                        <span className='flex flex-col  justify-center items-center w-1/2 space-y-10'>
                            <Image className='drop-shadow-2xl' alt='' src={Have} width={300} height={200} />
                            <p className='w-72 text-center'>&quot;This super-stylish, well-designed ride is hundreds of dollars cheaper than other premium stroller brands&quot;</p>
                        </span>
                        <span className='flex flex-col  justify-center items-center w-1/2 space-y-10'>
                            <Image className='drop-shadow-xl' alt='' src={Good} width={300} height={200} />
                            <p className='w-72 text-center'>&quot;The Maestroller Single-to-Double Stroller is one of the best baby gear items to add to your list&quot;</p>
                        </span>
                        <span className='flex flex-col  justify-center items-center w-1/2 space-y-10'>
                            <Image className='drop-shadow-xl' alt='' src={Bump} width={300} height={200} />
                            <p className='w-72 text-center'>&quot;You get a premium stroller for a fraction of the price&quot;</p>
                        </span>
                    </span>

                </div>
            </div>

            <div className='mt-52 lg:hidden   w-full'>
                <div className='flex flex-row justify-center items-center space-x-2 mb-16 '>
                    <span className='flex drop-shadow-md flex-col space-y-5 font-semibold px-5 border-r-4 border-black text-2xl justify-start items-center w-32'>
                        <h1>A</h1>
                        <h1>W</h1>
                        <h1>A</h1>
                        <h1>R</h1>
                        <h1>D</h1>
                        <h1>E</h1>
                        <h1>S</h1>
                    </span>
                    <span className='flex justify-center items-center flex-col space-y-6 align-middle'>
                        <span className='flex flex-col   justify-center items-center  space-y-3'>
                            <Image className='drop-shadow-2xl' alt='' src={Have} width={100} height={100} />
                            <p className='w-72 px-3 text-center text-sm'>&quot;This super-stylish, well-designed ride is hundreds of dollars cheaper than other premium stroller brands&quot;</p>
                        </span>
                        <span className='flex flex-col  justify-center items-center  space-y-3'>
                            <Image className='drop-shadow-xl' alt='' src={Good} width={100} height={100} />
                            <p className='w-72 px-3 text-center text-sm'>&quot;The Maestroller Single-to-Double Stroller is one of the best baby gear items to add to your list&quot;</p>
                        </span>
                        <span className='flex flex-col  justify-center items-center  space-y-3'>
                            <Image className='drop-shadow-xl' alt='' src={Bump} width={100} height={100} />
                            <p className='w-72 px-3 text-center text-sm'>&quot;You get a premium stroller for a fraction of the price&quot;</p>
                        </span>
                    </span>

                </div>
            </div>
        </>
    )
}

export default Awards