import React, { useState, useEffect } from "react";
import Header from "../../components/Headder";
import Capture from "../../components/Capture";
import PokeTypes from "../../components/PokeTypes";
import { Link } from "react-router-dom";
import _get from "lodash/get";
import * as S from "./styles";

const PokemonCapture = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [bestNatures, setBestNatures] = useState([]);
    const [totalPokemons, setTotalPokemons] = useState(1025);
    //const [difficultyCapture, setDifficultydifficulty] = useState("");
    const [pokemonSpeciesInfo, setPokemonSpeciesInfo] = useState(null); // Estado para as informações da espécie
    const [pokemonLocations, setPokemonLocations] = useState([]); // Estado para os locais de encontro
    const [pokemonMaxEncounterChance, setPokemonMaxEncounterChance] =
        useState(null); // Estado para os locais de encontro

    const starterPokemons = [
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
    const difficultyStyles = {
        "Very Easy": { className: "", color: "#27ae60" },
        Easy: { className: "", color: "#16a085" },
        Normal: { className: "", color: "#95a5a6" },
        Hard: { className: "", color: " #e74c3c" },
        "Very Hard": { className: "", color: "#c0392b" },
    };

    const gameColors = {
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

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1")
            .then((res) => res.json())
            .then((data) => {
                setTotalPokemons(data.count);
            })
            .catch(() => {
                setTotalPokemons(1025);
            });
    }, []);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemons}`)
            .then((res) => res.json())
            .then((data) => setPokemonList(data.results));
    }, [totalPokemons]);

    const handleSelectPokemon = (pokemon) => {
        fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => {
                setSelectedPokemon(data);
                fetchSpeciesData(data.species.url); // Buscar informações da espécie
                fetchNatures(data.stats);
                fetchLocationAreaEncounters(data.location_area_encounters); // Buscar locais de encontro
                //setDifficultydifficulty(calculateCaptureDifficulty());
            });
    };

    const fetchSpeciesData = (speciesUrl) => {
        fetch(speciesUrl)
            .then((res) => res.json())
            .then((data) => {
                setPokemonSpeciesInfo(data);
            })
            .catch(() => {
                setPokemonSpeciesInfo(null); // Caso haja erro ao buscar dados da espécie
            });
    };

    const fetchLocationAreaEncounters = (locationLink) => {
        fetch(locationLink)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    let minChance = null; // Começamos com null para evitar falso 100%

                    const groupedLocations = {};

                    data.forEach((encounter) => {
                        encounter.version_details.forEach((version) => {
                            const game = version.version.name;
                            const location =
                                encounter.location_area.name.replace(/-/g, " ");

                            version.encounter_details.forEach(
                                (encounterDetail) => {
                                    if (
                                        minChance === null ||
                                        encounterDetail.chance < minChance
                                    ) {
                                        minChance = encounterDetail.chance;
                                    }
                                }
                            );

                            if (!groupedLocations[game]) {
                                groupedLocations[game] = [];
                            }

                            if (!groupedLocations[game].includes(location)) {
                                groupedLocations[game].push(location);
                            }
                        });
                    });

                    const formattedLocations = Object.entries(
                        groupedLocations
                    ).map(([game, locations]) => ({
                        game,
                        locations,
                    }));

                    setPokemonLocations(formattedLocations);
                    setPokemonMaxEncounterChance(minChance ?? 100); // Se for null, assume 100
                } else {
                    setPokemonLocations([]);
                    setPokemonMaxEncounterChance(null);
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar locais de encontro:", error);
                setPokemonLocations([]);
                setPokemonMaxEncounterChance(null);
            });
    };

    // Função para obter a cor de fundo do card
    const getGameColor = (game) => {
        if (game === "ultra-sun") {
            return gameColors["ultrasun"];
        }

        if (game === "ultra-moon") {
            return gameColors["ultramoon"];
        }

        if (game === "black-2") {
            return gameColors["black2"];
        }

        if (game === "white-2") {
            return gameColors["white2"];
        }

        if (game === "alpha-sapphire") {
            return gameColors["alphaSapphire"];
        }
        if (game === "omega-ruby") {
            return gameColors["omegaRuby"];
        }

        return gameColors[game.toLowerCase()] || "#616161"; // Cinza escuro padrão
    };

    const fetchNatures = (stats) => {
        fetch("https://pokeapi.co/api/v2/nature")
            .then((res) => res.json())
            .then((data) => {
                const naturePromises = data.results.map((nature) =>
                    fetch(nature.url).then((res) => res.json())
                );
                Promise.all(naturePromises).then((natures) => {
                    determineBestNatures(stats, natures);
                });
            });
    };

    const determineBestNatures = (stats, natures) => {
        const sortedStats = stats
            .map((s) => ({ name: s.stat.name, value: s.base_stat }))
            .sort((a, b) => b.value - a.value);

        const highestStat = sortedStats[0].name;
        const lowestStat = sortedStats[sortedStats.length - 1].name;

        const matchingNatures = natures.filter(
            (nature) =>
                nature.increased_stat?.name === highestStat &&
                nature.decreased_stat?.name === lowestStat
        );

        setBestNatures(
            matchingNatures.length > 0
                ? matchingNatures.map((nature) => ({
                      name: nature.name,
                      likes_flavor: nature.likes_flavor?.name || "Nenhum",
                      hates_flavor: nature.hates_flavor?.name || "Nenhum",
                  }))
                : [
                      {
                          name: "Neutro",
                          likes_flavor: "Nenhum",
                          hates_flavor: "Nenhum",
                      },
                  ]
        );
    };

    const calculateCaptureDifficulty = () => {
        if (starterPokemons.includes(selectedPokemon?.name.toLowerCase())) {
            return "Starter Pokémon";
        }

        if (!pokemonLocations || pokemonLocations.length === 0) {
            return null;
        }

        const captureRate = pokemonSpeciesInfo?.capture_rate || 255;
        const isLegendary = pokemonSpeciesInfo?.is_legendary || false;
        const isMythical = pokemonSpeciesInfo?.is_mythical || false;
        const baseHP = selectedPokemon?.stats[0].base_stat || 50;
        const maxEncounterChance = pokemonMaxEncounterChance || 100;

        let score = 0;

        // Lendários e míticos aumentam muito a dificuldade
        if (isLegendary || isMythical) score += 40;

        // Ajustando a penalização do Capture Rate para suavizar a curva
        score += (255 - captureRate) / 9; // Em vez de /5, agora /10 para reduzir impacto

        // Vida afeta um pouco a dificuldade

        score += baseHP > 150 ? 15 : baseHP > 90 ? 10 : 0;

        // Encontro raro tem impacto menor
        if (maxEncounterChance < 10) score += 10;
        else if (maxEncounterChance < 30) score += 5;
        else if (maxEncounterChance < 50) score += 2;

        console.log(
            "Chance: " + maxEncounterChance + " - Total Score:" + score
        );

        // Ajustando as faixas de dificuldade
        if (score >= 50) return "Very Hard";
        if (score >= 35) return "Hard";
        if (score >= 25) return "Normal";
        if (score >= 15) return "Easy";

        return "Very Easy";
    };

    const getPokemonId = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };

    function spriteAdapterOfficial(spriteOfficial) {
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
    }

    function zeroLeft(pokeId) {
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
    }

    return (
        <S.PokemonCapture>
            <Header
                SearchNameApi={"POKEMON CAPTURE"}
                page={"poke-capture"}
                position={""}
            />
            <div className="container-fluid" style={{ marginTop: "120px" }}>
                <div className="row">
                    <div
                        className="col-md-3 pe-1 ps-3 pt-0"
                        style={{
                            height: "calc(100vh - 140px)",
                            overflowY: "auto",
                        }}
                    >
                        <div className="sticky-top pt-1 bg-white">
                            <input
                                type="text"
                                className="form-control mb-2 border border-primary border-2"
                                placeholder="Search Pokemon..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <ul className="list-group">
                            {pokemonList
                                .filter((p) =>
                                    p.name.includes(searchTerm.toLowerCase())
                                )
                                .map((pokemon) => (
                                    <li
                                        key={pokemon.name}
                                        className="list-group-item list-group-item-action d-flex align-items-center"
                                        onClick={() =>
                                            handleSelectPokemon(pokemon)
                                        }
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                                                pokemon.url
                                            )}.png`}
                                            alt={pokemon.name}
                                            className="me-2"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                        />
                                        <span className="text-capitalize">
                                            {pokemon.name}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {selectedPokemon ? (
                            <div
                                className="card p-5"
                                style={{
                                    height: "calc(100vh - 140px)",
                                    overflowY: "auto",
                                }}
                            >
                                <div className="row">
                                    <div className="col-4 ">
                                        <div className="d-flex flex-column justify-content-center align-items-center w-100 sticky-top">
                                            <div className="mb-0">
                                                <h1 className="p-0 m-0">
                                                    <span className="text-uppercase">
                                                        {selectedPokemon.name}
                                                    </span>
                                                </h1>
                                                <h4 className="text-secondary text-center">
                                                    #
                                                    {zeroLeft(
                                                        selectedPokemon.id
                                                    )}{" "}
                                                </h4>
                                            </div>

                                            <div className="mb-5">
                                                {pokemonSpeciesInfo &&
                                                pokemonSpeciesInfo?.is_baby ===
                                                    true ? (
                                                    <div
                                                        className="div-title-category-pokemon"
                                                        style={{
                                                            background:
                                                                "linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)",
                                                        }}
                                                    >
                                                        <h4>Baby</h4>
                                                    </div>
                                                ) : pokemonSpeciesInfo?.is_legendary ===
                                                  true ? (
                                                    <div
                                                        className="div-title-category-pokemon"
                                                        style={{
                                                            background:
                                                                "radial-gradient(circle at 10% 20%, rgb(228, 118, 0) 0%, rgb(247, 189, 2) 90%)",
                                                        }}
                                                    >
                                                        <h4>Legendary</h4>
                                                    </div>
                                                ) : pokemonSpeciesInfo?.is_mythical ===
                                                  true ? (
                                                    <div
                                                        className="div-title-category-pokemon"
                                                        style={{
                                                            background:
                                                                "linear-gradient(109.8deg, rgb(62, 5, 116) -5.2%, rgb(41, 14, 151) -5.2%, rgb(216, 68, 148) 103.3%)",
                                                        }}
                                                    >
                                                        <h4>Mythical</h4>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>

                                            <img
                                                src={spriteAdapterOfficial(
                                                    selectedPokemon.sprites
                                                )}
                                                alt={selectedPokemon.name}
                                                className="img-fluid mb-5"
                                                style={{ width: "200px" }}
                                            />

                                            <div className="mb-4">
                                                <PokeTypes
                                                    types={
                                                        selectedPokemon.types
                                                    }
                                                    pokeId={selectedPokemon.id}
                                                />
                                            </div>

                                            <Link
                                                type="button"
                                                className="btn btn-primary w-75"
                                                to="#"
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    const width = 1200;
                                                    const height = 700;

                                                    // Calcula o centro da tela
                                                    const left =
                                                        (window.screen.width -
                                                            width) /
                                                        2;
                                                    const top =
                                                        (window.screen.height -
                                                            height) /
                                                        2;

                                                    window.open(
                                                        `/pokeinfo?id=${
                                                            selectedPokemon.id
                                                        }&qtPokemons=${1024}`,
                                                        "_blank",
                                                        `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
                                                    );
                                                }}
                                            >
                                                <b>
                                                    <i className="bi bi-search me-2"></i>{" "}
                                                    Details
                                                </b>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-8">
                                        <div className="mb-4">
                                            {calculateCaptureDifficulty() ? (
                                                (() => {
                                                    const difficulty =
                                                        calculateCaptureDifficulty();
                                                    const style =
                                                        difficultyStyles[
                                                            difficulty
                                                        ];

                                                    return style ? (
                                                        <div
                                                            className={`${style.className} text-white p-3 rounded`}
                                                            style={{
                                                                backgroundColor:
                                                                    style.color,
                                                            }}
                                                        >
                                                            <span className="fs-5 text-uppercase">
                                                                Capture
                                                                Difficulty -{" "}
                                                            </span>
                                                            <span className="fs-5 text-uppercase">
                                                                <b>
                                                                    {difficulty}
                                                                </b>
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="text-white p-3 rounded"
                                                            style={{
                                                                backgroundColor:
                                                                    "#27ae60",
                                                            }}
                                                        >
                                                            <span className="fs-5 text-uppercase">
                                                                Capture
                                                                Difficulty -{" "}
                                                            </span>
                                                            <span className="fs-5 text-uppercase">
                                                                <b>
                                                                    {difficulty}
                                                                </b>
                                                            </span>
                                                        </div>
                                                    );
                                                })()
                                            ) : (
                                                <div
                                                    className="alert alert-primary"
                                                    role="alert"
                                                >
                                                    <i className="bi bi-info-circle me-1"></i>{" "}
                                                    CAPTURE DIFFICULTY -{" "}
                                                    <b>UNAVAILABLE</b> (Only via
                                                    Trade, Evolution, Item, or
                                                    migrate from another game).
                                                    <br />
                                                    <Link
                                                        type="button"
                                                        className="link-opacity-75 ms-4"
                                                        to="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();

                                                            const width = 1200;
                                                            const height = 700;

                                                            // Calcula o centro da tela
                                                            const left =
                                                                (window.screen
                                                                    .width -
                                                                    width) /
                                                                2;
                                                            const top =
                                                                (window.screen
                                                                    .height -
                                                                    height) /
                                                                2;

                                                            window.open(
                                                                `/pokeinfo?id=${
                                                                    selectedPokemon.id
                                                                }&qtPokemons=${1024}`,
                                                                "_blank",
                                                                `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
                                                            );
                                                        }}
                                                    >
                                                        Find out more
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="p-3 text-dark bg-dark-subtle rounded">
                                                        Habitat <br />
                                                        <span className="fs-5 text-capitalize">
                                                            <b>
                                                                {pokemonSpeciesInfo
                                                                    ?.habitat
                                                                    ?.name ||
                                                                    "Unknown"}
                                                            </b>
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="col-4">
                                                    <p className="p-3 text-dark bg-dark-subtle rounded">
                                                        Catch Rate <br />
                                                        <span className="fs-5">
                                                            <b>
                                                                {pokemonSpeciesInfo?.capture_rate ||
                                                                    "Unknown"}
                                                            </b>
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="col-4">
                                                    <p className="p-3 text-dark bg-dark-subtle rounded">
                                                        Growth Rate <br />
                                                        <span className="fs-5 text-capitalize">
                                                            <b>
                                                                {pokemonSpeciesInfo
                                                                    ?.growth_rate
                                                                    ?.name ||
                                                                    "Unknown"}
                                                            </b>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <Capture
                                                captureRate={
                                                    pokemonSpeciesInfo?.capture_rate
                                                }
                                                infoStats={
                                                    selectedPokemon.stats
                                                }
                                            />
                                        </div>

                                        <div className="mt-4">
                                            {pokemonLocations.length > 0 ? (
                                                <div>
                                                    <h3 className="mb-4 text-dark">
                                                        <i className="bi bi-geo-alt-fill me-1"></i>{" "}
                                                        Capture location
                                                    </h3>
                                                    <div className="table-responsive">
                                                        <table className="table table-striped table-bordered border-black">
                                                            <thead className="text-center">
                                                                <tr>
                                                                    <th>
                                                                        Game
                                                                    </th>
                                                                    <th>
                                                                        Location
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {pokemonLocations.map(
                                                                    (
                                                                        {
                                                                            game,
                                                                            locations,
                                                                        },
                                                                        index
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <td
                                                                                className="text-white fw-bold text-uppercase text-center"
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        getGameColor(
                                                                                            game
                                                                                        ),
                                                                                    textShadow:
                                                                                        "1px 1px 2px black",
                                                                                }}
                                                                            >
                                                                                {
                                                                                    game
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {locations.length >
                                                                                0 ? (
                                                                                    <ul
                                                                                        className="m-0 p-0"
                                                                                        style={{
                                                                                            listStyleType:
                                                                                                "none",
                                                                                        }}
                                                                                    >
                                                                                        {locations.map(
                                                                                            (
                                                                                                location,
                                                                                                locIndex
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        locIndex
                                                                                                    }
                                                                                                    className="text-uppercase"
                                                                                                >
                                                                                                    {location.replace(
                                                                                                        /-/g,
                                                                                                        " "
                                                                                                    )}
                                                                                                </li>
                                                                                            )
                                                                                        )}
                                                                                    </ul>
                                                                                ) : (
                                                                                    <span className="text-muted">
                                                                                        No
                                                                                        location
                                                                                        available
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <h3 className="mb-4 text-dark">
                                                        <i className="bi bi-geo-alt-fill me-1"></i>{" "}
                                                        Capture location
                                                    </h3>

                                                    <div
                                                        className="alert alert-primary"
                                                        role="alert"
                                                    >
                                                        <i className="bi bi-ban me-1"></i>{" "}
                                                        No location available.
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="alert alert-primary" role="alert">
                                <i className="bi bi-info-circle me-1"></i>{" "}
                                Select a Pokémon to view its capture details.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </S.PokemonCapture>
    );
};

export default PokemonCapture;
