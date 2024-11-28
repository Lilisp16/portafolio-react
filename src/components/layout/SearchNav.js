// SearchNav.js
import React, { useState } from 'react';
import './SearchNav.css';
import { Link } from 'react-router-dom';

const SearchNav = () => {
  const [isOpen, setIsOpen] = useState(false);  // Estado para abrir/cerrar el offcanvas
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);  // Función para alternar el offcanvas
  

  const toggleDropdown = (e) => {
    e.preventDefault();  // Evitar navegación
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="search-nav">
      {/* Navbar con logo, busqueda y botón de hamburguesa */}
      <div className="navbar-container">
        <Link to="/contacto" className="navbar-brand">Contáctanos</Link>

        {/* Campo de búsqueda */}
        <div className="search-container">
        
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"/>
            <button type="submit" className="search-button">
              <img src="/images/lupa.png" alt="Buscar" className="search-icon" />
            </button>
        </div>


        {/*botón de hamburguesa */}
        <button className="navbar-toggler" onClick={toggleMenu}>
        <img src="/images/menu-principal.png" alt="Menu" className="navbar-toggler-icon" />
        </button>

      </div>

    
      {/* Menú offcanvas (lateral) */}
      <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">BriskYard</h5>
          <button className="btn-close" onClick={toggleMenu}>❌</button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <a href="#" className="nav-link dropdown-toggle"  onClick={toggleDropdown}>Servicios</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Desarrollo WEb</a></li>
                <li><a href="#" className="dropdown-item">Hosting y Dominio</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a href="#" className="dropdown-item"> Sistema de Gestión Comercial</a></li>
              </ul>
            </li>
          </ul>
          <form className="search-form mt-3">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" className="search-button">
              <img src="/images/lupa.png" alt="Buscar" className="search-icon" />
            </button>
          </form>
        </div>
      </div>

    </nav>
  );
}

export default SearchNav;
