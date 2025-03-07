import React from 'react'
import iconAddToCart from '/assets/images/icon-add-to-cart.svg'

const QuantifierButton = ({ handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className='flex cursor-pointer bg-white items-center justify-center gap-2 px-4 py-2 rounded-full border border-rose-300 hover:bg-rose-50  transition-colors'
    >
      <img src={iconAddToCart} alt='Add to Cart' className='w-4 h-4' />
      <span className='text-sm font-medium'>Add to Cart</span>
    </button>
  )
}

export default QuantifierButton
