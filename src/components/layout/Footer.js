import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const idiomas = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <div className='footer-principal'>


        <div className="minifooter">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Terminos y Condiciones</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Politica de Privacidad</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Política de cookies</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Acerca de</a></li>
          </ul>
        </div>

      <section className='footer0'>

        <div className='informacion'>
          <ul className='link'>
            <h4>Recursos importantes</h4>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Membresia 1</a></li>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Recursos importantes 2</a></li>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Recursos importantes 2</a></li>
          </ul>
          <ul className='link'>
            <h4>Recursos importantes</h4>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Membresia 1</a></li>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Recursos importantes 2</a></li>
            <li className='link2'><a href="#" className="nav-link2 px-2 text-body-secondary">Modelos de proyectos</a></li>
          </ul>
        </div>

        <div className='todologo'>
          <Link to="/"><img 
            src="/images/byredondo.png" 
            alt="byRem" 
            className="logoa" 
          /></Link>

          <Link to="/"><img 
            src="/images/vinoyaceite.svg" 
            alt="byRem" 
            className="logoc" 
          /></Link>
        

             <img 
              src="/images/MarcaPersonal.png" 
              alt="MarcaPersonal" 
              className="logob"
            />
        </div>



      
    
        
      </section>


      <footer className='footer'>
      <div className='language-selector'>
        <span>&copy; copyright 2024 Desarrollado por BriskYard </span> 
        


          
          <div className='custom-select'>
            <img 
              src="/images/idioma.png" 
              alt="Seleccionar idioma" 
              className="language-icon"
            />
            <select>
              {idiomas.map(idioma => (
                <option key={idioma.code} value={idioma.code}>
                  {idioma.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </footer>

    </div>
    
  )
}

export default Footer