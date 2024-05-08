'use client'
import React from 'react'
import BlogCarouselData from '../../data/BlogCarousel.json'
import BlogCarouselCard from '@/app/_components/blogCarouselCard'
import Crumb from '@/app/_components/breadCrunb'


const Page = () => {

    return (
        <>
            <Crumb two={{ text: 'Blog', slug: 'blog' }} />
            <div className='bg-[#f5f0eb] py-8 mb-'>
                <div className='container'>
                    <div className=''>
                        <div className='flex flex-col items-start justify-start  gap-4 '>
                            <span className='bg-[#f6dcb8] border-black border-2 py-1 px-3 font-semibold rounded-md '>Blog</span>
                            <h1 className=' text-5xl my-5 font-bold'>Latest blog posts</h1>
                        </div>
                        {BlogCarouselData?.map((blog) => (
                            <div key={blog.title} className=' my-4'>
                                <BlogCarouselCard image={blog.image} title={blog.title} description={blog.description} group={blog.group} data={blog.data} />
                            </div>
                        )
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page