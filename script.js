const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FAA0A0',
    grass: '#77DD77',
	electric: '#6699cc',
	water: '#AEC6CF',
	ground: '#C4A484',
	rock: '#d5d5d4',
	fairy: '#F8C8DC',
	poison: '#C3B1E1',
	bug: '#f8d5a3',
	dragon: '#E34234',
	psychic: '#d8ec8f',
	flying: '#cfcfc4',
	fighting: '#FDFD96',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)




const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}





const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}




const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)


    const id = pokemon.id.toString().padStart(3, '0')

    const  poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)

    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>

    <div class="info">
         <span class="number">${id}</span>
         <h3 class="name">${name}</h3>
     <small class="type">Type: <span>${type}</span></small>
    </div> `


    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}



fetchPokemons()