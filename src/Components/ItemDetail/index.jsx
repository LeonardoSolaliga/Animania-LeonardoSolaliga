import React,{useContext, useState} from 'react'
import ItemCount from '../ItemCount';
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { Shop } from '../context';
const ItemDetail = ({product}) => {
  const [quantity,setQuantity]=useState(0);
  const navigate=useNavigate();

  //utilizo el context
  const {addItem}=useContext(Shop);

  const addCart=(quantity)=>{
    setQuantity(quantity);
  }
  console.log(quantity);
  const handleCompra=()=>{
    const productGuardado={...product,quantity:quantity};

    addItem(productGuardado);
    navigate('/cart');
  }
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt="producto"/>
        <h4>Precio :{product.price}</h4>
        <p>{product.description}</p>
        {!quantity ? <ItemCount initial={1} stock={5} onAdd={addCart}/> : <button onClick={handleCompra}> terminar compra </button>/*pregunto si es true o false, si es true devuelve lo que va luego del "?" sino lo que viene despues de "":"*/}
        {/*<ItemCount initial={1} stock={product?.rating?.count}/>*/}
    </div>
  )
}

export default ItemDetail