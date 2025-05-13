import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes para las secciones
function Terminos() {
  return <div className='mrg'><h1 className='heading'>Términos y Condiciones</h1>
   <p className='infoMS'>
  <h2> Bienvenido a MAINSYS</h2>
    Al acceder a nuestro sitio web o utilizar nuestros servicios, usted acepta y se compromete a cumplir con los siguientes Términos y Condiciones. Lea atentamente este documento antes de hacer uso de nuestros servicios.
    Aceptación de los Términos: Al utilizar nuestros servicios, usted acepta que está legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con ellos, por favor, absténgase de utilizar nuestros servicios.

    <h3 className='H3info'>Servicios Ofrecidos:</h3>
    MAINSYS ofrece servicios de desarrollo de software, soporte técnico, venta de hosting y dominios, así como otras soluciones tecnológicas de forma virtual. Nos reservamos el derecho de modificar o descontinuar nuestros servicios en cualquier momento.


    <h3 className='H3info'>Responsabilidad del Usuario:</h3>
    El usuario se compromete a proporcionar información precisa y actualizada para el uso de los servicios. Además, es responsable de mantener la confidencialidad de sus credenciales y contraseñas asociadas a las cuentas de los servicios que ofrecemos.
   
    <h3>Uso Aceptable:</h3>
    Los servicios de MAINSYS deben ser utilizados únicamente para fines legales y dentro del marco de la ley. Queda prohibido el uso de nuestros servicios para actividades fraudulentas, ilegales o que interfieran con el funcionamiento de nuestra plataforma.
    
    <h3>Limitación de Responsabilidad:</h3>
    MAINSYS no será responsable por cualquier daño directo, indirecto o incidental que pueda surgir como consecuencia del uso de nuestros servicios. No garantizamos la disponibilidad continua de nuestros servicios y nos eximimos de responsabilidad en caso de fallos técnicos o interrupciones.
    <br />
    <br />
    <small> <strong>Modificaciones: </strong>
      Nos reservamos el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en este sitio web y entrará en vigor de inmediato. Le recomendamos revisar esta página periódicamente.
    </small>
    </p>

  </div>;
}

function Privacidad() {
  return <div className='mrg'><h1 className='heading'>Política de Privacidad</h1>

<p className='infoMS'>
  <h2>En MAINSYS</h2>
  Nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información personal que usted nos proporciona al utilizar nuestros servicios.
  


  <h3 className='H3info'>Información Recopilada: </h3>
    Recopilamos información personal identificable, como nombre, dirección de correo electrónico, número de teléfono, y otra información necesaria para proporcionarle nuestros servicios. También podemos recopilar información sobre su uso de nuestros servicios para mejorar la experiencia del usuario.


    <h3 className='H3info'>Uso de la Información: </h3>
    La información recopilada se utiliza para procesar sus solicitudes, enviarle actualizaciones sobre nuestros servicios y mejorar nuestras soluciones tecnológicas. También podemos utilizar sus datos para fines de marketing, con su consentimiento previo.

   
    <h3 className='H3info'>Protección de la Información: </h3>
    Implementamos medidas de seguridad para proteger la información personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.
    
    <h3 className='H3info'>Divulgación de la Información: </h3>
    No vendemos ni compartimos su información personal con terceros, salvo en los casos en que sea necesario para cumplir con una obligación legal o con proveedores de servicios que nos ayuden a operar nuestro sitio web y brindar nuestros servicios.



    <h3>Derechos del Usuario: </h3>
    Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Puede contactar con nosotros para ejercer estos derechos.
    
    <br />
    <br />
    <small> <strong>Modificaciones: </strong>
      Esta Política de Privacidad puede ser modificada en cualquier momento. Cualquier cambio será notificado en nuestro sitio web y entrará en vigor de inmediato.

    </small>
    </p>
    </div>;
}

