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
        'rattata', 'raticate', 'spearow',
        'fearow', 'ekans', 'arbok',
        'pikachu', 'raichu', 'sandshrew',
        'sandslash', 'nidoran f', 'nidorina',
        'nidoqueen', 'nidoran m', 'nidorino',
        'nidoking', 'clefairy', 'clefable',
        'vulpix', 'ninetales', 'jigglypuff',
        'wigglytuff', 'zubat', 'golbat',
        'oddish', 'gloom', 'vileplume',
        'paras', 'parasect', 'venonat',
        'venomoth', 'diglett', 'dugtrio',
        'meowth', 'persian', 'psyduck',
        'golduck', 'mankey', 'primeape',
        'growlithe', 'arcanine', 'poliwag',
        'poliwhirl', 'poliwrath', 'abra',
        'kadabra', 'alakazam', 'machop',
        'machoke', 'machamp', 'bellsprout',
        'weepinbell', 'victreebel', 'tentacool',
        'tentacruel', 'geodude', 'graveler',
        'golem', 'ponyta', 'rapidash',
        'slowpoke', 'slowbro', 'magnemite',
        'magneton', 'farfetch\'d', 'doduo',
        'dodrio', 'seel', 'dewgong',
        'grimer', 'muk', 'shellder',
        'cloyster', 'gastly', 'haunter',
        'gengar', 'onix', 'drowzee',
        'hypno', 'krabby', 'kingler',
        'voltorb', 'electrode', 'exeggcute',
        'exeggutor', 'cubone', 'marowak',
        'hitmonlee', 'hitmonchan', 'lickitung',
        'koffing', 'weezing', 'rhyhorn',
        'rhydon', 'chansey', 'tangela',
        'kangaskhan', 'horsea', 'seadra',
        'goldeen', 'seaking', 'staryu',
        'starmie', 'mr. mime', 'scyther',
        'jynx', 'electabuzz', 'magmar',
        'pinsir', 'tauros', 'magikarp',
        'gyarados', 'lapras', 'ditto',
        'eevee', 'vaporeon', 'jolteon',
        'flareon', 'porygon', 'omanyte',
        'omastar', 'kabuto', 'kabutops',
        'aerodactyl', 'snorlax', 'articuno',
        'zapdos', 'moltres', 'dratini',
        'dragonair', 'dragonite', 'mewtwo',
        'mew', 'chikorita', 'bayleef',
        'meganium', 'cyndaquil', 'quilava',
        'typhlosion', 'totodile', 'croconaw',
        'feraligatr', 'sentret', 'furret',
        'hoothoot', 'noctowl', 'ledyba',
        'ledian', 'spinarak', 'ariados',
        'crobat', 'chinchou', 'lanturn',
        'pichu', 'cleffa', 'igglybuff',
        'togepi', 'togetic', 'natu',
        'xatu', 'mareep', 'flaaffy',
        'ampharos', 'bellossom', 'marill',
        'azumarill', 'sudowoodo', 'politoed',
        'hoppip', 'skiploom', 'jumpluff',
        'aipom', 'sunkern', 'sunflora',
        'yanma', 'wooper', 'quagsire',
        'espeon', 'umbreon', 'misdreavus',
        'unown', 'wobbuffet', 'girafarig',
        'pineco', 'forretress', 'dunsparce',
        'gligar', 'steelix', 'snubbull',
        'granbull', 'qwilfish', 'scizor',
        'shuckle', 'heracross', 'sneasel',
        'teddiursa', 'ursaring', 'slugma',
        'magcargo', 'swinub', 'piloswine',
        'corsola', 'remoraid', 'octillery',
        'delibird', 'mantine', 'skarmory',
        'houndour', 'houndoom', 'kingdra',
        'phanpy', 'donphan', 'porygon2',
        'stantler', 'smeargle', 'tyrogue',
        'hitmontop', 'smoochum', 'elekid',
        'magby', 'miltank', 'blissey',
        'raikou', 'entei', 'suicune',
        'larvitar', 'pupitar', 'tyranitar',
        'lugia', 'ho-oh', 'celebi',
        'azurill', 'wynaut', 'ambipom',
        'mismagius', 'honchkrow', 'bonsly',
        'mime jr.', 'happiny', 'munchlax',
        'mantyke', 'weavile', 'magnezone',
        'lickilicky', 'rhyperior', 'tangrowth',
        'electivire', 'magmortar', 'togekiss',
        'yanmega', 'leafeon', 'glaceon',
        'gliscor', 'mamoswine', 'porygon-z',
        'treecko', 'grovyle', 'sceptile',
        'torchic', 'combusken', 'blaziken',
        'mudkip', 'marshtomp', 'swampert',
        'ralts', 'kirlia', 'gardevoir',
        'gallade', 'shedinja', 'kecleon',
        'beldum', 'metang', 'metagross',
        'bidoof', 'spiritomb', 'lucario',
        'gible','gabite', 'garchomp',
        'munchlax', 'riolu', 'lucario',
        'hippopotas', 'hippowdon', 'skorupi',
        'drapion', 'croagunk', 'toxicroak',
        'carnivine', 'finneon', 'lumineon',
        'mantyke', 'snover', 'abomasnow',
        'weavile', 'magnezone', 'lickilicky',
        'rhyperior', 'tangrowth', 'electivire',
        'magmortar', 'togekiss', 'yanmega',
        'leafeon', 'glaceon', 'gliscor',
        'mamoswine', 'porygon-z', 'gallade',
        'probopass', 'dusknoir', 'froslass',
        'rotom', 'uxie', 'mesprit',
        'azelf', 'dialga', 'palkia',
        'heatran', 'regigigas', 'giratina',
        'cresselia', 'phione', 'manaphy',
        'darkrai', 'shaymin', 'arceus',
        'victini', 'snivy', 'servine',
        'serperior', 'tepig', 'pignite',
        'emboar', 'oshawott', 'dewott',
        'samurott', 'patrat', 'watchog',
        'lillipup', 'herdier', 'stoutland',
        'purrloin', 'liepard', 'pansage',
        'simisage', 'pansear', 'simisear',
        'panpour', 'simipour', 'munna',
        'musharna', 'pidove', 'tranquill',
        'unfezant', 'blitzle', 'zebstrika',
        'roggenrola', 'boldore', 'gigalith',
        'woobat', 'swoobat', 'drilbur',
        'excadrill', 'audino', 'timburr',
        'gurdurr', 'conkeldurr', 'tympole',
        'palpitoad', 'seismitoad', 'throh',
        'sawk', 'sewaddle', 'swadloon',
        'leavanny', 'venipede', 'whirlipede',
        'scolipede', 'cottonee', 'whimsicott',
        'petilil', 'lilligant', 'basculin',
        'sandile', 'krokorok', 'krookodile',
        'darumaka', 'darmanitan', 'maractus',
        'dwebble', 'crustle', 'scraggy',
        'scrafty', 'sigilyph', 'yamask',
        'cofagrigus', 'tirtouga', 'carracosta',
        'archen', 'archeops', 'trubbish',
        'garbodor', 'zorua', 'zoroark',
        'minccino', 'cinccino', 'gothita',
        'gothorita', 'gothitelle', 'solosis',
        'duosion', 'reuniclus', 'ducklett',
        'swanna', 'vanillite', 'vanillish',
        'vanilluxe', 'deerling', 'sawsbuck',
        'emolga', 'karrablast', 'escavalier',
        'foongus', 'amoonguss', 'frillish',
        'jellicent', 'alomomola', 'joltik',
        'galvantula', 'ferroseed', 'ferrothorn',
        'klink', 'klang', 'klinklang',
        'tynamo', 'eelektrik', 'eelektross',
        'elgyem', 'beheeyem', 'litwick',
        'lampent', 'chandelure', 'axew',
        'fraxure', 'haxorus', 'cubchoo',
        'beartic', 'cryogonal', 'shelmet',
        'accelgor', 'stunfisk', 'mienfoo',
        'mienshao', 'druddigon', 'golett',
        'golurk', 'pawniard', 'bisharp',
        'bouffalant', 'rufflet', 'braviary',
        'vullaby', 'mandibuzz', 'heatmor',
        'durant', 'deino', 'zweilous',
        'hydreigon', 'larvesta', 'volcarona',
        'cobalion', 'terrakion', 'virizion',
        'tornadus', 'thundurus', 'reshiram',
        'zekrom', 'landorus', 'kyurem',
        'keldeo', 'meloetta', 'genesect',
        'chespin', 'quilladin', 'chesnaught',
        'fennekin', 'braixen', 'delphox',
        'froakie', 'frogadier', 'greninja',
        'bunnelby', 'diggersby', 'fletchling',
        'fletchinder', 'talonflame', 'scatterbug',
        'spewpa', 'vivillon', 'litleo',
        'pyroar', 'flabebe', 'floette',
        'florges', 'skiddo', 'gogoat',
        'pancham', 'pangoro', 'furfrou',
        'espurr', 'meowstic', 'honedge',
        'doublade', 'aegislash', 'spritzee',
        'aromatisse', 'swirlix', 'slurpuff',
        'inkay', 'malamar', 'binacle',
        'barbaracle', 'skrelp', 'dragalge',
        'clauncher', 'clawitzer', 'helioptile',
        'heliolisk', 'tyrunt', 'tyrantrum',
        'amaura', 'aurorus', 'sylveon',
        'hawlucha', 'dedenne', 'carbink',
        'goomy', 'sliggoo', 'goodra',
        'klefki', 'phantump', 'trevenant',
        'pumpkaboo', 'gourgeist', 'bergmite',
        'avalugg', 'noibat', 'noivern',
        'xerneas', 'yveltal', 'zygarde',
        'diancie', 'hoopa', 'volcanion',
        'rowlet', 'dartrix', 'decidueye',
        'litten', 'torracat', 'incineroar',
        'popplio', 'brionne', 'primarina', 'pikipek', 'trumbeak', 'toucannon',
        'yungoos', 'gumshoos', 'grubbin',
        'charjabug', 'vikavolt', 'crabrawler',
        'crabominable', 'oricorio', 'cutiefly',
        'ribombee', 'rockruff', 'lycanroc',
        'wishiwashi', 'mareanie', 'toxapex',
        'mudbray', 'mudsdale', 'dewpider',
        'araquanid', 'fomantis', 'lurantis',
        'morelull', 'shiinotic', 'salandit',
        'salazzle', 'stufful', 'bewear',
        'bounsweet', 'steenee', 'tsareena',
        'comfey', 'oranguru', 'passimian',
        'wimpod', 'golisopod', 'sandygast',
        'palossand', 'pyukumuku', 'type:null',
        'silicobra', 'sandaconda', 'centiskorch',
        'clobbopus', 'grapploct', 'sinistea',
        'polteageist', 'hatenna', 'hattrem',
        'hatterene', 'impidimp', 'morgrem',
        'grimmsnarl', 'obstagoon', 'perrserker',
        'cursola', "sirfetch’d", 'mr.rime',
        'runerigus', 'milcery', 'alcremie',
        'falinks', 'pincurchin', 'snom',
        'frosmoth', 'stonjourner', 'eiscue',
        'indeedee', 'morpeko', 'cufant',
        'copperajah', 'dracozolt', 'arctozolt',
        'dracovish', 'arctovish', 'duraludon',
        'dreepy', 'drakloak', 'dragapult',
        'zacian', 'zamazenta', 'eternatus',
        'kubfu', 'urshifu', 'zarude',
        'regieleki', 'regidrago', 'glastrier',
        'spectrier', 'calyrex'
        ];

    // Populate the datalist with Pokémon options
    pokemonList.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon;
        pokemonDatalist.appendChild(option);
    });

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
