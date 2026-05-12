async function traerPokemon() {
    const pantalla = document.getElementById('pantalla');
    
    // 1. Generar ID aleatorio
    const id = Math.floor(Math.random() * 1025) + 1;

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const datos = await respuesta.json();

        // 2. Extraer los datos que pides
        const nombre = datos.name;
        const pokedexNum = datos.id;
        const fotoNormal = datos.sprites.other['official-artwork'].front_default;
        const fotoShiny = datos.sprites.other['official-artwork'].front_shiny;

        // 3. Inyectar en el HTML
        // Usamos una estructura simple para mostrar ambas fotos
        pantalla.innerHTML = `
            <p> Pokemon</p>
            <h2 style="margin-bottom: 20px;">${nombre}</h2>
            <p> Numero pokédex : #${pokedexNum}</p>
            <div style="display: flex; justify-content: center; gap: 20px;">
                <div>
                    <img src="${fotoNormal}" style="width: 150px;">
                    <p>Normal</p>
                </div>
                <div>
                    <img src="${fotoShiny}" style="width: 150px;">
                    <p>Shiny ✨</p>
                </div>
            </div>
            `;

    } catch (error) {
        pantalla.innerHTML = "<p>Error al cargar el Pokémon</p>";
        console.error(error);
    }
}

window.onload = traerPokemon;
