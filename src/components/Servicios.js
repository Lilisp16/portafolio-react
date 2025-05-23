import React, { useEffect } from 'react'
import { FcShop } from 'react-icons/fc';  // Icono para eCommerce
import { FcNook } from 'react-icons/fc';  // Icono para Blogs y sitios personales
import { FcMultipleDevices } from 'react-icons/fc';  // Icono para Restaurantes
import { FcViewDetails } from 'react-icons/fc';  // Icono para Diseño personalizado
import { FcSupport } from 'react-icons/fc';  // Icono para Mantenimiento web
import { FcFinePrint } from 'react-icons/fc';  // Icono para Mantenimiento web
import { FcEnteringHeavenAlive } from 'react-icons/fc';  // Icono para Mantenimiento web
import { FcDataBackup } from 'react-icons/fc'; 
import { TbWorldWww } from "react-icons/tb";
import { FcFeedback } from "react-icons/fc";
import { FcGlobe } from 'react-icons/fc';
import { useLocation } from 'react-router-dom';




const Servicios = () => {
  const location = useLocation();

  useEffect(() => {
    const serviceCategories = document.querySelectorAll('.service-category');
    serviceCategories.forEach((category, index) => {
      setTimeout(() => {
        category.classList.add('show');
      }, index * 300);
    });
  }, []);


    // Segundo useEffect (nuevo)
    useEffect(() => {
      if (location.hash) {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  
  
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      <section className='services'>

      <section id="service_dw"  className='service_dw'>
          <article className='desarrolloWeb'>
           
            <div className='offered2'>
            <h2>Desarrollo web</h2>
            <p>
              Creamos sitios atractivos, funcionales y optimizados para SEO, 
              trabajando contigo en cada etapa para asegurar resultados alineados a tus objetivos.
            </p>
          </div>

            <ul className='subservicios'>
              <li>
                <div className="icon"><FcShop size={40}/></div>
                <h4>Diseño de Tiendas en línea (eCommerce)</h4>
                <p>Creación de tiendas en línea usando plataformas como Shopify</p>
              </li>

              <li>
                <div className="icon"><FcNook size={40} /></div>
                <h4>Blogs y sitios personales</h4>
                <p>Páginas web para escritores, artistas, o personas que desean tener un blog o portfolio</p>
              </li>

              <li>
                <div className="icon"><FcMultipleDevices size={40} /></div>
                <h4>Sitios web para Servicios</h4>
                <p>Restaurantes, hoteles, Spa y Belleza y otros servicios: pueden incluir menús, reservas, testimonios y más</p>
              </li>

              <li>
                <div className="icon"><FcViewDetails size={40} /></div>
                <h4>Diseño personalizado</h4>
                <p>Desarrollo de páginas web con diseño único y adaptado a las necesidades del cliente</p>
              </li>

              <li>
                <div className="icon"><FcSupport size={40} /></div>
                <h4>Mantenimiento web</h4>
                <p>Servicios de actualización de contenido, seguridad, y gestión técnica a largo plazo</p>
              </li>

              <li>
                <div className="icon"><FcFinePrint size={40} /></div> {/* Ícono de búsqueda */}
                <h4>SEO (Optimización para Motores de Búsqueda)</h4>
                <p>Mejoramos la visibilidad de tu sitio web en Google, optimizando contenido, estructura y creando enlaces de calidad para aumentar el tráfico orgánico.</p>
              </li>

            </ul>
          </article>
        </section>
    
        

    <section id="service_h" className='service_h'>
        <article className='hosting'>
          <h2 className='h2d'>Servicio de Hosting</h2>
          <p className='offered'>
            Almacena y accede a los archivos de tu sitio web en Internet
          </p>

          <div className='hosting-options'>
            <div className='option'>
            <div className="icon"><FcEnteringHeavenAlive size={40}/></div>
              <h4>Hosting Compartido</h4>
              <p>Muchos sitios web comparten el mismo servidor, ideal para proyectos pequeños o sitios personales.</p>
            </div>
            <div className='option'>
            <div className="icon"><FcDataBackup size={40}/></div>
              <h4>Hosting Dedicado</h4>
              <p>Servidor completo dedicado a un solo cliente, adecuado para empresas grandes que necesitan alto rendimiento y control.</p>
            </div>
          </div>
        </article>
      </section>


      <section id="service_d" className='service_d'>

      <p className='offered'>
        <h2 className='h2d'>Dominio y Email Empresarial</h2>
        Ofrecemos servicios completos para adquirir tu dominio personalizado y cuentas de correo profesional
      </p>
        <article className='dominio'>
          <div className="service-card">
            <div className="icon">
              <TbWorldWww size={40} style={{ color: '#f1c40f' }}/>
            </div>
            <h2 className='h2d'>Servicio de Dominio</h2>
            <p className='offered'>
             Tener un dominio personalizado y profesional mejora la credibilidad de un negocio.
            </p>
          </div>
        </article>

        <article className='email'>
          <div className="service-card">
            <div className="icon">
              <FcFeedback size={40} />
            </div>
            <h2 className='h2d'>Email Servicio</h2>
            <p className='offered'>
              Servicio de alojamiento para crear cuentas de correo con tu propio dominio.
            </p>
          </div>
        </article>
      </section>



    <section id="service_sgc" className='service_sgc'>
      <article className='sgc'>
        <h3 className='h3sgc'>
          <span class="texto">
            Sistema de Gestión Comercial para PYMES con Python y Excel
          </span>
        <img src={`${process.env.PUBLIC_URL}/images/Dash.jpeg`} alt=""  class="imagen-redonda" />
        </h3>

        
    <div className='offered offered2'>
      <h3>Gestiona</h3>
      <p>
        Herramientas que permiten gestionar clientes, ventas, compras, inventarios, facturación y más, todo centralizado para facilitar la toma de decisiones y mejorar la eficiencia de tu empresa.
      </p>
      <button 
        className="btn-info" 
        onClick={() => window.open("https://wa.me/3218394396?text=¡Hola!%20Me%20interesa%20una%20asesoría%20gratis", "_blank")}
      >
        Más Información
      </button>
    </div>

        <div className="subservicios4">
          <div className="service-category">
            <i className="fas fa-users fa-2x"></i>
            <h3>Gestión de Clientes</h3>
            <ul>
              <li>Base de datos de clientes con información de contacto</li>
              <li>Historial de compras</li>
              <li>Seguimiento de interacciones y oportunidades de venta</li>
            </ul>
          </div>

          <div className="service-category">
            <i className="fas fa-box-open fa-2x"></i>
            <h3>Gestión de Productos y Inventarios</h3>
            <ul>
              <li>Control de inventario</li>
              <li>Alerta de stock bajo o productos en venta</li>
              <li>Precios de productos y configuraciones de descuento</li>
            </ul>
          </div>

          <div className="service-category">
            <i className="fas fa-file-invoice fa-2x"></i>
            <h3>Facturación y Ventas</h3>
            <ul>
              <li>Generación de facturas automáticas</li>
              <li>Registro de ventas y pagos recibidos</li>
              <li>Cálculo de impuestos y descuentos</li>
            </ul>
          </div>

          <div className="service-category">
            <i className="fas fa-chart-line fa-2x"></i>
            <h3>Dashboard y Análisis</h3>
            <ul>
              <li>Gráficos interactivos de ventas, inventario y facturación</li>
              <li>Análisis de rendimiento por producto, cliente, vendedor, etc.</li>
              <li>Proyecciones de ventas basadas en datos históricos</li>
            </ul>
          </div>

          <div className="service-category">
            <i className="fas fa-print fa-2x"></i>
            <h3>Informes</h3>
            <ul>
            <li>Generación de informes personalizados de ventas, clientes y finanzas</li>
            <li>Informes detallados sobre el rendimiento de productos y clientes</li> {/* Nuevo elemento */}
            </ul>
          </div>

          {/* Nuevo servicio añadido */}
          <div className="service-category">
            <i className="fas fa-cogs fa-2x"></i> {/* Icono de mantenimiento */}
            <h3>Mantenimiento y Soporte</h3>
            <ul>
              <li>Mantenimiento regular del sistema para asegurar su óptimo funcionamiento</li>
              <li>Soporte técnico disponible para resolver problemas</li>
              <li>Actualizaciones periódicas con nuevas funcionalidades</li>
            </ul>
          </div>


        </div>
      </article>
    </section>
            
     
      </section>
    </div>
  )
}

export default Servicios