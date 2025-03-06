import React, { createContext, useContext, useEffect, useState } from 'react'
import { cartProducts, type CartContextType } from '../models/cart'
import { ProductToCart, type Product } from '../models/products'
import data from '../data.json'

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // products
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<cartProducts[]>([])

  useEffect(() => {
    setProducts(data)
  }, [products])

  const addProducts = (product: ProductToCart, quantity: number = 1) => {
    setCartProducts((prevItems) => {
      // verify if exist product in cart
      const isProduct = prevItems.find((p) => p.product.name === product.name)

      if (isProduct) {
        return prevItems.map((p) => {
          if (p.product.name === product.name) {
            const newQuantity = p.quantity + quantity
            return { ...p, quantity: newQuantity }
          }
          return p
        })
      } else {
        // if the product is new add quantity
        return [...prevItems, { product, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        productsToShow: products,
        productsToCart: cartProducts,
        addProducts,
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
