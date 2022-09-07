export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url)
        const data  = await response.json();
        return data;
    }catch(error){

    }
};

export const GetPokemon = async (limit = 20, offset = 0) => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url)
    const data  = await response.json();
    return data;
}

export const GetPokemonData = async (uri) => {
    try{
        let url = uri;
        const response = await fetch(url)
        const data  = await response.json();
        return data;
    }catch(error){

    }
}