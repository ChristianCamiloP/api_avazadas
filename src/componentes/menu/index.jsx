import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './componentes/menu'
import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Detalle from './componentes/detalle'
import Usuario from './componentes/usuario'
import Favoritos from './componentes/favoritos'

function App() {

  return (
    <Router>

      <Menu />
     
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
      </Routes>
   
    </Router>
  );
}

export default App;