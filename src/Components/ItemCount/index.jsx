import React, {useState} from 'react';
import './styles.css';

const ItemCount=({stock, initial, onAdd})=> {
    const [count, setCount]= useState(initial);

    const handleAdd=()=>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const handleDecrement=()=>{
        if(count>initial){
            setCount(count-1);
        }

    }
    const onCarrito=()=>{
        onAdd(count);
        setCount(initial);

    }


  return (
    <div>
        <div className="flexCount">
            <div className="alineado">
            <button className="boton" onClick={handleDecrement}> - </button>
            <p>{count}</p>
            <button className="boton" onClick={handleAdd}> + </button>
            </div>
            <div>
            <button className="boton" onClick={onCarrito}> Agregar al carrito</button>
            </div>
        </div>

    </div>
  )
}

export default ItemCount