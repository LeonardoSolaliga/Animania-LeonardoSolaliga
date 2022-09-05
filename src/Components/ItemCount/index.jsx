import React, {useState} from 'react';

const ItemCount=({stock, initial, onAdd})=> {
    const [count, setCount]= useState(initial);

    const handleAdd=()=>{
        if(count<stock){
            setCount(count+1);
        }
        else{
            alert("no hay mas stock");
        }
    }
    const handleDecrement=()=>{
        if(count>initial){
            setCount(count-1);
        }
        else{
            alert("No puede bajar mas");
        }

    }
    const onCarrito=()=>{
        onAdd(count);
        setCount(initial);

    }


  return (
    <div>
        <div>
        <button onClick={handleDecrement}> - </button>
        <p>{count}</p>
        <button onClick={handleAdd}> + </button>
        </div>
        <button onClick={onCarrito}> Agregar al carrito</button>

    </div>
  )
}

export default ItemCount