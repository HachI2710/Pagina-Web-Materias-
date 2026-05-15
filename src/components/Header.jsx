import { Link } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <header className='header'>
      <h2>Parcial React</h2>

      <nav>
        <Link to='/'>Inicio</Link>

        <Link to='/materias'>
          Materias
        </Link>

        <Link to='/favoritos'>
          Favoritos
        </Link>
      </nav>
    </header>
  )
}

export default Header