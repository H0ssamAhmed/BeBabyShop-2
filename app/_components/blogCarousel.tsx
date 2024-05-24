import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import React from 'react'
import BlogCarouselData from '../data/BlogCarousel.json'
import BlogCarouselCard from './blogCarouselCard'

const BlogCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {BlogCarouselData?.map((blog, index) => (
                    <CarouselItem key={index} className='group relative'>
                        <BlogCarouselCard image={blog.image} title={blog.title} description={blog.description} group={blog.group} data={blog.data} />
                    </CarouselItem>)
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default BlogCarousel