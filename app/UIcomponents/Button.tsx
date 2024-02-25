'use client'

import React, { MouseEventHandler } from 'react'
import useCart from '../hooks/use-cart'
import { Product } from '@/types';
import { FiShoppingCart } from "react-icons/fi";

interface ButtonProps {
    data: Product

}

const Button: React.FC<ButtonProps> = ({ data }) => {

    const cart = useCart()

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)

    }

    return (
        <button onClick={addToCart} className='border-4 w-1/2 flex flex-row hover:shadow-black space-x-4  text-neutral-100 hover:bg-neutral-100 hover:text-neutral-800 text-xl rounded-xl shadow-md hover:shadow-xl hover:scale-110  p-2 bg-neutral-800  duration-1000 items-center justify-center  transition-all '> <p>Add to cart </p><FiShoppingCart size={25} /></button>
    )
}

export default Button