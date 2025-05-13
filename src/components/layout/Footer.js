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
            src="/images/byredondo.png" 
            alt="byRem" 
            className="logoa" 
          /></NavLink>

          <Link to="/inicio" style={{ textDecoration: 'none' }}><img 
            src="/images/reml.png" 
            alt="byRem" 
            className="logoc" 
          />
          
             {/* Agregar el párrafo debajo de los logos */}
       <p className='footer-text'>
            Nos especializamos en ofrecer soluciones tecnológicas personalizadas que impulsan el crecimiento 
            y la eficiencia de las pequeñas y medianas empresas (PYMES).
          </p>
          
          </Link>   
        </div>

       


        <div className='informacion'>
          <ul className='link'>
            <h4>Navegacion</h4>
            <li className='link2'><a href="/portafolio" className="nav-link2 px-2 text-body-secondary">Portafolio</a></li>
            <li className='link2'><a href="/servicios" className="nav-link2 px-2 text-body-secondary">Servicios</a></li>
            <li className='link2'><a href="/contacto" className="nav-link2 px-2 text-body-secondary">Contacto</a></li>
          </ul>
          <ul className='link'>
            <h4>Recursos importantes</h4>
            <li className='link2'><a href="https://www.figma.com/community" className="nav-link2 px-2 text-body-secondary" target="_blank">Figma community</a></li>
            <li className='link2'><a href="https://templated.co/" className="nav-link2 px-2 text-body-secondary" target="_blank">Templetes</a></li>
            <li className='link2'><a href="https://www.hostinger.co/tutoriales/que-es-un-hosting#Hosting_Compartido" className="nav-link2 px-2 text-body-secondary" target="_blank">Qué es hosting y cómo funciona</a></li>
          </ul>
        </div>

          
       
      </section>


      <footer className='footer'>
      <div className='language-selector'>
        <span>&copy; copyright 2024 desarrollado por Lili Sanchez </span> 
        
        
        {/*   <div className='custom-select'>
            <img src="/images/idioma.png" 
              alt="Seleccionar idioma" 
              className="language-icon"/>

          <select onChange={(e) => cambiarIdioma(e.target.value)} defaultValue="es">
              <option value="es">{t('idiomas.es')}</option>
              <option value="en">{t('idiomas.en')}</option>
              <option value="fr">{t('idiomas.fr')}</option>
          </select>
          </div> */}

        </div>

      </footer>

    </div>
    
  )
}

export default Footer