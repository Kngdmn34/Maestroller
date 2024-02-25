import React from 'react';
import Safety from '@/public/images/MB19_QA_Detail_680x820_1x-40q_Inside-Seat.jpg';
import Image from 'next/image';
import Design from '@/public/images/MB19_QA_Detail_680x820_1x-40q_Canopy.jpg'
import Support from '@/public/images/charanjeet-dhiman-mHusyBu4bxM-unsplash.jpg'

const WhyUs = () => {
    return (
        <div className='w-full overflow-hidden mb-32 px-16 mt-20'>
            <p className='text-4xl md:text-5xl  mb-16 font-semibold drop-shadow-md'>Why Maestroller ?</p>

            <div className='flex flex-col justify-center space-y-20  space-x-0 md:flex-row md:space-x-20 md:space-y-0 w-full  align-top items-center'>

                <span className='flex flex-col  space-y-6 items-center justify-center'

                >
                    <span
                        style={{
                            backgroundImage: `url(/images/MB19_QA_Detail_680x820_1x-40q_Inside-Seat.jpg)`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        className='w-80 h-80 rounded-2xl shadow-2xl'
                    />

                    <h1 className='px-3 pt-6 drop-shadow-md text-3xl tracking-wider text-start w-full font-bold'>Safety</h1>
                    <p className='w-80 drop-shadow-md tracking-wide text-xl leading-relaxed '>Maestroller strollers exceed the required safety standards across nearly every dimension and have been independently certified by the JPMA.</p>
                </span>
                <div className='flex flex-col space-y-6 items-center justify-center'>
                    <span
                        style={{
                            backgroundImage: `url(/images/MB19_QA_Detail_680x820_1x-40q_Canopy.jpg)`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        className='w-80 h-80 rounded-2xl shadow-2xl'
                    />
                    <h1 className='px-3 pt-6 drop-shadow-md text-3xl tracking-wider text-start w-full font-bold'>Design</h1>
                    <p className='w-80 drop-shadow-md tracking-wide text-xl leading-relaxed '>Keeping today&#39;s families in mind, we incorporated better features, chose smarter materials, and put everything right where you&#39;ll want it.</p>
                </div>
                <div className='flex flex-col space-y-6 items-center justify-center'>
                    <span
                        style={{
                            backgroundImage: `url(/images/charanjeet-dhiman-mHusyBu4bxM-unsplash.jpg)`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        className='w-80 h-80 rounded-2xl shadow-2xl'
                    />
                    <h1 className='px-3 pt-6 drop-shadow-md text-3xl tracking-wider text-start w-full font-bold'>Support</h1>
                    <p className='w-80 drop-shadow-md tracking-wide text-xl leading-relaxed '>Need a hand? You can  email us for help evaluating your stroller needs, choosing the right accessories, and more.</p>
                </div>
            </div>

        </div>
    )
}

export default WhyUs