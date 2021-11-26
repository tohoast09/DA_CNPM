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
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
   palette:{
     primary:{
       main: '#4267b2',
     }
   }
});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <UserContextProvider>
    <CartContextProvider>

    <FilterStateProvider>
    <ProductDataProvider>

      <ElementRoutes/>
  </ProductDataProvider>
    </FilterStateProvider>
    </CartContextProvider>
    </UserContextProvider>
    </ThemeProvider>
      );
}

export default App;

