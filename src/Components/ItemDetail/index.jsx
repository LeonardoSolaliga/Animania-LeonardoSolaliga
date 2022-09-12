import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.css"
const ItemDetail = ({product}) => {

  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt="producto"/>
        <p>{product.description}</p>
        <ItemCount initial={1} stock={5}/>
    </div>
  )
}

export default ItemDetail