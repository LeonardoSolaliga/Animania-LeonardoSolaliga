import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from '../Container/ItemListContainer';
import ItemDetailContainer from '../Container/ItemDetailContainer';
import Cart from '../Container/CartContainer';
import NotFound from '../NotFound';
import NavBar from '../NavBar';

const Routing = () => {
  return (
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
  )
}

export default Routing;