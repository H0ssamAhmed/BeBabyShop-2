"use client"
import React, { useEffect, useState } from 'react'
import CarouselDemo from '../_components/Carousel';
import Discount from '../_components/Discount';
import SectionHeader from '../_components/sectionHeader';
import CardProduct from '../_components/CardProduct';
import Carditem from '../_components/card';
import heroCarouselData from '../data/CarouselHero.json'
import cardProduct from '../data/card.json'
import offerslider from '../data/offerslider.json'
import testimonials from '../data/testimonial.json'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MdKeyboardArrowRight } from 'react-icons/md';
import OfferCard from '../_components/offerCard';
import Testimonial from '../_components/testimonial';
import BlogCarousel from '../_components/blogCarousel';

interface productTypes {
    name: string,
    description: string,
    images: [{ secure_url: string, public_id: string, _id: string }],
    sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
    slug: string
}

const Page = () => {
    const [BestsellersProducts, setBestsellersProducts] = useState<productTypes[]>([])
    useEffect(() => {
        fetch('https://competition-e-commerce-backend-1.vercel.app/categories/dresses-and-suits')
            .then((res) => res.json())
            .then((data) => setBestsellersProducts(data.products))
    }, [])

    return (
        <div className='my-2'>
            <section className='container  flex items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-between gap-2'>
                    <div className='col-span-1 flex items-center justify-center lg:col-span-3 rounded-md'>
                        <CarouselDemo data={heroCarouselData} />
                    </div>
                    <div className='w-full h-full  rounded-md text-center bg-secondary'>
                        <Discount />
                    </div>
                </div>
            </section>
            <section className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-4'>
                {cardProduct.map((item, index) => {
                    return (<Carditem key={index} item={item} />);
                })}
            </section>
            <section className='container py-4'>
                <SectionHeader smText='Kids love this stuff' lgText='Our Bestsellers' />
                <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {BestsellersProducts?.map((product, index) => {
                        return <CardProduct name={product.name} images={product?.images} description={product.description} sizes={product.sizes} slug={product.slug} key={index} />
                    })}
                </div>
            </section>
            <section className='container py-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='relative'>
                        <div className=' absolute bg-secondary  w-10/12 md:w-1/2 p-4  m-8'>
                            <h1 className='poppins-semibold text-xl'>Summer <br />Madness</h1>
                            <p className='my-4 text-[12px]'>Promotion on clothes from previous collections that are sold at reduced prices</p>
                            <Button variant='outline' size='sm' className=' w-4/5 p-5 mx-auto'>Promotions <MdKeyboardArrowRight /></Button>
                        </div>
                        <Image src='/assets/babyshop2-wrap-bg1.webp' width={1000} height={1000} alt='baby' loading='lazy' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
                        {BestsellersProducts?.reverse().slice(0, 2)?.map((product, index) => {
                            return <CardProduct name={product.name} images={product?.images} description={product.description} sizes={product.sizes} slug={product.slug} key={index} />
                        })}
                    </div>
                </div>
            </section>
            <section className='container  mt-8  text-black'>
                <CarouselDemo data={offerslider} />
            </section>
            <section className='container'>

                <SectionHeader smText='Summer Vibe' lgText='Top rated products' />
                <div className='gap-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {BestsellersProducts?.map((product, index) => {
                        return <CardProduct key={index} name={product.name} images={product?.images} description={product.description} sizes={product.sizes} slug={product.slug} />
                    })}
                </div>
            </section>
            <section className='container my-4  grid grid-col-1 sm:grid-cols-2 gap-2'>
                <OfferCard image="/assets/home/babyshop2-home-cat5.webp" header='Back to School in the Best Style' description='Viverra senectus magna nulla blandit ex maximus mi cubilia' bgColor='bg-primary' />
                <OfferCard image="/assets/home/babyshop2-home-cat4.webp" header='Eco - Style for toddlers' description='Dapibus aptent pulvinar ullamcorper lacus per tincidunt ad pretium' bgColor='bg-[#d3ebbc]' />
            </section>
            <section className='my-4 w-full p-5 bg-[#f0f5f7]'>
                <SectionHeader smText='It suits to your child' lgText='Impressions of our customers shopping for children!' />
                <div className='container pt-40 -mt-40'>
                    <div className=' flex items-center flex-wrap md:flex-nowrap justify-center gap-3 py-5'>
                        {testimonials?.map((testimonial, index) => {
                            return (<Testimonial key={index} header={testimonial.header}
                                opinion={testimonial.opinion}
                                title={testimonial.title}
                                name={testimonial.name}
                                imageSrc={testimonial.image}
                            />)
                        })}
                    </div>
                </div>

                <SectionHeader smText='Great words, need some work' lgText='Latest blog posts' />
                <div className='container '>
                    <BlogCarousel />
                </div>

            </section>
        </div>
    )
}

export default Page