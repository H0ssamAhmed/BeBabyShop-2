// can fetch data by passing URL and can edit it keys values on client and serve side it same time
import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [categories, setCategories] = useState<[{ slug: string, name: string, icon: string }]>()
    useEffect(() => {
        fetch('https://competition-e-commerce-backend-1.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data?.categories))
        console.log(categories);
    }, [])
    return { categories }
}

export default useFetch