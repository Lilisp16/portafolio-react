import React, { useState } from 'react';


const FAQ = () => {
  const [open, setOpen] = useState(null);
 
  const toggleQuestion = (index) => {
    setOpen(open === index ? null : index); // Abre o cierra la pregunta seleccionada
  };
 

  return (
    <div className="faq">
     

      {/* Mostrar preguntas solo cuando showAll sea verdadero */}
     
        
          {/* Pregunta 1 */}
          <div className={`faq-item ${open === 0 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(0)} >
            <div className="faq-question">
              ¿Qué servicios ofrece MAINSYS?
            </div>
            {open === 0 && (
              <div className="faq-answer">
                MAINSYS ofrece desarrollo web, servicios de hosting, registro de dominios, y sistemas de gestión personalizados para PYMES.
              </div>
            )}
          </div>

          {/* Pregunta 2 */}
          <div className={`faq-item ${open === 1 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(1)}>
            <div className="faq-question">
              ¿Cómo puedo contactar con MAINSYS?
            </div>
            {open === 1 && (
              <div className="faq-answer">
                Puedes contactarnos a través de nuestras líneas telefónicas, WhatsApp o enviándonos un mensaje a nuestro formulario de contacto en el sitio web.
              </div>
            )}
          </div>

          {/* Pregunta 3 */}
          <div className={`faq-item ${open === 2 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(2)}>
            <div className="faq-question">
              ¿Cuál es el tiempo estimado de entrega para un sitio web?
            </div>
            {open === 2 && (
              <div className="faq-answer">
                El tiempo de entrega depende del tipo de proyecto, pero generalmente puede variar entre 2 y 4 semanas.
              </div>
            )}
          </div>

          {/* Pregunta 4 */}
          <div className={`faq-item ${open === 3 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(3)}>
            <div className="faq-question">
              ¿El servicio de hosting incluye soporte técnico?
            </div>
            {open === 3 && (
              <div className="faq-answer">
                Sí, todos nuestros servicios de hosting incluyen soporte técnico para resolver cualquier inconveniente que pueda surgir.
              </div>
            )}
          </div>

          {/* Pregunta 5 */}
          <div className={`faq-item ${open === 4 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(4)}>
            <div className="faq-question">
              ¿Puedo realizar cambios en mi sitio web después de que esté terminado?
            </div>
            {open === 4 && (
              <div className="faq-answer">
                Sí, ofrecemos mantenimiento y actualizaciones periódicas de tu sitio web para que siempre esté al día con tus necesidades.
              </div>
            )}
          </div>

          {/* Pregunta 6 */}
          <div className={`faq-item ${open === 5 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(5)}>
            <div className="faq-question">
              ¿Cómo puedo gestionar mi dominio?
            </div>
            {open === 5 && (
              <div className="faq-answer">
                Al adquirir un dominio con nosotros, tendrás acceso a un panel de control desde donde podrás gestionar todos los aspectos relacionados con tu dominio.
              </div>
            )}
          </div>

          {/* Pregunta 7 */}
          <div className={`faq-item ${open === 6 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(6)}>
            <div className="faq-question">
              ¿Puedo contratar solo el servicio de hosting o dominio?
            </div>
            {open === 6 && (
              <div className="faq-answer">
                Sí, ofrecemos la opción de contratar servicios de hosting y dominio de manera independiente según lo que necesites.
              </div>
            )}
          </div>

          {/* Pregunta 8 */}
          <div className={`faq-item ${open === 7 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(7)}>
            <div className="faq-question">
              ¿Qué medios de pago aceptan para los servicios?
            </div>
            {open === 7 && (
              <div className="faq-answer">
                Aceptamos pagos mediante tarjeta de crédito, transferencia bancaria, PayPal y otros medios populares de pago digital.
              </div>
            )}
          </div>

          {/* Pregunta 9 */}
          <div className={`faq-item ${open === 8 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(8)}>
            <div className="faq-question">
              ¿Ofrecen pagos en cuotas?
            </div>
            {open === 8 && (
              <div className="faq-answer">
                Sí, ofrecemos la opción de pagos en cuotas para nuestros servicios, especialmente en proyectos grandes. Para más información, contáctanos.
              </div>
            )}
          </div>

          {/* Pregunta 10 */}
          <div className={`faq-item ${open === 9 ? 'open' : ''}`} // Se mantiene faq-item y se agrega 'open' cuando la pregunta está abierta
                onClick={() => toggleQuestion(9)}>
            <div className="faq-question">
              ¿Puedo pagar con criptomonedas?
            </div>
            {open === 9 && (
              <div className="faq-answer">
                Actualmente, no aceptamos criptomonedas como forma de pago. Sin embargo, estamos trabajando para integrar esta opción en el futuro.
              </div>
            )}
          </div>
        
      
    </div>
  );
};

export default FAQ;
