'use client'
import CardProduct from '@/app/_components/CardProduct'
import Crumb from '@/app/_components/breadCrunb'
import ProductsLayout from '@/app/_components/layout'
import Skeletonloading from '@/app/_components/loading'
import categoriApi from '@/app/_utils/categoriApi'
import React, { useEffect, useState } from 'react'

interface productTypes {
    name: string,
    description: string,
    images: [{ secure_url: string, public_id: string, _id: string }],
    sizes: [{ size: string, price: number, colors: [{ name: string, hex: string, quantity: number, _id: string }] }],
    slug: string
}

const Shop = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [Layout, setLayout] = useState<string>('grid')
    const [categoryFilter, setFilter] = useState<productTypes[]>([])
    const [allCategories, setAllCategories] = useState<productTypes[]>([])
    const [slug, setSlug] = useState<String>("dresses-and-suits")

    useEffect(() => {
        setLoading(true);
        categoriApi.getCategoryProducts(`${slug}`).then((res) => setFilter(res?.data?.products))
        setLoading(false);
    }, [slug])

    useEffect(() => {
        categoriApi.getAllGategories()
            .then((res) => {
                setLoading(true);
                setAllCategories(res?.data?.categories)
                setLoading(false);
            })
    }, [])

    // document.title = 'Shop - BeBabyShop 2'
    return (
        <>
            <Crumb two={{ text: "shop", slug: "/shop" }} />
            <div className='my-4'>

                <div className='container'>
                    {loading ? <>
                        <Skeletonloading />
                        <Skeletonloading AdditonalClasses="hidden lg:grid" />
                    </> :
                        <div className='flex items-center justify-between my-4'>
                            <select
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSlug(e.target.value)}
                                className=' focus:text-primary text-black outline-none focus:outline-none border focus:border-primary/65 transition border-black rounded px-2 py-1'>
                                {allCategories?.map((option) => {
                                    return (<option key={option.slug} value={option.slug} >{option.name}</option>)
                                })}
                            </select>
                            <ProductsLayout Layout={Layout} setLayout={setLayout} />
                        </div>
                    }

                    <div className={`grid ${Layout} gap-2`}>
                        {categoryFilter?.map((product, index) => {

                            return (<div className=' border-gray-300 border rounded-sm' key={index}>
                                <CardProduct Layout={Layout} name={product.name} images={product?.images} description={product.description} sizes={product.sizes} slug={product.slug} key={index} />
                            </div>)
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Shop