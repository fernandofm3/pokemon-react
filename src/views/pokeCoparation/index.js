import Header from "../../components/Headder";
import PokeStats from "../../components/PokeStats";
import TypesStats from "../../components/TypesStats";
import PokeTypes from "../../components/PokeTypes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./styles";

export default function PokemonComparator() {
    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [totalPokemons, setTotalPokemons] = useState(1025); // Valor padrão

    useEffect(() => {
        // Obtém o número total de Pokémons na API
        fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1")
            .then((res) => res.json())
            .then((data) => {
                setTotalPokemons(data.count + 1); // Define o total de Pokémons dinamicamente
            })
            .catch(() => {
                setTotalPokemons(1025); // Valor padrão caso ocorra um erro
            });
    }, []);

    useEffect(() => {
        if (search.length > 1) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemons}`)
                .then((res) => res.json())
                .then((data) => {
                    const filtered = data.results
                        .filter((p) => p.name.includes(search.toLowerCase()))
                        .map((p) => {
                            const id = p.url.split("/")[6];
                            return {
                                name: p.name,
                                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                            };
                        });
                    setSuggestions(filtered);
                });
        } else {
            setSuggestions([]);
        }
    }, [search, totalPokemons]);

    const fetchPokemon = async (name) => {
        if (!name) return;

        try {
            const responseP = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
            );

            const responseS = await fetch(
                `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`
            );

            if (!responseP.ok || !responseS.ok) {
                alert("Pokémon não encontrado!");
                return;
            }

            const dataP = await responseP.json();
            const dataS = await responseS.json();

            let arrayTypes = [];
            async function getTypesStats() {
                for (let type of dataP.types) {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/type/${type.type.name}`
                    );
                    const dataType = await response.json();

                    if (dataType.damage_relations) {
                        arrayTypes.push(dataType.damage_relations);
                    } else {
                        console.warn(
                            `damage_relations não encontrado para o tipo: ${type.type.name}`
                        );
                    }
                }
            }

            await getTypesStats();

            const newPokemonData = {
                id: dataP.id,
                name: dataP.name,
                sprites: dataP.sprites,
                types: dataP.types,
                height: dataP.height / 10,
                weight: dataP.weight / 10,
                base_experience: dataP.base_experience,
                abilities: dataP.abilities,
                stats: dataP.stats,
                typesStats: arrayTypes,
                catch_rate: dataS.capture_rate, // Adicionando taxa de captura
                base_friendship: dataS.base_happiness, // Adicionando amizade base
            };

            setPokemons((prev) => [...prev, newPokemonData]);
            setSearch("");
            setSuggestions([]);
        } catch (error) {
            console.error("Erro ao buscar Pokémon:", error);
        }
    };

    //Adicionando zero a esqueda no númeoro do Pokemon.
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

    const removePokemon = (name) => {
        setPokemons((prev) => prev.filter((p) => p.name !== name));
    };

    return (
        <S.Container>
            <Header
                SearchNameApi={"COMPARE POKEMON"}
                page={"poke-comparation"}
                position={"no-fixed"}
            />

            <div
                className="container-fluid p-3 pt-0"
                style={{ marginTop: "20px" }}
            >
                <div className="position-relative mb-4">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Enter the name of the pokemon"
                        className="form-control border-2 border-primary"
                    />
                    {suggestions.length > 0 && (
                        <ul
                            className="list-group position-absolute w-100 mt-1 z-3 bg-white border overflow-auto"
                            style={{ maxHeight: "600px" }}
                        >
                            {suggestions.map((pokemon) => (
                                <li
                                    key={pokemon.name}
                                    className="list-group-item list-group-item-action d-flex align-items-center"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => fetchPokemon(pokemon.name)}
                                >
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        width="50"
                                        height="50"
                                        className="me-2"
                                    />
                                    {pokemon.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-4 justify-content-center">
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon) => (
                            <div key={pokemon.id} className="col">
                                <div className="card p-3 position-relative shadow">
                                    <button
                                        onClick={() =>
                                            removePokemon(pokemon.name)
                                        }
                                        className="btn-close position-absolute top-0 end-0 m-2 z-2"
                                        aria-label="Remover"
                                    ></button>

                                    <div className="d-flex flex-column justify-content-center align-items-center w-100 sticky-top z-1 bg-white pt-2">
                                        <img
                                            src={pokemon.sprites.front_default}
                                            alt={pokemon.name}
                                            className="bg-white border border-secondary rounded rounded-circle mb-3"
                                            style={{
                                                width: "96px",
                                                height: "96px",
                                            }}
                                        />
                                        <h4 className="card-title text-capitalize text-center mb-0">
                                            {pokemon.name}
                                        </h4>
                                        <p className="text-secondary mb-3 text-center m-0">
                                            #{zeroLeft(pokemon.id)}
                                        </p>

                                        <PokeTypes
                                            types={pokemon.types}
                                            pokeId={pokemon.id}
                                        />
                                    </div>

                                    <div className="card-body">
                                        {/* <div className="mb-4 poke-type-comparation">
                                            <PokeTypes
                                                types={pokemon.types}
                                                pokeId={pokemon.id}
                                            />
                                        </div> */}

                                        <div className="row">
                                            <div className="col-6">
                                                <p className="p-3 text-secondary border border-black border-1 rounded">
                                                    Height <br />
                                                    <span className="fs-6">
                                                        <b>
                                                            {pokemon.height} M
                                                        </b>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <p className="p-3 text-secondary border border-black border-1 rounded">
                                                    Weight <br />
                                                    <span className="fs-6">
                                                        <b>
                                                            {pokemon.weight} Kg
                                                        </b>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-5">
                                                <p className="p-3 text-secondary border border-warning border-1 rounded">
                                                    Base Exp <br />
                                                    <span className="fs-6">
                                                        <b>
                                                            {
                                                                pokemon.base_experience
                                                            }
                                                        </b>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-7">
                                                <p className="p-3 text-secondary border border-success border-1 rounded w-100">
                                                    Base Friendship <br />
                                                    <span className="fs-6">
                                                        <b>
                                                            {
                                                                pokemon.base_friendship
                                                            }
                                                        </b>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-3 text-secondary border border-danger border-1 rounded w-100">
                                                    Catch Rate
                                                    <br />
                                                    <span className="fs-6">
                                                        <b>
                                                            {pokemon.catch_rate}{" "}
                                                        </b>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4 div-abilities border border-primary rounded">
                                            <ul className="list-group">
                                                <li
                                                    className="list-group-item z-0 border border-0"
                                                    aria-current="true"
                                                >
                                                    <b>ABILITIES</b>
                                                </li>

                                                {pokemon.abilities.map(
                                                    (item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="list-group-item text-capitalize border border-0"
                                                            >
                                                                {
                                                                    item.ability
                                                                        .name
                                                                }
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>

                                        <div className="mb-5 border border-danger rounded p-2">
                                            <PokeStats stats={pokemon.stats} />
                                        </div>

                                        <div className="mb-5">
                                            {pokemon.typesStats &&
                                                pokemon.typesStats.length !==
                                                    0 && (
                                                    <>
                                                        <h6 className="mb-4 text-uppercase">
                                                            <b>Effectiveness</b>
                                                        </h6>

                                                        <TypesStats
                                                            DataTypesStats={
                                                                pokemon.typesStats
                                                            }
                                                            pokemonTypes={
                                                                pokemon.types
                                                            }
                                                        />
                                                    </>
                                                )}
                                        </div>

                                        <Link
                                            type="button"
                                            className="btn btn-primary w-100"
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
                                                        pokemon.id
                                                    }&qtPokemons=${1024}`,
                                                    "_blank",
                                                    `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
                                                );
                                            }}
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="container-fluid w-100 mt-4">
                            <div className="alert alert-primary " role="alert">
                                <i className="bi bi-info-circle me-1"></i>{" "}
                                Select 2 or more Pokemons to compare their
                                information.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </S.Container>
    );
}
