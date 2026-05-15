import { useState } from 'react'
import '../App.css'

function Materias() {
  const materias = [
    {
      nombre: 'Cálculo Vectorial',
      descripcion:
        'Aprendemos derivadas parciales, integrales múltiples y vectores.'
    },

    {
      nombre: 'Probabilidad y Estadística',
      descripcion:
        'Estudiamos eventos, distribuciones y análisis de datos.'
    },

    {
      nombre: 'Electromagnetismo',
      descripcion:
        'Analizamos campos eléctricos y magnéticos.'
    },

    {
      nombre: 'Proyecto Integrador I',
      descripcion:
        'Aplicamos conocimientos en proyectos prácticos.'
    },

    {
      nombre: 'Desarrollo de App Web',
      descripcion:
        'Creamos aplicaciones usando React y Node.'
    },

    {
      nombre: 'Programación II',
      descripcion:
        'Aprendemos lógica avanzada y programación.'
    }
  ]

  const [materia, setMateria] = useState(
    materias[0]
  )

  return (
    <div className='materias'>
      <div className='menu'>
        {materias.map((item) => (
          <button
            key={item.nombre}
            className={
              materia.nombre === item.nombre
                ? 'activo'
                : ''
            }
            onClick={() => setMateria(item)}
          >
            {item.nombre}
          </button>
        ))}
      </div>

      <div className='contenido'>
        <h2>{materia.nombre}</h2>

        <p>{materia.descripcion}</p>
      </div>
    </div>
  )
}

export default Materias