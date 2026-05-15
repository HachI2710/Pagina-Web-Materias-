import '../App.css'

function Favoritos() {
  return (
    <div className='favoritos'>
      <h1>Materia Favorita</h1>

      <h2>Desarrollo de App Web</h2>

      <p>
        Me gusta porque permite crear
        aplicaciones modernas, dinámicas e
        interactivas utilizando tecnologías
        como React y Node.js.
      </p>

      <h2>
        Cosas que me gustaría aprender
      </h2>

      <div className='cards'>
        <div className='card'>
          <h3>React</h3>

          <p>
            Aprender a crear interfaces más
            avanzadas y profesionales.
          </p>
        </div>

        <div className='card'>
          <h3>Node.js</h3>

          <p>
            Aprender backend y conexión con
            bases de datos.
          </p>
        </div>

        <div className='card'>
          <h3>Bases de Datos</h3>

          <p>
            Mejorar el manejo y organización
            de información.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Favoritos