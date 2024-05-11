'use client'
import { cn } from '@/lib/utils';
import { Link2Icon, TrashIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../_utils/cartContext';
import { useRouter } from 'next/navigation';
interface Showvalues {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
interface CartItem {
  size: string;
  color: string;
  quantity: number;
  image: string;
  price: number;
  ProductName: string;
  description: string;
  slug: string;
  colorName: string;
}
const Cart = ({ showCart, setShowCart }: Showvalues) => {
  const { cart, setCart } = useContext(CartContext)
  const route = useRouter()
  const [totolPrice, setTotalPrice] = useState<number>(0)


  useEffect(() => setTotalPrice(cart.reduce((prev: any, curr: any) => prev + (curr.price * curr.quantity), 0)), [cart]);
  const handleRemove = (itemName: string) => {
    const newCart = cart?.filter((Item: any) => {
      return Item?.ProductName !== itemName
    })
    setCart(newCart);
    localStorage.setItem("cartProducts", JSON.stringify(newCart))
  }
  const handleNaviagation = (url: string) => {
    setShowCart(false)
    route.push(`/shop/products/${url}`)
  }
  return (
    <div className={`${showCart ? "translate-x-0 opacity-100" : 'translate-x-[400px] opacity-0'}  w-[400px] z-30 duration-700 fixed -right-6 top-0 h-full  
    overflow-y-scroll px-4 bg-white shadow-xl shadow-gray-500`} >
      <div className=' flex items-center justify-between p-4'>
        <IoMdClose onClick={() => setShowCart(!showCart)} className=' hover:scale-110 hover:rotate-180 text-3xl p-1 cursor-pointer text-primary transition-all border rounded-full border-transparent hover:border-primary' />
        <h2 className=" font-semibold">Your Cart</h2>
      </div>

      <div className={cn('h-4/5 flex items-center justify-center', cart.length != 0 && 'hidden')}>
        <div className='flex items-center justify-center gap-4 flex-col text-center'>
          <CgShoppingCart size={40} className=' text-lg' />
          <p>Your cart is currently empty.</p>
        </div>
      </div>

      <div className={cn('h-[80vh] overflow-y-scroll', cart.length == 0 && 'hidden')}>
        {cart?.map((item: any) => {
          return (<div key={item.ProductName} className='w-full mb-4' >
            <div className='flex items-center justify-between px-2 overflow-hidden'>
              <div onClick={() => handleNaviagation(item.slug)} className='relative group cursor-pointer'>
                <Image loading='lazy' src={item?.image} alt='item image' className='group-hover:blur-sm transition' width={100} height={100} />
                <Link2Icon className='absolute left-1/2 top-1/2 -translate-x-1/2  w-10 h-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition' />
              </div>
              <div>
                <div>
                  <h2 className=' text-lg font-semibold'>{item.ProductName}</h2>
                  <p className='text-black text-start'>Age: <b>{item.size}</b></p>
                  <p className='text-black text-start'>Color: <b>{item.colorName.toUpperCase()}</b> </p>
                </div>
                <p className=' flex items-center gap-2 text-gray-500'>Price: $<span className='text-primary'>{item.price}</span></p>
              </div>
              <p className=' flex flex-col justify-center'>Total <span className='text-primary'>${item.price * item.quantity}</span></p>
            </div>
            <div onClick={() => handleRemove(item.ProductName)} className='flex items-center justify-center gap-2 my-4 hover:bg-red-600 transition py-1 px-2 w-1/3  rounded-lg mr-auto hover:text-white cursor-pointer text-sm'>
              <TrashIcon />
              Remove
            </div>
            <hr className='h-[2px] bg-gray-200' />
          </div>)
        })}
      </div>
      <div className={cn(cart.length == 0 && 'hidden')}>
        <div className='flex items-center justify-between cursor-pointer py-2 my-2'>
          <h4 >Total</h4>
          <p className={cn('font-bold')}>$ {totolPrice}</p>
        </div>
        <Link href='/cart' onClick={() => setShowCart(false)}>
          <button className='block bg-[#e7e7e7] hover:bg-[#DE8D59] hover:text-white transition  w-full py-2 my-2 border border-gray-400 rounded-lg'>Proceed to Check out</button>
        </Link>
      </div>
    </div >
  )
}

export default Cart




// [   {     "size": "1-2",     "color": "#808080",     "quantity": 1,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881374/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/sleeveless-cardigan_kzFpu/ep0pf4wwbfzfwtnyvndi.webp", "price"       : 34, "ProductName": "Sleeveless Cardigan",     "descriptopn": "Curae donec amet duis euismod nisl etiam mus proin a fames praesent orci tortor non vel",     "slug": "sleeveless-cardigan",     "colorName": "grey"   },   {     "size": "1-2",     "color": "#DA291C",     "quantity": 1,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881330/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/girl-blouse_NCDBQ/t85kkowxfhkizcps9edj.webp", "price": 44,     "ProductName": "Girl blouse",     "descriptopn": "Aptent penatibus dolor netus vulputate convallis egestas rutrum non sodales bibendum torquent mattis nostra curae nascetur felis conubia mauris congue enim fringilla pulvinar sem vivamus lectus",     "slug": "girl-blouse",     "colorName": "postal red"   },   {     "size": "1-2",     "color": "#808080",     "quantity": 14,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881374/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/sleeveless-cardigan_kzFpu/ep0pf4wwbfzfwtnyvndi.webp", "price"       : 34, "ProductName": "Cardigan",     "descriptopn": "Curae donec amet duis euismod nisl etiam mus proin a fames praesent orci tortor non vel",     "slug": "sleeveless-cardigan",     "colorName": "grey"   },   {     "size": "1-2",     "color": "#DA291C",     "quantity": 4,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881330/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/girl-blouse_NCDBQ/t85kkowxfhkizcps9edj.webp", "price": 44,     "ProductName": "blouse",     "descriptopn": "Aptent penatibus dolor netus vulputate convallis egestas rutrum non sodales bibendum torquent mattis nostra curae nascetur felis conubia mauris congue enim fringilla pulvinar sem vivamus lectus",     "slug": "girl-blouse",     "colorName": "postal red"   },   {     "size": "1-2",     "color": "#808080",     "quantity": 3,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881374/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/sleeveless-cardigan_kzFpu/ep0pf4wwbfzfwtnyvndi.webp", "price"       : 34, "ProductName": "Sleeveless",     "descriptopn": "Curae donec amet duis euismod nisl etiam mus proin a fames praesent orci tortor non vel",     "slug": "sleeveless-cardigan",     "colorName": "grey"   },   {     "size": "1-2",     "color": "#DA291C",     "quantity": 4,     "image": "https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881330/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/girl-blouse_NCDBQ/t85kkowxfhkizcps9edj.webp", "price": 44,     "ProductName": "blouse Girls",     "descriptopn": "Aptent penatibus dolor netus vulputate convallis egestas rutrum non sodales bibendum torquent mattis nostra curae nascetur felis conubia mauris congue enim fringilla pulvinar sem vivamus lectus",     "slug": "girl-blouse",     "colorName": "postal red"   } ]