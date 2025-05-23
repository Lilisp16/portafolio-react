import React, { useState } from 'react';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const allTextElements = document.querySelectorAll('.searchable');
    let foundResults = [];

    allTextElements.forEach((element) => {
      if (element.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
        foundResults.push(element);
      }
    });

    setResults(foundResults);
  };

  return (
    <div className="search-container">
      <input
        className={`search-input ${isSearchOpen ? 'active' : ''}`}
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ display: isSearchOpen ? 'block' : 'none' }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      
      <button type="button" className="search-button" onClick={toggleSearch}>
        <img src={`${process.env.PUBLIC_URL}/images/lupa.png`} alt="Buscar" className="search-icon" />
      </button>

      <button type="button" className="search-submit" onClick={handleSearchSubmit}>
        Buscar
      </button>

      {/* Mostrar los resultados de la búsqueda */}
      {results.length > 0 && (
        <div className="search-results">
          <h3>Resultados de búsqueda:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.textContent}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
