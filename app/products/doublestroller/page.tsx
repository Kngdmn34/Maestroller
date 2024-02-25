"use client"
import { Metadata, ResolvingMetadata } from 'next'


import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

import { Pinyon_Script } from 'next/font/google';
import useCart from '@/app/hooks/use-cart';
import Button from '@/app/UIcomponents/Button';
import axios, { AxiosResponse } from 'axios';
import { Product } from '@/types';
import { url } from 'inspector';



import { useState } from 'react';
import Description from '../components/Description';

const DoubleStroller = () => {


    const images = [
        {
            id: 1,
            image: '/images/doubleimage.png'
        },
        {
            id: 2,
            image: '/images/doublestrollerImage.png'
        },
        {
            id: 3,
            image: '/images/doubleblack.png'
        },
        {
            id: 4,
            image: '/images/doubleblack.png'
        }
        ,
        {
            id: 5,
            image: '/images/doubleblue.png'
        },
        {
            id: 6,
            image: '/images/doublesky.png'
        },
        {
            id: 7,
            image: '/images/doublepink.png'
        },
        {
            id: 8,
            image: '/images/doublegrn.png'
        }

    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [colors, setColors] = useState("black")

    const handleImageClick = (image: any) => {
        setSelectedImage(image);

    };

    const data = { id: 2, name: "Double Stroller", price: 450, color: colors }



    const handleCustomization = (colors: string) => {

        if (colors === "black") {
            setSelectedImage(images[3])
            setColors("black")
        }
        if (colors === "blue") {
            setSelectedImage(images[4])
            setColors("blue")
        }
        if (colors === "sky") {
            setSelectedImage(images[5])
            setColors("sky")
        }
        if (colors === "pink") {
            setSelectedImage(images[6])
            setColors("pink")
        }
        if (colors === "grn") {
            setSelectedImage(images[7])
            setColors("green")
        }

    }
    //<Image
    //   src={selectedImage.image}
    // alt={`Selected Image`}
    //width={400}
    //height={400}

    //objectFit='contain'
    //className='shadow-xl rounded-xl'
    ///>

    return (
        <main className='mt-11  w-full'>
            <div className='w-[94%] lg:w-[70%] min-h-screen mx-auto flex-col lg:flex-row flex items-center'>
                <div className='w-full flex items-center flex-col space-y-10 lg:space-y-0 space-x-0 lg:flex-row lg:space-x-10'>
                    <div className='flex shadow-xl space-x-5 flex-row lg:flex-col bg-neutral-100 p-2 rounded-xl  space-y-0 lg:space-x-0  lg:space-y-8 '>
                        {images.slice(0, 3).map((img) => (
                            <span
                                key={img.id}
                                onClick={() => handleImageClick(img)}
                                style={{
                                    backgroundImage: `url(${img.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',

                                    cursor: 'pointer'
                                }}
                                className={` shadow-lg hover:brightness-125 rounded-xl w-20 h-20 aspect-square`}
                            ></span>
                        ))}
                    </div>
                    <span
                        style={{
                            backgroundImage: `url(${selectedImage.image})`,
                            backgroundSize: 'cover',
                            objectFit: 'contain',
                            backgroundPosition: 'center',

                        }}


                        className='shadow-xl rounded-xl w-72 h-72 lg:w-96 lg:h-96  '
                    />

                </div>
                <div className='flex w-full flex-col space-y-10 pt-11 lg:pt-0  items-center lg:px-16'>
                    <label className='text-3xl mb-6 w-full text-nowrap p-2 border-b-2  border-neutral-700/60 tracking-wider'>STROLLER DOUBLE</label>
                    <p className='indent-4 px-3 first-letter:uppercase cursor-default'>
                        Designed with maximum versatility to grow with your child and convert to a double if your family expands.
                    </p>
                    <div id="colors" className='flex m w-full flex-col space-y-4 justify-start items-start'>
                        <label className='text-xl font-semibold'>Color</label>
                        <span className='flex px-11  flex-row space-x-5 items-center justify-start'>
                            <button onClick={() => handleCustomization("black")} className='w-6 h-6  aspect-square rounded-full bg-black'></button>
                            <button onClick={() => handleCustomization("blue")} className='w-6 h-6  aspect-square rounded-full  bg-cyan-900'></button>
                            <button onClick={() => handleCustomization("sky")} className='w-6 h-6  aspect-square rounded-full  bg-sky-300'></button>
                            <button onClick={() => handleCustomization("pink")} className='w-6 h-6  aspect-square rounded-full  bg-pink-300'></button>
                            <button onClick={() => handleCustomization("grn")} className='w-6 h-6  aspect-square rounded-full  bg-emerald-300'></button>
                        </span>
                    </div>
                    <div className='w-full  flex justify-between'>
                        <p className='p-2 flex flex-row items-center text-3xl drop-shadow-md font-bold space-x-2'>
                            <p>450.00</p>
                            <p>$</p>
                        </p>
                        <Button data={data} />
                    </div>
                </div>
            </div>
            <Description />
        </main>
    );
}

export default DoubleStroller