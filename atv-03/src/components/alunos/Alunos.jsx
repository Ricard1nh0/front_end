import React, { useState } from 'react';

function CadastroAlunos() {
  const [aluno, setAluno] = useState({
    nome: '',
    matricula: '',
    telefone: '',
    curso: '',
    notas: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do aluno:', aluno);
    setAluno({ nome: '', matricula: '', telefone: '', curso: '', notas: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Alunos</h2>
      <div>
        <label>Nome do Aluno:</label>
        <input type="text" name="nome" value={aluno.nome} onChange={handleChange} required />
      </div>
      <div>
        <label>Matrícula:</label>
        <input type="text" name="matricula" value={aluno.matricula} onChange={handleChange} required />
      </div>
      <div>
        <label>Telefone de Contato:</label>
        <input type="tel" name="telefone" value={aluno.telefone} onChange={handleChange} required />
      </div>
      <div>
        <label>Curso:</label>
        <input type="text" name="curso" value={aluno.curso} onChange={handleChange} required />
      </div>
      <div>
        <label>Notas:</label>
        <input type="text" name="notas" value={aluno.notas} onChange={handleChange} required />
      </div>
      <button type="submit">Cadastrar Aluno</button>
    </form>
  );
}

export default CadastroAlunos;