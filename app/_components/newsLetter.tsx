import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Desc from './desc'

const NewsLetter = () => {
    return (
        <div className='container my-4'>
            <div className='border-dashed border-black border grid grid-cols-1 md:grid-cols-2 '>
                <div className='p-4  flex items-center justify-start gap-2'>
                    <Image src='/assets/babyshop2-newsletter-pic1.svg' width={100} height={100} alt='newsletter' loading='lazy' />
                    <div className='py-16 pl-4 lg:pr-40 border-r-0 border-gray-300 md:border-r-2'>
                        <p>Sign up for the newsletter</p>
                        <h1 className=' my-2 font-semibold text-lg'>Receive a  <Desc text='10%' bg="bg-[#f6dcb8]" /> discount on your purchases</h1>
                    </div>
                </div>

                <form className='py-16 pl-8   flex items-start justify-center gap-2 flex-col'>
                    <h1 className=' my-2 font-semibold text-lg'>Join our newsletter.</h1>
                    <input
                        type='email'
                        className=' px-4 py-2 my-2 bg-gray-100 rounded-lg lg:w-4/5'
                        placeholder=' E-mail address*' />
                    <Button variant='outline' type='submit'>Subscribe</Button>

                </form>
            </div>
        </div>
    )
}

export default NewsLetter