const poke_container = document.getElementById('poke_container');
const pokemons_num = 5; // 5 pokemon in 1st generation
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);


const fetch_pokemon = async() =>{
    for(let i=1; i<=pokemons_num; i++){
        await get_pokemon(i);
		 
		
    }
	
}


// this functions calls the pokemon API 
GET /api/pokedexs/1 
Host: localhost:8080


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const get_pokemon = async id =>{
    const url = 'http://localhost:8080/api/pokedexs/${id}';
    const res = await fetch(url,requestOptions);
    const pokemon = await res.json();
    create_pokemon_card(pokemon);
}



function create_pokemon_card(pokemon){
    const pokemon_el = document.createElement('div');
    pokemon_el.classList.add('pokemon');
const poke_type = pokemon.type.map(el => el.type.name);

    const type = main_type.find(type => poke_type.indexOf(type) > -1);

    const name = pokemon.name[0].toUpperCase();

    const color = colors[type];

    pokemon_el.style.backgroundColor = color;

    const pokemon_inner_html = `
        <div class="img_container"> 
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.order}.png" />
        </div>
        <div class="info">
            <span class="number">${pokemon.order}</span>
            <h3 class = "name">${name}</h3>
            <small class ="type">Type: <span>${type}</span></small>  
        </div>
        
    `;

    pokemon_el.innerHTML = pokemon_inner_html;

    poke_container.appendChild(pokemon_el);
}

fetch_pokemon();
