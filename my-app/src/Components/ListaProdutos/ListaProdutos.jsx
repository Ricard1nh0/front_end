import './ListaProdutos.css'

function ListaProdutos() {

  const products = [
    { id: 1, name: 'Tênis' },
    { id: 2, name: 'Camiseta' },
    { id: 3, name: 'Calça' },
  ];
  
  return (
    <>
       <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ListaProdutos
