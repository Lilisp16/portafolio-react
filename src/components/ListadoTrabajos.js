import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../Data/trabajos';


const ListadoTrabajos = () => {
  return (
    <section className='works'>
    {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id}  className='work-item'>
              <div className='mask'>
                 <img src={'/images/'+trabajo.id+".jpg"}/>
              </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
          );
        })
      }
    </section>
  )
}

export default ListadoTrabajos