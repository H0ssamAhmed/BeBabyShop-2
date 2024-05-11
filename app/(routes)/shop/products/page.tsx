"use client"
import CardProduct from '@/app/_components/CardProduct'
import Crumb from '@/app/_components/breadCrunb'
import Skeletonloading from '@/app/_components/loading'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'


interface productTypes {
    name: string,
    description: string,
    images: [{ secure_url: string, public_id: string, _id: string }],
    sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
    slug: string
}

const Shop = () => {
    const [products, setProducts] = useState<[productTypes]>()
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://competition-e-commerce-backend-1.vercel.app/categories/${searchParams.get('category')}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.products);
                setLoading(false)
            }).catch((error) => window.confirm(error))

    }, [searchParams]);

    return (
        <Suspense  >
            <>
                <Crumb
                    two={{ text: "shop", slug: "/shop" }}
                    three={{ text: searchParams.get('category')?.split("-").join(' ') }}
                />
                <div className='container '>
                    {loading ?
                        <Skeletonloading />
                        :
                        <div className='pt-4 grid grid-cols-1 gap-2 justify-center sm:grid-cols-3 md:grid-cols-4'>
                            {products?.map((product, index) => {
                                return (<div onClick={() => console.log(searchParams)} className=' border-gray-300 border rounded-sm' key={index}>
                                    <CardProduct name={product.name} images={product?.images} description={product.description} sizes={product.sizes} slug={product.slug} key={index} />
                                </div>)
                            })}
                        </div>
                    }
                </div>
            </>
        </Suspense>
    )
}

export default Shop