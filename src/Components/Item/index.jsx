import React from 'react'
import "./styles.css";

const Item = ({product}) => {
  return (
    <div className='separador'>
        <h4>{product.name}</h4>
        <img src={product.imagenurl} alt="descripcion de imagen"/>
        <p>{product.description}</p>
        <h5>$ {product.precio}</h5>
        <h6>stock: {product.stock}</h6>

    </div>
  )
}

export default Item