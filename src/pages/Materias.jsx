// useState: Hook de React para manejar estados (variables dinámicas que actualizan la interfaz al cambiar).
import { useState } from 'react';
import styles from './Materias.module.css';

// Página de Materias con un Sidebar (menú lateral) interactivo.
const Materias = () => {
  // Arreglo con la información de las materias. (Se removieron los íconos a petición).
  const materias = [
    {
      id: 1,
      nombre: 'Calculo vectorial',
      descripcion: 'Aprendemos derivadas parciales, integrales múltiples, análisis vectorial y sus aplicaciones.'
    },
    {
      id: 2,
      nombre: 'Proyecto Integrador I',
      descripcion: 'Aplicamos los conocimientos adquiridos en la carrera para desarrollar un proyecto tecnológico completo en equipo.'
    },
    {
      id: 3,
      nombre: 'Probabilidad y estadistica',
      descripcion: 'Estudiamos eventos probabilísticos, distribuciones, análisis de datos y herramientas estadísticas aplicadas a la ingeniería.'
    },
    {
      id: 4,
      nombre: 'Programacion II',
      descripcion: 'Avanzamos en la lógica de programación enfocándonos en el paradigma orientado a objetos (POO), herencia y polimorfismo.'
    },
    {
      id: 5,
      nombre: 'Electromagnetismo',
      descripcion: 'Analizamos las leyes de campos eléctricos y magnéticos, circuitos, y la relación física de la corriente y la energía.'
    },
    {
      id: 6,
      nombre: 'Desarrollo de aplicaciones web y sistemas operativos',
      descripcion: 'Aprendemos sobre la construcción de interfaces y backends, a la vez que exploramos cómo funcionan los sistemas operativos base.'
    }
  ];

  // Declaración del estado 'materiaSeleccionada'.
  // Estado inicial: El primer elemento de nuestro arreglo 'materias' (Calculo vectorial).
  // 'setMateriaSeleccionada' es la función que usaremos para actualizar qué materia estamos viendo.
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(materias[0]);

  return (
    <div className={styles.materiasContainer}>
      {/* Barra lateral (Sidebar) con la lista de materias */}
      <aside className={`${styles.sidebar} glass`}>
        <h2 className={styles.sidebarTitle}>Materias</h2>
        <ul className={styles.listaMaterias}>
          {/* Recorremos las materias con map() para crear la lista interactiva */}
          {materias.map((materia) => (
            <li 
              key={materia.id}
              // Operador ternario: Si el id de la materia seleccionada coincide con esta materia, le agregamos la clase CSS 'activo' para resaltarla.
              className={`${styles.itemMateria} ${materiaSeleccionada.id === materia.id ? styles.activo : ''}`}
              // Evento onClick: Cuando el usuario hace clic, actualizamos el estado con la materia elegida.
              // Esto provoca que React re-renderice la página mostrando los datos nuevos automáticamente.
              onClick={() => setMateriaSeleccionada(materia)}
            >
              {materia.nombre}
            </li>
          ))}
        </ul>
      </aside>
      
      {/* Contenido principal: Aquí se muestra la información de la 'materiaSeleccionada' dinámica */}
      <div className={`${styles.contenidoPrincipal} glass animate-fade-in`} key={materiaSeleccionada.id}>
        <div className={styles.materiaHeader}>
          {/* Mostramos el nombre dinámicamente leyendo del estado */}
          <h1 className="title-gradient">{materiaSeleccionada.nombre}</h1>
        </div>
        <div className={styles.materiaBody}>
          <h3>Descripción del curso</h3>
          {/* Mostramos la descripción dinámica leyendo del estado */}
          <p>{materiaSeleccionada.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Materias;
