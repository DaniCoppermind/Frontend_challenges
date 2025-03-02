import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ProductProvider } from './context/ProductContext'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <App />
  </ProductProvider>
)
