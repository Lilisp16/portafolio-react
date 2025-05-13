import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../Data/trabajos';

const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    const proyectoEncontrado = trabajos.find(trabajo => trabajo.id === params.id);
    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
  }, [params.id]); // Dependencia en params.id para que se actualice al cambiar la URL

  if (!proyecto.id) {
    return <div className="page">Proyecto no encontrado</div>; // Si no encuentra el proyecto
  }

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={`/images/${proyecto.id}.jpg`} alt={proyecto.nombre} />
      </div>
      <h1 className="heading">{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={`https://${proyecto.url}`} target="_blank" rel="noopener noreferrer">
        Ir al proyecto
      </a>
    </div>
  );
};

export default Proyecto;
