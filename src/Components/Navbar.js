import React from 'react';
import FavoriteContext from '../Context/FavoriteContext';
const {useContext} = React;
const Navbar = () =>{
    const {favoritePokemon} = useContext(FavoriteContext);
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return (
        <nav>
            <div>

            </div>
            <div>
                <img src={imgUrl}
                alt='poke-api-logo'
                className='Navbar-Image'/>
            </div>
            <div>
                ❤️ {favoritePokemon.length}
            </div>
        </nav>
    );
}

export default Navbar;