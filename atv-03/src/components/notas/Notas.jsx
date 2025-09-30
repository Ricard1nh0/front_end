import React, { useState } from 'react';

function CadastroNotas() {
  const [notas, setNotas] = useState({
    nomeAluno: '',
    nota1: '',
    nota2: '',
    nota3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados das notas:', notas);
    setNotas({ nomeAluno: '', nota1: '', nota2: '', nota3: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Notas</h2>
      <div>
        <label>Nome do Aluno:</label>
        <input type="text" name="nomeAluno" value={notas.nomeAluno} onChange={handleChange} required />
      </div>
      <div>
        <label>Nota 1:</label>
        <input type="number" name="nota1" value={notas.nota1} onChange={handleChange} required />
      </div>
      <div>
        <label>Nota 2:</label>
        <input type="number" name="nota2" value={notas.nota2} onChange={handleChange} required />
      </div>
      <div>
        <label>Nota 3:</label>
        <input type="number" name="nota3" value={notas.nota3} onChange={handleChange} required />
      </div>
      <button type="submit">Cadastrar Notas</button>
    </form>
  );
}

export default CadastroNotas;