import _get from "lodash/get";

//Pokeballs
export const pokeBalls = {
    BeastBall: 0.1,
    CherishBall: 1,
    DiveBall: 3.5,
    DreamBall: 4,
    DuskBall: 3,
    FastBall: 4,
    FriendBall: 1,
    GreatBall: 1.5,
    HealBall: 1,
    HeavyBall: 1,
    LevelBall: 1,
    LoveBall: 8,
    LureBall: 3,
    LuxuryBall: 1,
    MasterBall: 255,
    MoonBall: 4,
    NestBall: 1,
    NetBall: 3,
    PokeBall: 1,
    PremierBall: 1,
    QuickBall: 5,
    RepeatBall: 3.5,
    SafariBall: 1.5,
    SuperBall: 1.5,
    TimerBall: 1,
    UltraBall: 2,
};

//Status do pokemon
export const statusMultipliers = {
    Asleep: 2,
    Burned: 1.5,
    Frozen: 2,
    Normal: 1,
    Paralyzed: 1.5,
    Poisoned: 1.5,
};

//Pokemons de inicio
export const starterPokemons = [
    // 1ª Geração - Kanto
    "bulbasaur",
    "charmander",
    "squirtle",
    // 2ª Geração - Johto
    "chikorita",
    "cyndaquil",
    "totodile",
    // 3ª Geração - Hoenn
    "treecko",
    "torchic",
    "mudkip",
    // 4ª Geração - Sinnoh
    "turtwig",
    "chimchar",
    "piplup",
    // 5ª Geração - Unova
    "snivy",
    "tepig",
    "oshawott",
    // 6ª Geração - Kalos
    "chespin",
    "fennekin",
    "froakie",
    // 7ª Geração - Alola
    "rowlet",
    "litten",
    "popplio",
    // 8ª Geração - Galar
    "grookey",
    "scorbunny",
    "sobble",
    // 9ª Geração - Paldea
    "sprigatito",
    "fuecoco",
    "quaxly",
];

// Mapeamento de classes e cores para cada dificuldade
export const difficultyStyles = {
    "Very Easy": { className: "", color: "#27ae60" },
    Easy: { className: "", color: "#16a085" },
    Normal: { className: "", color: "#95a5a6" },
    Hard: { className: "", color: " #e74c3c" },
    "Very Hard": { className: "", color: "#c0392b" },
};

//Cores dos jogos
export const gameColors = {
    red: "#d32f2f", // Vermelho forte
    blue: "#1976d2", // Azul médio
    yellow: "#fbc02d", // Amarelo vibrante
    green: "#388e3c", // Verde médio
    gold: "#ffcc00", // Amarelo dourado
    silver: "#c0c0c0", // Prateado
    crystal: "#00bcd4", // Azul cristalino
    ruby: "#e53935", // Vermelho rubi
    sapphire: "#1e88e5", // Azul safira
    alphaSapphire: "#5d81d6",
    emerald: "#2e7d32", // Verde esmeralda
    firered: "#d84315", // Vermelho fogo
    leafgreen: "#4caf50", // Verde folha
    diamond: "#8471bd",
    pearl: "#ce93d8", // Rosa perolado
    platinum: "#9e9e9e", // Cinza platina
    heartgold: "#b8860b", // Dourado escuro
    soulsilver: "#8c8c8c", // Prata escuro
    black: "#343a40", // Preto
    black2: "#212121",
    white: "#f5f5f5", // Branco gelo
    white2: "#e9ecef",
    x: "#3949ab", // Azul roxo (X)
    y: "#d32f2f", // Vermelho escuro (Y)
    sun: "#ff7043", // Laranja solar
    moon: "#5c6bc0", // Azul lunar
    ultrasun: "#ff5722", // Laranja intenso
    ultramoon: "#303f9f", // Azul escuro
    sword: "#0077b6", // Azul espada
    shield: "#c2185b", // Vermelho escudo
    omegaRuby: "#c03028",
};

