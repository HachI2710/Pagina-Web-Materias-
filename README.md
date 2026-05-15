# 🎓 Mi Portal Universitario - Parcial de React

Este proyecto es una aplicación web estática (Single Page Application) construida con React y Vite, diseñada como entrega para un parcial universitario de Ingeniería de Sistemas.

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la construcción de interfaces de usuario.
- **Vite**: Entorno de desarrollo ultrarrápido y empaquetador moderno.
- **React Router DOM (v7)**: Para el enrutamiento y la navegación sin recargas entre múltiples vistas.
- **CSS Modules & Vanilla CSS**: Para el diseño visual, empleando técnicas modernas como *Glassmorphism*, modo oscuro elegante, variables globales y animaciones CSS fluidas.

## 📁 Estructura del Proyecto

El código está estructurado de manera modular y limpia para maximizar la reutilización de componentes:

```text
src/
├── components/          # Componentes reutilizables
│   ├── Card.jsx         # Tarjeta dinámica (soporta imágenes o números)
│   └── Header.jsx       # Barra de navegación superior
├── pages/               # Vistas principales de la aplicación
│   ├── Home.jsx         # Portada con información del equipo y compromisos
│   ├── Materias.jsx     # Interfaz interactiva de materias con barra lateral
│   └── Favoritos.jsx    # Sección sobre la materia favorita y tecnologías a aprender
├── App.jsx              # Configuración de Layout y Rutas (Routes)
├── main.jsx             # Punto de entrada de la aplicación
└── index.css            # Estilos globales, variables y utilidades (Glassmorphism)
```

## ✨ Características Principales

1. **Reutilización de Componentes (Props)**: El componente `<Card />` se adapta dinámicamente según las *Props* que reciba, mostrando un número en la página principal y una imagen en la página de favoritos.
2. **Manejo de Estados (useState)**: La vista de `Materias` utiliza estados para cambiar de forma interactiva la descripción y el título de la materia sin cambiar de página ni recargar el navegador.
3. **Enrutamiento Completo**: Uso de `BrowserRouter` y `Link` para lograr una experiencia de navegación fluida.
4. **Diseño Responsivo e Interactivo**: Totalmente adaptable a dispositivos móviles. El diseño resalta por sus micro-interacciones (efectos *hover*), diseño redondeado y estéticas de vidrio esmerilado.
5. **Código Documentado**: Todo el código fuente está exhaustivamente comentado para facilitar la lectura, comprensión y sustentación del proyecto.

## 🛠️ Instrucciones de Ejecución Local

Sigue estos pasos para correr el proyecto en tu propia máquina:

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu computadora.
2. Abre una terminal y sitúate en la raíz del proyecto.
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
5. Abre el enlace proporcionado en tu terminal (usualmente `http://localhost:5173/`) manteniendo presionada la tecla `Ctrl` y haciendo clic.

## 👥 Integrantes del Equipo

- Karol Peñaloza - 0192581
- Nathaly Alvarado - 0192586
- Juan Dodino - 0192565
