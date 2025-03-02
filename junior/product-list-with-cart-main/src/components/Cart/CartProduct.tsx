import emptyCart from '/assets/images/illustration-empty-cart.svg'

const CartProduct = () => {
  return (
    <section
      aria-labelledby='cart-heading'
      className='flex flex-col items-center justify-center text-center w-full bg-white p-4 rounded-xl'
    >
      <h2 id='cart-heading' className='text-rose-700 self-start font-bold mb-4'>
        Your Cart (0)
      </h2>
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
    </section>
  )
}

export default CartProduct
