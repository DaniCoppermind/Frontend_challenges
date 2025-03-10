import { useCartContext } from '../context/CartContext'
import emptyCart from '/assets/images/illustration-empty-cart.svg'
import removeItemIcon from '/assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '/assets/images/icon-carbon-neutral.svg'
import orderConfirmedIcon from '/assets/images/icon-order-confirmed.svg'

import { useState } from 'react'
import { Modal } from '../components/Modal'

const TIMER_SUCCESS_MESSAGE = 3000

const Cart = () => {
  const { cartItems, quantity, totalPrice, removeCartItem, cleanCart } =
    useCartContext()
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleNewOrder = () => {
    cleanCart()
    setIsOpen(false)
    setShowSuccessMessage(true)

    setTimeout(() => {
      setShowSuccessMessage(false)
    }, TIMER_SUCCESS_MESSAGE)
  }

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
                  className='cursor-pointer text-gray-400 hover:text-gray-600'
                >
                  <img
                    className='border rounded-full p-0.5'
                    src={removeItemIcon}
                    alt='Remove Item Icon'
                  />
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
          <div className='pt-4 mb-6 flex w-full justify-between items-center font-semibold text-lg'>
            <span>Order Total</span>
            <span className='font-bold text-xl'>${totalPrice.toFixed(2)}</span>
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
          <button
            onClick={() => setIsOpen(true)}
            className='w-full bg-orange-700 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-900 cursor-pointer transition-colors'
          >
            Confirm Order
          </button>

          {/* Modal Cart Confirm Order */}
          {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
              <section className='flex flex-col justify-between h-full'>
                <div>
                  <img
                    src={orderConfirmedIcon}
                    alt='Order Confirmed Icon'
                    className='w-12 h-12'
                  />
                  <h3 className='text-2xl font-bold mt-2'>Order Confirmed</h3>
                  <p className='text-gray-500 text-md'>
                    We hope you enjoy your food!
                  </p>
                </div>

                <div className='mt-4 space-y-4 flex-1 bg-rose-50 p-4 rounded-xl'>
                  {cartItems.map((item) => (
                    <div
                      key={item.name}
                      className='flex items-center justify-between'
                    >
                      <div className='flex gap-2'>
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                          height={50}
                          width={50}
                          className='rounded-xl'
                        />
                        <div>
                          <h4 className='font-bold'>{item.name}</h4>
                          <span className='text-orange-700'>
                            {item.quantity}x{' '}
                            <span className='text-gray-500'>
                              @ ${item.price.toFixed(2)}
                            </span>
                          </span>
                        </div>
                      </div>
                      <span className='text-lg font-semibold'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className='border-t border-gray-300 mt-4 pt-4 flex justify-between text-lg font-semibold'>
                  <span>Total</span>
                  <span className='text-orange-700'>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleNewOrder}
                  className='w-full mt-6 bg-orange-700 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-900 transition'
                >
                  Start New Order
                </button>
              </section>
            </Modal>
          )}
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

      {showSuccessMessage && (
        <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity duration-300 opacity-100'>
          ✅ Purchase Successful!
        </div>
      )}
    </section>
  )
}

export default Cart
