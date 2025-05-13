import React, { useState } from 'react';
import FAQ from './FAG'; // Asegúrate de ajustar la ruta según tu estructura de carpetas




const Contacto = () => {
  
    const [showAll, setShowAll] = useState(false);
  
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };

   

   // Función para manejar el envío del formulario
   const generateMailto = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos del formulario
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Construir el enlace mailto con los datos del formulario
    const mailtoLink = `mailto:operadorpersonal0@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    // Redirigir al enlace mailto: para abrir el cliente de correo
    window.location.href = mailtoLink;
  };


  return (
    <div className='page'>
    <h1 className='heading'>Contacto</h1>

    <div className='tarjetas-container'>
    <section className='tarjetas uno'>
        <h2>Líneas de Atención</h2>
        <p>
        <img 
              src="/images/call.png" 
              alt="Seleccionar idioma" 
              className="icon-contact"
            />
          Linea Movil
          311-432-5345
        </p>
        <p>
        <img 
              src="/images/wh.png" 
              alt="Seleccionar idioma" 
              className="icon-contact"
            />
          Línea WhatsApp
          (+57)311-432-5345
        </p>
      </section>

      <section className='tarjetas'>
        <h2>Preguntas Frecuentes</h2>
        <p>
        <img 
              src="/images/pregunta-y.png" 
              alt="Seleccionar idioma" 
              className="icon-contact"
            />
          Resuelve tus dudas en nuestra sección de PR

          
           {/* Enlace "Ver más" */}
           <div>
            <a href="#" onClick={toggleShowAll}>
              {showAll ? "Ver menos" : "Ver más"}
            </a>
          </div>
        </p>
          {/* Mostrar la sección FAQ cuando el estado 'showAll' sea verdadero */}
      {showAll && <FAQ />}
      </section>
      </div>
      

      
      

    <div className='grupoform'>

    <section className='formulario'>
        <img src='/images/formulario4.jpeg'></img>
        <p>
        ¡Hola,Estamos atentos para responder cualquiera de tus inquietudes!
        </p>
      </section>



    <form className='contact' action="mailto:operadorpersonal0@gmail.com">
    <img 
              src="/images/em.png" 
              alt="Seleccionar idioma" 
              className="icon-contact"
            />
        <h3>Escríbenos un mensaje</h3>


       {/* <input type="text" placeholder='Nombre' />
          {/*<input type="text" placeholder='Apellidos' />
        <input type="text" placeholder='Email' />
        <textarea placeholder='Asunto' />
        <input type="submit" value="Enviar formulario" />*/}


            <textarea
            id="asunto"
            name="asunto"
            placeholder="Asunto"
            required
          ></textarea>

          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          {/* Botón para enviar el formulario */}
          <input
            type="submit"
            value="Enviar formulario"
            onClick={generateMailto} // Llamamos a la función cuando se hace clic
          />
    </form>


    </div>


  </div>
  )
}

export default Contacto

