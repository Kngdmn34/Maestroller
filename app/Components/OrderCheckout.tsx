'use client'

import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import useCart from '../hooks/use-cart';
import toast from 'react-hot-toast';
import { stat } from 'fs';
import { cn } from '@/app/utils/utils'
import Currency from '../context/Currency';
import { FaCreditCard } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js"

const OrderCheckout = () => {

    const searchParams = useSearchParams()
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success("Payment completed", { duration: 1000 })
            removeAll()
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong")
        }
    }, [searchParams, removeAll])





    const onCheckout = async () => {
        try {
            const response = await axios.post('/api/checkout', {
                productIds: items.map((item) => item),
            });
            console.log(response.data)
            window.location = response.data.url;
        } catch (error) {
            console.error(error);

        }
    };
    return (
        <div className='w-[96%] flex flex-col justify-center items-center mx-auto transition-all relative lg:absolute bottom-5 rounded-md  bg-gray-100/20'>
            <span className='p-2  w-full'>
                <h1 className='lg:flex hidden pt-3 border-t-2 text-2xl text-neutral-800 tracking-wide border-neutral-700/60 px-4 font-semilight'> Order </h1>
                <div className='flex  text-neutral-800  w-[80%] mx-auto justify-between items-center lg:border-t border-neutral-600 pt-4'>
                    <span className='text-base font-medium text-neutral-800'>
                        Order Total
                    </span>
                    <Currency value={totalPrice} />
                </div>
            </span>
            <button disabled={items.length === 0} onClick={onCheckout} className={cn('mt-3 md:mt-0 justify-center items-center flex flex-row space-x-3 bg-neutral-800 text-neutral-100 w-[96%]  hover:shadow-lg hover:shadow-neutral-700/50 tracking-wider disabled:shadow-none disabled:scale-100 disabled:bg-gray-800 disabled:opacity-45 disabled:cursor-not-allowed hover:scale-105  transition-all  rounded-md  p-2 ')}>
                <p>CHECKOUT</p> <FaCreditCard size={25} />
            </button>
        </div>
    )
}

export default OrderCheckout