import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CartContextType, CartItem } from '../models/cart'
import data from '../data.json'
import { Product } from '../models/products'

const CartContext = createContext<CartContextType | undefined>(undefined)

type Props = {
  children: ReactNode
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  // Products to show
  const [products, setProducts] = useState<Product[]>([])
  // Cart Products
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    setProducts(data)
  }, [])

  const getItemQuantity = (name: string) => {
    return cartItems.find((item) => item.name === name)?.quantity || 0
  }

  const quantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const increaseCartItem = (name: string) => {
    setCartItems((currItems) => {
      const product = products.find((p) => p.name === name)
      if (!product) return currItems

      if (currItems.find((item) => item.name === name) == null) {
        return [...currItems, { name, price: product.price, quantity: 1 }]
      } else {
        return currItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    })
  }

  const decreaseCartItem = (name: string) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.name === name)?.quantity === 1) {
        return currItems.filter((item) => item.name !== name)
      } else {
        return currItems.map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeCartItem = (name: string) => {
    return setCartItems((currItems) => {
      return currItems.filter((item) => item.name !== name)
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        getItemQuantity,
        removeCartItem,
        increaseCartItem,
        decreaseCartItem,
        quantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context)
    throw new Error('CartContext must be used within a CartProvider')
  return context
}
