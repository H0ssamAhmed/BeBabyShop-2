'use client'
import Crumb from '@/app/_components/breadCrunb';
import Skeletonloading from '@/app/_components/loading';
import { CartContext } from '@/app/_utils/cartContext';
import { cn } from '@/lib/utils';
import { Link2Icon } from '@radix-ui/react-icons';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';

interface ItemType {
  ProductName: string,
  color: string,
  descriptopn: string,
  image: string,
  price: number,
  quantity: number,
  size: string,
  colorName?: string

}

const CartProducts = () => {
  const { cart, setCart } = useContext(CartContext)

  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const TheLocalStorage = localStorage.getItem('cartProducts')

    if (TheLocalStorage) {
      setCart(JSON.parse(TheLocalStorage))
      setIsCartEmpty(false)
    }
    if (!TheLocalStorage || JSON.parse(TheLocalStorage).length == 0) {
      setIsCartEmpty(true)
    }
    setLoading(false)
  }, [])


  const removeFromCart = (name: string) => {
    const restOfItems = cart.filter((item: ItemType) => {
      return item.ProductName != name
    })
    setCart(restOfItems);
    localStorage.setItem('cartProducts', JSON.stringify(restOfItems))
  }
  document.title = 'Cart - BeBabyShop 2'

  return (
    <div className='select-none'>
      <Crumb two={{ text: "Cart", slug: "/cart" }} />
      {loading
        ? <Skeletonloading AdditonalClasses='container' />
        : <>
          <div className={cn("text-center my-8", isCartEmpty ? 'block' : 'hidden')}>
            <h1 className=' text-2xl py-3 my-8 bg-[#f6f5f8]'>Your cart is currently empty.</h1>
            <Link className='hover:bg-primary transition   bg-primary/50 p-4 rounded-md text-lg' href='/'>Return to shop</Link>
          </div>
          <div className='container'>
            <div className={cn('w-full', !isCartEmpty ? 'block' : 'hidden')}>
              <h4 className='my-8'> items ({cart?.length | 0})</h4>
              <div className={cn('my-6 gap-4 w-full')}>
                <table className='text-center w-full'>
                  <thead>
                    <tr className=' text-[10px] md:text-[14px]'>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>SUBTOTAL</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item: ItemType, index: number) => {
                      return <tr key={index}>
                        <td>
                          <Link href={`/shop/products/${item.ProductName.toLowerCase().split(' ').join('-')}`} className='relative group flex flex-col items-center justify-center'>
                            <Image src={item?.image} alt='item image' className='group-hover:blur-sm transition' width={100} height={100} loading='lazy' />
                            <Link2Icon className='absolute left-1/2 top-1/2 -translate-x-1/2 w-10 h-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition' />
                            <h3 className='font-semibold text-sm my-2'>{item.ProductName}</h3>
                          </Link>
                          <p className='text-black text-center'>Color: {item.colorName?.toUpperCase()}</p>
                        </td>
                        <td>
                          <p><span className='text-primary/50 font-bold'>${item.price}</span></p>
                        </td>
                        <td>
                          <p>{item.quantity}</p>
                        </td>
                        <td>
                          <p className='text-primary/50 font-bold'>${item.quantity * item.price}</p>
                        </td>
                        <td className='cursor-pointer transition hover:text-red-500' onClick={() => removeFromCart(item.ProductName)} ><FaTimes className=' mx-auto text-3xl' /></td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <Link className='p-4 w-3/4 mx-auto my-4 block rounded-md bg-primary/50 text-center transition hover:bg-primary' href='/cart/check_out'>Check Out</Link>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}


export default CartProducts




// [{"size":"74/80cm","color":"#808080","quantity":1,"image":"https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881431/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/sweater_d4lwi/exbukv9tutwpuek15wwh.webp","price":146,"ProductName":"Sweater","descriptopn":"Curabitur duis magnis conubia nec potenti blandit malesuada ligula id cras dui mauris tellus faucibus morbi natoque dictum amet convallis ante","slug":"sweater"},{"size":"1-2","color":"#808080","quantity":2,"image":"https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881261/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/cardigan-longsleeve_8bx7r/bd6vwmzunzgvsdpz9m3m.webp","price":66,"ProductName":"Cardigan longsleeve","descriptopn":"Vehicula quisque mollis senectus sit viverra si fames molestie nibh dui ultrices quis sodales orci mi turpis neque aptent et felis vitae at pretium vestibulum malesuada nisl himenaeos","slug":"cardigan-longsleeve"},{"size":"0-1","color":"#fff","quantity":1,"image":"https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881330/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/girl-blouse_NCDBQ/t85kkowxfhkizcps9edj.webp","price":38,"ProductName":"Girl blouse","descriptopn":"Aptent penatibus dolor netus vulputate convallis egestas rutrum non sodales bibendum torquent mattis nostra curae nascetur felis conubia mauris congue enim fringilla pulvinar sem vivamus lectus","slug":"girl-blouse"},{"size":"1-2","color":"#FFFF00","quantity":1,"image":"https://res.cloudinary.com/dqv9yvba1/image/upload/v1710881374/competition_ecommerce-1/categories/dresses-and-suits_lSeS2/products/sleeveless-cardigan_kzFpu/ep0pf4wwbfzfwtnyvndi.webp","price":34,"ProductName":"Sleeveless Cardigan","descriptopn":"Curae donec amet duis euismod nisl etiam mus proin a fames praesent orci tortor non vel","slug":"sleeveless-cardigan"},{"size":"2-3","color":"#DA291C","quantity":3,"image":"https://res.cloudinary.com/dqv9yvba1/image/upload/v1710882828/competition_ecommerce-1/categories/spuds_ZjJhJ/products/baby-socks_XJuqZ/dmuyvuzedqjgpeqwgb9d.webp","price":38,"ProductName":"Baby Socks","descriptopn":"Curabitur duis magnis conubia nec potenti blandit malesuada ligula id cras dui mauris tellus faucibus morbi natoque dictum amet convallis ante","slug":"baby-socks-1bx"}]