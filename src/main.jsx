// StrictMode: Herramienta de React para resaltar problemas potenciales en la aplicación durante el desarrollo.
import { StrictMode } from 'react';
// createRoot: Método de React 18+ para inicializar y renderizar la aplicación en el DOM.
import { createRoot } from 'react-dom/client';
// BrowserRouter: Envuelve la aplicación para habilitar el enrutamiento (navegación entre páginas sin recargar).
import { BrowserRouter } from 'react-router-dom';

// Importación de los estilos globales que aplican a toda la página.
import './index.css';
// Importación del componente principal de la aplicación.
import App from './App.jsx';

// Aquí es donde la aplicación de React "nace". Buscamos el elemento con id="root" en el index.html
// y renderizamos nuestra App dentro de él.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
