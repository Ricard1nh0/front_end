import React, { useState } from 'react';

function CadastroPessoa() {
  const [pessoa, setPessoa] = useState({
    nome: '',
    dataNascimento: '',
    telefone: '',
    endereco: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da pessoa:', pessoa);
    setPessoa({ nome: '', dataNascimento: '', telefone: '', endereco: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Pessoa</h2>
      <div>
        <label>Nome da Pessoa:</label>
        <input type="text" name="nome" value={pessoa.nome} onChange={handleChange} required />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input type="date" name="dataNascimento" value={pessoa.dataNascimento} onChange={handleChange} required />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="tel" name="telefone" value={pessoa.telefone} onChange={handleChange} required />
      </div>
      <div>
        <label>Endereço:</label>
        <input type="text" name="endereco" value={pessoa.endereco} onChange={handleChange} required />
      </div>
      <button type="submit">Cadastrar Pessoa</button>
    </form>
  );
}

export default CadastroPessoa;