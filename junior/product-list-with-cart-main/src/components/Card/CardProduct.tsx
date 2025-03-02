import iconAddToCart from '/assets/images/icon-add-to-cart.svg'

interface Product {
  name: string
  category: string
  price: number
  image: {
    mobile: string
  }
}

const CardProduct = ({ product }: { product: Product }) => {
  const { name, category, price } = product
  const { mobile } = product.image

  return (
    <article className='max-w-xs rounded-lg overflow-hidden bg-white py-2 px-1'>
      <div className='relative'>
        <img
          src={mobile}
          alt={name}
          width={400}
          height={300}
          className='w-full h-auto rounded-lg'
        />
        <div className='absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2'>
          <button className='flex cursor-pointer bg-white items-center justify-center gap-2 px-4 py-2 rounded-full border border-rose-300 transition-colors'>
            <img src={iconAddToCart} alt='Add to Cart' className='w-4 h-4' />
            <span className='text-sm font-medium'>Add to Cart</span>
          </button>
        </div>
      </div>
      <section className='pt-8 pb-4'>
        <p className='text-sm text-gray-600'>{category}</p>
        <h3 className='text-lg font-medium text-rose-950'>{name}</h3>
        <p className='font-medium text-lg  text-red-800'>${price.toFixed(2)}</p>
      </section>
    </article>
  )
}

export default CardProduct
