import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { CartContext } from '../_utils/cartContext'
interface Showvalues {
    showCart: boolean,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>,
    storedItems?: [],
    totalPrice?: number
}

interface ItemType {
    ProductName: string,
    color: string,
    descriptopn: string,
    image: string,
    price: number,
    quantity: number,
    size: string
}

const Header = ({ showCart, setShowCart }: Showvalues) => {
    const { cart, setCart } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState<number>(0);


    useEffect(() => {
        setTotalPrice(cart?.reduce((prev: any, curr: any) => prev + (curr.price * curr.quantity), 0));
        const stored = window.localStorage.getItem('cartProducts');
        if (stored) {
            setCart(JSON.parse(stored));
        }
        if (!stored) window.localStorage.setItem('cartProducts', JSON.stringify([]))

    }, [localStorage]);

    setTimeout(() => {
        setTotalPrice(cart?.reduce((prev: any, curr: any) => prev + (curr.price * curr.quantity), 0));
    }, 0);


    return (
        <header className='z-100  border-b-2 bg-white border-b-gray-300 py-4'>
            <div className='container flex items-center justify-between gap-4'>
                <section>
                    <Link href={'/'} >
                        <Image src='/assets/logo.svg' alt='logo' width={150} height={150} loading='lazy' />
                    </Link>

                </section>
                {/* 
                <section className='hidden md:block w-full max-w-[50%] p-2 justify-center border border-solid '>
                    <form className='flex items-center'>
                        <BiSearch className=' pr-2 text-[40px] ' />
                        <input className='w-full h-full focus:outline-none focus:border-none' placeholder='Enter your search' type='tex' />
                    </form>
                </section>
                     */}
                <section className=' flex items-center justify-between gap-4'>
                    <a className='group flex items-center justify-center gap-2'
                        href='tel:+61 (0) 3 8376 6284'>
                        <TfiHeadphoneAlt />
                        <p className='hidden md:block transition group-hover:text-primary' >
                            +61 (0) 3 8376 6284
                        </p>
                    </a>
                    <div onClick={() => { setShowCart(!showCart) }} className='group flex hover:text-primary hover:scale-125 transition  items-center flex-col cursor-pointer p-1'>
                        <div className='relative'>
                            <span className='w-6 h-6 -right-3 -top-3 text-center bg-orange-200 rounded-full absolute'>{cart?.length || 0}</span>
                            <CiShoppingBasket className=' w-8 h-8' />
                        </div>
                        <p className='group-hover:text-primary hidden md:block cursor-pointer'>${totalPrice || 0}</p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header