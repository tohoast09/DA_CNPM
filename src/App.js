import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom' 
import ElementRoutes from './routes/Routes';
import Footer from './components/Footer';
import { ProductDataProvider } from './assets/firebase-data/products';
import { AuthStateProvider } from './stores/AppState';
import { FilterStateProvider } from './stores/AppState';

function App() {
  
  return (
    <AuthStateProvider>
    <FilterStateProvider>
    <ProductDataProvider>
      <ElementRoutes/>
    </ProductDataProvider>
    </FilterStateProvider>
    </AuthStateProvider>
  );
}

export default App;

