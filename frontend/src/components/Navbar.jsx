import React, { useState, useEffect } from "react";
import "../styles/layout.css";
import { useSearch } from "./SearchProvider";
import { useLocation } from "react-router-dom";
import { GetAllUsers } from "../../wailsjs/go/main/App";

export default function Navbar() {
  const {
    searchTerm,
    searchResults,
    setSearchTerm,
    setSearchResults,
    setSelectedResult,
  } = useSearch();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const users = await GetAllUsers();
        setResults(users);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, [location.pathname]); // Executa novamente quando a localização muda

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      setSearchResults();
      setIsDropdownOpen(false);
      return;
    }

    // Filtrar os resultados com base no termo de pesquisa
    const filteredResults = results.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsDropdownOpen(true);
  };

  const handleSelect = (result) => {
    setSearchTerm(result.name);
    setSelectedResult(result);
    setSearchResults();
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Respirar</p>
        </div>
        {location.pathname !== "/insert" && (
          <div className="search-outer">
            {isLoading ? (
              <div className="loading">Carregando...</div>
            ) : (
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Pesquisar usuário..."
                className="search"
                disabled={isLoading}
              />
            )}
            {isDropdownOpen && searchResults.length > 0 && (
              <div className="dropdown">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="dropdown-item"
                    onClick={() => handleSelect(result)}
                  >
                    {result.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
