'use client'
import Crumb from '@/app/_components/breadCrunb'
import Desc from '@/app/_components/desc'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

const Contact = () => {
  document.title = 'Contact - BeBabyShop 2'

  return (
    <div className='my-4'>
      <Crumb two={{ text: 'Contact', slug: 'contact' }} />
      <div className="container">
        <div className='my-6'>
          <Desc text="contact" bg='bg-[#f6dcb8]' />
          <h1 className='font-bold text-4xl my-8'>Contact with us</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 p-2   gap-4">
          <div>
            <h2 className='font-bold text-2xl my-4'>Our Headquarters</h2>
            <p className='w-1/2 my-4'>Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia</p>
            <a className='flex items-center justify-start gap-4 my-4 font-bold' href="tel:+61383766284" > <FaPhoneAlt /> +61 (0) 3 8376 6284</a>
            <a className='flex items-center justify-start gap-4 my-4 font-bold' href="mailto:noreplay@envato.com" ><IoMail /> noreplay@envato.com</a>
            <div className='my-4 ml-4 relative'>
              <div className='flex items-center gap-4 justify-start ml-2 before:-ml-6 before:bg-slate-300 before:absolute   before:content-[" "] before:w-2 before:h-full'>
                <FaClock />
                <div>
                  <p>Monday - Sunday</p>
                  <p>06:00 AM - 10:00 PM </p>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-black p-4 rounded-md'>
            <h1 className='font-semibold text-xl py-2'>Have a question? Write to us!</h1>
            <form className=' flex items-center justify-center flex-col '>
              <input className='w-full border focus:border-teal-400 focus:outline-none outline-none py-1 pl-1 text-teal-400 rounded-sm my-3 outline-[1px]' type='text' placeholder='Full name*' required />
              <input className='w-full border focus:border-teal-400 focus:outline-none outline-none py-1 pl-1 text-teal-400 rounded-sm my-3 outline-[1px] appearance-none' content='this' type='number' placeholder='Phone*' required />
              <input className='w-full border focus:border-teal-400 focus:outline-none outline-none py-1 pl-1 text-teal-400 rounded-sm my-3 outline-[1px]' type='email' placeholder='E-mail address*' required />
              <textarea className='w-full border focus:border-teal-400 focus:outline-none outline-none py-1 pl-1 text-teal-400 rounded-sm my-3 outline-[1px] d-none h-40' placeholder='Your Message...' required />
              <Button variant='outline' className=' mr-auto'> Send a message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact