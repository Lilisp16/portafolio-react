import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'
import Carrusel from './carrusel/Carrusel'

const Inicio = () => {
  return (
    <div className='home'>


  <div>
  <Carrusel/>
  </div>

  <section className='lasts-works'>
    <div className='pinicio'>
          <h2>
            Transforma tu presencia en línea con un diseño digital para atraer y convertir
          </h2>
          <p>
          En <strong>BriskYard</strong> , nos especializamos en ofrecer soluciones 
          tecnológicas personalizadas que impulsan el crecimiento y la eficiencia 
          de las pequeñas y medianas empresas (PYMES). Combinamos nuestra 
          experiencia en el desarrollo de Sistemas de Gestión Comercial con 
          servicios avanzados de desarrollo web para brindar a nuestros clientes 
          herramientas potentes y escalables que se adaptan a sus necesidades específicas.
          <Link to="/contacto">Comunicate con nosotros</Link>
          </p>

          <a href="#cardoff">
          <button>Empieza ya</button>
          </a>
          
      </div>

      <div className='freelancing'>
        <img src="/images/portada.png"/>
      </div>
  </section>


  <section className='cardoff' id="cardoff">
  <div className="cardoff-header">
    <h2 className='heading'>Nuestras soluciones</h2>
  </div>
    
    <div className='card'>
    <div className="card-image">
      <img src="/images/code.jpeg" alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>Desarrollo Web</h4>
      <p>Sitios web atractivos, funcionales y optimizados para ofrecer una experiencia única a tus usuarios.
        </p>
      <Link to="/servicios">Ver más</Link>
      </div>
    </div>


    <div className='card'>
    <div className="card-image">
      <img src="/images/hosting1.jpeg" alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>Servicio de Hosting</h4>
      <p>Hosting rápido, seguro y confiable para que tu sitio web esté siempre disponible
        </p>
      <Link to="/servicios">Ver más</Link>
      </div>
    </div>
  

    <div className='card'>
    <div className="card-image">
      <img src="/images/dominio.jpeg" alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>Servicio de Dominio</h4>
      <p>Registro de dominios personalizados, seguros y fáciles de gestionar para tu presencia online.
        </p>
      <Link to="/servicios">Ver más</Link>
      </div>
    </div>

    <div className='card'>
    <div className="card-image">
      <img src="/images/dashboard1.jpeg" alt="Desarrollo Web" />
    </div>
      <div className='card-uno'>
      <h4>SGC para PYMES con python y excel
      </h4>
      <p>Sistemas personalizados para optimizar la gestión y el control comercial.
        </p>
      <Link to="/servicios">Ver más</Link>
      </div>
    </div>

 


    

  </section>



    </div>
  )
}

export default Inicio