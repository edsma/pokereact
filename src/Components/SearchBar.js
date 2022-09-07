import React from "react";
import {searchPokemon}  from '../Api';
const {useState} = React;


const SearchBar = (props) => {
    const {onSearch} = props;
    const [search,setSearch] = useState('');
    const [pokemon,setPokemon] = useState('');
    
    const onChange = (evt) => {
        setSearch(evt.target.value)
        if(evt.target.value.lenght === 0){
            setSearch(null);
        }
    }

    const onclick = async (evt) => {
        onSearch(search)

    }
    

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokémon..."
                onChange={onChange}/>
            </div>
            <div className="searchbar-button">
                <button onClick={onclick}>Buscar</button>
            </div>
            <div >
                {pokemon &&
                    <><div>
                        {pokemon.name}
                    </div><div>
                            {pokemon.weight}
                        </div>
                    <img src={pokemon.sprites.front_default} />    
                    </>
                }
            </div>
                
          
        </div>
    );
}

export default SearchBar;