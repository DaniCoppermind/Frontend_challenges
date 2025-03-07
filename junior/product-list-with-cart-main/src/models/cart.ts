import { Product, ProductName, ProductPrice } from "./products"
export interface CartContextType {
  products: Product[]
}

export interface CartItem {
  name: ProductName
  price: ProductPrice
  quantity: number
}