import React,{useContext,useState} from 'react';
import {AiOutlineShoppingCart} from'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../context';


const CartWidget=()=> {
  const {cart} = useContext(Shop);
  const navigate=useNavigate();
  const [numero, setNumero]=useState(0);
  var num=0;
  const aux=cart;
  aux.forEach(element => {
    num+=element.quantity;
    console.log(num);
  })
  //setNumero(num);
  const handleNavigate=()=>{
    navigate('/cart')
  }
  
  return (
    <div onClick={handleNavigate}><AiOutlineShoppingCart/>
    {numero}
    </div>
  )
}

export default CartWidget;