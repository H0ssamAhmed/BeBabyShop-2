import Image from 'next/image'
import React from 'react'


interface HeaderProps {
    smText: string,
    lgText: string
}
const SectionHeader = (prop: HeaderProps) => {
    return (
        <div className='py-10  w-1/2 mx-auto'>
            <div className='flex items-center justify-center flex-col gap-y-4 pt-4'>
                <Image src='/assets/babyshop2-home-pic4.svg' width={50} height={50} alt='image/' loading='lazy' />
                <p className=' text-gray-500 text-md'>{prop.smText}</p>
                <h2 className='poppins-semibold text-4xl text-center' >{prop.lgText}</h2>
            </div>
        </div>
    )
}

export default SectionHeader