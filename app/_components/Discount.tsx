import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Discount = () => {
    return (
        <div className='p-4 h-full bg-[#cadee5]'>
            <div>
                <h1 className='text-3xl'>Special offer</h1>
                <h5>Baby slippers</h5>
            </div>
            <Image loading='lazy' src='/assets/babyshop2-product-pic8-350x350.webp' className=' mx-auto' alt='slipper' width={200} height={200} />
            <div className='flex gap-y-4 items-center justify-evenly'>
                <div className=' text-center'>
                    <p className='font-semibold text-lg'>00</p>
                    <p className='font-normal text-[12px]'>Day</p>
                </div>
                <div className=' text-center'>
                    <p className='font-semibold text-lg'>00</p>
                    <p className='font-normal text-[12px]'>hours</p>
                </div>
                <div className=' text-center'>
                    <p className='font-semibold text-lg'>00</p>
                    <p className='font-normal text-[12px]'>Minutes</p>
                </div>
                <div className=' text-center'>
                    <p className='font-semibold text-lg'>00</p>
                    <p className='font-normal text-[12px]'>seconds</p>
                </div>
            </div>
            <Button variant='outline' size='lg' className=" mx-auto mt-5 text-black border-black border w-fit py-4 flex items-center gap-4 px-4">Buy now <IoIosArrowForward /></Button>
        </div>
    )
}

export default Discount