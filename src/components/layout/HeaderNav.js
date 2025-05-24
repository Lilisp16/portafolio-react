import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span className='logospan'>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/images/byredondo.png`}  alt='logo' className='by'/>
            </Link>
                
            </span>
         {/*   <img src={`${process.env.PUBLIC_URL}/images/reml.png`}  alt='logo' className='ms_letra'/>*/} 

        </div>
       
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/info/acerca">Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul> 
        </nav>
    </header>
  )
}

export default HeaderNav