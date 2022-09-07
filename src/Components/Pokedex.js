import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons, Page,setPage, total} = props;
    const lastPage = () => {
        const nextPage = Math.max(Page - 1,0);
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(Page + 1 ,total);
        setPage(nextPage);
    }
    

    return (
        <div>
            <div className='header'>
                <h1>Pokedex</h1>    
                <Pagination
                page={Page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}/>
            </div>   
                <div className='pokedex-grid'>
                    {
                    pokemons.map((pokemon, idx) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name}/>
                        );
                    })}
              </div>
        </div>
    );
}

export default Pokedex;