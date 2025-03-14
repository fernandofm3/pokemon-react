import React, { useState, useEffect } from "react";
import Header from "../../components/Headder";
import Capture from "../../components/Capture";
import PokeTypes from "../../components/PokeTypes";
import { Link } from "react-router-dom";
import {
    gameColors,
    starterPokemons,
    getPokemonId,
    zeroLeft,
    spriteAdapterOfficial,
    difficultyStyles,
} from "../../utils/utils.js";
import * as S from "./styles";

const PokemonCapture = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [bestNatures, setBestNatures] = useState([]);
    const [totalPokemons, setTotalPokemons] = useState(1025);
    const [pokemonSpeciesInfo, setPokemonSpeciesInfo] = useState(null); // Estado para as informações da espécie
    const [pokemonLocations, setPokemonLocations] = useState([]); // Estado para os locais de encontro
    const [pokemonMaxEncounterChance, setPokemonMaxEncounterChance] =
        useState(null); // Estado para os locais de encontro

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
                                    // Atualiza a menor chance
                                    if (
                                        minChance === null ||
                                        encounterDetail.chance < minChance
                                    ) {
                                        minChance = encounterDetail.chance;
                                    }

                                    // Captura as informações:
                                    const method =
                                        encounterDetail.method.name.replace(
                                            /-/g,
                                            " "
                                        );
                                    const conditionLevel =
                                        encounterDetail.min_level ?? "Unknown";
                                    // Concatena os nomes dos condition_values, se houver
                                    const conditionValues =
                                        encounterDetail.condition_values
                                            .map((cv) =>
                                                cv.name.replace(/-/g, " ")
                                            )
                                            .join(", ") || "None";

                                    // Agrupa as localizações por jogo
                                    if (!groupedLocations[game]) {
                                        groupedLocations[game] = [];
                                    }

                                    // Procura se já existe a localização no grupo
                                    let existingLocation = groupedLocations[
                                        game
                                    ].find((loc) => loc.name === location);

                                    if (!existingLocation) {
                                        existingLocation = {
                                            name: location,
                                            methods: [], // Array para armazenar métodos e condições
                                        };
                                        groupedLocations[game].push(
                                            existingLocation
                                        );
                                    }

                                    // Adiciona as informações do método de encontro para essa localização,
                                    // mas evita inserir duplicatas
                                    const methodEntry = {
                                        name: method,
                                        level: conditionLevel,
                                        conditions: conditionValues,
                                    };

                                    const isDuplicate =
                                        existingLocation.methods.some(
                                            (m) =>
                                                m.name === methodEntry.name &&
                                                m.level === methodEntry.level &&
                                                m.conditions ===
                                                    methodEntry.conditions
                                        );

                                    if (!isDuplicate) {
                                        existingLocation.methods.push(
                                            methodEntry
                                        );
                                    }
                                }
                            );
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

    return (
        <S.PokemonCapture>
            <Header
                SearchNameApi={"POKEMON CAPTURE"}
                page={"poke-capture"}
                position={""}
            />
            <div
                className="container-fluid div-capture-main"
                style={{ marginTop: "120px" }}
            >
                <div className="row">
                    <div
                        className="col-xl-3 col-xxl-2 pe-1 ps-3 pt-0"
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

                    <div className="col-xl-9 col-xxl-10">
                        {selectedPokemon ? (
                            <div
                                className="card p-5"
                                style={{
                                    height: "calc(100vh - 140px)",
                                    overflowY: "auto",
                                }}
                            >
                                <div className="row">
                                    <div className="col-3">
                                        <div className="d-flex flex-column justify-content-center align-items-center w-100 sticky-top">
                                            <div className="mb-0">
                                                <h1 className="p-0 m-0">
                                                    <span className="text-uppercase">
                                                        {
                                                            pokemonSpeciesInfo?.name
                                                        }
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

                                    <div className="col-9">
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
                                                                }&qtPokemons=${1024}#evoDetails`,
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
                                                                    <th
                                                                        style={{
                                                                            width: "160px",
                                                                        }}
                                                                    >
                                                                        Game
                                                                    </th>
                                                                    <th
                                                                        style={{
                                                                            width: "200px",
                                                                        }}
                                                                    >
                                                                        Location
                                                                    </th>
                                                                    <th
                                                                        style={{
                                                                            width: "250px",
                                                                        }}
                                                                    >
                                                                        Method
                                                                    </th>
                                                                    <th>
                                                                        Min_Level
                                                                    </th>
                                                                    <th
                                                                        style={{
                                                                            width: "160px",
                                                                        }}
                                                                    >
                                                                        Conditions
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
                                                                    ) =>
                                                                        // Para cada jogo, iteramos pelas localizações
                                                                        locations.map(
                                                                            (
                                                                                location,
                                                                                locIndex
                                                                            ) => (
                                                                                <tr
                                                                                    key={`${index}-${locIndex}`}
                                                                                >
                                                                                    {/* Exibe o nome do jogo apenas na primeira linha deste grupo */}
                                                                                    {locIndex ===
                                                                                        0 && (
                                                                                        <td
                                                                                            rowSpan={
                                                                                                locations.length
                                                                                            }
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
                                                                                    )}
                                                                                    <td className="text-uppercase">
                                                                                        {
                                                                                            location.name
                                                                                        }
                                                                                    </td>
                                                                                    <td>
                                                                                        <ul
                                                                                            className="m-0 p-0"
                                                                                            style={{
                                                                                                listStyleType:
                                                                                                    "none",
                                                                                            }}
                                                                                        >
                                                                                            {location.methods.map(
                                                                                                (
                                                                                                    method,
                                                                                                    methodIndex
                                                                                                ) => (
                                                                                                    <li
                                                                                                        className="text-uppercase"
                                                                                                        key={
                                                                                                            methodIndex
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            method.name
                                                                                                        }
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </td>
                                                                                    <td>
                                                                                        <ul
                                                                                            className="m-0 p-0"
                                                                                            style={{
                                                                                                listStyleType:
                                                                                                    "none",
                                                                                            }}
                                                                                        >
                                                                                            {location.methods.map(
                                                                                                (
                                                                                                    method,
                                                                                                    methodIndex
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={
                                                                                                            methodIndex
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            method.level
                                                                                                        }
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </td>
                                                                                    <td>
                                                                                        <ul
                                                                                            className="m-0 p-0 text-uppercase"
                                                                                            style={{
                                                                                                listStyleType:
                                                                                                    "none",
                                                                                            }}
                                                                                        >
                                                                                            {location.methods.map(
                                                                                                (
                                                                                                    method,
                                                                                                    methodIndex
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={
                                                                                                            methodIndex
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            method.conditions
                                                                                                        }
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>
                                                                            )
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

            <div className="p-3 pt-0">
                <div
                    className="alert alert-warning unsupported-resolution"
                    role="alert"
                    style={{ marginTop: "120px" }}
                >
                    <i className="bi bi-exclamation-square-fill ms-1"></i>{" "}
                    Resolution not supported!{" "}
                    <Link to={"/"} className="ms-2">
                        Return to Home
                    </Link>
                </div>
            </div>
        </S.PokemonCapture>
    );
};

export default PokemonCapture;
