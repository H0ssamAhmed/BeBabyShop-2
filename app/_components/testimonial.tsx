import Image from 'next/image'
import React from 'react'
import { PiQuestionDuotone } from 'react-icons/pi'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
interface testimonialProps {
    header: string,
    opinion: string,
    title: string,
    name: string,
    imageSrc: string,
}

const Testimonial = ({ header, opinion, title, name, imageSrc }: testimonialProps) => {
    return (
        <div className='rounded-md'>
            <RiDoubleQuotesR className='w-14 h-14 p-2 rounded-full bg-white' />
            <h1 className='text-xl my-4 font-semibold'>{header}</h1>
            <p className='text-gray-500'>{opinion}</p>
            <div className="flex items-center pt-4 justify-start gap-1">
                <Image className=' rounded-full' src={imageSrc} width={50} height={50} alt='person imag' loading='lazy' />
                <p>{name} / </p>
                <p className=' text-gray-500'>{title} </p>

            </div>
        </div>
    )
}

export default Testimonial