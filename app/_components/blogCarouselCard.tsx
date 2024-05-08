'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLink, FaRegClock } from 'react-icons/fa6'
import { MdPerson } from 'react-icons/md'

interface CarouselProps {
    image: string,
    title: string,
    description: string,
    group: string,
    data: string,
}
const BlogCarouselCard = ({ image, title, description, group, data }: CarouselProps) => {
    document.title = 'Blog - BeBabyShop 2'

    return (
        <Link href={`/blog/${title.trim().split(' ').join('_')}`}>
            <div className='relative rounded-sm border border-black grid grid-cols-1 lg:grid-cols-6'>
                <FaLink className='w-10 h-10 text-gray-400 right-4 top-4 absolute hover:text-black bg-white p-2 rounded-full  cursor-pointer opacity-0 transition group-hover:opacity-100 ' />
                <div className='p-8 col-span-2'>
                    <div className='my-4 flex items-center justify-start gap-4'>
                        <div className='text-sm flex items-center justify-start gap-1'>
                            <MdPerson className=' font-semibold' />
                            <p>{group}</p>
                        </div>
                        <div className='my-4 flex items-center justify-start gap-1'>
                            <FaRegClock className='font-extrabold' />
                            <p>{data}</p>
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold my-4'>{title}</h1>
                    <p className='leading-6 my-4'>{description}</p>
                    <button className="text-primary hover:text-black hover:underline">read more</button>
                </div>
                <div className='col-span-4'>
                    <Image loading='lazy' className='w-full h-full' src={image} width={4000} height={4000} alt={title} />
                </div>
            </div>
        </Link>
    )
}

export default BlogCarouselCard