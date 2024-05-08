import { cn } from '@/lib/utils';
import React from 'react'

interface DescProps {
    text: string | number,
    bg: string;
}
const Desc = ({ text, bg }: DescProps) => {
    return (
        <span className={cn(`px-3 py-1  rounded-md border-2 border-black w-fit`, bg)}>{text}</span>
    )
}

export default Desc