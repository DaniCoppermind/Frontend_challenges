import CardProduct from '@components/Card/CardProduct'
import CartProduct from '@components/Cart/CartProduct'
import { useProductContext } from './context/ProductContext'

const App = () => {
  const { products } = useProductContext()

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-4xl text-red-950 font-bold mb-8'>Desserts</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
        <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {products.map((product) => (
            <CardProduct key={product.name} product={product} />
          ))}
        </div>
        <div className='md:col-span-1'>
          <CartProduct />
        </div>
      </div>
    </main>
  )
}

export default App
