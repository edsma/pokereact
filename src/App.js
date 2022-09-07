import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Pokedex from "./Components/Pokedex";
import React from "react";
import { GetPokemon, GetPokemonData, searchPokemon } from "../src/Api";
import { FavoriteProvider } from "./Context/FavoriteContext";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemon] = useState([]);
  const localStorage = "favorite_pokemon";
  
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const fetchPokemons = async () => {
    try {
      const data = await GetPokemon(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await GetPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (error) {}
  };

  const loadFavoritePokemon = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorage)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemon();
  }, [])

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const update = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite > 0){
      update.splice(isFavorite,1);
    }else{
      update.push(name);
    }
    setFavorites(update);
    window.localStorage.setItem(localStorage,
      JSON.stringify(update))
  };

  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(true);
    const result = await searchPokemon(pokemon);
    if(result){
      setPokemon([result]);
      setNotFound(false);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
  }

  return (
    <FavoriteProvider value={{favoritePokemon: favorites,
    updateFavoritePokemons: updateFavoritePokemons}}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onSearch={onSearch} />
          {notFound ? (
            <div className="not-found-text">Cargando pokemones</div>
          ) : (
            <Pokedex
              pokemons={pokemons}
              Page={page}
              total={total}
              setPage={setPage}
            />
          )}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </FavoriteProvider>
  );
}

export default App;