function Cookies() {
  return <div className='mrg'><h1 className='heading'>Política de Cookies</h1>
  
  <p className='infoMS'>
  <h2>MAINSYS</h2>
    utiliza cookies para mejorar la experiencia de nuestros usuarios y para analizar cómo se utilizan nuestros servicios. Al acceder a nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política.
  

  <h3 className='H3info'>¿Qué son las cookies? </h3>
    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos permiten recordar sus preferencias y mejorar su experiencia de navegación.


    <h3>Tipos de Cookies Utilizadas: </h3>

    Cookies necesarias: Son esenciales para el funcionamiento de nuestro sitio web.
    Cookies de rendimiento: Nos ayudan a mejorar el rendimiento del sitio web y a analizar cómo se utiliza.
    Cookies de funcionalidad: Permiten recordar sus preferencias y personalizar su experiencia en el sitio.
    Cookies de marketing: Utilizamos estas cookies para ofrecerle publicidad personalizada y contenido relevante.
    Control de Cookies: Usted puede controlar el uso de las cookies a través de la configuración de su navegador. Puede configurar su navegador para bloquear cookies o para que le notifique cuando se envíen cookies. Sin embargo, si bloquea todas las cookies, algunas funcionalidades de nuestro sitio web pueden no funcionar correctamente.

    
    <br />
    <br />
    <small> <strong>Modificaciones: </strong>
      Esta Política de Cookies puede ser modificada en cualquier momento. Los cambios serán reflejados en esta página.

    </small>
    </p>
  
  </div>;
}

function AcercaDe() {
  return <div className='mrg'><h1 className='heading'>Acerca de</h1>
    <p className='infoMS'>
  <h2>¿Quiénes Somos?</h2>
    MAINSYS es una empresa joven, dinámica e innovadora dedicada a ofrecer soluciones tecnológicas de alto impacto para emprendedores, pequeñas y medianas empresas (PYMES). Fundada en 2024, nos especializamos en el desarrollo de software, servicio técnico, venta de hosting y dominio, y la creación de soluciones tecnológicas que se prestan de forma totalmente virtual. Nuestro objetivo es conectar y optimizar los sistemas empresariales a través de tecnología avanzada y accesible, siempre con un enfoque centrado en las necesidades de nuestros clientes.

    Somos un equipo comprometido con la excelencia, trabajando de forma remota para brindar una atención personalizada y eficiente a cada uno de nuestros usuarios. Con MAINSYS, las empresas tienen un socio confiable que asegura el correcto funcionamiento de sus sistemas tecnológicos y les permite acceder a las herramientas necesarias para crecer en el mundo digital.

    <h3 className='H3info'>Misión</h3>
    Nuestra misión es ofrecer soluciones tecnológicas accesibles, seguras e innovadoras para emprendedores y PYMES. A través de nuestros servicios de desarrollo de software, soporte técnico y soluciones de hosting y dominios, buscamos proporcionar a nuestros clientes las herramientas necesarias para que puedan crecer, optimizar sus operaciones y mantenerse competitivos en el mercado global. Nos esforzamos por ser el núcleo de su éxito, ofreciendo soporte y herramientas a medida para cada necesidad tecnológica.

    <h3 className='H3info'>Visión</h3>
    Convertirnos en un referente en el ámbito de las soluciones tecnológicas para pequeñas y medianas empresas, ofreciendo servicios 100% virtuales, accesibles y confiables. En MAINSYS, buscamos ser la empresa clave que conecta e integra herramientas tecnológicas, ayudando a las empresas a transformar sus procesos y lograr su máximo potencial a través de la innovación tecnológica.
    </p></div>;
}


function Info() {
  return (
    <div className='page'>
      <div className="info-content">
        <Routes>
          <Route path="terminos" element={<Terminos />} />
          <Route path="privacidad" element={<Privacidad />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="acerca" element={<AcercaDe />} />
        </Routes>
      </div>
    </div>
  );
}

export default Info;
