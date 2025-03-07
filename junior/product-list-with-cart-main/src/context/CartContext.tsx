import React, { createContext, useContext, useEffect, useState } from 'react'

import data from '../data.json'
import { CartContextType, CartItem } from '../models/cart'
import { Product } from '../models/products'

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[] | []>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    setProducts(data)
  }, [products])

  return (
    <CartContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}
