import React from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './Components/Container/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound';
import Cart from './Components/Container/CartContainer';
import ShopProvider from './Components/context';

function App() {
  return (
    <ShopProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
