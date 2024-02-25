"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import useCart from '../hooks/use-cart';
import CartSlider from './CartSlider';
import Link from 'next/link';

const Navbar = () => {

    const [Slider, setSlider] = useState(false)
    const router = useRouter()

    const [navbar, setNavbar] = useState(false)

    const cart = useCart()

    const SliderToggle = () => {
        setSlider(!Slider)
    }


    return (
        <nav className=' sticky top-0 lg:fixed lg:top-1  mx-auto items-center  z-20 w-full '>
            <span className='flex  lg:rounded-xl backdrop-blur-2xl   bg-white/90 shadow-lg     justify-between mx-auto   items-center py-4 w-full md:w-[72%] '>
                <span className='flex flex-row space-x-10 items-center'>
                    <Link href={'/'} className='text-3xl px-11 font-semibold tracking-wide font-sans'>Maestroller</Link>


                </span>
                <span className='flex mr-16 '>
                    <button onClick={SliderToggle} className='relative hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md z-20 items-center'>

                        <FiShoppingCart size='20' className='' />
                        <span className='absolute left-0 top-0  rounded-full  text-xs z-10'>{cart.items.length > 0 && <p className='absolute -left-1 -top-1 bg-red-700  text-white flex justify-center items-center rounded-full w-3 h-3'></p>}</span>

                    </button>
                </span>

            </span>
            {Slider &&
                <div >
                    <CartSlider Slider={Slider} SliderToggle={SliderToggle} />
                </div>
            }
        </nav>
    )
}

export default Navbar