//Colores com base nos tipos dos pokemons
export const colorTypeGradients = (type1, type2, length) => {
    // debugger
    let color1, color2;

    switch (type1) {
        case "grass":
            color1 = "#a8ff98";
            break;
        case "poison":
            color1 = "#d6a2e4";
            break;
        case "normal":
            color1 = "#dcdcdc";
            break;
        case "fire":
            color1 = "#ffb971";
            break;
        case "water":
            color1 = "#8cc4e2";
            break;
        case "electric":
            color1 = "#ffe662";
            break;
        case "ice":
            color1 = "#8cf5e4";
            break;
        case "fighting":
            color1 = "#da7589";
            break;
        case "ground":
            color1 = "#e69a74";
            break;
        case "flying":
            color1 = "#bbc9e4";
            break;
        case "psychic":
            color1 = "#ffa5da";
            break;
        case "bug":
            color1 = "#bae05f";
            break;
        case "rock":
            color1 = "#C9BB8A";
            break;
        case "ghost":
            color1 = "#8291e0";
            break;
        case "dark":
            color1 = "#8e8c94";
            break;
        case "dragon":
            color1 = "#88a2e8";
            break;
        case "steel":
            color1 = "#9fb8b9";
            break;
        case "fairy":
            color1 = "#fdb9e9";
            break;
        default:
            color1 = "gainsboro";
            break;
    }

    if (length === 2) {
        switch (type2) {
            case "grass":
                color2 = "#a8ff98";
                break;
            case "poison":
                color2 = "#d6a2e4";
                break;
            case "normal":
                color2 = "#dcdcdc";
                break;
            case "fire":
                color2 = "#ffb971";
                break;
            case "water":
                color2 = "#8cc4e2";
                break;
            case "electric":
                color2 = "#ffe662";
                break;
            case "ice":
                color2 = "#8cf5e4";
                break;
            case "fighting":
                color2 = "#da7589";
                break;
            case "ground":
                color2 = "#e69a74";
                break;
            case "flying":
                color2 = "#bbc9e4";
                break;
            case "psychic":
                color2 = "#ffa5da";
                break;
            case "bug":
                color2 = "#bae05f";
                break;
            case "rock":
                color2 = "#C9BB8A";
                break;
            case "ghost":
                color2 = "#8291e0";
                break;
            case "dark":
                color2 = "#8e8c94";
                break;
            case "dragon":
                color2 = "#88a2e8";
                break;
            case "steel":
                color2 = "#9fb8b9";
                break;
            case "fairy":
                color2 = "#fdb9e9";
                break;
            default:
                color2 = "gainsboro";
                break;
        }
    } else if (length === 1) {
        color2 = color1;
    }

    const finalColor = [color1, color2];

    return finalColor;
};

//Cores das bordas dos card da página infopokemon
export const borderColorInfoPokemon = (color) => {
    let finalColor;

    switch (color) {
        case "black":
            finalColor = "black";
            break;
        case "blue":
            finalColor = "#0e5fd5";
            break;
        case "brown":
            finalColor = "#7d5e41";
            break;
        case "gray":
            finalColor = "gray";
            break;
        case "green":
            finalColor = "green";
            break;
        case "pink":
            finalColor = "#c9909a";
            break;
        case "purple":
            finalColor = "purple";
            break;
        case "red":
            finalColor = "#f05936";
            break;
        case "white":
            finalColor = "#adb5bd";
            break;
        case "yellow":
            finalColor = "#b59960";
            break;
        default:
            finalColor = "gainsboro";
            break;
    }

    return finalColor;
};

//Cores temas com base na cor do pokemon usado na página pokeinfo
export const lightColorInfoPokemon = (color) => {
    let finalColor;

    switch (color) {
        case "black":
            finalColor = "#0000002b";
            break;
        case "blue":
            finalColor = "#0d6efd24";
            break;
        case "brown":
            finalColor = "#7d5e413d";
            break;
        case "gray":
            finalColor = "#8080803b";
            break;
        case "green":
            finalColor = "#00800030";
            break;
        case "pink":
            finalColor = "#c9909a36";
            break;
        case "purple":
            finalColor = "#80008021";
            break;
        case "red":
            finalColor = "#f0593630";
            break;
        case "white":
            finalColor = "#adb5bd33";
            break;
        case "yellow":
            finalColor = "#ffc10726";
            break;
        default:
            finalColor = "gainsboro";
            break;
    }

    return finalColor;
};

//Ir ao topo da tela
export const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

//Adicionando zero a esqueda no númeoro do Pokemon.
export const zeroLeft = (pokeId) => {
    if (pokeId < 10) {
        return "000" + pokeId;
    }

    if (pokeId >= 10 && pokeId < 100) {
        return "00" + pokeId;
    }

    if (pokeId >= 100 && pokeId < 1000) {
        return "0" + pokeId;
    }

    if (pokeId >= 1000) {
        return pokeId;
    }
};

//Pega apenas o primeiro nome do pokemon.
export const splitName = (name) => {
    let newName = "";
    if (name.length > 15) {
        let splitedName = name.split("-");
        newName = splitedName[0];
    } else {
        newName = name;
    }
    return newName;
};

export const spriteAdapterOfficial = (spriteOfficial) => {
    let oficial_atwork = _get(
        spriteOfficial,
        "other.official-artwork.front_default",
        ""
    );
    let dream_word = _get(
        spriteOfficial,
        "other.dream_world.front_default",
        ""
    );

    if (dream_word) {
        return dream_word;
    }

    if (oficial_atwork) {
        return oficial_atwork;
    }

    return null;
};

//Busca pelo idioma "en" e pega o nome do Genres.
export const getGenresNameInEn = (genres) => {
    let genresName = "";
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].language.name === "en") {
            genresName = genres[i].genus;
        }
    }
    return genresName;
};

//Busca pelo idioma "en" e pega a descrição.
export const getDescriptionInEn = (description) => {
    let descriptionText = "";
    for (let i = 0; i < description.length; i++) {
        if (description[i].language.name === "en") {
            descriptionText = description[i].flavor_text;
        }
    }
    return descriptionText;
};

