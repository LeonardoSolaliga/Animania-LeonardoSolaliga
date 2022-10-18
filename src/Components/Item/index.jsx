import React from 'react'
import "./styles.css";
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
  const navigate= useNavigate();
  const handleNavigate=()=>{
    navigate(`/item/${product.id}`)
  }
  return (
      <div className='separador' onClick={handleNavigate}>
        <h3 className='title'>{product.title}</h3>
        <img className='image' src={product.image} alt="descripcion de imagen"/>
        <h5>Precio: ${product.price}</h5>
      </div>
  )
}

export default Item