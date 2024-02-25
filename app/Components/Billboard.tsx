import React from 'react'
import HeaderImage from '@/public/images/pexels-kamaji-ogino-5094410.jpg'
import Image from 'next/image';
import { HiArrowLongRight } from "react-icons/hi2";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Link from 'next/link';



const Billboard = () => {
    return (
        <div className='w-full  relative     h-screen'>

            <Image className='relative hidden lg:flex shadow-lg  brightness-90 ' alt='billboard' src={HeaderImage} fill />

            <div className='flex flex-col  lg:hidden  space-y-10 justify-center items-center'>
                <Image className='relative shadow-lg  brightness-90 ' alt='billboard' src={HeaderImage} width={400} height={800} />
                <span className=' px-3'>
                    <h1 className='text-4xl font-semibold  drop-shadow-md'>Meet the Maestroller Stroller </h1>
                    <p className='text-left  text-xl leading-loose drop-shadow-md indent-5 pt-6 '>Our award-winning stroller just got even better. The most premium features, thoughtful design, and next-level safety, at a price point that just makes sense.

                    </p>

                </span>
                <button className='relative h-full shadow-2xl rounded-xl z-0 text-neutral-100  w-[72%] justify-center flex items-center bg-neutral-800  transition-all  p-4'>
                    <Link href={'/products/doublestroller'} className='flex flex-row items-center space-x-10 relative z-10'>
                        <h1 className=' flex'>Explore The Stroller</h1>
                        <HiArrowLongRight size={35} />
                    </Link>
                    <span className='absolute z-0 rounded-xl  animate-pingo inset-0  duration-700 transition-all   w-full bg-neutral-600'></span>

                </button>
            </div>

            <span className='absolute z-10 hidden lg:flex flex-col p-4 rounded-xl    space-y-5 justify-start items-start left-6 bottom-20 font-semibold w-full  lg:w-[42%] text-left text-neutral-100'>
                <h1 className='text-4xl lg:text-8xl indent-4'>Meet the Maestroller Stroller </h1>
                <p className='hidden lg:flex text-left  text-xl leading-loose '>Our award-winning stroller just got even better. The most premium features, thoughtful design, and next-level safety, at a price point that just makes sense.

                </p>

                <button className='relative shadow-2xl rounded-xl z-10 ml-20 w-[72%] justify-center flex items-center hover:bg-neutral-800 hover:text-neutral-200 transition-all bg-white p-4'>
                    <Link href={'/products/doublestroller'} className='flex flex-row items-center space-x-10 relative z-10'>
                        <h1 className=' flex'>Explore The Stroller</h1>
                        <HiArrowLongRight size={35} />
                    </Link>
                    <span className='absolute z-0 rounded-xl  animate-pingo inset-0  duration-700 transition-all   w-full bg-white'></span>

                </button>

            </span>

            <span className='w-full hidden  lg:flex  absolute -bottom-20 '>
                <span className='w-[72%] mx-auto bg-white/60 backdrop-blur-3xl shadow-2xl  py-2  rounded-xl justify-center flex items-center '>
                    <span className='flex  justify-between w-[72%] items-center'>
                        <span className='flex flex-col space-y-3 justify-center items-center'>
                            <RiSecurePaymentLine className='drop-shadow-xl' size={65} />
                            <h1 className=' tracking-wide font-semibold drop-shadow-md'>Secure Payment</h1>
                        </span>
                        <span className='flex flex-col space-y-3 justify-center items-center'>
                            <TbTruckDelivery className='drop-shadow-xl' size={65} />
                            <h1 className=' tracking-wide font-semibold drop-shadow-md'>Fast Delivery</h1>
                        </span>
                        <span className='flex flex-col space-y-3 justify-center items-center'>
                            <MdOutlineVerifiedUser className='drop-shadow-xl' size={65} />
                            <h1 className=' tracking-wide font-semibold drop-shadow-md'>Trusted</h1>
                        </span>

                    </span>
                </span>

            </span>


        </div>
    )
}

export default Billboard