import QuantifierButton from '../components/Card/QuantifierButton'
import { useCartContext } from '../context/CartContext'
import { type Product as ProductProps } from '../models/products'

const Product = ({ product }: { product: ProductProps }) => {
  const { name, category, price } = product
  const { mobile, desktop } = product.image
  const { addItemToCart } = useCartContext()
  return (
    <article className='max-w-xs rounded-lg overflow-hidden bg-white py-2 px-1'>
      <div className='relative'>
        <picture>
          <source srcSet={desktop} media='(min-width: 1024px)' />
          <img
            src={mobile}
            alt={name}
            width={400}
            height={300}
            className='w-full h-auto rounded-lg'
          />
        </picture>
        <div className='absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2'>
          <QuantifierButton handleButton={() => addItemToCart} />
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

export default Product
