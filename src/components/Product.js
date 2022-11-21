import React from 'react'
import { NumericFormat } from 'react-number-format';

import { useDispatch,useSelector } from 'react-redux'
import { addToBasket } from '../basketSlice';

const Product = ({id,title,image,price}) => {

  const dispatch = useDispatch()
  
  const items = useSelector((state) => state.basketReducer.items)

  const item = {
    id : items.length + 1,
    title,
    image,
    price
  };

  const addItemToBasket = () =>{
    return(
      dispatch(addToBasket(item)))
  }
  
  return (
    <div className='text-xs w-1/5 bg-white m-2 p-2 flex flex-col items-center justify-evenly'>
        <p>{title}</p>
        <img  className='h-32' src={image} alt='' />
        <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <button onClick={addItemToBasket} className='bg-orange-300 mb-3 p-3 text-white font-w'>Add to Cart</button>
    </div>
  )
}

export default Product