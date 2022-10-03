import React,{useContext} from 'react';
import {AiOutlineShoppingCart} from'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../context';


const CartWidget=()=> {
  const {cart} = useContext(Shop);
  const navigate=useNavigate();
  const cantidad=cart.map((product)=>product.quantity);
  const cantidadTotal=cantidad.reduce((a,b)=>a+b,0);


  const handleNavigate=()=>{
    navigate('/cart')
  }
  
  return (
    <div onClick={handleNavigate}><AiOutlineShoppingCart/>
      <span>{cart.length && cantidadTotal}</span>
    </div>
  )
}

export default CartWidget;