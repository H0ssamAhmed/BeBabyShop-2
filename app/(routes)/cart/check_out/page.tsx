"use client"
import Crumb from '@/app/_components/breadCrunb'
import { CartContext } from '@/app/_utils/cartContext'
import React, { useContext, useEffect, useState } from 'react'

const CheckOut = () => {
  const { cart, setCart } = useContext(CartContext)
  const [totalQuantity, setTotalQuantity] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const TheLocalStorage: any = localStorage.getItem('cartProducts')
    setCart(JSON.parse(TheLocalStorage))
  }, [])

  useEffect(() => {
    setTotalPrice(cart.reduce((prev: any, curr: any) => prev + (curr.price * curr.quantity), 0))
    setTotalQuantity(cart.reduce((prev: any, curr: any) => prev + curr.quantity, 0))
  }, [cart])
  // document.title = 'Check Out - BeBabyShop 2'

  return (
    <div>
      <Crumb two={{ text: "Cart", slug: "/cart" }} three={{ text: "Check Out", }} />
      <div className='container my-6'>
        <div className=' bg-gray-200 h-fit p-8 rounded-md'>
          <form>
            <div className='grid grid-cols-4 justify-between gap-4'>
              <div className='flex flex-col col-span-4 lg:col-span-2 justify-center'>
                <label className='ml-1' htmlFor="fName">First Name</label>
                <input id='fName' type="text" required placeholder='Write First Name' className='focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
              </div>
              <div className='flex flex-col col-span-4 lg:col-span-2 justify-center'>
                <label className='ml-1' htmlFor="lName">Last Name</label>
                <input id='lName' type="text" placeholder='Write Last Name' className='focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
              </div>
            </div>
            <div className='flex flex-col justify-center my-4'>
              <label className='ml-1' htmlFor="email">E-Mail</label>
              <input id='email' type='email' required placeholder='Write E-mail' className='focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
            </div>
            <div className='my-4'>
              <p className='my-1'>Pay Card Info</p>
              <div className=' grid grid-cols-12 gap-4'>
                <input type="text" required placeholder='The name on the card' className='col-span-12 focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
                <input type='number' required placeholder='Card number - 16 Digits' className='col-span-12 lg:col-span-7 focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
                <input type='number' required placeholder='CVV/CVC - 3 Digits' className='col-span-12 lg:col-span-5  focus:outline-primary outline-4 pl-4 p-1 rounded-sm mt-2' />
              </div>
              <BillSummary
                totalItems={totalQuantity} totalPrice={totalPrice}
              />
            </div>
            <button className='bg-primary/50 hover:bg-primary transition w-full p-2  rounded-lg' type='submit'>Pay ${totalPrice}</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default CheckOut


interface billSummary {
  totalItems?: number, totalPrice?: number
}

const BillSummary = ({ totalItems, totalPrice }: billSummary) => {
  return <div className='w-full py-4 my-4'>
    <div className='flex my-4 items-center justify-between'>
      <p>Total Items</p>
      <p>{totalItems}  </p>
    </div>
    <div className='flex my-4 items-center justify-between'>
      <p>Total Price</p>
      <p>$ {totalPrice}</p>
    </div>
  </div>
}
