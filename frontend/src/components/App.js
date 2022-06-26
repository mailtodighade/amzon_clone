

import Header from './Header'
import Footer from './Footer'
import ProductCard from './ProductCard';
import HomeScreen from '../Screens/HomeScreen';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen'
function App() {
  return (
    <BrowserRouter> 
      
      <Routes>

      <Route path = '/' element = {<HomeScreen />} />
      <Route path = '/product/:id' element = {<ProductScreen />} />
      <Route path = '/cart' element = {<CartScreen />} />
      
      
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
