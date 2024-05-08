import { cn } from '@/lib/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@radix-ui/react-tooltip'
import Link from 'next/link'
import React from 'react'


interface Props {
    sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
    selectedColor: string,
    setSelectedColor: (value: string) => void;

}
const ColorSelect = ({ sizes, setSelectedColor, selectedColor }: Props) => {

    return (
        <>
            <div className='flex gap-2 my-4 items-center justify-start'>
                select color
                {sizes[0]?.colors?.map((color, index: number) => {
                    return <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={''} className='w-6 h-6 p-px border-gray-500 border rounded-full '>
                                    <span
                                        onClick={() => setSelectedColor(`#${color.hex}`)}
                                        style={{ backgroundColor: `#${color.hex}` }}
                                        className={cn("rounded-full block w-full h-full", selectedColor == `#${color.hex}` && "outline-double outline-2")} >
                                    </span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className='bg-gray-400 py-1 px-2  rounded-sm text-white'>{color.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                })}
            </div>
        </>
    )
}

export default ColorSelect