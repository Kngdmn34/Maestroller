import React from 'react'
import Parent from '@/public/images/parents.png';
import Image from 'next/image';

const Parents = () => {

    return (
        <div className='w-full px-6 mb-32 '>
            <div className='hidden lg:grid w-full  grid-cols-2 gap-4  '>
                <div className='relative  flex-col  justify-center items-center aspect-square  bg-neutral-800 rounded-2xl  '>
                    <Image className='rounded-2xl p-2' src={Parent} fill alt='parents' />
                </div>
                <div className='  h-screen flex-col space-y-10 flex items-center  justify-center   '>
                    <h1 className='text-4xl font-semibold '>Empowering New Parents</h1>
                    <p className='px-11 leading-relaxed drop-shadow-md indent-4 text-2xl'>We make the journey of parenthood a little easier by combining superior quality, modern style, and better pricing with a devotion to customer satisfaction.</p>
                </div>

            </div>


            <div className='w-full  flex md:hidden flex-col space-y-4  '>
                <div className='relative w-full flex-col  justify-center items-center aspect-square  bg-neutral-800 rounded-2xl  '>
                    <Image className='rounded-2xl p-2' src={Parent} fill alt='parents' />
                </div>
                <div className='border-4 border-black rounded-xl p-4   flex-col space-y-10 flex items-center  justify-center   '>
                    <h1 className='text-4xl font-semibold '>Empowering New Parents</h1>
                    <p className='px-3 leading-relaxed drop-shadow-md indent-4 text-2xl'>We make the journey of parenthood a little easier by combining superior quality, modern style, and better pricing with a devotion to customer satisfaction.</p>
                </div>

            </div>

        </div>
    )
}

export default Parents