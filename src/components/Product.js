import React from 'react'
import { NumericFormat } from 'react-number-format';

const Product = ({product}) => {
  const rating = Math.floor(Math.random() * (6 - 1)) + 1;
  return (
    <div className='text-xs w-1/5 bg-white m-2 p-2 flex flex-col items-center justify-evenly'>
        <p>{product.title}</p>
        <img  className='h-32' src={product.image} alt='' />
        <div>
            {rating}
        </div>
        <NumericFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <button className='bg-orange-500 mb-3 p-3 text-white font-w'>Add to Cart</button>
    </div>
  )
}

export default Product