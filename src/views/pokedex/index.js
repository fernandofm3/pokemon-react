import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import PokeCard from "../../components/PokeCard";
import SelectorPokemonPerRigion from "../../components/SelectorPokemonPerRegion";
import SelectorPokemonPerGeneration from "../../components/SelectorPokemonPerGeneration";
import FeaturedPokemon from "../../components/FeaturedPokemon";
import SearchPokemon from "../../components/Search";
import SearchName from "../../components/SearchName";
import FiltersPokemon from "../../components/FiltersPokemon";
import Headder from "../../components/Headder";
import Loading from "../../components/Loading";
import BackToTop from "../../components/BackTotop";
import SelectorPokemonType from "../../components/SelectorPokemonType";
import * as S from "./styles";

function Pokedex() {
    //Ir ao topo da tela
    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    //Ir para o último Pokemon selecionado.
    function scrollToPokemon(id) {
        setTimeout(() => {
            if (document.querySelector("#p" + id)) {
                let pId = document.querySelector("#p" + id);

                pId.scrollIntoView(
                    {
                        behavior: "smooth",
                    },
                    500
                );
            }
        }, 500);
    }

    //Função para pegar o conteúdo que veio via query na URL.
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    //Gerando número aliatório
    function randomNumber(limitNumber) {
        // Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo)
        const decimalNumber = Math.random();

        // Multiplica por 9 para obter um número entre 0 (inclusivo) e 9 (exclusivo)
        // Adiciona 1 para ajustar o intervalo para 1 (inclusivo) a 9 (inclusive)
        const multipliedNumber = decimalNumber * limitNumber + 1;

        // Arredonda para baixo para o número inteiro mais próximo
        const intNumber = Math.floor(multipliedNumber);

        return intNumber;
    }

    const query = useQuery();
    const [Data, setData] = useState([]);
    const [OriginalData, setOriginalData] = useState([]);
    const [Types, setTypes] = useState("");
    const [Generation, setGeneration] = useState(randomNumber(8));
    const [Region, setRegion] = useState("");
    const [RemoveLoading, setRemoveLoading] = useState(false);
    const [NumberFeaturedPokemon, setNumberFeaturedPokemon] = useState("");
    const [SearchNameApi, setSearchNameApi] = useState(
        "Generation " + Generation
    );

    //Ir para o último Pokemon selecionado.
    scrollToPokemon(query.get("id"));

    //Conexão com API - Recuperando os Dados
    useEffect(() => {
        let filter;
        const newPokeList = [];
        setData([]);
        if (Types !== "") {
            filter = "/" + Types;

            api.get(`/type${filter}`).then((response) => {
                async function getInfoPokemonPerType() {
                    await Promise.all(
                        response.data.pokemon.map((pokemonItem) => {
                            return api
                                .get(
                                    `https://pokeapi.co/api/v2/pokemon/${pokemonItem.pokemon.name}`
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

                    setNumberFeaturedPokemon(
                        randomNumber([newPokeList.length])
                    );
                    setOriginalData(newPokeList);
                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemonPerType();
            });
        } else if (Region !== "") {
            filter = Region;

            api.get(`/pokedex/${filter}`).then((response) => {
                async function getInfoPokemon() {
                    await Promise.all(
                        //response.data.results.map((pokemonItem) => {
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

                    setNumberFeaturedPokemon(
                        randomNumber([newPokeList.length])
                    );
                    setOriginalData(newPokeList);
                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemon();
            });
        } else {
            filter = Generation;

            api.get(`/generation/${filter}`).then((response) => {
                async function getInfoPokemon() {
                    await Promise.all(
                        response.data.pokemon_species.map((pokemonItem) => {
                            //Dividindo a URL para pegar o ID do Pokemon
                            const splitedUrl = pokemonItem.url.split("/");

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

                    setNumberFeaturedPokemon(
                        randomNumber([newPokeList.length])
                    );
                    setOriginalData(newPokeList);
                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemon();
            });
        }
    }, [Types, Region, Generation]);

    return (
        <div>
            {!RemoveLoading && <Loading />}

            <Headder SearchNameApi={SearchNameApi} />

            {/*Modais - Search / Generation / Region / Types / Filters */}
            <SearchPokemon />
            <SelectorPokemonPerGeneration
                Generation={Generation}
                setGeneration={setGeneration}
                Region={Region}
                setRegion={setRegion}
                Types={Types}
                setTypes={setTypes}
                setRemoveLoading={setRemoveLoading}
                setData={setData}
                setSearchNameApi={setSearchNameApi}
            />
            <SelectorPokemonPerRigion
                setRegion={setRegion}
                Generation={Generation}
                setGeneration={setGeneration}
                Types={Types}
                setTypes={setTypes}
                setRemoveLoading={setRemoveLoading}
                setData={setData}
                setSearchNameApi={setSearchNameApi}
            />
            <SelectorPokemonType
                Types={Types}
                setTypes={setTypes}
                Region={Region}
                setRegion={setRegion}
                Generation={Generation}
                setGeneration={setGeneration}
                setRemoveLoading={setRemoveLoading}
                setData={setData}
                setSearchNameApi={setSearchNameApi}
            />

            <FiltersPokemon
                DataFilter={Data}
                OriginalData={OriginalData}
                setData={setData}
                setRemoveLoading={setRemoveLoading}
                setNumberFeaturedPokemon={setNumberFeaturedPokemon}
            />
            {/*########################################*/}

            {Data.length !== 0 && (
                <FeaturedPokemon pokemon={Data[NumberFeaturedPokemon]} />
            )}

            <S.Container>
                {Data.length === 0 && (
                    <div
                        className="alert alert-primary me-3 ms-3 div-error"
                        role="alert"
                    >
                        <i className="bi bi-info-circle-fill me-2"></i>No
                        Pokémon found! Please change the filters.
                    </div>
                )}
                <div className="div-pokecard">
                    {Data.map((p) => {
                        return (
                            //p.id <= TotalItens &&
                            <PokeCard
                                name={p.name}
                                id={p.id}
                                img={p.sprites}
                                types={p.types}
                                key={p.id}
                            />
                        );
                    })}
                </div>

                <BackToTop />
            </S.Container>
        </div>
    );
}

export default Pokedex;
