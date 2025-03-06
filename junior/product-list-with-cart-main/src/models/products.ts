export type Product = {
  name: string
  price: number
  category: string
  image: {
    desktop: string
    mobile: string
    thumbnail: string
  }
}

export type ProductToCart = Pick<Product, 'name' | 'price'>