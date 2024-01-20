import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Headder from "../../components/Headder";
import PokemonTable from "../../components/PokemonTable";
import Loading from "../../components/Loading";
import * as S from "./styles";

function AllPokemon() {
    const [AllPokemon, setAllPokemon] = useState([]);
    const [RemoveLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        const newPokeList = [];

        api.get(`/pokedex/national`).then((response) => {
            async function getInfoPokemon() {
                await Promise.all(
                    response.data.pokemon_entries.map((pokemonItem) => {
                        //Dividindo a URL para pegar o ID do Pokemon
                        const splitedUrl =
                            pokemonItem.pokemon_species.url.split("/");

                        return api
                            .get(
                                `https://pokeapi.co/api/v2/pokemon/${splitedUrl[6]}`
                            )
                            .then((result) => {
                                newPokeList.push(result.data);
                            });
                    })
                );

                //Função para order os pokemons pelo ID de forma crescente
                newPokeList.sort((a, b) =>
                    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
                );

                //console.log(newPokeList);

                setAllPokemon(newPokeList);
                setRemoveLoading(true);
            }

            getInfoPokemon();
        });
    }, []);
    return (
        <S.AllPokemon>
            {!RemoveLoading && <Loading />}

            <Headder SearchNameApi={"All Pokemon"} />

            {AllPokemon.length !== 0 && (
                <PokemonTable AllPokemon={AllPokemon} />
            )}

            {/* <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Total</th>
                            <th scope="col">Hp</th>
                            <th scope="col">Attack</th>
                            <th scope="col">Defense</th>
                            <th scope="col">Sp.Atk</th>
                            <th scope="col">Sp.Def</th>
                            <th scope="col">Speed</th>
                            <th scope="col">Height</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllPokemon.map((p, index) => {
                            let totalStats = 0;
                            p.stats.map((s) => {
                                totalStats = totalStats + s.base_stat;
                            });

                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={p.sprites.front_default} />
                                        {p.id}
                                    </td>
                                    <td>{p.name}</td>
                                    <td>
                                        {p.types.map((t, index) => (
                                            <p className="" key={index}>
                                                {t.type.name}
                                            </p>
                                        ))}
                                    </td>
                                    <td>{totalStats}</td>
                                    <td>{p.stats[0].base_stat}</td>
                                    <td>{p.stats[1].base_stat}</td>
                                    <td>{p.stats[2].base_stat}</td>
                                    <td>{p.stats[3].base_stat}</td>
                                    <td>{p.stats[4].base_stat}</td>
                                    <td>{p.stats[5].base_stat}</td>
                                    <td>{p.height / 10}</td>
                                    <td>{p.weight / 10}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                        >
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div> */}
        </S.AllPokemon>
    );
}

export default AllPokemon;
