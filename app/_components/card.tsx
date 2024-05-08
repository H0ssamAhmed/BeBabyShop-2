import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CarditemProps {
    item: {
        title: string,
        discrption: string,
        srcImg: number | string,
    }
}

const Carditem = (item: CarditemProps) => {
    return (
        <div className='flex items-center text-center md:text-start flex-col-reverse md:flex-row  bg-[#F0F5F7] hover:-translate-y-2 transition border p-8 rounded-sm'>
            <Link href='/shop' className="flex flex-col">
                <h1 className="font-semibold text-xl">{item.item.title}</h1>
                <p className="my-3 text-gray-500">{item.item.discrption} </p>
                <Button size='sm' className=" text-black mx-auto  w-fit py-2 flex items-center gap-2 bg-transparent transition px-4">Buy now <ArrowRightIcon /></Button>
            </Link>

            <div>
                <Image className="object-cover" src={`/assets/home/babyshop2-home-cat${item.item.srcImg}.webp`} loading='lazy' width={200} height={20} alt="image " />

            </div>
        </div>)

}

export default Carditem