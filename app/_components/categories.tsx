
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

interface Showvalues {
    showNav: boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Categories = ({ showNav, setShowNav }: Showvalues) => {
    const [categories, setCategories] = useState<{ slug: string, name: string, icon: string }[]>([])
    useEffect(() => {
        fetch('https://competition-e-commerce-backend-1.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data?.categories))
    }, [])

    return (
        <div className={`${showNav ? " translate-x-0 opacity-100" : 'translate-x-[-400px] opacity-0'} z-30 duration-700  fixed left-0 top-0 h-full  overflow-y-scroll pr-4 bg-white`}
            onClick={() => setShowNav(!showNav)}
        >
            <div className=' flex items-center justify-between p-4'>
                <h2 className=" font-semibold">Categories</h2>
                <IoMdClose className=' hover:scale-110 hover:rotate-180 text-3xl p-1 cursor-pointer text-primary transition-all border rounded-full border-transparent hover:border-primary' />
            </div>
            <div className='ml-4 flex flex-col items-center justsify-start gap-y-1  text-left'>


                {categories.map((category, index) => {
                    return (<Link
                        className=' flex items-center justify-start hover:bg-[#FFF1E5] transition py-2 px-1 gap-4 w-full'
                        href={`/shop/products?category=${category.slug}`} key={index}>
                        <Image loading='lazy' src={category.icon} width={40} height={40} alt={category.slug} />
                        {category.name}
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default Categories
