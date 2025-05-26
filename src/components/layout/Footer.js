import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t, i18n } = useTranslation();

        const cambiarIdioma = (idioma) => {
          i18n.changeLanguage(idioma);
        };

  return (
    <div className='footer-principal'>


        <div className="minifooter">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item"><a href="/info/terminos" className="nav-link px-2 text-body-secondary">Terminos y Condiciones</a></li>
            <li className="nav-item"><a href="/info/privacidad" className="nav-link px-2 text-body-secondary">Politica de Privacidad</a></li>
            <li className="nav-item"><a href="/info/cookies" className="nav-link px-2 text-body-secondary">Política de cookies</a></li>
            <li className="nav-item"><a href="/info/acerca" className="nav-link px-2 text-body-secondary">Acerca de</a></li>
          </ul>
        </div>

      <section className='footer0'>

      <div className='todologo'>
          <NavLink to="/inicio"><img 
            src={`${process.env.PUBLIC_URL}/images/byredondo.png`} 
            alt="byRem" 
            className="logoa" 
          /></NavLink>

          <Link to="/inicio" style={{ textDecoration: 'none' }}><img 
            src={`${process.env.PUBLIC_URL}/images/reml.png`} 
            alt="byRem" 
            className="logoc" 
          />
          
             {/* Agregar el párrafo debajo de los logos */}
       <p className='footer-text'>
             Transforma tu presencia en línea con un diseño digital para atraer y convertir
          </p>
          
          </Link>   
        </div>

       


        <div className='informacion'>
          <ul className='link'>
            <h4>Navegacion</h4>
            <li className='link2'><Link to="/portafolio" className="nav-link2 px-2 text-body-secondary">Portafolio</Link></li>
            <li className='link2'><Link to="/servicios" className="nav-link2 px-2 text-body-secondary">Servicios</Link></li>
            <li className='link2'><Link to="/contacto" className="nav-link2 px-2 text-body-secondary">Contacto</Link></li>
          </ul>
          <ul className='link'>
            <h4>Recursos importantes</h4>
            <li className='link2'><a href="https://www.figma.com/community" className="nav-link2 px-2 text-body-secondary" target="_blank" rel="noopener noreferrer">Figma community</a></li>
            <li className='link2'><a href="https://templated.co/" className="nav-link2 px-2 text-body-secondary" target="_blank" rel="noopener noreferrer">Templetes</a></li>
            <li className='link2'><a href="https://www.hostinger.co/tutoriales/que-es-un-hosting#Hosting_Compartido" className="nav-link2 px-2 text-body-secondary" target="_blank" rel="noopener noreferrer">Qué es hosting y cómo funciona</a></li>
          </ul>
        </div>

          
       
      </section>


      <footer className='footer'>
      <div className='language-selector'>
        <span>&copy; copyright 2024 desarrollado por Lili Sanchez </span> 
        
     

        </div>

      </footer>

    </div>
    
  )
}

export default Footer