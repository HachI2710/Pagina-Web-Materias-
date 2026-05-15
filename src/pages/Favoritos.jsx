// Reutilizamos nuestro componente Card importándolo.
import Card from '../components/Card';
import styles from './Favoritos.module.css';

// Página de Materia Favorita y tecnologías por aprender.
const Favoritos = () => {
  // Arreglo de cosas que queremos aprender. 
  // Nota cómo usamos 'imageUrl' en lugar de 'number'. Nuestra <Card /> está programada para entender esto
  // y adaptarse automáticamente mostrando una imagen en lugar del número circular.
  const aprender = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Desarrollo Backend Avanzado',
      description: 'Me gustaría profundizar en Node.js, arquitecturas de microservicios y despliegues en la nube usando AWS o Google Cloud.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Desarrollo Móvil',
      description: 'Aprender React Native o Flutter para poder crear aplicaciones móviles nativas tanto para Android como para iOS.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ciberseguridad',
      description: 'Entender las vulnerabilidades comunes en aplicaciones web, cómo prevenirlas y aprender sobre hacking ético para proteger sistemas.',
    },
  ];

  return (
    <div className={styles.favoritosContainer}>
      {/* Sección estática principal que habla sobre la materia favorita */}
      <section className={`${styles.materiaFavorita} glass animate-fade-in`}>
        <div className={styles.favoritaContent}>
          <div className={styles.iconoFavorito}>❤️</div>
          <div className={styles.infoFavorita}>
            <h2>Mi Materia Favorita: <span className="title-gradient">Diseño Web</span></h2>
            <p>
              El Diseño Web es mi materia preferida porque me permite combinar la lógica de la programación con la creatividad visual. 
              Ver cómo unas líneas de código se transforman en una interfaz interactiva y hermosa que las personas pueden usar es muy gratificante. 
              Además, el ecosistema frontend (como React y CSS) evoluciona constantemente, lo que significa que siempre hay algo nuevo y emocionante por aprender.
            </p>
          </div>
        </div>
      </section>

      {/* Sección que reutiliza el componente Card pasándole imágenes */}
      <section className={styles.aprenderSection}>
        <h2 className={styles.sectionTitle}>Cosas que me gustaría aprender</h2>
        <div className={styles.cardsGrid}>
          {/* map() recorre el arreglo 'aprender' y renderiza múltiples Cards dinámicamente */}
          {aprender.map((item, index) => (
            <Card 
              key={index}
              index={index}
              imageUrl={item.imageUrl} // Le pasamos una URL de imagen por Props
              title={item.title}       // Título de la tarjeta
              description={item.description} // Descripción de la tarjeta
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Favoritos;
