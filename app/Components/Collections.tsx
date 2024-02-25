import React from 'react';
import Bump from '@/public/images/thebump.png'
import Image from 'next/image';
import Good from '@/public/images/goodhousekeeping.png'
import Have from '@/public/images/musthave.png';
import HeaderImg from '@/public/images/MB19_Rear-3QR_Blk-Penny-Dots_27962.png';
import HeaderTwoImg from '@/public/images/Mockingbird_Double_Stroller_01_Black-handlebar-frame-_-Black-child-bar-seat-_-BlackWindowpane-canopy_Gray_03fe689a-189d-44b4-aabc-2fcd945ab5fd.png'
import Link from 'next/link';

const Collections = () => {
    return (
        <div className='mt-32  w-full'>

            <p className='p-11 text-center bg-neutral-300 lg:px-32 mb-32 text-2xl drop-shadow-md tracking-wide'>From first strolls to first bites, we&#39;ve got you covered. Explore our parent-favorite products, designed to be easy to use, adaptable to grow with your family, and flexible for every situation.</p>
            <div className='flex flex-row w-full space-x-2 mb-16 '>

                <span className='hidden lg:flex px-6 justify-center w-[72%] mx-auto flex-col space-y-10 align-middle'>
                    <Link href={'/products/stroller'} className='relative  shadow-black hover:shadow-black  w-full   rounded-xl shadow-md hover:shadow-2xl  delay-75 hover:-translate-y-7 duration-700  ease-in-out transition-all p-2'>
                        <span className='w-full items-center flex flex-row space-x-5'>

                            <Image placeholder='blur' className='aspect-square   shadow-xl rounded-xl' alt='' src={HeaderImg} width={300} height={200} />
                            <p className=' tracking-wide indent-4 text-lg px-6'>Esigned for parents with one child and come with features such as a comfortable seat, adjustable recline, canopy for sun protection, storage options, and easy maneuverability. </p>
                        </span>
                    </Link>
                    <Link href={'/products/doublestroller'} className='flex w-full  items-center shadow-black hover:shadow-black  rounded-xl p-2 shadow-md hover:shadow-2xl  delay-75 hover:-translate-y-7 duration-700 ease-in-out  transition-all justify-end'>

                        <p className=' tracking-wide indent-4 text-lg px-6'>
                            Presenting our versatile, award-winning stroller, expertly designed to adapt as your child grows and effortlessly convert into a double stroller for expanding families.</p>
                        <Image placeholder='blur' className='aspect-square shadow-xl rounded-xl' alt='' src={HeaderTwoImg} width={300} height={200} />

                    </Link>

                </span>
                <span className='flex md:hidden px-6 justify-center w-[72%] mx-auto flex-col space-y-32 align-middle'>
                    <Link href={'/products/stroller'} className='flex p-2 shadow-xl bg-neutral-800 rounded-2xl text-neutral-100 flex-col space-y-3 justify-center items-center'>
                        <span
                            style={{
                                backgroundImage: `url(images/MB19_Rear-3QR_Blk-Penny-Dots_27962.png)`,
                                backgroundPosition: 'center',
                                objectFit: 'contain',
                                backgroundSize: 'cover',

                            }}
                            className='w-52 h-80 rounded-2xl  border-2'
                        />

                        <label className='text-xl font-semibold tracking-wide'>Stroller</label>
                    </Link>

                    <Link href={'/products/doublestroller'} className='flex p-2 shadow-xl bg-neutral-800 rounded-2xl text-neutral-100 flex-col space-y-3 justify-center items-center'>
                        <span
                            style={{
                                backgroundImage: `url(images/Mockingbird_Double_Stroller_01_Black-handlebar-frame-_-Black-child-bar-seat-_-BlackWindowpane-canopy_Gray_03fe689a-189d-44b4-aabc-2fcd945ab5fd.png)`,
                                backgroundPosition: 'center',
                                objectFit: 'contain',
                                backgroundSize: 'cover'
                            }}
                            className='w-52 h-80 rounded-2xl  border-2'
                        />

                        <label className='text-xl font-semibold tracking-wide'>Double Stroller</label>
                    </Link>


                </span>
                <span className='flex flex-col drop-shadow-md w-32 space-y-5 font-semibold px-3 border-l-4 border-black text-2xl md:text-5xl justify-center items-center '>
                    <h1>C</h1>
                    <h1>O</h1>
                    <h1>L</h1>
                    <h1>L</h1>
                    <h1>E</h1>
                    <h1>C</h1>
                    <h1>T</h1>
                    <h1>I</h1>
                    <h1>O</h1>
                    <h1>N</h1>
                    <h1>S</h1>
                </span>

            </div>
        </div>
    )
}

export default Collections