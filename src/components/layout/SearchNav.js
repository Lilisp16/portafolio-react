// SearchNav.js
import React, { useState } from 'react';
import './SearchNav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  // Asegúrate de importar 'useNavigate'


const SearchNav = () => {
  const [isOpen, setIsOpen] = useState(false);  // Estado para abrir/cerrar el offcanvas
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Estado para manejar el dropdown del offcanvas
  const [searchTerm, setSearchTerm] = useState('');  // Definir 'searchTerm' y 'setSearchTerm' correctamente como estado
  const [searchResults, setSearchResults] = useState([]);  // Estado para almacenar los resultados de la búsqueda
  
  const [isSearchDone, setIsSearchDone] = useState(false);  // Estado para saber si la búsqueda ya fue realizada


  const navigate = useNavigate();  // Usa 'useNavigate' en lugar de 'useHistory'

  const toggleMenu = () => setIsOpen(!isOpen);  // Función para alternar el offcanvas
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);  // Alternar el estado de búsqueda
  
  const toggleDropdown = (e) => {
    e.preventDefault();  // Evitar navegación
    setIsDropdownOpen(!isDropdownOpen);  // Alternar el dropdown
  };
 

   // Datos de los servicios que vamos a buscar (puedes obtener estos datos de la API o algún lugar)
   const services = [
    { id: 'service_dw', name: 'Desarrollo Web' },
    { id: 'service_h', name: 'Servicio de Hosting' },
    { id: 'service_d', name: 'Dominio y Email Empresarial' },
    { id: 'service_sgc', name: 'Sistema de Gestión Comercial' },
  ];

 // Manejo de la búsqueda
 const handleSearch = () => {
  // Solo realizar la búsqueda si el término tiene 3 o más caracteres
  if (searchTerm.length < 3) {
    setSearchResults([]); // Limpiar los resultados si hay menos de 3 caracteres
    setIsSearchDone(false);  // Asegurar que no se muestren resultados si no hay suficientes caracteres
    return; // No hacer nada más si el término tiene menos de 3 caracteres
  }



  const lowerCaseTerm = searchTerm.toLowerCase();
  const results = services.filter(service =>
    service.name.toLowerCase().includes(lowerCaseTerm)
  );

  setIsSearchDone(true);

  if (results.length > 0) {
    setSearchResults(results);
    // Redirigir al primer resultado encontrado usando el hash en la URL
    navigate(`/servicios/#${results[0].id}`);
  } else {
    setSearchResults([]);
  }
};

// Manejo de clic en un resultado
const handleResultClick = (id) => {
  // Redirige a la sección correspondiente
  navigate(`/servicios/#${id}`);
  toggleSearch(); // Cierra el campo de búsqueda
};


  return (
    <nav className="search-nav">
      {/* Navbar con logo, busqueda y botón de hamburguesa */}
      <div className="navbar-container">
      <a 
        href="https://wa.me/3218394396?text=¡Hola!%20Me%20interesa%20una%20asesoría%20gratis" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="navbar-brand"
      >
        Asesoria Gratis</a>

        {/* Campo de búsqueda */}
        <div className="search-container">
        
            <input
              className={`search-input ${isSearchOpen ? 'active' : ''}`}  // Aplicar la clase 'active'
              type="search"
              placeholder="Buscar servicio"
              value={searchTerm}  // El valor del input es el término de búsqueda
               onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchTerm(e.target.value);  // Actualizar el término de búsqueda
              if (e.target.value.length >= 3) {
                handleSearch(); // Ejecutar la búsqueda si el término tiene 3 o más caracteres
              } else {
                setSearchResults([]); // Limpiar los resultados si el término tiene menos de 3 caracteres
                setIsSearchDone(false); // Evitar mostrar resultados vacíos
              }
            }}

              
             // Actualizar el término de búsqueda cuando el usuario escribe
              
               
              
              aria-label="Search"
              style={{ display: isSearchOpen ? 'block' : 'none' }}  // Se muestra solo cuando isSearchOpen es true
              />
              
            <button type="button" className="search-button" 
              onClick={() => {
              handleSearch();  // Ejecutar la búsqueda al hacer clic en el botón
              toggleSearch();  // Alternar el estado de búsqueda
            }}>
            <img src="/images/lupa.png" alt="Buscar" className="search-icon" />
            </button>

           

            {searchTerm && isSearchDone && (
            <div>
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.id}>
                      {/* Usamos el botón para redirigir */}
                      <a onClick={() => handleResultClick(result.id)}>
                        {result.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='pbusqueda'>No se encontraron resultados</p>
              )}
            </div>
          )}
        </div>


        {/*botón de hamburguesa */}
        <button className="navbar-toggler" onClick={toggleMenu}>
        <img src="/images/menu-principal.png" alt="Menu" className="navbar-toggler-icon" />
        </button>

      </div>

    
      {/* Menú offcanvas (lateral) */}
      <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">MAINSYS</h5>
          <button className="btn-close" onClick={toggleMenu}>❌</button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="servicios#service_h" className="nav-link">Hosting</a></li>
            <li className="nav-item"><a href="servicios#service_h" className="nav-link">Dominio</a></li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <a href="#" className="nav-link dropdown-toggle"  onClick={toggleDropdown}>Servicios</a>
              <ul className="dropdown-menu">
                <li><a href="servicios#service_dw" className="dropdown-item">Desarrollo WEb</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a href="servicios#service_sgc" className="dropdown-item"> Sistema de Gestión Comercial</a></li>
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
          </form>
        </div>
      </div>

    </nav>
  );
}

export default SearchNav;
