import React from 'react'
import "./styles.css";

const Item = ({product}) => {
  return (
    <div className='separador'>
        <h4>{product.title}</h4>
        <img src={product.image} alt="descripcion de imagen"/>
        <p>{product.description}</p>

    </div>
  )
}

export default Item