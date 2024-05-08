'use client'
import Crumb from '@/app/_components/breadCrunb'
import productsApi from '@/app/_utils/productsApi'
import { Skeleton } from '@/components/ui/skeleton'
import useCart from '@/hooks/useCart'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface productProps {
  name: string,
  category: { icon: string, name: string, slug: string }
  description: string,
  images: [{ secure_url: string, public_id: string, _id: string }] | any,
  sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
  slug: string,
}

interface productDetails {
  ProductName?: string;
  descriptopn?: string,
  size?: string,
  color?: string,
  quantity: number,
  image: string,
  price: number,
  slug?: string,
  colorName?: string

}
const ProductDetails = () => {
  const params = useParams()
  const cartHook = useCart()
  const [loading, setLoading] = useState<boolean>(true)
  const [validateAdd, setValidateAdd] = useState<boolean>(false)
  const [product, setProduct] = useState<productProps>()
  const [selectProductDetails, setSelctedProductDetails] = useState<productDetails>({
    size: "select an option",
    color: "",
    quantity: 1,
    image: '',
    price: 0,
    ProductName: '',
    descriptopn: '',
    slug: '',
    colorName: ''

  })
  const handleFetch = (selected: any) => {
    productsApi.getOneProduct(selected)
      .then((res) => {
        setProduct(res?.data?.product)
        setSelctedProductDetails({
          ...selectProductDetails,
          image: res?.data?.product.images[0].secure_url,
          ProductName: res?.data?.product.name,
          descriptopn: res?.data?.product?.description,
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    console.log(params?.selectedProduct);

    handleFetch(params?.selectedProduct)
  }, [params.selectedProduct])

  useEffect(() => {
    product?.sizes?.map((color) => {
      (color.size == selectProductDetails.size) ? setSelctedProductDetails({ ...selectProductDetails, price: color.price }) : ''
    })
    if (selectProductDetails.color == "" || selectProductDetails.size == "select an option") {
      setValidateAdd(false)
    } else { setValidateAdd(true) }
  }, [selectProductDetails.size, selectProductDetails.color])

  const handleQuantity = (type: string) => {
    if (type == 'increase') setSelctedProductDetails({ ...selectProductDetails, quantity: selectProductDetails.quantity + 1 })
    if (type == 'decrease') (selectProductDetails.quantity == 1) ? "" : setSelctedProductDetails({ ...selectProductDetails, quantity: selectProductDetails.quantity - 1 })
  }
  const handleAddToCart = () => {
    cartHook.addToCart(selectProductDetails)
  }

  const handleChange = (e: string) => {
    setSelctedProductDetails({ ...selectProductDetails, size: e, slug: product?.slug })
  }

  return (
    <div>
      <Crumb
        two={{ text: "shop", slug: "/shop" }}
        three={{ text: product?.category?.name.toLocaleLowerCase(), slug: `/shop/products?category=${product?.category?.name.toLocaleLowerCase().split(' ').join('-')}` }}
        four={{ text: params.selectedProduct.toString().split('-').join(' ') }}
      />

      {/* <button className=' bg-teal-500 p-8 text-center mx-auto'>Click</button> */}

      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div className="border border-gray-300 flex items-center rounded-md justify-center">
            {loading ?
              <Skeleton />
              : <Image src={product?.images[0]?.secure_url} width={400} height={400} alt={product?.name ?? "image"} loading='lazy' />
            }
          </div>
          <div className='md:ml-6'>
            {loading ?
              <div className='flex flex-col items-start justify-between gap-8'>
                <Skeleton className=' w-60 h-20' />
                <Skeleton className=' w-60 h-20' />
                <div className='flex items-start gap-4 justify-start'>
                  <Skeleton className=' w-60 h-20' />
                  <Skeleton className=' w-20 h-20 rounded-full' />
                </div>
              </div>
              :
              <>
                <h1
                  className='text-4xl font-semibold'>{product?.name}</h1>
                <p className=' my-4 text-gray-500'>{product?.description}</p>
                <div className=' flex items-center justify-start gap-2 py-2 font-semibold'>
                  <p>$ {product?.sizes[0].price}.00</p>
                  <p>{'-'}</p>
                  <p>$ {product?.sizes[product?.sizes.length - 1].price}.00</p>
                </div>
                <div className='flex items-center justify-start gap-4 my-4 '>
                  <p >Select size</p>
                  <select onChange={(e) => handleChange(e.target.value)} className='px-4 py-2 rounded-md focus:bg-secondary/30 border border-gray-400 focus:border-primary focus:outline-none outline-none'>
                    <option>select an option</option>
                    {product?.sizes.map((size) => <option key={size.size} value={size.size}>{size.size}</option>)}
                  </select>
                </div>
                <div className='flex items-center justify-start gap-4 my-4 '>
                  <p>Select color</p>
                  <div className=' flex items-center justify-start gap-4'>
                    {product?.sizes[0]?.colors.map((color) => <span key={color.hex}
                      style={{ backgroundColor: `#${color.hex}` }}
                      onClick={() => setSelctedProductDetails({ ...selectProductDetails, color: `#${color.hex}`, colorName: color.name })}
                      className={cn("rounded-full block w-6 h-6 cursor-pointer border border-gray-400", selectProductDetails.color == `#${color.hex}` && "outline-double outline-2")} ></span>)}
                  </div>
                </div>
                <h2 className={cn('text-primary transition', !validateAdd && 'opacity-0')}>$ {selectProductDetails?.price}</h2>
                <div className='flex items-center justify-start gap-4'>
                  <FiPlus onClick={() => handleQuantity('increase')} className='bg-gray-200 w-8 h-4 rounded-md' />
                  {selectProductDetails.quantity}
                  <FiMinus onClick={() => handleQuantity('decrease')} className={cn(`bg-gray-200 w-8 h-4 rounded-md`,
                    selectProductDetails.quantity == 1 && 'bg-slate-100 cursor-not-allowed'
                  )} />
                  <button
                    disabled={!validateAdd}
                    className={cn(
                      'bg-[#f6dcb8] transition border border-gray-400 rounded-md w-full px-4 py-2 hover:bg-[#DE8D59]',
                      !validateAdd && ' cursor-not-allowed bg-transparent hover:bg-transparent'
                    )}
                    aria-label="Add this product to cart"

                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductDetails
