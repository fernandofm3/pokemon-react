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

    useEffect(() => {
        if (search.length > 1) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
                .then((res) => res.json())
                .then((data) => {
                    const filtered = data.results
                        .filter((p) => p.name.includes(search.toLowerCase()))
                        .map((p) => {
                            // Extraindo o ID do Pokémon da URL
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
    }, [search]);

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
                height: dataP.height,
                weight: dataP.weight,
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
            />

            <div
                className="container-fluid p-3 pt-0"
                style={{ marginTop: "120px" }}
            >
                <div className="position-relative mb-4">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Enter the name of the pokemon"
                        className="form-control border-2 border-primary "
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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 justify-content-center">
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon) => (
                            <div key={pokemon.id} className="col">
                                <div className="card p-3 position-relative shadow">
                                    <button
                                        onClick={() =>
                                            removePokemon(pokemon.name)
                                        }
                                        className="btn-close position-absolute top-0 end-0 m-2"
                                        aria-label="Remover"
                                    ></button>
                                    <img
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        className="card-img-top mx-auto"
                                        style={{
                                            width: "96px",
                                            height: "96px",
                                        }}
                                    />

                                    <div className="card-body">
                                        <h4 className="card-title text-capitalize text-center mb-0">
                                            {pokemon.name}
                                        </h4>
                                        <p className="text-secondary mb-3 text-center m-0">
                                            #{zeroLeft(pokemon.id)}
                                        </p>
                                        <div className="mb-4 poke-type-comparation">
                                            <PokeTypes
                                                types={pokemon.types}
                                                pokeId={pokemon.id}
                                            />
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="mb-4 p-3 text-white bg-primary rounded">
                                                Height <br />
                                                <span className="fs-6">
                                                    <b>{pokemon.height} M</b>
                                                </span>
                                            </p>
                                            <p className="mb-4 p-3 text-white bg-primary rounded">
                                                Weight <br />
                                                <span className="fs-6">
                                                    <b>{pokemon.weight} Kg</b>
                                                </span>
                                            </p>
                                            <p className="mb-4 p-3 text-white bg-primary rounded">
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

                                        <div className="d-flex justify-content-between">
                                            <p className="mb-4 p-3 text-white bg-danger rounded w-50 me-3">
                                                Catch Rate <br />
                                                <span className="fs-4">
                                                    {pokemon.catch_rate}
                                                </span>
                                            </p>
                                            <p className="mb-4 p-3 text-white bg-primary rounded w-75">
                                                Base Friendship <br />
                                                <span className="fs-4 ">
                                                    {pokemon.base_friendship}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            <ul className="list-group">
                                                <li
                                                    className="list-group-item active"
                                                    aria-current="true"
                                                >
                                                    <b>Abilities</b>
                                                </li>

                                                {pokemon.abilities.map(
                                                    (item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="list-group-item text-capitalize"
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

                                        <div className="mb-4">
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
                        <p className="text-center text-secondary mt-5">
                            <b>No Pokémon selected.</b>
                        </p>
                    )}
                </div>
            </div>
        </S.Container>
    );
}
