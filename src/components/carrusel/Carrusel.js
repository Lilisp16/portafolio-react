// Carrusel.js
import React, { useState, useEffect } from 'react';
import { trabajos } from '../../Data/trabajos'; // Importamos los trabajos
import './carrusel.css'; // Importamos los estilos del carrusel

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice de la imagen actual

  // Cambio automático de imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % trabajos.length); // Avanzar a la siguiente imagen
    }, 3000); // Cambiar cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Cambiar manualmente las imágenes
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % trabajos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + trabajos.length) % trabajos.length);
  };

  return (
    <div className="carousel-container">
      {/* Botones de navegación */}
      <button className="prev" onClick={prevSlide}>
        ←
      </button>

      {/* Contenedor de las imágenes */}
      <div className="carousel">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`, // Deslizar las imágenes
          }}
        >
          {trabajos.map((trabajo, index) => (
            <div key={trabajo.id} className="carousel-item">
              <img src={`/images/${trabajo.id}.jpg`} alt={trabajo.nombre} />
              <h3>{trabajo.nombre}</h3>
              <p>{trabajo.categorias}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botón de siguiente */}
      <button className="next" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default Carrusel;
