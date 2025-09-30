import React, { useState } from 'react';

function CadastroProdutos() {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    validade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do produto:', produto);
    setProduto({ nome: '', preco: '', validade: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produtos</h2>
      <div>
        <label>Nome do Produto:</label>
        <input type="text" name="nome" value={produto.nome} onChange={handleChange} required />
      </div>
      <div>
        <label>Preço do Produto:</label>
        <input type="number" name="preco" value={produto.preco} onChange={handleChange} required />
      </div>
      <div>
        <label>Data de Validade:</label>
        <input type="date" name="validade" value={produto.validade} onChange={handleChange} required />
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default CadastroProdutos;