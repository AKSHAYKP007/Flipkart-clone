import React from 'react'

const Navigation = () => {
  return (
    <div className='flex bg-white shadow-sm'>
        <div className='flex flex-col items-center p-3 cursor-pointer'>
            <img className='h-16 w-16' src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' alt=''/>
            <p className='font-w text-sm'>Grocery</p>
        </div>
        <div className='flex flex-col items-center p-3 cursor-pointer'>
            <img className='h-16 w-16' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt='' />
            <p className='font-w text-sm'>Electronics</p>
        </div>
        <div className='flex flex-col items-center p-3 cursor-pointer'>
            <img className='h-16 w-16' src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' alt='' />
            <p className='font-w text-sm'>Clothing</p>
        </div>
    </div>
  )
}

export default Navigation