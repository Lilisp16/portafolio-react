import React from 'react'

const Contacto = () => {
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
        </p>
      </section>
      </div>

    <div className='grupoform'>

    <section className='formulario'>
        <img src='/images/formulario4.png'></img>
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
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="text" placeholder='Email' />
        <textarea placeholder='Motivo de contacto' />
        <input type="submit" value="Enviar formulario" />
    </form>
    </div>


  </div>
  )
}

export default Contacto