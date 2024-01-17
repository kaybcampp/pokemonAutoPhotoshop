const pokemonList = [
    'bulbasaur', 'ivysaur', 'venusaur',
    // ... (the rest of your Pokémon list)
    'regidrago', 'glastrier', 'spectrier', 'calyrex'
];

// Function to toggle the dropdown visibility
function toggleDropdown(inputId) {
    const inputElement = document.getElementById(inputId);
    const indicatorElement = inputElement.nextElementSibling;
    const dropdownContainer = inputElement.parentElement.querySelector('.dropdown-container');

    dropdownContainer.style.display = dropdownContainer.style.display === 'none' ? 'block' : 'none';

    // Set the indicator to a white orb
    indicatorElement.innerHTML = '&#9898;';
}

document.addEventListener('DOMContentLoaded', function () {
    const headInput = document.getElementById('headInput');
    const bodyInput = document.getElementById('bodyInput');
    const displayContainer = document.getElementById('displayContainer');

    // ... (previous code)

    // Fetch and display a default fusion when the page loads
    fetchAndDisplayPokemon('bulbasaur', 'bulbasaur'); // Default: Head and Body both are Bulbasaur
});

// Handle Pokemon fusion search
function handleFusionSearch() {
    const headName = headInput.value.trim().toLowerCase();
    const bodyName = bodyInput.value.trim().toLowerCase();

    // If only 'head' is entered, fetch and display that Pokemon without waiting for 'body'
    if (pokemonList.includes(headName)) {
        fetchAndDisplayPokemon(headName, bodyName);
    }
}

// Set up event listeners for input changes
headInput.addEventListener('input', handleFusionSearch);
bodyInput.addEventListener('input', handleFusionSearch);

function fetchAndDisplayPokemon(headName, bodyName) {
    const headNumber = pokemonList.indexOf(headName) + 1;

    // If only 'head' is entered, set 'body' to the same as 'head'
    const bodyNumber = bodyName ? pokemonList.indexOf(bodyName) + 1 : headNumber;

    const fusionPageUrl = `https://if.daena.me/${headNumber}.${bodyNumber}/`;

    console.log('Fetching Fusion Pokemon from:', fusionPageUrl);

    fetchPokemonImage(fusionPageUrl);
}

function fetchPokemonImage(link) {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const proxiedUrl = corsProxyUrl + link;

    fetch(proxiedUrl)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Check if the document contains an image
            const imageElement = doc.querySelector('img');
            if (imageElement) {
                const imageUrl = imageElement.src;
                console.log('Fetched Pokemon Image:', imageUrl);

                // Display the image on the 'displayContainer' element
                displayContainer.innerHTML = `<img src="${imageUrl}" alt="Fused Pokemon Image">`;
            } else {
                console.error('Error fetching Fusion Pokemon: Image not found in the fetched HTML');
            }
        })
        .catch(error => {
            console.error('Error fetching Fusion Pokemon:', error.message);
        });
}
