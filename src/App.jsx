import { Route, Routes } from 'react-router-dom'
import './App.css'

//importo cada page donde finalize la ruta

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/404/NotFound'

//componente header

import Header from './components/Header'

//genero APP con enrutado

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:info' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
