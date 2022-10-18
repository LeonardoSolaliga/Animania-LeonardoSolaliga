import React from 'react';
import "./styles.css";
import ItemList from '../../ItemList';
import {useParams} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const ItemListContainer = () => {

  const {categoryId}=useParams();
  const [loading,productos,error]=useFirebase(categoryId)

  return (
    <>
    <div>
      {loading ? <h2>Loading</h2>:<ItemList products={productos}/>}
      {error && <h2>{error}</h2>}

    </div>
    </>
  )
}

export default ItemListContainer;