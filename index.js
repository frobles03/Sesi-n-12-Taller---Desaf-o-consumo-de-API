document.getElementById('searchBtn').addEventListener('click', searchPokemon);

async function searchPokemon() {
    const pokemonId = document.getElementById('pokemonId').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    try {
        const response = await axios.get(apiUrl);
        const pokemonData = response.data;

        const pokemonInfo = `
            <h2>ID: ${pokemonData.id}</h2>
            <h3>nombre: ${pokemonData.name}</h3>
            <p>Tipo(s): ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
            <p>altura: ${pokemonData.height}</p>
            <p>peso: ${pokemonData.weight}</p>
        `;

        document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('pokemonInfo').innerHTML = 'Error';
    }
}
