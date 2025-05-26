import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'
import Carrusel from './carrusel/Carrusel'
import SearchNav from './layout/SearchNav'

const Inicio = () => {
  return (
    <div className='home'>


  <div className='carsel'>
    
      <Carrusel/>
  </div>

  <section className='lasts-works'>
    <div className='pinicio'>
          
         {/* <p>
          En <strong>MAINSYS</strong> , nos especializamos en ofrecer soluciones 
          tecnológicas personalizadas que impulsan el crecimiento y la eficiencia 
          de las pequeñas y medianas empresas (PYMES). Combinamos nuestra 
          experiencia en el desarrollo de Sistemas de Gestión Comercial con 
          servicios avanzados de desarrollo web para brindar a nuestros clientes 
          herramientas potentes y escalables que se adaptan a sus necesidades específicas.
          <Link to="/contacto">Comunicate con nosotros</Link>
          </p>*/} 

          <p>
          En <strong>MAINSYS</strong>,  brindamos soluciones tecnológicas personalizadas para PYMES, 
          integrando sistemas de gestión comercial y desarrollo web 
          avanzado para impulsar su crecimiento y eficiencia.
          <Link to="/contacto">Comunicate con nosotros</Link>
          </p>


          <a href="#cardoff">
          <button> Empieza ya</button>
          </a>
          
      </div>

      <div className='freelancing'>
      <img src={`${process.env.PUBLIC_URL}/images/homre.png`} alt="Portada" />
    </div>
  </section>


 <section className='cardoff' id="cardoff">
  <div className="cardoff-header">
    <h2 className='heading'>Nuestras soluciones</h2>
  </div>
    
    <div className='card'>
    <div className="card-image">
      <img src={`${process.env.PUBLIC_URL}/images/code.jpeg`} alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>Desarrollo Web</h4>
      <p className='card-p'>Sitios web atractivos, funcionales y optimizados para ofrecer una experiencia única a tus usuarios.
        </p>
        
       <Link to="/servicios#">Ver más</Link>
      </div>
    </div>


    <div className='card'>
    <div className="card-image">
      <img src={`${process.env.PUBLIC_URL}/images/hosting1.jpeg`} alt="Desarrollo Web" />

    </div>
      <div className='card-uno'>
      <h4>Servicio de Hosting</h4>
      <p className='card-p'>Hosting rápido, seguro y confiable para que tu sitio web esté siempre disponible
        </p>
      <Link to="/servicios/#service_h">Ver más</Link>
      </div>
    </div>
  

    <div className='card'>
    <div className="card-image">
      <img src={`${process.env.PUBLIC_URL}/images/dominio.jpeg`} alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>Servicio de Dominio</h4>
      <p className='card-p'>Registro de dominios personalizados, seguros y fáciles de gestionar para tu presencia online.
        </p>
      <Link to="/servicios/#service_d">Ver más</Link>
      </div>
    </div>

    <div className='card'>
    <div className="card-image">
      <img src={`${process.env.PUBLIC_URL}/images/dashboard1.jpeg`} alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>SGC para PYMES con python y excel
      </h4>
      <p className='card-p'>Sistemas personalizados para optimizar la gestión y el control comercial.
        </p>
      <Link to="/servicios/#service_sgc">Ver más</Link>
      </div>
    </div>

 

  </section>



    </div>
  )
}

export default Inicio