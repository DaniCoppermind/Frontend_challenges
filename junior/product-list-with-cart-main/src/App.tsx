import { useCartContext } from './context/CartContext'
import Cart from './pages/Cart'
import Product from './pages/Product'

const App = () => {
  const { products } = useCartContext()

  return (
    <main className='container mx-auto p-4 flex flex-col items-center justify-center'>
      <h1 className='text-4xl text-red-950 font-bold mb-8'>Desserts</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center md:items-start'>
        <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
        <div className='md:col-span-1'>
          <Cart />
        </div>
      </div>
    </main>
  )
}

export default App
