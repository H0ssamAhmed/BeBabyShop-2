'use client'
import { useState } from "react";
import Header from "../_components/Header";
import Categories from "../_components/categories";
import Nav from "../_components/nav";
import NewsLetter from "../_components/newsLetter";
import Footer from "../_components/footer";
import Cart from "../_components/Cart";
import { cn } from "@/lib/utils";
import { CartContext } from "../_utils/cartContext";
import dynamic from "next/dynamic";

interface ItemType {
  ProductName: string,
  color: string,
  descriptopn: string,
  image: string,
  price: number,
  quantity: number,
  size: string,
  colorName: string

}

const BeBabyShop = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cart, setCart] = useState<ItemType[]>([])

  const hideAll: () => void = () => {
    setShowCart(false)
    setShowNav(false)
  }

  const Header = dynamic(() => import('../_components/Header'))
  const Nav = dynamic(() => import('../_components/nav'))
  const Categories = dynamic(() => import('../_components/categories'))
  const Cart = dynamic(() => import('../_components/Cart'))
  const NewsLetter = dynamic(() => import('../_components/newsLetter'))
  const Footer = dynamic(() => import('../_components/footer'))
  return (
    <CartContext.Provider value={{ cart, setCart }}>

      <main className="relative h-full">
        <span onClick={hideAll} className={cn('overLay absolute w-full h-full z-[25]', showCart || showNav ? 'block' : 'hidden')}></span>
        <Header
          showCart={showCart}
          setShowCart={setShowCart}
        />

        <Nav
          showNav={showNav}
          setShowNav={setShowNav}
        />

        <Categories
          showNav={showNav}
          setShowNav={setShowNav}
        />

        <Cart
          showCart={showCart}
          setShowCart={setShowCart}
        />

        {children}
        <NewsLetter />
        <Footer />
      </main>
    </CartContext.Provider>
  )
}

export default BeBabyShop