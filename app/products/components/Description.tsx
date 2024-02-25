import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Folded from '@/public/images/folded.png';
import Image from 'next/image';
import Stokage from '@/public/images/wesh-removebg-preview.png';
import Smoth from '@/public/images/smooth.png';


const Description = () => {
    return (
        <div className='mt-20  w-full mb-32'>
            <div className='p-2 flex flex-row px-3 lg:space-x-20 bg-neutral-900  shadow-lg text-neutral-100 justify-center items-center w-full'>
                <span className='flex flex-row  space-x-5 items-center justify-center'><MdLocalShipping size={70} />
                    <p>
                        Free shipping on orders $45+


                    </p></span>

                <span className='flex flex-row  space-x-5 items-center justify-center'><HiOutlineClipboardDocumentList size={70} />
                    <p>
                        12 months warranty
                    </p></span>

            </div>

            <div className='mt-32 w-full'>
                <div className='flex flex-col space-y-32'>
                    <span className='lg:px-36 flex-col space-y-9 flex lg:flex-row items-center'>
                        <p className='flex lg:px-16 flex-col space-y-20 items-center lg:items-start'>
                            <p className='text-4xl  font-bold'>One-hand fold</p>

                            <p className=' tracking-wide px-3 indent-4 leading-relaxed text-xl'>For most parents, folding and unfolding their stroller is a multiple-times-per-day event. So it&#39;s no surprise that our stroller&#39;s easy one-hand fold (with one or to seats) has become so beloved among Mockingbird parents. It even automatically locks and stands upright when folded. And with the new spring-loaded unlock on our 2.0 model, the process of unfolding the stroller just got even easier too.</p>
                        </p>
                        <span className='md:hidden w-80 h-80 rounded-full' style={{ backgroundImage: `url(/images/folded.png)`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                        <Image className='rounded-full hidden md:flex drop-shadow-2xl' src={Folded} width={400} height={400} alt='' />
                    </span>


                    <span className='lg:px-36 flex-col space-y-9 flex lg:flex-row items-center'>

                        <span className='md:hidden w-80 h-80 rounded-full' style={{ backgroundImage: `url(/images/wesh-removebg-preview.png)`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                        <Image className='rounded-full md:flex hidden drop-shadow-2xl' src={Stokage} width={500} height={400} alt='' />
                        <p className='flex lg:px-16 flex-col space-y-20 items-center lg:items-end'>
                            <p className='text-4xl text-left px-6 font-bold'>Storage for everything

                            </p>

                            <p className=' tracking-wide px-3 indent-4 leading-relaxed text-xl'>Our XL stroller basket holds a whopping 25 lbs, so you can bring along everything you need – and everything you&#39;re not sure you need, but maybe you want to bring it just in case 🙂. There’s also an enclosed pocket inside the basket to keep valuables secure, as well as a seatback pocket designed to keep your phone easily accessible while strolling.</p>
                        </p>
                    </span>

                    <span className='lg:px-36 flex-col space-y-9 flex lg:flex-row items-center'>
                        <span className='md:hidden w-80 h-80 rounded-full' style={{ backgroundImage: `url(/images/smooth.png)`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                        <p className='flex lg:px-16 flex-col space-y-20 items-center lg:items-start'>
                            <p className='text-4xl font-bold'>Smoothest stroll

                            </p>

                            <p className='px-3 tracking-wide indent-4 leading-relaxed text-xl'>All-wheel suspension and shock-absorbing tires that never go flat guarantee a comfortable ride no matter where life takes you. A one-step footbrake and front-locking wheels mean you’re equipped for any surface. And with our new 2.0 stroller frame, you’ll experience our smoothest stroll ever.</p>
                        </p>

                        <Image className='rounded-full hidden md:flex drop-shadow-2xl' src={Smoth} width={400} height={400} alt='' />
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Description