import '../App.css'

function Inicio() {
  return (
    <div className='inicio'>

      <div className='presentacion'>

        <div className='texto'>
          <h1>Hola</h1>

          <h2>
            Soy Juan David
          </h2>

          <p>
            Estudiante de Desarrollo de
            App Web
          </p>
        </div>

        <div className='imagen-container'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='perfil'
            className='imagen'
          />
        </div>

      </div>

      <h2>
        Mis compromisos en la materia
      </h2>

      <div className='cards'>

        <div className='card'>
          <h3>01</h3>

          <p>
            Entregar todas las actividades
            a tiempo.
          </p>
        </div>

        <div className='card'>
          <h3>02</h3>

          <p>
            Practicar React y mejorar mi
            lógica de programación.
          </p>
        </div>

        <div className='card'>
          <h3>03</h3>

          <p>
            Aprender nuevas tecnologías
            para desarrollo web.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Inicio