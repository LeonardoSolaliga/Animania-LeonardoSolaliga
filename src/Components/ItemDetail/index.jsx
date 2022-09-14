import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.css"
const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt="producto"/>
        <h4>Precio :{product.price}</h4>
        <p>{product.description}</p>
        <ItemCount initial={1} stock={5}/>
        {/*<ItemCount initial={1} stock={product?.rating?.count}/>*/}
    </div>
  )
}

export default ItemDetail