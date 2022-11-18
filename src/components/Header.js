import React from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {  ShoppingCartIcon} from '@heroicons/react/24/solid'

import { useSelector } from 'react-redux'

const Header = () => {
  const items = useSelector((state) => state.basketReducer.items)

  return (
    <div className='bg-color flex items-center justify-around '>
        
        <img className='w-24 h-6 cursor-pointer' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='' />
        <div className='flex m-2 ml-3'>
            <input className='w-64 px-4 focus:outline-none text-xs' type='text' placeholder='search for products brands and more'/>
            <div className='p-2 bg-white'>
            <MagnifyingGlassIcon className='h-6 w-6 cursor-pointer text-color'/>
            </div>
        </div>
        <div className='w-32 bg-white px-8 py-2 text-center text-color text-sm border '>
            <p className='h-5 font-w cursor-pointer'>Login</p>
        </div>
        <div className='flex text-white cursor-pointer'>   
        <ShoppingCartIcon className='h-6'/>
        <p className='font-w '>Cart</p>
        <center><p className='relative bottom-1 right-11 bg-orange-500 w-4 h-4 text-sm rounded-full'>{items.length}</p></center>
        </div>
    </div>
  )
}

export default Header