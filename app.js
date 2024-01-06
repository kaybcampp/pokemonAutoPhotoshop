document.addEventListener('DOMContentLoaded', function () {
    const headInput = document.getElementById('headInput');
    const bodyInput = document.getElementById('bodyInput');
    const displayContainer = document.getElementById('displayContainer');

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
        'jigglypuff', 'wigglytuff'
    ];

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
                const imageUrl = doc.querySelector('img').src;

                console.log('Fetched Pokemon Image:', imageUrl);

                // Display the image on the 'displayContainer' element
                displayContainer.innerHTML = `<img src="${imageUrl}" alt="Fused Pokemon Image">`;
            })
            .catch(error => {
                console.error('Error fetching Fusion Pokemon:', error.message);
            });
    }

    // Fetch and display a default fusion when the page loads
    fetchAndDisplayPokemon('bulbasaur', 'bulbasaur'); // Default: Head and Body both are Bulbasaur

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
});
