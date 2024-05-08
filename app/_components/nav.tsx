"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md'
interface Showvalues {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ showNav, setShowNav }: Showvalues) => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <nav className='sticky z-20 top-0 transition w-full py-2 shadow-md bg-white'>
      <div className='container relative flex items-center justify-between'>
        <section className=' flex items-center bg-primary/60 hover:bg-primary transition p-2 rounded-md justify-center gap-2 cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        >
          <MdMenu className='font-thin text-3xl' />

          <h4 className='font-normal'>All categories</h4>
        </section>
        <section className='flex ml-auto sm:mx-auto w-fit  justify-between'>
          <MdMenu onClick={() => setNav(!nav)} className={cn('sm:hidden text-2xl cursor-pointer  hover:text-primary transition', nav && 'hidden')} />
          <FaXmark onClick={() => setNav(!nav)} className={cn('sm:hidden text-2xl cursor-pointer  hover:text-primary transition', !nav && 'hidden')} />
          <div className={`hidden sm:flex  items-center  flex-col sm:flex-row gap-3`}>
            <Link className=' hover:text-primary transition ' href='/shop'>Shop</Link>
            <Link className=' hover:text-primary transition ' href='/blog'>Blog</Link>
            <Link className=' hover:text-primary transition ' href='/about_us'>About</Link>
            <Link className=' hover:text-primary transition ' href='/contact'>Contact</Link>
          </div>
          <MiniNav nav={nav} />
        </section>
        <section>
          <h4 className='hidden sm:block px-5 py-2 cursor-pointer rounded-md border-2 border-orange-200 hover:border-primary transition'>Outlet</h4>
        </section>

      </div>
    </nav>
  )
}

export default Nav

interface MiniNavProps {
  nav: boolean
}

const MiniNav: React.FC<MiniNavProps> = ({ nav }) => {
  return (
    <div className={`${nav ? 'flex' : '-translate-y-96 hidden'} translate-y-[42px] gap-y-2 transition duration-500 sm:hidden flex flex-col absolute bg-white shadow-md translate-x-0 w-full  left-0 text-center py-4`}>
      <Link className="hover:text-primary transition" href='/shop'>Shop</Link>
      <Link className="hover:text-primary transition" href='/Blog'>Blog</Link>
      <Link className="hover:text-primary transition" href='/About'>About</Link>
      <Link className="hover:text-primary transition" href='/Contact'>Contact</Link>
    </div>)
}