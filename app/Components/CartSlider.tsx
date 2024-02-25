'use client'

import React from 'react';


import { IoMdClose } from "react-icons/io";
import useCart from '../hooks/use-cart';
import Image from 'next/image';
import { FaMinusCircle } from "react-icons/fa";
import { Product } from '@/types';

import { TiDelete } from "react-icons/ti";
import OrderCheckout from './OrderCheckout';
import HeaderImg from '@/public/images/MB19_Rear-3QR_Blk-Penny-Dots_27962.png';
import HeaderTwoImg from '@/public/images/Mockingbird_Double_Stroller_01_Black-handlebar-frame-_-Black-child-bar-seat-_-BlackWindowpane-canopy_Gray_03fe689a-189d-44b4-aabc-2fcd945ab5fd.png'

interface CartSliderProps {

    Slider: boolean
    SliderToggle: () => void
}

const CartSlider: React.FC<CartSliderProps> = ({ Slider, SliderToggle }) => {

    const cart = useCart()



    return (
        <>
            <main className='absolute right-6 top-0   backdrop-blur-3xl border-2 border-neutral-800  bg-neutral-100/20 h-screen  text-neutral-800 rounded-2xl hidden  z-0 md:flex justify-center items-start'>
                <aside className={`${Slider ? `w-72 justify-end h-screen translate-x-0  opacity-100  ` : `hidden `}  ease-in-out transition-all duration-700 delay-500`} >
                    <div className='w-full flex justify-center items-center flex-col space-y-3 '>
                        <button onClick={SliderToggle} className='p-2 drop-shadow-md text-neutral-700/60  flex justify-start'>

                            <IoMdClose size='20' />
                        </button>
                        <h1 className='mx-3 cursor-default font-semibold drop-shadow-md'>Shopping Cart</h1>
                        <ul className='w-full flex flex-col items-center space-y-2'>
                            {cart.items.length == 0 && <p className='flex w-full h-72 drop-shadow-md justify-center items-center italic'>No Items Found</p>}
                            {cart.items.map((item) => (
                                <span key={item.id} className='relative w-[96%] p-1  mx-auto flex flex-row space-x-3 border-b-2 border-neutral-700/60'>


                                    <span className='w-full flex flex-col px-6 space-y-1 '>
                                        <text className='text-left'>{item.name.slice(0, 15)}</text>
                                        <text>{item.color}</text>
                                        <text className='w-full text-sm flex justify-end'>{item.price.toFixed(2)} $ </text>
                                    </span>
                                    <button onClick={() => cart.removeItem(item.id)} className='absolute hover:scale-105 transition-all top-0 right-0'><FaMinusCircle size='20' /></button>
                                </span>
                            ))}

                        </ul>


                        <OrderCheckout />

                    </div>
                </aside>
            </main>


            <div className={`absolute  backdrop-blur-md p-4  backdrop-brightness-75 z-20 h-screen flex md:hidden justify-center items-end w-full inset-0 bottom-4   `}>

                <div className='w-[96%] flex justify-center shadow-lg   items-center mx-auto rounded-2xl p-6 bg-white'>

                    <span className='flex w-full flex-col '>
                        <button onClick={SliderToggle} className='p-2 drop-shadow-xl text-neutral-950  flex justify-center items-center'>

                            <IoMdClose size='20' />
                        </button>
                        {cart.items.length == 0 && <p className='flex w-full h-20 drop-shadow-md justify-center items-center italic'>No Items Found</p>}
                        {cart.items.map((item) => (
                            <span key={item.id} className='relative w-[96%] p-1  mx-auto flex flex-row space-x-3 border-b-2 border-neutral-700/60'>


                                <span className='w-full flex flex-col px-6 space-y-1 '>
                                    <text className='text-left'>{item.name.slice(0, 15)}</text>
                                    <text>color : {item.color}</text>
                                    <text className='w-full font-semibold text-sm flex justify-end'>{item.price.toFixed(2)} $ </text>
                                </span>
                                <button onClick={() => cart.removeItem(item.id)} className='absolute hover:scale-105 transition-all top-0 right-0'><FaMinusCircle size='20' /></button>

                            </span>

                        ))}
                        <OrderCheckout />
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartSlider