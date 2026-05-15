import styles from './Card.module.css';

// Componente Card REUTILIZABLE. 
// Recibe "Props" (propiedades) que son: number, imageUrl, title, description, index.
// Dependiendo de lo que reciba, la tarjeta se adapta y muestra una imagen o un número.
const Card = ({ number, imageUrl, title, description, index }) => {
  return (
    <div 
      className={`${styles.card} glass animate-fade-in`} 
      // El index se usa para darle un retraso a la animación, así aparecen en cascada (una tras otra).
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.cardHeader}>
        {/* Renderizado Condicional: Si existe la prop 'number', mostramos este div con el número */}
        {number && <div className={styles.cardNumber}>{number}</div>}
        
        {/* Renderizado Condicional: Si existe la prop 'imageUrl', mostramos la imagen */}
        {imageUrl && (
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
          </div>
        )}
      </div>
      
      {/* Cuerpo de la tarjeta donde siempre mostramos el título y la descripción */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
