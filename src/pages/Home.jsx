// Importamos nuestro componente reutilizable Card.
import Card from '../components/Card';
import styles from './Home.module.css';
// Importamos la imagen de perfil para que Vite la procese correctamente y no falle la ruta.
import perfilImg from '../perfil.jpeg';

// Página principal: Presentación
const Home = () => {
  // Arreglo (Array) de objetos con la información de nuestros compromisos.
  // Esto nos permite recorrerlos y crear varias Cards dinámicamente sin repetir código.
  const compromisos = [
    {
      number: '1',
      title: 'Asistencia y Participación',
      description: 'Asistir a todas las clases y participar activamente en las discusiones y proyectos propuestos durante el semestre.',
    },
    {
      number: '2',
      title: 'Entrega Puntual',
      description: 'Cumplir con las fechas establecidas para la entrega de trabajos, talleres y parciales, demostrando responsabilidad.',
    },
    {
      number: '3',
      title: 'Aprendizaje Continuo',
      description: 'Investigar más allá de lo visto en clase, explorando nuevas tecnologías y frameworks para mejorar mis habilidades como desarrollador.',
    },
  ];

  return (
    <div className={styles.homeContainer}>
      {/* Sección Hero: Contiene la presentación de los integrantes y la foto de perfil */}
      <section className={`${styles.heroSection} glass animate-fade-in`}>
        <div className={styles.profileInfo}>
          <h3 className="title-gradient">¡Hola!</h3>
          <h1 className="title-gradient">Soy Karolaaaaa penaloza - 0192581</h1>
          <h1 className="title-gradient">Soy Nathaly Alvarado - 0192586</h1>
          <h1 className="title-gradient">Soy Juan Dodino - 0192565</h1>
          <div className={styles.details}>
            <p className={styles.badge}>Profesión <strong>Ingeniería de Sistemas</strong></p>
          </div>
        </div>
        {/* Contenedor de la foto de perfil que usa la variable 'perfilImg' importada arriba */}
        <div className={styles.profileImageContainer}>
          <img src={perfilImg} alt="Perfil" className={styles.profileImage} />
        </div>
      </section>

      {/* Sección de Compromisos usando el componente reutilizable <Card /> */}
      <section className={styles.compromisosSection}>
        <h2 className={styles.sectionTitle}>Mis compromisos en la materia</h2>
        <div className={styles.cardsGrid}>
          {/* Función map(): Recorre nuestro arreglo 'compromisos' y por cada elemento,
              retorna un componente <Card /> pasándole las Propiedades (Props) correspondientes. */}
          {compromisos.map((item, index) => (
            <Card
              key={index} // React necesita una 'key' única cuando renderiza listas.
              index={index} // Usado para la animación en cascada.
              number={item.number} // Le pasamos el número a la Card.
              title={item.title} // Le pasamos el título.
              description={item.description} // Le pasamos la descripción.
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
