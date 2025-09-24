import React from 'react';
import './App.css'
import Menu from "./Components/Menu/Menu";
import Rodape from "./Components/Rodape/Rodape";
import Galeria from './Components/Galeria/Galeria';
import ListaProdutos from './Components/ListaProdutos/ListaProdutos';
import Noticias from './Components/Noticias/Noticias';

function App() {

  return (
    <>
      <div className="App">
      <Menu />

      <Galeria />

      <ListaProdutos />

      <Noticias />
      
      <Rodape />
      </div>
    </>
  )
}

export default App
