import React, { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favoritePokemon, updateFavoritePokemons } = useContext(FavoriteContext);
    const redHearts = "❤️";
    const blackHeart = "🖤"; 
    const heart = favoritePokemon.includes(pokemon.name)? redHearts: blackHeart;
    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    }
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img"/>
                   
            </div>  
            <div className="card-body">
                    <div className="card-top">  
                        <h3>{pokemon.name}</h3>    
                        <div>#{pokemon.id}</div>
                    </div>  
                    <div className="card-bottom">      
                        <div className="card-type">
                            {
                                pokemon.types.map((type,index)=> {
                                    return (
                                        <div className="pokemon-type-text" key={index}>{type.type.name}</div>
                                    )
                                })
                            }
                        </div>
                        <div className="pokemon-favorite">
                            <button onClick={clickHeart}>
                                {heart} 
                            </button>
                        
                        </div>
                    </div>  
                </div>  
        </div>
    )
}

export default Pokemon;
