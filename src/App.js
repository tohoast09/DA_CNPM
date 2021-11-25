import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom' 
import ElementRoutes from './routes/Routes';
import Footer from './components/Footer';
import { ProductDataProvider } from './assets/firebase-data/products';
import { UserContextProvider } from './stores/AppState';
import { FilterStateProvider } from './stores/AppState';
import { CartContextProvider } from './stores/CartContext';
import GetUserProvider from './assets/firebase-data/getUserAPI';
function App() {
  
  return (
    <UserContextProvider>
    <CartContextProvider>

    <FilterStateProvider>
    <ProductDataProvider>

      <ElementRoutes/>
  </ProductDataProvider>
    </FilterStateProvider>
    </CartContextProvider>
    </UserContextProvider>

      );
}

export default App;

