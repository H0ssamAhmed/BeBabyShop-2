"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { GiPin } from 'react-icons/gi'
import { TbPinnedOff } from 'react-icons/tb'
interface CrumbProp {
    two?: {
        text?: string,
        slug?: string
    },
    three?: {
        text?: string,
        slug?: string
    },
    four?: {
        text?: string,
        slug?: string
    },
}
const Crumb = ({ two, three, four }: CrumbProp) => {

    const [pinHeader, setPinHeader] = useState<boolean>(false)


    return (

        <div className={`p-2 ${pinHeader && 'sticky'} top-14 z-[19] py-4 bg-white shadow-md`}>
            <div className='container flex items-center justify-between'>
                <div>
                    <Breadcrumb >
                        <BreadcrumbList>
                            <BreadcrumbItem className='text-md'>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className='text-md  '>
                                <BreadcrumbLink href={two?.slug} className='text-black'>{two?.text}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className={cn(!three && 'hidden')} />
                            <BreadcrumbItem className='text-md  '>
                                <BreadcrumbLink href={three?.slug} className='text-black'>{three?.text}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className={cn(!four && 'hidden')} />
                            <BreadcrumbItem className='text-md  '>
                                <BreadcrumbLink className='text-black'>{four?.text}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {pinHeader && <p onClick={() => setPinHeader(!pinHeader)} className='flex  items-center gap-2 transition hover:text-black text-gray-500 cursor-pointer'>
                    <TbPinnedOff />unpin
                </p>
                }
                {!pinHeader && <p onClick={() => setPinHeader(!pinHeader)} className='flex  items-center gap-2 transition hover:text-black text-gray-500 cursor-pointer'>
                    <GiPin />Pin
                </p>
                }

            </div>
        </div>
    )
}

export default Crumb