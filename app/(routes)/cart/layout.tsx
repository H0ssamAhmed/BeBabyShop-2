import Crumb from '@/app/_components/breadCrunb';
import React from 'react'

const CartLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
    </>
  )
}

export default CartLayout