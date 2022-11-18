import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div className='flex flex-wrap justify-center'>
        
    { products.map((product)=>{
        return(
       <Product key={product.id} product={product} />
    )})}
    </div>
  )
}

export default ProductFeed