const pokemonName = document.querySelector('pokemon_name');
const pokemonNumber = document.querySelector('pokemon_number');
const pokemonNumber = document.querySelector('pokemon_imagen');


const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json();
    return data;
  }


const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
}

renderPokemon('25')

