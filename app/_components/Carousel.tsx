"use client"
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IoIosArrowForward } from "react-icons/io"
import { Card, CardContent } from "@/components/ui/card"
import Desc from "./desc"

interface CarouselProps {
    data: any
}
interface faceProps {
    title: string,
    description: string,
    imgSrc: string,
    year?: number
}
const CarouselDemo = ({ data }: CarouselProps) => {
    return (
        <Carousel className="w-full cursor-grab">
            <CarouselContent>
                {data.map((item: faceProps, index: number) => (
                    <CarouselItem key={index} >

                        <Card>
                            <CardContent className="flex p-0 justify-center">
                                <div className="relative">
                                    <div className=" absolute w-1/2 flex flex-col gap-4  left-8  top-1/3 md:top-1/5 ">
                                        {item.year !== undefined &&
                                            <Desc text={item.year} bg="bg-transparent" />
                                        }
                                        <h1 className="font-semibold text-3xl">{item.title}</h1>
                                        <p className="">{item.description}</p>

                                        <Button variant='outline' size='lg' className=" text-black border-black border w-fit py-4 flex items-center gap-4 px-4">Buy now <IoIosArrowForward /></Button>
                                    </div>
                                    <div className="w-full">
                                        <Image loading='lazy' className="w-full h-full object-cover" src={item.imgSrc} width={6000} height={6000} alt="image " />
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
        </Carousel>
    )
}

export default CarouselDemo