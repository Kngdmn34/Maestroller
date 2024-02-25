import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Options = () => {
    return (
        <span className='w-full mb-16 mt-6    lg:hidden flex   '>
            <span className='w-[74%] mx-auto flex flex-col space-y-16 items-center justify-center'>
                <span className='w-full flex justify-start items-start'>
                    <span className='flex drop-shadow-2xl w-44 h-44 p-6 justify-center items-center flex-col space-y-2 rounded-full bg-neutral-800 text-neutral-100'>
                        <RiSecurePaymentLine className='drop-shadow-xl' size={65} />
                        <h1 className=' tracking-wide font-semibold drop-shadow-md'>Secure </h1>
                        <h1 className=' tracking-wide font-semibold drop-shadow-md'>Payment </h1>
                    </span>
                </span>

                <span className='w-full flex justify-end items-end'>
                    <span className='flex drop-shadow-2xl  w-44 h-44 p-6 justify-center items-center flex-col space-y-2 rounded-full bg-neutral-800 text-neutral-100'>
                        <TbTruckDelivery className='drop-shadow-xl' size={65} />
                        <h1 className=' tracking-wide font-semibold drop-shadow-md'>Fast Delivery</h1>
                    </span>
                </span>
                <span className='w-full flex justify-start items-start'>
                    <span className='flex drop-shadow-2xl  w-44 h-44 p-6 justify-center items-center flex-col space-y-2 rounded-full bg-neutral-800 text-neutral-100'>
                        <MdOutlineVerifiedUser className='drop-shadow-xl' size={65} />
                        <h1 className=' tracking-wide font-semibold drop-shadow-md'>Trusted</h1>
                    </span>
                </span>

            </span>

        </span>
    )
}

export default Options