"use client"
import Desc from '@/app/_components/desc'
import Image from 'next/image'
import React from 'react'
import Promotions from '../../data/Promotion .json'
import TeamMembers from '../../data/TeamMembers.json'
import SectionHeader from '@/app/_components/sectionHeader'
import Crumb from '@/app/_components/breadCrunb'
import { Button } from '@/components/ui/button'
import { IoIosArrowForward } from 'react-icons/io'
const Page = () => {
    // document.title = 'About Us - BeBabyShop 2'

    return (
        <div>
            <Crumb two={{ text: 'About Us', slug: 'about_us' }} />
            <section className='container grid grid-cols-4 gap-4 my-8'>
                <div className='col-span-5 md:col-span-3 lg:col-span-2'>
                    <h1 className='my-4 text-3xl'>Promotion on clothes from previous collections</h1>
                    <p>In fusce a pellentesque neque urna consectetur consectetur odio. Dignissim congue massa arcu varius sapien integer gravida. Blandit amet etiam vel aenean eget.</p>
                </div>
            </section>
            <section className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className=' hidden lg:block'></div>
                {Promotions.map(Promotion => {
                    return (<div className='flex flex-col gap-4 items-start p-2' key={Promotion.number}>
                        <Desc text={Promotion.number} bg='bg-[#f6dcb8]' />
                        <h4 className='text-2xl font-semibold'>{Promotion.header}</h4>
                        <p>{Promotion.descript}</p>
                    </div>)
                })}
            </section>
            <section className=' py-8 bg-[#f6dcb8]'>
                <SectionHeader smText='We love making kids smile' lgText='Our Team Members' />
                <div className=' flex items-center  justify-center gap-3 flex-wrap'>
                    {TeamMembers.map((member) => {
                        return (
                            <div className='group rounded-md overflow-hidden relative sm:last:col-span-3 lg:col-span-1 xl:first:translate-y-4 first:translate-y-0 xl:last:translate-y-4 last:translate-y-0 ' key={member.name}>
                                <div className=' w-full h-full'>
                                    <Image src={member.image} alt={`${member.title} image`} width={400} height={400} loading='lazy' />
                                </div>
                                <div className='absolute text-white transition duration-500 group-hover:bg-[#f6dcb8]/40 w-full h-1/4 bottom-0 left-0 text-center py-4'>
                                    <Desc text={member.title} bg='bg-[#2E3331]' />
                                    <h1 className='text-xl font-semibold text-black my-4'>{member.name}</h1>
                                </div>
                            </div>)
                    })}
                </div>
                <div className="my-12 text-center">
                    <h1 className='text-2xl font-bold'>Promotion on clothes from previous collections</h1>
                    <p className='text-gray-500 my-4'>Suspendisse consequat sed velit amet commodo commodo</p>
                    <Button variant='outline' size='lg' className=" text-black border-black border w-fit py-4 flex items-center gap-4 px-4">Contact Us<IoIosArrowForward /></Button>
                    <Button variant='outline'>Contact Us</Button>
                </div>
            </section>
        </div>
    )
}

export default Page