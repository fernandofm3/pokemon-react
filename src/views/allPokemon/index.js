import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Headder from "../../components/Headder";
import PokemonTable from "../../components/PokemonTable";
import Loading from "../../components/Loading";
import BackToTop from "../../components/BackTotop";
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

                setAllPokemon(newPokeList);
                setRemoveLoading(true);
            }

            getInfoPokemon();
        });
    }, []);
    return (
        <S.AllPokemon>
            {!RemoveLoading && <Loading />}

            <Headder SearchNameApi={"All Pokemon"} page={"allPokemon"} />

            {AllPokemon.length !== 0 && (
                <PokemonTable AllPokemon={AllPokemon} />
            )}

            <BackToTop />
        </S.AllPokemon>
    );
}

export default AllPokemon;
