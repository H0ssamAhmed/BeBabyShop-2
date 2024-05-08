import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
interface props {
    AdditonalClasses?: string
}
const Skeletonloading = ({ AdditonalClasses }: props) => {
    return (
        <div className={`pt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4 ${AdditonalClasses}`}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}

export default Skeletonloading