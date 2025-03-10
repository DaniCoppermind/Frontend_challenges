import { Product } from "./products";

export interface CartContextType {
  products: Product[];
  cartItems: CartItem[];
  getItemQuantity: (name: string) => number
  removeCartItem: (name: string) => void
  increaseCartItem: (name: string) => void
  decreaseCartItem: (name: string) => void
  cleanCart: () => void
  totalPrice: number
  quantity: number
}

export type CartItem = {
  name: string
  price: number
  quantity: number
  thumbnail: string
}