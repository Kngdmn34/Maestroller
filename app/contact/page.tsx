import Image from 'next/image'
import React from 'react';
import HelpImage from '@/public/images/helpimage.png';
import { MdMailOutline } from "react-icons/md";
import Link from 'next/link';
import { MdOutgoingMail } from "react-icons/md";


const ContactPage = () => {
    return (
        <div>
            <div className='hidden md:flex flex-col'>
                <div className='pt-32  mb-16 flex flex-row justify-center items-center space-x-5 w-full px-44 '>
                    <Image className='rounded-2xl shadow-lg' src={HelpImage} width={500} height={500} alt='support' />
                    <span className='flex flex-col space-y-10 justify-center items-start'>
                        <h1 className='text-4xl drop-shadow-md font-semibold tracking-wide'>We&#39;re here to help.</h1>
                        <p className='indent-5 drop-shadow-md px-11 text-xl'>

                            The Maestroller Team is here for when you need a product recommendation, a setup tip, or even just a reminder that you&#39;re an amazing parent. Seriously, reach out to say hi!</p>
                    </span>
                </div>
                <div className='w-full flex flex-col space-y-3 justify-center items-center '>
                    <span className="w-full flex flex-col space-y-7 justify-center items-center mx-auto bg-neutral-200 p-6 text-neutral-800 rounded-2xl shadow-lg">
                        <MdMailOutline size={45} />
                        <h1 className='text-4xl font-semibold'>Write to us </h1>
                        <p>let us know how we can help!</p>
                        <a className='p-3 shadow-xl flex-row space-x-4 flex items-center tracking-wider rounded-2xl bg-neutral-900 text-neutral-100' href="mailto:anassdrake@gmail.com"><p>Connect</p> <MdOutgoingMail size={25} /></a>
                    </span>
                </div>
            </div>

            <div className='flex md:hidden'>
                <div className='flex flex-col w-96 mx-auto'>
                    <div className='pt-11   mb-16 flex flex-col justify-center items-center space-y-10 w-full '>
                        <Image className='rounded-2xl shadow-lg' src={HelpImage} width={350} height={350} alt='support' />
                        <span className='flex flex-col space-y-10 justify-center items-center'>
                            <h1 className='text-2xl drop-shadow-md font-semibold tracking-wide'>We&#39;re here to help.</h1>
                            <p className='indent-5 drop-shadow-md tracking-wide px-11 text-xl'>

                                The Maestroller Team is here for when you need a product recommendation, a setup tip, or even just a reminder that you&#39;re an amazing parent. Seriously, reach out to say hi!</p>
                        </span>
                    </div>
                    <div className='w-96 mb-16 flex flex-col space-y-3 justify-center items-center '>
                        <span className="w-full flex flex-col space-y-7 justify-center items-center mx-auto bg-neutral-200 p-6 text-neutral-800 rounded-2xl shadow-lg">
                            <MdMailOutline size={45} />
                            <h1 className='text-4xl font-semibold'>Write to us </h1>
                            <p>let us know how we can help!</p>
                            <a className='p-3 shadow-xl flex-row space-x-4 flex items-center tracking-wider rounded-2xl bg-neutral-900 text-neutral-100' href="mailto:anassdrake@gmail.com"><p>Connect</p> <MdOutgoingMail size={25} /></a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage