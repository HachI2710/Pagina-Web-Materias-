import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Inicio from './pages/Inicio'
import Materias from './pages/Materias'
import Favoritos from './pages/Favoritos'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Inicio />} />

        <Route
          path='/materias'
          element={<Materias />}
        />

        <Route
          path='/favoritos'
          element={<Favoritos />}
        />
      </Routes>
    </div>
  )
}

export default App