// Função para determinar a classificação e a frase com base na Base Friendship
export const getFriendshipClassification = (friendship) => {
    if (friendship >= 0 && friendship <= 49) {
        return (
            <div>
                <h3 className="">{friendship}</h3>
                <h3 className="mt-5"> Poor</h3>
                <p className="">It seems to dislike you.</p>
            </div>
        );
    } else if (friendship >= 50 && friendship <= 99) {
        return (
            <div>
                <h3 className="">{friendship}</h3>
                <h3 className="mt-5">Normal</h3>
                <p className="">It is getting used to you.</p>
            </div>
        );
    } else if (friendship >= 100 && friendship <= 149) {
        return (
            <div>
                <h3 className="">{friendship}</h3>
                <h3 className="mt-5">Good</h3>
                <p className="">It likes you quite a bit!</p>
            </div>
        );
    } else if (friendship >= 150 && friendship <= 199) {
        return (
            <div>
                <h3 className="">{friendship}</h3>
                <h3 className="mt-5">Great</h3>
                <p className="">It loves you!</p>
            </div>
        );
    } else if (friendship >= 200 && friendship <= 255) {
        return (
            <div>
                <h3 className="">{friendship}</h3>
                <h3 className="mt-5">Max</h3>
                <p className="">
                    It is extremely attached to you! It must love you a lot.
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <h3 className="">Unknown</h3>
                <p className="">Friendship value out of valid range.</p>
            </div>
        );
    }
};

//Recuperando os valores dos Genders em porcentagem com uma base máxima de 8 para ser Female. Conta usada regra de 3.
export const calculateGenderRatio = (PokemonGender, setPokemonGenderInfo) => {
    if (PokemonGender === -1) {
        setPokemonGenderInfo({ male: "Genderless", female: "Genderless" });
    } else if (PokemonGender === 0) {
        setPokemonGenderInfo({ male: "100% Male", female: "0% Famale" }); // Pokémon só tem machos
    } else if (PokemonGender === 8) {
        setPokemonGenderInfo({ male: "0% Male", female: "100% Famale" }); // Pokémon tem igual proporção de machos e fêmeas
    } else {
        const malePercentage = (PokemonGender / 8) * 100;
        const femalePercentage = 100 - malePercentage;
        setPokemonGenderInfo({
            male: malePercentage + "% Male",
            female: femalePercentage + "% Famale",
        });
    }
};

//ecupera o ID do pokemon
export const getPokemonId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
};

//Dividindo a URL para pegar o ID da Geração
export const getNumberGenerationOfUrl = (url) => {
    const splitedUrGeneration = url.split("/");
    return splitedUrGeneration[6];
};

//Extrair o ID da url varieties
export const getIdVerietieOfUrl = (
    urlVarietie,
    imgClass,
    setPokemonId,
    removeclassCss
) => {
    const splitedUrl = urlVarietie.split("/");
    setPokemonId(splitedUrl[6]);
    removeclassCss(imgClass);
};

//Verrificando o tamanho do NOME do Pokemon, se preciso o nome será dividio e mostrado só o primeiro nome.
export const splitNameVarieties = (name) => {
    let newName = "";

    if (name.length > 20) {
        let splitedName = name.split("-");
        newName = splitedName[0];
    } else {
        newName = name.replace(/-/g, " ");
    }
    return newName;
};

//Remove a classe de animação Animate CSS (varieties)
export const removeclassCss = (imgClass) => {
    let img = document.querySelector(imgClass);
    img.classList.remove("animate__fadeIn");
    img.classList.add("animate__fadeOut");
    img.classList.add("animate__fester");

    setTimeout(() => {
        addClassCss(imgClass);
    }, 300); // 3000 milissegundos = 3 segundos
};

// //Adiciona classe  de animação Animate CSS (varieties)
export const addClassCss = (imgClass, propsIMG) => {
    let img = document.querySelector(imgClass);

    if (img) {
        //Verificando e comparando a url da imagem atual com a que veio da props.
        if (img.src !== propsIMG) {
            img.classList.add("animate__fadeIn");
            img.classList.remove("animate__fadeOut");
        }
    }
};

//Recuperando os valores dos Stats em porcentagem com uma base máxima de 180. Conta usada regra de 3.
export const findValueStatsInPercentage = (value) => {
    let result = 0;

    if (value > 180) {
        result = 100;
    } else {
        result = (value * 100) / 180;
    }

    return result;
};

//Verificando o valor da Stats para definir a cor da barra.
export const getColorBar = (value) => {
    let barColor = "";

    if (value < 29) {
        barColor = "#e74c3c";
    }

    if (value > 29 && value < 60) {
        barColor = "#e67e22";
    }

    if (value > 59 && value < 90) {
        barColor = "#f1c40f";
    }

    if (value > 89 && value < 120) {
        barColor = "#a0e515";
    }

    if (value > 119 && value < 150) {
        barColor = "#23cd5e";
    }

    if (value > 149) {
        barColor = "#00c2b8";
    }

    return barColor;
};
