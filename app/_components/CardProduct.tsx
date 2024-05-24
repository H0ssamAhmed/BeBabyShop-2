import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLink } from 'react-icons/fa6';
import { ImEnlarge } from 'react-icons/im';
import PopOver from './popOver';
interface productProps {
  name: string,
  description: string,
  images: [{ secure_url: string, public_id: string, _id: string }],
  sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
  slug: string,
  Layout?: string | null
}

const CardProduct = ({ name, images, sizes, slug, Layout, description }: productProps) => {
  const [selectedColor, setSelectedColor] = React.useState<string>('#');

  return (
    <div
      className={cn('relative flex-row group p-2 rounded text-center', Layout === 'flex' && 'flex items-center')}>
      <div className='opacity-0 flex flex-col items-center justify-center gap-2 group-hover:opacity-100 group-hover:-translate-y-4 translate-y-0  text-gray-500 transition duration-500 absolute top-5 right-5'>
        <Link href={`/shop/products/${slug}?color=${selectedColor}`}> <FaLink width={40} height={40} className='hover:text-primary transition cursor-pointer' /></Link>
        <AlertDialog>
          <div className='relative'>
            <AlertDialogTrigger asChild>

              <ImEnlarge width={24} height={24} className='hover:text-primary transition cursor-pointer' />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <PopOver name={name} images={images} sizes={sizes} slug={slug} description={description} />
            </AlertDialogContent>
          </div>
        </AlertDialog>
      </div>
      <Image loading='lazy' className={cn('mx-auto object-cover', Layout === 'flex' && "ml-0")} src={images[0]?.secure_url} width={400} height={400} alt={`${name} image`} />
      <div className='w-full'>
        <h2 className='font-semibold'>{name}</h2>
        <div className='flex gap-2 items-center justify-center'>
          {sizes[0].colors.map((color, index) => {
            return <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={''} className='w-6 h-6 p-px border-gray-500 border rounded-full '>
                    <span
                      onClick={() => setSelectedColor(`${color.hex}`)}
                      style={{ backgroundColor: `#${color.hex}` }}
                      className={cn("rounded-full block w-full h-full border border-gray-400", selectedColor == `#${color.hex}` && "outline-double outline-2")} >
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
        <div className=' flex items-center justify-center gap-2 py-2 text-gray-500'>
          <p>$ {sizes[0].price}.00</p>
          <p>{'-'}</p>
          <p>$ {sizes[sizes.length - 1].price}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CardProduct