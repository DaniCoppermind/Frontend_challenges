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

export type ProductName = Pick<Product, 'name'>
export type ProductPrice = Pick<Product, 'price'>