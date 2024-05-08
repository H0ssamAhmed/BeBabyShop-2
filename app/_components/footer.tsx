import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialPintarest } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
const Footer = () => {
  return (
    <div className='container my-8'>
      <div className='py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <div className=' flex flex-col justify-between items-start'>
          <Link href='' className='group hover:scale-110 duration-500 transition-all flex items-center justify-center'>
            <TfiHeadphoneAlt className=' w-8 h-8' />
            <hr className=' rotate-90 w-4 bg-orange-500' />
            <div className=''>
              <p className=' text-gray-500 duration-700 group-hover:text-primary'>Got a questions? Call us 24/7!</p>
              <p className=' font-bold'>+61 (0) 383 766 284</p>
            </div>
          </Link>
          <p className=' text-gray-500'>Level 13, 2 Elizabeth St, Melbourne, <br />
            Victoria 3000, Australia
          </p>

          <ul className=' flex items-center justify-start gap-4'>
            <Link href='/' className=' hover:text-primary hover:border-primary transition-all  border border-gray-500  rounded-full  p-2'><SlSocialFacebook className='w-6 h-6' /></Link>
            <Link href='/' className=' hover:text-primary hover:border-primary transition-all  border border-gray-500  rounded-full  p-2'><SlSocialInstagram className='w-6 h-6' /></Link>
            <Link href='/' className=' hover:text-primary hover:border-primary transition-all  border border-gray-500  rounded-full  p-2'><SlSocialPintarest className='w-6 h-6' /></Link>
          </ul>
        </div>


        <div>
          <h6 className='my-4 text-xl font-normal'>Customer service </h6>
          <ul>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Orders</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Downloads</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Addresses</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Account details</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Lost password</li>
          </ul>
        </div>
        <div>

          <h6 className='my-4 text-xl font-normal'>   Useful links </h6>
          <ul>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Contact us</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>About us</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Shipping & Returns</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Refund Policydetails</li>
          </ul>
        </div>
        <div>

          <h6 className='my-4 text-xl font-normal'>   Delivery </h6>
          <ul>
            <li className=' hover:text-primary transition cursor-pointer my-1'>How it Works</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>Free Delivery</li>
            <li className=' hover:text-primary transition cursor-pointer my-1'>FAQ</li>

          </ul>
        </div>

      </div >
      <hr />
      <div className='py-4 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className=' text-center md:text-start'>
          <p>&copy;  {new Date().getFullYear()} Betheme by Muffin group | All Rights Reserved | website created using Next.JS and TaillwindCSS</p>
        </div>
        <div className=' flex items-center justify-end gap-1'>
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Visa.svg' alt='Visa' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/DinersClub.svg' alt='DinersClub' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Amex.svg' alt='Amex' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Discover.svg' alt='Discover' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Mastercard.svg' alt='Mastercard' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Maestro.svg' alt='Maestro' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/Stripe.svg' alt='Stripe' width={40} height={40} loading='lazy' />
          <Image src='https://themes.muffingroup.com/be/babyshop2/wp-content/themes/betheme/images/payment-methods/PayPal.svg' alt='PayPal' width={40} height={40} loading='lazy' />
        </div>
      </div>
      <p className=' text-center w-fit mx-auto my-8'>Created with ❤️ by {" "}
        <a className='hover:underline text-primary transition duration-1000' href='https://www.linkedin.com/in/hossam-ahmed-/' target='_blank'>
          Hossam Ahmed
        </a>
      </p>
    </div >
  )
}

export default Footer