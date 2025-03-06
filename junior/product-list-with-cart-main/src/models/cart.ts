import { Product, ProductToCart } from "./products"

export interface cartProducts {
  product: ProductToCart
  quantity: number
}

export interface CartContextType {
  productsToShow: Product[]
  productsToCart: cartProducts[]
  addProducts: (product: ProductToCart, quantity?: number) => void
}