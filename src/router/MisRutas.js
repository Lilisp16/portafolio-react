import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Inicio from '../components/Inicio';
import Portafolio from  '../components/Portafolio';
import Curriculum from '../components/Curriculum';
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import HeaderNav from '../components/layout/HeaderNav';
import Footer from '../components/layout/Footer';
import SearchNav from '../components/layout/SearchNav';  // Importa el segundo navbar
import Proyecto from '../components/Proyecto';
import MainHome from '../components/MainHome/MainHome';
import Info from '../components/Info';

const MisRutas = () => {
  return (
    <BrowserRouter>
    {/* Ruta para MainHome sin Header, Footer ni SearchNav */}
    <Routes>
      <Route path='/MainHome' element={<MainHome />} />
      <Route path='/' element={<Navigate to="/MainHome" />} /> {/* Redirigir desde la raíz */}
   

    {/* Rutas con Header, Footer y SearchNav */}

      <Route path='/inicio' element={<><HeaderNav /><SearchNav /><Inicio /><Footer /></>} />
      <Route path='/portafolio' element={<><HeaderNav /><SearchNav /><Portafolio /><Footer /></>} />
      <Route path='/servicios' element={<><HeaderNav /><SearchNav /><Servicios /><Footer /></>} />
      <Route path='/curriculum' element={<><HeaderNav /><SearchNav /><Curriculum /><Footer /></>} />
      <Route path='/contacto' element={<><HeaderNav /><SearchNav /><Contacto /><Footer /></>} />
      <Route path='/proyecto/:id' element={<><HeaderNav /><SearchNav /><Proyecto /><Footer /></>} />


      {/* Añadir rutas para las secciones de Info */}
      <Route path='/info/*' element={<><HeaderNav /><SearchNav /><Info /><Footer /></>} />

      {/* Ruta por defecto para errores */}
      <Route path='*' element={
        <div className='page'>
          <h1 className='heading'>Error 404</h1>
        </div>
      } />
    </Routes>
  </BrowserRouter>
  
  );
}

export default MisRutas