import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface props {
    header: string,
    description: string,
    image: string,
    bgColor: string
}

const OfferCard = ({ header, description, image, bgColor }: props) => {
    return (
        <div className={cn('p-4 w-full flex flex-col items-center justify-center rounded-sm', bgColor)}>
            <h2 className=' text-2xl mx-auto font-semibold first-letter:underline  ' >{header}</h2>
            <p>{description}</p>
            <Image className='mx-auto p-4' src={image} width={400} height={400} alt='Offer Image' loading='lazy' />
            <Button variant='outline' size='sm' className=' w-fit p-5 mx-auto'>Buy Now <MdKeyboardArrowRight /></Button>
        </div>
    )
}

export default OfferCard