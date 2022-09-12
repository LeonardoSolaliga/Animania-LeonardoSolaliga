import React from 'react'
import NavBar from './Components/NavBar';
import './App.css';
//import ItemListContainer from './Components/Container/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer';
function App() {
  return (
    <>
    <NavBar/>
    {/*<ItemListContainer greeting={"Hola bienvenido a nuestra tienda!"/>*/}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
