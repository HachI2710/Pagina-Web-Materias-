// Link: Componente para navegar entre páginas sin recargar el navegador.
// useLocation: Hook para saber en qué URL (ruta) estamos actualmente.
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

// Componente Header que representa la barra de navegación superior.
const Header = () => {
  // Obtenemos la ubicación actual (ej: "/", "/materias") para saber qué pestaña resaltar.
  const location = useLocation();

  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.logoContainer}>
        {/* Logo o texto principal de la navbar */}
        <div className={styles.logoIcon}>UFPSO</div>
      </div>
      
      {/* Navegación con enlaces a nuestras diferentes rutas */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            {/* Si location.pathname es igual a '/', añadimos la clase 'active' para resaltarlo */}
            <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>
              Presentación
            </Link>
          </li>
          <li>
            <Link to="/materias" className={`${styles.navLink} ${location.pathname === '/materias' ? styles.active : ''}`}>
              Materias
            </Link>
          </li>
          <li>
            <Link to="/favoritos" className={`${styles.navLink} ${location.pathname === '/favoritos' ? styles.active : ''}`}>
              Favoritos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
