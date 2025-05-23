import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importamos useNavigate
import './MainHome.css';


const MainHome = () => {
  const navigate = useNavigate(); // Usamos useNavigate para la redirección

  // Estado para controlar la visibilidad del video de bienvenida
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(true);

  // Usamos useEffect para ocultar el video después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeVideo(false); // Oculta el video de bienvenida después de 5 segundos
    }, 2000); // 5000ms = 5 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    // Redirigimos al usuario a la página de inicio al hacer clic en el botón
    navigate('/inicio');
  };



  return (
    <>
    
    
    <div className='logo2'>
    <span className='logospan'>
    <Link to="/inicio">
        <img src={`${process.env.PUBLIC_URL}/images/byredondo.png`} alt='logo' className='by'/>
    </Link>
    </span>
  {/*  <img src={`${process.env.PUBLIC_URL}/images/reml.png`} alt='logo' className='ms_letra'/> */}
  </div>



    <div className="MHome">
      
      {/* Video de bienvenida que solo se muestra si el estado showWelcomeVideo es true */}
      {showWelcomeVideo && (
        <video className="video-welcome" autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/images/v3.mp4`} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      )}

      {/* Contenido de la página que solo se muestra después de ocultar el video de bienvenida */}
      {!showWelcomeVideo && (
        <>

      {/* Video de fondo, sigue siendo visible todo el tiempo */}
      <video className="video-background" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/images/videoMS.mp4`} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>



      <section className='intro'>
        <div className='pmain'>
          <h6 className="titulo">
            Transforma tu presencia en línea con un diseño digital para atraer y convertir
          </h6>
         {/*<p className="info222">
            En <strong>MainSys</strong>, nos especializamos en ofrecer soluciones 
            tecnológicas personalizadas que impulsan el crecimiento y la eficiencia 
            de las pequeñas y medianas empresas (PYMES).
            
          </p>*/}
          
        </div>


        <div className="interactive-box">

        { /*   <img src={`${process.env.PUBLIC_URL}/images/diseño2.jpeg' className="media-image" alt="diseño 2" /> */}
        { /*   <img src={`${process.env.PUBLIC_URL}/images/diseño1.jpeg' className="media-image" alt="diseño 1" /> */}
          <video className="media-video" autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/images/b1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="start-button" onClick={handleStartClick}>
            Empezar
          </button>

        </div>

      </section>
      </>
)}
    </div>
    </>
  );
}

export default MainHome;
