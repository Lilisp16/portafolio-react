import React from 'react'

const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>

        <article className='service'>
          <h2>Desarrollo web</h2>
          <li className='offered'>Nos enfocamos en crear diseños atractivos, fáciles de navegar y optimizados para motores de búsqueda (SEO). 
            Trabajamos juntos en cada paso del proyecto, asegurándonos de que el resultado final cumpla con tus expectativas y necesidades
            <ul className='subservicios'>
                <li>✔️Diseño de Tiendas en línea (eCommerce): Creación de tiendas en línea usando plataformas como Shopify</li>
                <li>✔️Blogs y sitios personales: Páginas web para escritores, artistas, o personas que desean tener un blog o portfolio</li> 
                <li>✔️Sitios web para restaurantes, hoteles y otros servicios: pueden incluir menús, reservas, testimonios y más</li> 
                <li>✔️Diseño personalizado: Desarrollo de páginas web con diseño único y adaptado a las necesidades del cliente</li> 
                <li>✔️SEO (Optimización para motores de búsqueda): Mejora de la visibilidad de la página en Google</li> 
                <li>✔️Mantenimiento web:  servicios de actualización de contenido, seguridad, y gestión técnica a largo plazo</li> 
            </ul>
          </li>
        </article>

        <article className='service'>
          <h2>Servicio de Hosting</h2>
          <li className='offered'>  Almacena y accede a los archivos de tu sitio web en Internet
          
          <ul className='subservicios'>
          <li>✔️Hosting Compartido: Muchos sitios web comparten el mismo servidor, ideal para proyectos pequeños o sitios personales.</li> 
          <li>✔️Hosting Dedicado: servidor completo dedicado a un solo cliente, adecuado 
            para empresas grandes que necesitan alto rendimiento y control</li>  
          </ul> 
          </li> 
        </article>

        <article className='service'>
          <h2>Servicio de Dominio</h2>
          <li className='offered'>Adquiere la dirección única en Internet que identifica un sitio web
          Tener un dominio personalizado y profesional mejora la credibilidad de un negocio
          </li>
        </article>

        <article className='service'>
          <h2>Email Servicio</h2>
          <li className='offered'>Servicio de alojamiento para crear cuentas de correo con tu propio dominio.</li>
        </article>

        <article className='service'>
          <h2>Sistema de Gestión Comercial para PYMES con python y excel</h2>
          <li className='offered'>Diseño de herramienta que ayuda a las empresas a gestionar las actividades 
            relacionadas con sus clientes, ventas, compras, inventarios, 
            facturación y otros aspectos financieros y administrativos. 
            La idea es tener todo centralizado en un solo sistema que facilite la toma de decisiones 
            y permita a la empresa operar de manera 
            más eficiente

              <ul className='subservicios'>
                <ul>Gestión de Clientes:</ul> 
                    <li>✔️Base de datos de clientes con información de contacto</li> 
                    <li>✔️Historial de compras</li>
                    <li>✔️Seguimiento de interacciones y oportunidades de venta</li>
                <ul>Gestión de Productos y Inventarios:</ul> 
                    <li>✔️Control de inventario (entradas y salidas de productos)</li>
                    <li>✔️Alerta de stock bajo o productos en venta</li> 
                    <li>✔️Precios de productos y configuraciones de descuento</li> 
                <ul>Facturación y Ventas:</ul>
                    <li>✔️Generación de facturas automáticas</li> 
                    <li>✔️Registro de ventas y pagos recibidos</li> 
                    <li>✔️Cálculo de impuestos y descuentos</li> 
                <ul>Dashboard y Análisis:</ul> 
                    <li>✔️Gráficos interactivos de ventas, inventario y facturación</li> 
                    <li>✔️Análisis de rendimiento por producto, cliente, vendedor, etc</li> 
                    <li>✔️Proyecciones de ventas basadas en datos históricos</li> 
                <ul>Informes:</ul> 
                  <li>✔️Generación de informes personalizados de ventas, clientes y finanzas</li>
            </ul> 
         </li>

        </article>
        
      </section>

    </div>
  )
}

export default Servicios