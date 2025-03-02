import React, { createContext, useContext, useState, useEffect } from 'react'
import data from '../data.json'

interface Product {
  name: string
  category: string
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

interface ProductContextProps {
  products: Product[]
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined)

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
