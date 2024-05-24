import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { IoGridSharp } from 'react-icons/io5'
import { TfiLayoutColumn2Alt } from 'react-icons/tfi'

interface ProductsLayoutProps {
    Layout: string | null,
    setLayout: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProductsLayout = ({ Layout, setLayout }: ProductsLayoutProps) => {


    useEffect(() => {
        localStorage.getItem('layout')
            ? setLayout(localStorage.getItem('layout'))
            : (
                setLayout('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'),
                localStorage.setItem('layout', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')
            );
    }, [])

    const handleGrid = (layout: string): void => {
        setLayout(layout)
        localStorage.setItem("layout", layout);
    }

    return (
        <>
            <div className='ml-auto w-fit flex items-center justify-center gap-2'>
                <IoGridSharp
                    onClick={() => handleGrid('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')}
                    className={cn('w-6 h-6 cursor-pointer text-gray-400 hover:text-black transition font-semibold',
                        Layout == 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' && 'text-black')} />
                <TfiLayoutColumn2Alt
                    onClick={() => handleGrid('grid-cols-1 sm:grid-cols-2')}
                    className={cn('w-6 h-6 cursor-pointer text-gray-400 hover:text-black transition font-semibold',
                        Layout == 'grid-cols-1 sm:grid-cols-2' && 'text-black')} />
                <TfiLayoutColumn2Alt
                    onClick={() => handleGrid('flex')}
                    className={cn('rotate-90 hidden sm:block w-6 h-6 cursor-pointer text-gray-400 hover:text-black transition font-semibold',
                        Layout == 'flex' && 'text-black')} />
            </div>
        </>

    )
}

export default ProductsLayout