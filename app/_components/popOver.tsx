import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import React, { useState } from 'react'
import ColorSelect from './colorSelect';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';

interface productProps {
  name: string,
  description: string,
  images: [{ secure_url: string, public_id: string, _id: string }],
  sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
  slug?: string,
  Layout?: string
}

const PopOver = ({ name, images, sizes, slug, Layout }: productProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('#');
  const [addToCart, setAddToCart] = useState({
    name: name,
    images: images,
    sizes: sizes,
    slug: slug,
    quantity: 1,
    selectedColor: selectedColor
  })

  const handleQuantity = (type: string) => {
    if (type == 'increase') setAddToCart({ ...addToCart, quantity: addToCart.quantity + 1 })
    if (type == 'decrease') addToCart.quantity == 1 ? '' : setAddToCart({ ...addToCart, quantity: addToCart.quantity - 1 })
  }

  return (

    <div className='flex flex-col select-none'>
      <Image className={cn('mx-auto object-cover', Layout === 'flex' && "ml-0")} src={images[0]?.secure_url} width={400} height={400} alt={`${name} image`} loading='lazy' />
      <div className='text-center my-4'>
        <AlertDialogTitle>{name}</AlertDialogTitle>
        <AlertDialogDescription className=' flex items-center justify-center gap-2 py-2 text-gray-500'>
          Price Range
          <p>$ {sizes[0]?.price}.00</p>
          <p>{'-'}</p>
          <p>$ {sizes[sizes.length - 1].price}.00</p>
        </AlertDialogDescription>
      </div>
      <Link
        href={`/shop/products/${slug}?color=${selectedColor}`}
        className='bg-[#f6dcb8] text-center mx-auto transition border border-gray-400 rounded-md w-full px-4 py-2 hover:bg-[#DE8D59]'
      >
        Add To Cart
      </Link>
      <AlertDialogCancel className='absolute hover:bg-transparent hover:border-none border-none hover:rotate-180 transition duration-500 top-6 right-4'> <FaXmark className='hover:bg-transparent text-3xl' /> </AlertDialogCancel>
    </div>

  )
}

export default PopOver