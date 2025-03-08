import { useCartContext } from '../context/CartContext'
import emptyCart from '/assets/images/illustration-empty-cart.svg'
import removeItemIcon from '/assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '/assets/images/icon-carbon-neutral.svg'

const Cart = () => {
  const { cartItems, quantity, totalPrice, removeCartItem } = useCartContext()

  return (
    <section
      aria-labelledby='cart-heading'
      className='flex flex-col items-center justify-center text-center  bg-white p-4 rounded-xl '
    >
      <h2 id='cart-heading' className='text-rose-700 self-start font-bold mb-4'>
        Your Cart ({quantity})
      </h2>

      {cartItems.length ? (
        <>
          {cartItems.map((item) => (
            <div className='w-full' key={item.name}>
              <div className='flex justify-between'>
                <h3 className='text-base text-left font-medium'>{item.name}</h3>
                <button
                  onClick={() => removeCartItem(item.name)}
                  className='py-1 px-2 cursor-pointer text-gray-400 hover:text-gray-600'
                >
                  <img src={removeItemIcon} alt='Remove Item Icon' />
                </button>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <span className='text-orange-700'>{item.quantity}x</span>
                <span className='text-gray-500'>
                  @ ${item.price.toFixed(2)}
                </span>
                <span className='font-medium'>
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
              <hr className='h-px my-3 border-0 bg-gray-300' />
            </div>
          ))}
          {/* Order Total */}
          <div className='pt-4 mb-6'>
            <div className='flex items-center justify-between gap-10 font-semibold text-lg'>
              <span>Order Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          {/* Carbon Neutral Notice */}
          <div className='flex items-center gap-2 text-sm text-gray-600 mb-6'>
            <img
              src={carbonNeutralIcon}
              alt='Carbon Neutral icon'
              className='w-4 h-4'
            />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>
          {/* confirm button */}
          <button className='w-full bg-orange-700 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-900 cursor-pointer transition-colors'>
            Confirm Order
          </button>
        </>
      ) : (
        <>
          <img
            src={emptyCart}
            alt='Empty Cart Illustration'
            height={90}
            width={90}
            className='pb-2'
          />
          <p className='text-rose-950 opacity-40 text-xs font-medium'>
            Your added items will appear here
          </p>
        </>
      )}
    </section>
  )
}

export default Cart
