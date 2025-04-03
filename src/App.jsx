import { useState } from 'react'
import './App.css'
import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Detalle from './componentes/detalle'
import Usuario from './componentes/usuario'
import Favoritos from './componentes/favoritos'



function App() {

  return (
    <>
  <Listar/>
  <Original/>
  <Aleatorios/>
  <Detalle/>
  <Usuario/>
  <Favoritos/>
  
    </>
  )
}

export default App
