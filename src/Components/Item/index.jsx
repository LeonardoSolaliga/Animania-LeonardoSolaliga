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
        <h4>{product.title}</h4>
        <img src={product.image} alt="descripcion de imagen"/>
        <p>{product.description}</p>

    </div>
  )
}

export default Item