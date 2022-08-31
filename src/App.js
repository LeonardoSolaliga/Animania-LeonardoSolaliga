import React from 'react'
import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './Components/Container/ItemListContainer';
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola bienvenido a nuestra tienda!"}/>
    </>
  );
}

export default App;
