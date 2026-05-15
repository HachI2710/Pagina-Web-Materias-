// Routes y Route son componentes de react-router-dom que nos permiten definir 
// qué componente se muestra dependiendo de la URL actual.
import { Routes, Route } from 'react-router-dom';

// Importamos nuestros propios componentes y páginas para usarlos en el enrutamiento.
import Header from './components/Header';
import Home from './pages/Home';
import Materias from './pages/Materias';
import Favoritos from './pages/Favoritos';

// Importamos estilos específicos para la estructura principal de la App.
import './App.css';

// App es el componente principal que contiene la estructura general de nuestra página web.
function App() {
  return (
    // Contenedor principal de la aplicación
    <div className="app-container">
      {/* El Header se renderiza fuera de las Routes, lo que significa que 
          siempre será visible sin importar en qué página estemos. */}
      <Header />
      
      {/* Etiqueta main para contenido principal y aplicar los estilos de margen. */}
      <main className="main-content">
        {/* Routes envuelve todas nuestras rutas posibles. */}
        <Routes>
          {/* Si la URL es "/", renderiza el componente <Home /> */}
          <Route path="/" element={<Home />} />
          {/* Si la URL es "/materias", renderiza el componente <Materias /> */}
          <Route path="/materias" element={<Materias />} />
          {/* Si la URL es "/favoritos", renderiza el componente <Favoritos /> */}
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;