const pokemonCanvas = document.getElementById('displayContainer');
const headInput = document.getElementById('headInput');
const bodyInput = document.getElementById('bodyInput');

const pokemonList = [
    'bulbasaur', 'ivysaur', 'venusaur',
    'charmander', 'charmeleon', 'charizard',
    'squirtle', 'wartortle', 'blastoise',
    'caterpie', 'metapod', 'butterfree',
    'weedle', 'kakuna', 'beedrill',
    'pidgey', 'pidgeotto', 'pidgeot',
    'rattata', 'raticate', 'spearow', 'fearow',
    'ekans', 'arbok',
    'pikachu', 'raichu',
    'sandshrew', 'sandslash',
    'nidoranf', 'nidorina', 'nidoqueen',
    'nidoranm', 'nidorino', 'nidoking',
    'clefairy', 'clefable',
    'vulpix', 'ninetails',
    'jigglypuff', 'wigglytuff',
    'zubat', 'golbat', 'oddish', 'gloom',
    'vileplume', 'paras', 'parasect', 'venonat',
    'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
    'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath',
    'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell',
    'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta',
    'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', "farfetch'd", 'doduo',
    'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar',
    'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute',
    'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn',
    'rhydon', 'chansey', 'tangela', 'kangaskhan',
    'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr. mime'
];

// Fetch and display a default fusion when the page loads
fetchAndDisplayPokemon('bulbasaur', 'bulbasaur'); // Default: Head and Body both are Bulbasaur

// Handle Pokémon fusion search
function handleFusionSearch() {
    const headName = headInput.value.trim().toLowerCase();
    const bodyName = bodyInput.value.trim().toLowerCase();

    if (pokemonList.includes(headName) && pokemonList.includes(bodyName)) {
        fetchAndDisplayPokemon(headName, bodyName);
    }
}

// Set up event listeners for input changes
headInput.addEventListener('input', handleFusionSearch);
bodyInput.addEventListener('input', handleFusionSearch);

async function fetchAndDisplayPokemon(headName, bodyName) {
    const headNumber = pokemonList.indexOf(headName) + 1;
    const bodyNumber = pokemonList.indexOf(bodyName) + 1;

    const corsAnywhereURL = 'https://api.allorigins.win/raw?url=';
    const fusionImageSrc = `${corsAnywhereURL}https://if.daena.me/${headNumber}.${bodyNumber}`;

    console.log('Fetching Fusion Pokemon:', fusionImageSrc);

    try {
        const pokemonInfoResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${bodyNumber}`);
        const pokemonInfo = await pokemonInfoResponse.json();

        const pokemonColor = getPokemonColor(pokemonInfo);

        const bodyImage = new Image();
        bodyImage.onload = function () {
            const shoesImage = new Image();
            shoesImage.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = bodyImage.width;
                canvas.height = bodyImage.height;

                const context = canvas.getContext('2d');
                context.drawImage(bodyImage, 0, 0);
                context.drawImage(shoesImage, 0, 0, bodyImage.width, bodyImage.height);

                const fusionImage = new Image();
                fusionImage.src = canvas.toDataURL();

                pokemonCanvas.innerHTML = '';
                pokemonCanvas.appendChild(fusionImage);
            };

            const sneakersColor = pokemonColor.toLowerCase();
            shoesImage.src = `file:///C:/Users/campb/OneDrive/Documents/GitHub/pokemonAutoPhotoshop/pokeGang/${sneakersColor}PokeGang.png`;
        };

        bodyImage.src = fusionImageSrc;
    } catch (error) {
        console.error('Error fetching Fusion Pokemon:', error);
    }
}


// Function to get the corresponding color of sneakers based on the Pokémon color
function getPokemonColor(pokemonInfo) {
    // Default color for unknown or missing information
    let color = 'default';

    if (pokemonInfo.color) {
        color = pokemonInfo.color.name;
    }

    return color;
}
