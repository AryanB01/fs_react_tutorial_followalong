import { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
        const data = await response.json();
        setPokemonData(data);
    };
    fetchPokemon();
  }, [pokemonIndex]); // Triggers render when 'pokemonIndex' is updated

  const handleNextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  if (pokemonData) {
    return (
      <main>
        <h6>useEffect Demo</h6>
        <div className='pokemon'>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h2>{pokemonData.name}</h2>
        </div>
        <button onClick={handleNextPokemon}>Next Pokemon</button>
      </main>
    );
  } else {
    return (
      <main>
        <p>Loading...</p>
        <button onClick={handleNextPokemon}>Next Pokemon</button>
      </main>
    );
  }
}

export default Pokemon;