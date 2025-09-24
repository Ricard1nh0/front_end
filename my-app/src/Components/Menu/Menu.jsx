import './Menu.css'

function Menu() {

  return (
    <>
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="/" className="menu-link">Página Inicial</a>
        </li>
        <li className="menu-item">
          <a href="/sobre" className="menu-link">Sobre Nós</a>
        </li>
        <li className="menu-item">
          <a href="/servicos" className="menu-link">Serviços</a>
        </li>
        <li className="menu-item">
          <a href="/contato" className="menu-link">Contato</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Menu
