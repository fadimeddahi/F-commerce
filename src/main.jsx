import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import ShopContextProvider from './ContextApi/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  
    <ShopContextProvider>
        <App />
    </ShopContextProvider>

  
)
