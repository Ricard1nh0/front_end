import React, { useState } from 'react';

function CadastroCursos() {
  const [curso, setCurso] = useState({
    nomeEscola: '',
    endereco: '',
    telefone: '',
    nomeCurso: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do curso:', curso);
    setCurso({ nomeEscola: '', endereco: '', telefone: '', nomeCurso: '', descricao: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Cursos</h2>
      <div>
        <label>Nome da Escola:</label>
        <input type="text" name="nomeEscola" value={curso.nomeEscola} onChange={handleChange} required />
      </div>
      <div>
        <label>Endereço:</label>
        <input type="text" name="endereco" value={curso.endereco} onChange={handleChange} required />
      </div>
      <div>
        <label>Telefone de Contato:</label>
        <input type="tel" name="telefone" value={curso.telefone} onChange={handleChange} required />
      </div>
      <div>
        <label>Nome do Curso:</label>
        <input type="text" name="nomeCurso" value={curso.nomeCurso} onChange={handleChange} required />
      </div>
      <div>
        <label>Descrição do Curso:</label>
        <textarea name="descricao" value={curso.descricao} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Cadastrar Curso</button>
    </form>
  );
}

export default CadastroCursos;