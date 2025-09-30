import React from 'react';
import CadastroProdutos from './components/produtos/Produtos';
import CadastroPessoa from './components/pessoas/Pessoa';
import CadastroNotas from './components/notas/Notas';
import CadastroCursos from './components/cursos/Cursos';
import CadastroAlunos from './components/alunos/Alunos';

function App() {
  return (
    <div>
      <CadastroProdutos />
      <hr />
      <CadastroPessoa />
      <hr />
      <CadastroNotas />
      <hr />
      <CadastroCursos />
      <hr />
      <CadastroAlunos />
    </div>
  );
}

export default App;