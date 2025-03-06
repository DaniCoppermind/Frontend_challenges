import { useCartContext } from '../context/CartContext'
import emptyCart from '/assets/images/illustration-empty-cart.svg'
import removeItem from '/assets/images/icon-remove-item.svg'
import carbonNeutralImg from '/assets/images/icon-carbon-neutral.svg'

const Cart = () => {
  const { productsToCart } = useCartContext()
  const count = productsToCart.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <section
      aria-labelledby='cart-heading'
      className='flex flex-col items-center justify-center text-center w-full bg-white p-4 rounded-xl'
    >
      <h2 id='cart-heading' className='text-rose-700 self-start font-bold mb-4'>
        Your Cart ({count})
      </h2>
      {productsToCart.length ? (
        <>
          {productsToCart.map((product) => {
            const { name, price } = product.product
            const { quantity } = product
            return (
              <div key={name}>
                <h3 className='text-sm font-bold '>{name}</h3>
                <p>
                  <span>{quantity}x</span> @$
                  {price.toFixed(2)} ${price.toFixed(2)}
                </p>
                <img src={removeItem} alt='Remove Item Button' />
                <hr />
              </div>
            )
          })}
          <div>
            <p>Order Total $0</p>
            <p>
              <img src={carbonNeutralImg} alt='Icon Carbon Neutral' />
              <span>
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </p>
            <button>Confirm Order</button>
          </div>
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
