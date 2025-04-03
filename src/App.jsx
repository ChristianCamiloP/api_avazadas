import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Detalle from './componentes/detalle'
import Usuario from './componentes/usuario'
import Favoritos from './componentes/favoritos'
import Menu from './componentes/menu'


function App() {

  return (
    <Router>

    <Menu />
   
    <Routes>

        <Route path="/" element={<Listar />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/original" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />

    </Routes>
 
  </Router>


  )
}

export default App
