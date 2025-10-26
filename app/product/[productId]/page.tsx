import DetailClient from '@/app/components/detail/DetailClient'
import { products } from '@/app/utils/Products'
import React from 'react'

type DetailProps = {
    productId? : string
}

const Detail = async ({params}:{params:DetailProps}) => {
    const {productId} = await params
    
    const product = products.find((product)=>product.id == productId)
    
  return (
    <div><DetailClient product={product}/></div>
  )
}

export default Detail