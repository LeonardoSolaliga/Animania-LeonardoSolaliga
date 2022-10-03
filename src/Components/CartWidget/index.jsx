import React,{useContext} from 'react';
import {AiOutlineShoppingCart} from'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../context';
import "./styles.css";


const CartWidget=()=> {
  const {cart} = useContext(Shop);
  const navigate=useNavigate();
  const cantidad=cart.map((product)=>product.quantity);
  const cantidadTotal=cantidad.reduce((a,b)=>a+b,0);


  const handleNavigate=()=>{
    navigate('/cart')
  }
  
  return (
    <>
    {!cart.length ? <div id='invisible' onClick={handleNavigate}><AiOutlineShoppingCart/>
      <span>{cart.length && cantidadTotal}</span>
    </div>:<div id='visible' onClick={handleNavigate}><AiOutlineShoppingCart/>
      <span>{cart.length && cantidadTotal}</span>
    </div>}
    </>
  )
}

export default CartWidget;