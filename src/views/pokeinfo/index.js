import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import PokeStats from "../../components/PokeStats";
import PokeImages from "../../components/PokeImages";
import PokeEvolutions from "../../components/PokeEvolutions";
import TypesStats from "../../components/TypesStats";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import {
    borderColorInfoPokemon,
    lightColorInfoPokemon,
    scrollUp,
    splitName,
    spriteAdapterOfficial,
    getGenresNameInEn,
    getDescriptionInEn,
    zeroLeft,
    getFriendshipClassification,
    calculateGenderRatio,
} from "../../utils/utils";

//Import Styles
import * as S from "./styles";

function PokeInfo() {
    //Função para pegar o conteúdo que veio via query na URL.
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    const query = useQuery();
    const id = query.get("id");
    const qtPokemons = query.get("qtPokemons");
    const [PokemonId, setPokemonId] = useState(id);
    const TotalPokemon = qtPokemons;
    const [PokeData, setPokeData] = useState({});
    const [PokeDataSpecies, setPokeDataSpecies] = useState({});
    const [PokeGeneration, setPokeGeneration] = useState({});
    const [FirstEvolution, setFirstEvolution] = useState([]);
    const [MiddleEvolution, setMiddleEvolution] = useState([]);
    const [LastEvolution, setLastEvolution] = useState([]);
    const [DataTypesStats, setDataTypesStats] = useState([]);
    const [RemoveLoading, setRemoveLoading] = useState(false);

    const [PokemonGender, setPokemonGender] = useState(0);
    const [PokemonGenderInfo, setPokemonGenderInfo] = useState({});

    // Variável responsável por guardar os dados recebidos do Pokemon.
    let infoPokemon = "";

    if (
        JSON.stringify(PokeData) !== "{}" &&
        JSON.stringify(PokeDataSpecies) !== "{}"
    ) {
        infoPokemon = {
            id: PokeData.id,
            img: spriteAdapterOfficial(PokeData.sprites),
            name: splitName(PokeData.name),
            regionName: PokeGeneration.main_region,
            types: PokeData.types,
            height: PokeData.height / 10,
            weight: PokeData.weight / 10,
            stats: PokeData.stats,
            abilities:
                PokeData.abilities === null
                    ? "Undefined"
                    : PokeData.abilities
                          .map((item) => " " + item.ability.name)
                          .toString(),
            xp:
                PokeData.base_experience === null
                    ? "Undefined"
                    : PokeData.base_experience,
            habitat:
                PokeDataSpecies.habitat === null
                    ? "Unfefined"
                    : PokeDataSpecies.habitat.name,
            description: getDescriptionInEn(
                PokeDataSpecies.flavor_text_entries
            ),
            genres: getGenresNameInEn(PokeDataSpecies.genera),
            gender: PokeDataSpecies.gender_rate,
            varieties: PokeDataSpecies.varieties,
            generation: PokeDataSpecies.generation,
            captureRate: PokeDataSpecies.capture_rate,
            growthRate: PokeDataSpecies.growth_rate.name,
            baseHappiness: PokeDataSpecies.base_happiness,
            egg_groups:
                PokeDataSpecies.egg_groups === null
                    ? "Undefined"
                    : PokeDataSpecies.egg_groups
                          .map((egg) => " " + egg.name)
                          .toString(),
            pokemonColor: PokeDataSpecies.color.name,
            hatchCounter: PokeDataSpecies.hatch_counter,
            pokemonCategory: {
                baby: PokeDataSpecies.is_baby,
                legendary: PokeDataSpecies.is_legendary,
                mythical: PokeDataSpecies.is_mythical,
            },
        };
    }

    //Enpoind - /pokemon/id
    useEffect(() => {
        //Buscando Informações do Pokemon com o ID recuperado do useParams.
        api.get(`/pokemon/${PokemonId}`).then((response) => {
            //Informações recuperadas do pokemon.
            let dataResults = response.data;

            //Enviando para objeto (infoPokemon).
            setPokeData(dataResults);

            //Buscando as Types Stats.
            let arrayTypes = [];
            async function getTypesStats() {
                let types = dataResults.types;

                //Laço para percorrer todos os tipos encontrados.
                for (let i = 0; i < types.length; i++) {
                    await api
                        .get("/type/" + types[i].type.name)
                        .then((response) => {
                            arrayTypes.push(response.data.damage_relations);
                        });
                }
                setDataTypesStats(arrayTypes);
            }
            getTypesStats();
        });
    }, [PokemonId]);

    //Endpoint - /pokemon-species/id
    useEffect(() => {
        if (qtPokemons && PokemonId <= Number(qtPokemons)) {
            //Buscando informações Pokemon(Species) com o ID recuperado do useParams.
            api.get(`/pokemon-species/${PokemonId}`).then((response) => {
                //Informações recuperadas do pokemon-species.
                let resultPokeDataSpecies = response.data;

                //Enviando o objeto (infoPokemon).
                setPokeDataSpecies(resultPokeDataSpecies);
                //Enviando o HP do Pokemon para realizar o calculo de captura pela primeira vez.
                setPokemonGender(response.data.gender_rate);

                //Função assíncrona auto-executável para pegar as informações da geração
                (async () => {
                    try {
                        const response = await fetch(
                            resultPokeDataSpecies.generation.url
                        );
                        const result = await response.json();
                        setPokeGeneration(result);
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    } finally {
                    }
                })();

                //Função responsável por tratar as Evoluções dos Pokemons.
                async function getEvolutions() {
                    let resultPokeEvolutions = "";

                    //Verificando se possui evolução.
                    if (resultPokeDataSpecies.evolution_chain != null) {
                        //Pegando ID da evolução.
                        const splitedUrl =
                            resultPokeDataSpecies.evolution_chain.url.split(
                                "/"
                            );
                        resultPokeEvolutions = await api.get(
                            `/evolution-chain/${splitedUrl[6]}`
                        );

                        //Array onde ficará todos Pokemons evoluídos.
                        const evoChain = [];

                        //Árvore de evoluções recuperada da API
                        const evolutions = resultPokeEvolutions.data.chain;

                        //Função resposável por acessar a árvore de evoluções recursivamente e guarda os Pokemons no Array (evoChain).
                        async function getEvo(evo, pokeOrigin) {
                            //Laço recursivo que recupera os pokemons evoluídos de dentro da árvore de evoluções.
                            for (let i = 0; i < evo.evolves_to.length; i++) {
                                if (
                                    evoChain.indexOf(
                                        evo.evolves_to[i].species.name
                                    ) === -1
                                ) {
                                    let idSplitedUrl =
                                        evo.evolves_to[i].species.url.split(
                                            "/"
                                        );

                                    await api
                                        .get(`/pokemon/${idSplitedUrl[6]}`)
                                        .then((response) => {
                                            evoChain.push({
                                                id: response.data.id,
                                                name: response.data.name,
                                                evoFrom: pokeOrigin,
                                                types: response.data.types,
                                                img: spriteAdapterOfficial(
                                                    response.data.sprites
                                                ),
                                                evolutionDetails:
                                                    evo.evolves_to[i]
                                                        .evolution_details[0],
                                                hasEvolution:
                                                    evo.evolves_to[i].evolves_to
                                                        .length > 0 && true,
                                            });
                                        });
                                }

                                getEvo(
                                    evo.evolves_to[i],
                                    evo.evolves_to[i].species.name
                                );
                            }

                            //Salvando os Pokemons evoluídos em uma nova variável para corrigir um alerta do React.
                            const newEvoChain = evoChain;

                            //Separando e salvando as evoluções em arrays distintos (esse procedimento facilitou na renderição).
                            const pokeMiddleEvolitions = [];
                            const pokeLastEvolutions = [];

                            //Laço para percorrer os Pokemons evoluídos.
                            for (let i = 0; i < newEvoChain.length; i++) {
                                //Verificando se o Pokemon evoluiu do Pokemon origem.
                                if (
                                    newEvoChain[i].evoFrom ===
                                    newEvoChain[0].name
                                ) {
                                    pokeMiddleEvolitions.push(newEvoChain[i]);
                                } else {
                                    //Verificando se o Pokemon evoluiu de outro Pokemon já evoluído.
                                    if (
                                        newEvoChain[i].name !==
                                        newEvoChain[0].name
                                    ) {
                                        pokeLastEvolutions.push(newEvoChain[i]);
                                    }
                                }
                            }

                            //Mandando as evoluções prontas para renderização.
                            setMiddleEvolution(pokeMiddleEvolitions);
                            setLastEvolution(pokeLastEvolutions);

                            setRemoveLoading(true);
                        }

                        //Verificando se o Pokemon possui evoluções.
                        if (
                            evolutions.evolves_to.length > 0 &&
                            evolutions.evolves_to[0].evolution_details.length >
                                0
                        ) {
                            //Extraindo o ID do Pokemon da url
                            let idSplitedUrlPokeOrigin =
                                resultPokeEvolutions.data.chain.species.url.split(
                                    "/"
                                );
                            //Buscando as informações do Pokemon origem (primeira evolução).
                            await api
                                .get(`/pokemon/${idSplitedUrlPokeOrigin[6]}`)
                                .then((response) => {
                                    let firstEvolutionPokemon = [];
                                    firstEvolutionPokemon.push({
                                        id: response.data.id,
                                        name: response.data.name,
                                        evoFrom: "",
                                        types: response.data.types,
                                        img: spriteAdapterOfficial(
                                            response.data.sprites
                                        ),
                                        hasEvolution: true,
                                    });
                                    setFirstEvolution(firstEvolutionPokemon);
                                });

                            //Colocando o nome do Pokemon orirem no array para fazer verificações posteriormente.
                            evoChain.push({
                                name: resultPokeEvolutions.data.chain.species
                                    .name,
                            });

                            //Função resposável por acessar a árvore de evoluções recursivamente e guardar os Pokemons no Array (evoChain).
                            getEvo(evolutions, evolutions.species.name);
                        } else {
                            //Ação quando não possui evoluções
                            //Variável que receberá o Pokemon sem evolução.
                            let newEvoChain = "";

                            //Extraindo o ID do Pokemon da url.
                            let idSplitedUrl =
                                resultPokeEvolutions.data.chain.species.url.split(
                                    "/"
                                );

                            //Buscando na API as informações do Pokemon e adicionando no array (newEvoChain).
                            await api
                                .get(`/pokemon/${idSplitedUrl[6]}`)
                                .then((response) => {
                                    newEvoChain = [{}];
                                    newEvoChain[0].name = response.data.name;
                                    newEvoChain[0].id = response.data.id;
                                    newEvoChain[0].types = response.data.types;
                                    newEvoChain[0].img = spriteAdapterOfficial(
                                        response.data.sprites
                                    );
                                    newEvoChain[0].evoFrom = "";
                                });

                            //Enviando Pokemon para renderização.
                            setFirstEvolution([newEvoChain[0]]);
                            setMiddleEvolution([]);
                            setLastEvolution([]);

                            setRemoveLoading(true);
                        }
                    } else {
                        //Ação quando não possui evoluções
                        //Variável que receberá o Pokemon sem evolução.
                        let newEvoChainNotEvolution = [{}];

                        //Buscando na API as informações do Pokemon e adicionando no array (newEvoChainNotEvolution).
                        await api
                            .get(`/pokemon/${PokemonId}`)
                            .then((response) => {
                                newEvoChainNotEvolution[0].name =
                                    response.data.name;
                                newEvoChainNotEvolution[0].id =
                                    response.data.id;
                                newEvoChainNotEvolution[0].types =
                                    response.data.types;
                                newEvoChainNotEvolution[0].img =
                                    spriteAdapterOfficial(
                                        response.data.sprites
                                    );
                                newEvoChainNotEvolution[0].evoFrom = "";
                            });

                        //Enviando Pokemon para renderização.
                        setFirstEvolution([newEvoChainNotEvolution[0]]);
                        setMiddleEvolution([]);
                        setLastEvolution([]);

                        setRemoveLoading(true);
                    }
                }

                //Função responsável por tratar as Evoluções dos Pokemons.
                getEvolutions();
            });
        }
    }, [PokemonId]);

    useEffect(() => {
        calculateGenderRatio(PokemonGender, setPokemonGenderInfo);
    }, [PokeData, PokeDataSpecies]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    //Colocando o nome do pokemon na aba do navegador
    const pokemonNameCapitalize = capitalizeFirstLetter(
        infoPokemon.name || "Detalhes do Pokémon"
    );

    useEffect(() => {
        document.title = pokemonNameCapitalize
            ? pokemonNameCapitalize
            : "Pokémon Details";
    }, [pokemonNameCapitalize]);
    //##################################################

    useEffect(() => {
        if (RemoveLoading) {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    // Pequeno delay para garantir que o conteúdo carregou
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 500);
            }
        }
    }, [RemoveLoading]);

    //#############################################################################

    return (
        <div>
            {!RemoveLoading && <Loading />}

            {RemoveLoading && (
                <S.Container>
                    {/*** Dashboard ***************************************/}
                    <div className="dashboard">
                        <div className="row row-img">
                            <div className="col">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <PokeImages
                                            id={infoPokemon.id}
                                            name={infoPokemon.name}
                                            img={infoPokemon.img}
                                            setPokemonId={setPokemonId}
                                            varieties={infoPokemon.varieties}
                                            setRemoveLoading={setRemoveLoading}
                                            TotalPokemons={qtPokemons}
                                            description={
                                                infoPokemon.description
                                            }
                                            gender={infoPokemon.gender}
                                            genres={infoPokemon.genres}
                                            types={infoPokemon.types}
                                            generation={
                                                infoPokemon.generation.url
                                            }
                                            pokemonColor={
                                                infoPokemon.pokemonColor
                                            }
                                            pokemonCategory={
                                                infoPokemon.pokemonCategory
                                            }
                                            regionName={infoPokemon.regionName}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-data">
                            <div className="col-sm-6 col-md-4 col-xl-2">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-fingerprint"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Species</h5>

                                        <h3>
                                            {infoPokemon.genres.split(" ")[0]}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-2">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-rulers"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Height</h5>

                                        <h3>{infoPokemon.height} M</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-2">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-box-fill"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Weight</h5>

                                        <h3>{infoPokemon.weight} Kg</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-2">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-image-alt"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Habitat</h5>

                                        <h3>{infoPokemon.habitat}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 col-xl-4">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-tornado"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Abilities</h5>

                                        <h3>{infoPokemon.abilities}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-stats-Effectiveness">
                            <div className="col-xl-12">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-bar-chart-steps"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <div className="div-stats">
                                            <h3 className="mb-1">Stats</h3>
                                            <span className="text-secondary">
                                                <span className="text-capitalize">
                                                    {infoPokemon.name}
                                                </span>{" "}
                                                base statistics
                                            </span>

                                            <div className="mt-4">
                                                <PokeStats
                                                    stats={infoPokemon.stats}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-trophy-fill"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <div className="div-effectiveness">
                                            <h3 className="mb-1">
                                                Effectiveness
                                            </h3>
                                            <span className="text-secondary">
                                                <span className="text-capitalize">
                                                    {infoPokemon.name}
                                                </span>{" "}
                                                combat effectiveness
                                            </span>

                                            <div className="mt-4">
                                                {DataTypesStats.length !== 0 &&
                                                    JSON.stringify(PokeData) !==
                                                        "{}" &&
                                                    JSON.stringify(
                                                        PokeDataSpecies
                                                    ) !== "{}" && (
                                                        <TypesStats
                                                            DataTypesStats={
                                                                DataTypesStats
                                                            }
                                                            pokemonTypes={
                                                                infoPokemon.types
                                                            }
                                                        />
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-training">
                            <div className="col-md-12">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-heart-half"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Base Friendship</h5>

                                        <div>
                                            {getFriendshipClassification(
                                                infoPokemon.baseHappiness
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-training-breeding">
                            <div className="col-sm-6 col-lg-3">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-journal-bookmark-fill"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Base Exp.</h5>

                                        <h3>{infoPokemon.xp}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-graph-up-arrow"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Growth Rate</h5>

                                        <h3>{infoPokemon.growthRate}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-6">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body text-capitalize">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-battery-half"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>EV Yield</h5>

                                        <div className="table-responsive">
                                            <table className="table table-sm table-ev-yield">
                                                <thead>
                                                    <tr className="table-light">
                                                        {infoPokemon.stats
                                                            .filter(
                                                                (stat) =>
                                                                    stat.effort >
                                                                    0
                                                            )
                                                            .map((stat) => (
                                                                <th
                                                                    scope="col"
                                                                    className="text-center"
                                                                    key={
                                                                        stat
                                                                            .stat
                                                                            .name
                                                                    }
                                                                >
                                                                    {
                                                                        stat
                                                                            .stat
                                                                            .name
                                                                    }
                                                                </th>
                                                            ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {infoPokemon.stats
                                                            .filter(
                                                                (stat) =>
                                                                    stat.effort >
                                                                    0
                                                            )
                                                            .map((stat) => (
                                                                <td
                                                                    className="text-center"
                                                                    key={
                                                                        stat
                                                                            .stat
                                                                            .name
                                                                    }
                                                                >
                                                                    <span className="badge text-bg-success">
                                                                        {
                                                                            stat.effort
                                                                        }
                                                                    </span>
                                                                </td>
                                                            ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                {" "}
                                <div
                                    className="card card-breeding"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-egg-fill me-2"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Egg Groups</h5>

                                        <h3>
                                            {infoPokemon.egg_groups &&
                                                infoPokemon.egg_groups}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {" "}
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                //className="bi bi-basket-fill"
                                                className="bi bi-person-walking"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5>Hatch Counter</h5>

                                        <h3>{infoPokemon.hatchCounter} </h3>
                                        <span>
                                            {" "}
                                            Approximately{" "}
                                            {Number(
                                                infoPokemon.hatchCounter * 256
                                            )}{" "}
                                            steps{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-6">
                                {" "}
                                <div
                                    className="card card-breeding"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-gender-ambiguous me-2"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <h5 className="mb-4">Gender</h5>

                                        <div className="div-gender">
                                            {PokemonGenderInfo.male ===
                                                "Genderless" &&
                                            PokemonGenderInfo.female ===
                                                "Genderless" ? (
                                                <h3>Genderless</h3>
                                            ) : (
                                                <>
                                                    <div className="gender-female">
                                                        <h5>
                                                            <i className="bi bi-gender-female me-2"></i>
                                                        </h5>

                                                        <p>
                                                            {
                                                                PokemonGenderInfo.female
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="gender-male">
                                                        <h5>
                                                            <i className="bi bi-gender-male me-2"></i>
                                                        </h5>
                                                        <p>
                                                            {
                                                                PokemonGenderInfo.male
                                                            }
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-evolutions">
                            <div className="col-xl-12">
                                <div
                                    className="card"
                                    style={{
                                        borderBottom: `5px solid ${borderColorInfoPokemon(
                                            infoPokemon.pokemonColor
                                        )}`,
                                    }}
                                >
                                    <div className="card-body">
                                        <div
                                            className="data-icon"
                                            style={{
                                                backgroundColor: `${lightColorInfoPokemon(
                                                    infoPokemon.pokemonColor
                                                )}`,
                                            }}
                                        >
                                            <i
                                                className="bi bi-columns-gap"
                                                style={{
                                                    color: `${borderColorInfoPokemon(
                                                        infoPokemon.pokemonColor
                                                    )}`,
                                                }}
                                            ></i>
                                        </div>

                                        <div className="div-title-evolution">
                                            <h3 className="mb-1">Evolutions</h3>
                                            <span className="text-secondary">
                                                Evolution of{" "}
                                                <span className="text-capitalize">
                                                    {infoPokemon.name}
                                                </span>
                                            </span>
                                        </div>

                                        <div className="div-evolutions">
                                            {MiddleEvolution.length === 0 && (
                                                <p className="text-does-not-evolve">
                                                    * This Pokémon does not
                                                    evolve.
                                                </p>
                                            )}

                                            <ul className="div-pokemon-evolutions">
                                                <li className="first-evolution">
                                                    {FirstEvolution.length >
                                                        0 &&
                                                        FirstEvolution.map(
                                                            (p) => (
                                                                <Link
                                                                    to={
                                                                        "/pokeinfo?id=" +
                                                                        query.get(
                                                                            "id"
                                                                        ) +
                                                                        "&offset=" +
                                                                        query.get(
                                                                            "offset"
                                                                        ) +
                                                                        "&limit=" +
                                                                        query.get(
                                                                            "limit"
                                                                        ) +
                                                                        "&type=" +
                                                                        query.get(
                                                                            "type"
                                                                        ) +
                                                                        "&color=" +
                                                                        query.get(
                                                                            "color"
                                                                        ) +
                                                                        "&qtPokemons=" +
                                                                        TotalPokemon
                                                                    }
                                                                    onClick={() => {
                                                                        setPokemonId(
                                                                            p.id
                                                                        );
                                                                        scrollUp();
                                                                    }}
                                                                    key={p.id}
                                                                >
                                                                    <PokeEvolutions
                                                                        name={
                                                                            p.name
                                                                        }
                                                                        id={
                                                                            p.id
                                                                        }
                                                                        img={
                                                                            p.img
                                                                        }
                                                                        types={
                                                                            p.types
                                                                        }
                                                                        key={
                                                                            p.id
                                                                        }
                                                                    />
                                                                </Link>
                                                            )
                                                        )}
                                                </li>
                                                {/*## Seta ##*/}
                                                {MiddleEvolution.length > 0 && (
                                                    <li className="li-evo-arrow">
                                                        <p>
                                                            <i className="bi bi-caret-right-fill arrow-right"></i>
                                                            <i className="bi bi-caret-down-fill arrow-bottom"></i>
                                                        </p>
                                                    </li>
                                                )}{" "}
                                                {MiddleEvolution.length > 0 &&
                                                    MiddleEvolution.length <
                                                        3 && (
                                                        <li>
                                                            {MiddleEvolution.map(
                                                                (p) => (
                                                                    <Link
                                                                        to={
                                                                            "/pokeinfo?id=" +
                                                                            query.get(
                                                                                "id"
                                                                            ) +
                                                                            "&offset=" +
                                                                            query.get(
                                                                                "offset"
                                                                            ) +
                                                                            "&limit=" +
                                                                            query.get(
                                                                                "limit"
                                                                            ) +
                                                                            "&type=" +
                                                                            query.get(
                                                                                "type"
                                                                            ) +
                                                                            "&color=" +
                                                                            query.get(
                                                                                "color"
                                                                            ) +
                                                                            "&qtPokemons=" +
                                                                            TotalPokemon
                                                                        }
                                                                        onClick={() => {
                                                                            setPokemonId(
                                                                                p.id
                                                                            );
                                                                            scrollUp();
                                                                        }}
                                                                        key={
                                                                            p.id
                                                                        }
                                                                    >
                                                                        <PokeEvolutions
                                                                            name={
                                                                                p.name
                                                                            }
                                                                            id={
                                                                                p.id
                                                                            }
                                                                            img={
                                                                                p.img
                                                                            }
                                                                            types={
                                                                                p.types
                                                                            }
                                                                            key={
                                                                                p.id
                                                                            }
                                                                        />
                                                                    </Link>
                                                                )
                                                            )}
                                                        </li>
                                                    )}
                                                {MiddleEvolution.length > 2 &&
                                                    LastEvolution.length <=
                                                        0 && (
                                                        <li className="middle-evolution">
                                                            {MiddleEvolution.map(
                                                                (p) => (
                                                                    <Link
                                                                        to={
                                                                            "/pokeinfo?id=" +
                                                                            query.get(
                                                                                "id"
                                                                            ) +
                                                                            "&offset=" +
                                                                            query.get(
                                                                                "offset"
                                                                            ) +
                                                                            "&limit=" +
                                                                            query.get(
                                                                                "limit"
                                                                            ) +
                                                                            "&type=" +
                                                                            query.get(
                                                                                "type"
                                                                            ) +
                                                                            "&color=" +
                                                                            query.get(
                                                                                "color"
                                                                            ) +
                                                                            "&qtPokemons=" +
                                                                            TotalPokemon
                                                                        }
                                                                        onClick={() => {
                                                                            setPokemonId(
                                                                                p.id
                                                                            );
                                                                            scrollUp();
                                                                        }}
                                                                        className="middle-evolution-link"
                                                                        key={
                                                                            p.id
                                                                        }
                                                                    >
                                                                        <PokeEvolutions
                                                                            name={
                                                                                p.name
                                                                            }
                                                                            id={
                                                                                p.id
                                                                            }
                                                                            img={
                                                                                p.img
                                                                            }
                                                                            types={
                                                                                p.types
                                                                            }
                                                                            key={
                                                                                p.id
                                                                            }
                                                                        />
                                                                    </Link>
                                                                )
                                                            )}
                                                        </li>
                                                    )}
                                                {MiddleEvolution.length > 2 &&
                                                    LastEvolution.length >
                                                        0 && (
                                                        <li>
                                                            {MiddleEvolution.map(
                                                                (p) => (
                                                                    <Link
                                                                        to={
                                                                            "/pokeinfo?id=" +
                                                                            query.get(
                                                                                "id"
                                                                            ) +
                                                                            "&offset=" +
                                                                            query.get(
                                                                                "offset"
                                                                            ) +
                                                                            "&limit=" +
                                                                            query.get(
                                                                                "limit"
                                                                            ) +
                                                                            "&type=" +
                                                                            query.get(
                                                                                "type"
                                                                            ) +
                                                                            "&color=" +
                                                                            query.get(
                                                                                "color"
                                                                            ) +
                                                                            "&qtPokemons=" +
                                                                            TotalPokemon
                                                                        }
                                                                        onClick={() => {
                                                                            setPokemonId(
                                                                                p.id
                                                                            );
                                                                            scrollUp();
                                                                        }}
                                                                        key={
                                                                            p.id
                                                                        }
                                                                    >
                                                                        <PokeEvolutions
                                                                            name={
                                                                                p.name
                                                                            }
                                                                            id={
                                                                                p.id
                                                                            }
                                                                            img={
                                                                                p.img
                                                                            }
                                                                            types={
                                                                                p.types
                                                                            }
                                                                            key={
                                                                                p.id
                                                                            }
                                                                        />
                                                                    </Link>
                                                                )
                                                            )}
                                                        </li>
                                                    )}
                                                {/*## Seta ##*/}
                                                {MiddleEvolution.length > 0 &&
                                                    LastEvolution.length >
                                                        0 && (
                                                        <li className="li-evo-arrow">
                                                            {MiddleEvolution.map(
                                                                (p) => {
                                                                    if (
                                                                        p.hasEvolution ===
                                                                        true
                                                                    ) {
                                                                        return (
                                                                            <p
                                                                                key={
                                                                                    p.id
                                                                                }
                                                                            >
                                                                                <i className="bi bi-caret-right-fill arrow-right"></i>
                                                                                <i className="bi bi-caret-down-fill arrow-bottom"></i>
                                                                            </p>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <p
                                                                                key={
                                                                                    p.id
                                                                                }
                                                                            ></p>
                                                                        );
                                                                    }
                                                                }
                                                            )}
                                                        </li>
                                                    )}
                                                {/*## Last Evolution ##*/}
                                                {MiddleEvolution.length > 0 &&
                                                    LastEvolution.length >
                                                        0 && (
                                                        <li className="last-evolution">
                                                            {MiddleEvolution.map(
                                                                (p) => {
                                                                    if (
                                                                        p.hasEvolution ===
                                                                        true
                                                                    ) {
                                                                        return LastEvolution.map(
                                                                            (
                                                                                l
                                                                            ) => {
                                                                                if (
                                                                                    p.name ===
                                                                                    l.evoFrom
                                                                                ) {
                                                                                    return (
                                                                                        <Link
                                                                                            to={
                                                                                                "/pokeinfo?id=" +
                                                                                                query.get(
                                                                                                    "id"
                                                                                                ) +
                                                                                                "&offset=" +
                                                                                                query.get(
                                                                                                    "offset"
                                                                                                ) +
                                                                                                "&limit=" +
                                                                                                query.get(
                                                                                                    "limit"
                                                                                                ) +
                                                                                                "&type=" +
                                                                                                query.get(
                                                                                                    "type"
                                                                                                ) +
                                                                                                "&color=" +
                                                                                                query.get(
                                                                                                    "color"
                                                                                                ) +
                                                                                                "&qtPokemons=" +
                                                                                                TotalPokemon
                                                                                            }
                                                                                            onClick={() => {
                                                                                                setPokemonId(
                                                                                                    l.id
                                                                                                );
                                                                                                scrollUp();
                                                                                            }}
                                                                                            key={
                                                                                                l.id
                                                                                            }
                                                                                        >
                                                                                            <PokeEvolutions
                                                                                                name={
                                                                                                    l.name
                                                                                                }
                                                                                                id={
                                                                                                    l.id
                                                                                                }
                                                                                                img={
                                                                                                    l.img
                                                                                                }
                                                                                                types={
                                                                                                    l.types
                                                                                                }
                                                                                                key={
                                                                                                    l.id
                                                                                                }
                                                                                            />
                                                                                        </Link>
                                                                                    );
                                                                                } else {
                                                                                    return null;
                                                                                }
                                                                            }
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <Link
                                                                                style={{
                                                                                    height: "336px",
                                                                                }}
                                                                                key={
                                                                                    p.id
                                                                                }
                                                                            ></Link>
                                                                        );
                                                                    }
                                                                }
                                                            )}
                                                        </li>
                                                    )}
                                            </ul>

                                            {FirstEvolution.length > 0 &&
                                                MiddleEvolution.length > 0 && (
                                                    <div
                                                        className=" p-3"
                                                        id="evoDetails"
                                                    >
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-evo-details">
                                                                <thead>
                                                                    <tr className="table-light">
                                                                        <th
                                                                            className=""
                                                                            scope="col"
                                                                        >
                                                                            #
                                                                        </th>
                                                                        <th scope="col">
                                                                            Name
                                                                        </th>
                                                                        <th scope="col">
                                                                            Stage
                                                                        </th>
                                                                        <th scope="col">
                                                                            Evolution_Method
                                                                        </th>
                                                                        <th
                                                                            scope="col"
                                                                            style={{
                                                                                minWidth:
                                                                                    "600px",
                                                                            }}
                                                                        >
                                                                            Details
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {FirstEvolution.length >
                                                                        0 &&
                                                                        FirstEvolution.map(
                                                                            (
                                                                                p
                                                                            ) => {
                                                                                return (
                                                                                    <tr
                                                                                        key={
                                                                                            p.id
                                                                                        }
                                                                                    >
                                                                                        <th scope="row">
                                                                                            {zeroLeft(
                                                                                                p.id
                                                                                            )}
                                                                                        </th>
                                                                                        <td className="text-capitalize">
                                                                                            {
                                                                                                p.name
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            1
                                                                                        </td>
                                                                                        <td>
                                                                                            -
                                                                                        </td>
                                                                                        <td>
                                                                                            -
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            }
                                                                        )}

                                                                    {MiddleEvolution.length >
                                                                        0 &&
                                                                        MiddleEvolution.map(
                                                                            (
                                                                                p,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <tr
                                                                                        key={
                                                                                            p.id
                                                                                        }
                                                                                    >
                                                                                        <th scope="row">
                                                                                            {zeroLeft(
                                                                                                p.id
                                                                                            )}
                                                                                        </th>
                                                                                        <td className="text-capitalize">
                                                                                            {
                                                                                                p.name
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            2
                                                                                        </td>

                                                                                        <td className="text-capitalize">
                                                                                            {p.evolutionDetails !==
                                                                                                undefined &&
                                                                                            p
                                                                                                .evolutionDetails
                                                                                                .trigger &&
                                                                                            p
                                                                                                .evolutionDetails
                                                                                                .trigger
                                                                                                .name
                                                                                                ? p
                                                                                                      .evolutionDetails
                                                                                                      .trigger
                                                                                                      .name
                                                                                                : "-"}
                                                                                        </td>

                                                                                        <td className="">
                                                                                            {p.evolutionDetails !==
                                                                                                undefined &&
                                                                                            Object.entries(
                                                                                                p.evolutionDetails
                                                                                            ).some(
                                                                                                ([
                                                                                                    key,
                                                                                                    value,
                                                                                                ]) =>
                                                                                                    key !==
                                                                                                        "trigger" &&
                                                                                                    value !==
                                                                                                        null &&
                                                                                                    value !==
                                                                                                        "" &&
                                                                                                    value !==
                                                                                                        false
                                                                                            )
                                                                                                ? Object.entries(
                                                                                                      p.evolutionDetails
                                                                                                  )
                                                                                                      .filter(
                                                                                                          ([
                                                                                                              key,
                                                                                                              value,
                                                                                                          ]) =>
                                                                                                              value !==
                                                                                                                  null &&
                                                                                                              value !==
                                                                                                                  false &&
                                                                                                              value !==
                                                                                                                  ""
                                                                                                      )
                                                                                                      .map(
                                                                                                          ([
                                                                                                              key,
                                                                                                              value,
                                                                                                          ]) => (
                                                                                                              <span
                                                                                                                  className="w-100"
                                                                                                                  key={
                                                                                                                      key
                                                                                                                  }
                                                                                                              >
                                                                                                                  {key !==
                                                                                                                      "trigger" &&
                                                                                                                      `${key} : `}
                                                                                                                  {key !==
                                                                                                                      "trigger" &&
                                                                                                                  typeof value ===
                                                                                                                      "object" &&
                                                                                                                  value !==
                                                                                                                      null &&
                                                                                                                  "name" in
                                                                                                                      value ? (
                                                                                                                      <span className="badge text-bg-warning me-3">
                                                                                                                          {value.name.toString()}
                                                                                                                      </span>
                                                                                                                  ) : key !==
                                                                                                                    "trigger" ? (
                                                                                                                      <span className="badge text-bg-warning me-3">
                                                                                                                          {value.toString()}
                                                                                                                      </span>
                                                                                                                  ) : (
                                                                                                                      ""
                                                                                                                  )}
                                                                                                              </span>
                                                                                                          )
                                                                                                      )
                                                                                                : "-"}
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            }
                                                                        )}

                                                                    {LastEvolution.length >
                                                                        0 &&
                                                                        LastEvolution.map(
                                                                            (
                                                                                p,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <tr
                                                                                        key={
                                                                                            p.id
                                                                                        }
                                                                                    >
                                                                                        <th scope="row">
                                                                                            {zeroLeft(
                                                                                                p.id
                                                                                            )}
                                                                                        </th>
                                                                                        <td className="text-capitalize">
                                                                                            {
                                                                                                p.name
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            3
                                                                                        </td>

                                                                                        <td className="text-capitalize">
                                                                                            {p.evolutionDetails !==
                                                                                                undefined &&
                                                                                            p
                                                                                                .evolutionDetails
                                                                                                .trigger &&
                                                                                            p
                                                                                                .evolutionDetails
                                                                                                .trigger
                                                                                                .name
                                                                                                ? p
                                                                                                      .evolutionDetails
                                                                                                      .trigger
                                                                                                      .name
                                                                                                : "-"}
                                                                                        </td>

                                                                                        <td className="">
                                                                                            {p.evolutionDetails !==
                                                                                                undefined &&
                                                                                            Object.entries(
                                                                                                p.evolutionDetails
                                                                                            ).some(
                                                                                                ([
                                                                                                    key,
                                                                                                    value,
                                                                                                ]) =>
                                                                                                    key !==
                                                                                                        "trigger" &&
                                                                                                    value !==
                                                                                                        null &&
                                                                                                    value !==
                                                                                                        "" &&
                                                                                                    value !==
                                                                                                        false
                                                                                            )
                                                                                                ? Object.entries(
                                                                                                      p.evolutionDetails
                                                                                                  )
                                                                                                      .filter(
                                                                                                          ([
                                                                                                              key,
                                                                                                              value,
                                                                                                          ]) =>
                                                                                                              value !==
                                                                                                                  null &&
                                                                                                              value !==
                                                                                                                  false &&
                                                                                                              value !==
                                                                                                                  ""
                                                                                                      )
                                                                                                      .map(
                                                                                                          ([
                                                                                                              key,
                                                                                                              value,
                                                                                                          ]) => (
                                                                                                              <span
                                                                                                                  key={
                                                                                                                      key
                                                                                                                  }
                                                                                                              >
                                                                                                                  {key !==
                                                                                                                      "trigger" &&
                                                                                                                      `${key} : `}
                                                                                                                  {key !==
                                                                                                                      "trigger" &&
                                                                                                                  typeof value ===
                                                                                                                      "object" &&
                                                                                                                  value !==
                                                                                                                      null &&
                                                                                                                  "name" in
                                                                                                                      value ? (
                                                                                                                      <span className="badge text-bg-danger me-3">
                                                                                                                          {value.name.toString()}
                                                                                                                      </span>
                                                                                                                  ) : key !==
                                                                                                                    "trigger" ? (
                                                                                                                      <span className="badge text-bg-danger me-3">
                                                                                                                          {value.toString()}
                                                                                                                      </span>
                                                                                                                  ) : (
                                                                                                                      ""
                                                                                                                  )}
                                                                                                              </span>
                                                                                                          )
                                                                                                      )
                                                                                                : "-"}
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            }
                                                                        )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*****************************************************/}
                </S.Container>
            )}
        </div>
    );
}

export default PokeInfo;
