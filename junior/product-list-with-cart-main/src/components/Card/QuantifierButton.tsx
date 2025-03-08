import { useCartContext } from '../../context/CartContext'
import iconAddToCart from '/assets/images/icon-add-to-cart.svg'
import increaseItemIcon from '/assets/images/icon-increment-quantity.svg'
import decrementItemIcon from '/assets/images/icon-decrement-quantity.svg'

type Props = {
  name: string
}

const QuantifierButton = ({ name }: Props) => {
  const { getItemQuantity, increaseCartItem, decreaseCartItem } =
    useCartContext()

  const handleEmptyCart = () => {
    increaseCartItem(name)
  }
  const quantity = getItemQuantity(name)

  return (
    <>
      {quantity !== 0 ? (
        <div className='flex items-center justify-center p-2'>
          <div className='flex items-center justify-between w-40 h-10 px-2 bg-[#D13B18] text-white rounded-full md:w-30 md:h-8'>
            <button
              onClick={() => decreaseCartItem(name)}
              className='flex items-center justify-center w-5 h-5 rounded-full cursor-pointer border p-1'
              aria-label='Decrease quantity'
            >
              <img
                src={decrementItemIcon}
                width={16}
                height={16}
                alt='Decrement Icon'
              />
            </button>
            <span className='font-medium text-lg'>{quantity}</span>
            <button
              onClick={() => increaseCartItem(name)}
              className='flex items-center justify-center w-5 h-5 rounded-full cursor-pointer border p-1'
              aria-label='Increase quantity'
            >
              <img
                src={increaseItemIcon}
                width={16}
                height={16}
                alt='Increment Icon'
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleEmptyCart}
          className='flex cursor-pointer bg-white items-center justify-center gap-2 px-4 py-2 rounded-full border border-rose-300 hover:bg-rose-50  transition-colors'
        >
          <img src={iconAddToCart} alt='Add to Cart' className='w-4 h-4' />
          <span className='text-sm font-medium'>Add to Cart</span>
        </button>
      )}
    </>
  )
}

export default QuantifierButton
