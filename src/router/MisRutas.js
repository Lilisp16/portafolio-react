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

const MisRutas = () => {
  return (
    <BrowserRouter>
    {/* HEADER Y NAVEGACION */}
    <HeaderNav/>
    <SearchNav /> 

      {/* CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
            <Route path='/' element={<Navigate to="/Inicio"/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='/curriculum' element={<Curriculum/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/proyecto/:id' element={<Proyecto/>}/>
            <Route path='*' element={
              <div className='page'>
                <h1 className='heading'>Error 404</h1>
              </div>
              }/>
        </Routes>
      </section>
    


    {/* FOOTER */}
    <Footer/>


    </BrowserRouter>
  )
}

export default MisRutas