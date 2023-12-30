import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import PokeCard from "../../components/PokeCard";
import SelectorPokemonPerRigion from "../../components/SelectorPokemonPerRegion";
import SelectorPokemonPerGeneration from "../../components/SelectorPokemonPerGeneration";
import FeaturedPokemon from "../../components/FeaturedPokemon";
//import SearchPokemon from "../../components/Search";
import Headder from "../../components/Headder";
import Loading from "../../components/Loading";
import BackToTop from "../../components/BackTotop";
//import Pagination from "../../components/Pagination";
import SelectorPokemonType from "../../components/SelectorPokemonType";
//import SelectorPokemonColor from "../../components/SelectorPokemonColor";

//Import Styles
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
    const [Search, setSearch] = useState("");
    const [Types, setTypes] = useState("");

    //const [ListNameColor, setListNameColor] = useState([]);
    const [SelectorColor, setSelectorColor] = useState(
        query.get("color") ? query.get("color") : ""
    );
    const [Generation, setGeneration] = useState(randomNumber(8));

    const [Region, setRegion] = useState("");
    const [RemoveLoading, setRemoveLoading] = useState(false);

    // const [Offset, setOffset] = useState(
    //     query.get("offset") ? query.get("offset") : 0
    // );
    // const [Limit, setLimit] = useState(
    //     query.get("limit") ? query.get("limit") : 12
    // );
    // const [TotalItens, setTotalItens] = useState(
    //     query.get("qtPokemons") ? query.get("qtPokemons") : 0
    // );
    // const maxButtonPagination = 9;
    // const maxLeftPagination = (maxButtonPagination - 1) / 2;
    // const totalPages = Math.ceil(TotalItens / Limit);
    // const currentPagePagination = Offset ? Offset / Limit + 1 : 1;
    // const maxfirstPagePagination = Math.max(
    //     totalPages - (maxButtonPagination - 1),
    //     1
    // );
    // const firstPagePagination = Math.min(
    //     Math.max(currentPagePagination - maxLeftPagination, 1),
    //     maxfirstPagePagination
    // );

    //Ir para o último Pokemon selecionado.
    scrollToPokemon(query.get("id"));

    //Conexão com API - Recuperando os Dados
    useEffect(() => {
        let filter;
        const newPokeList = [];

        if (Search !== "") {
            filter = "/" + Search;

            api.get(`/pokemon${filter}`).then((response) => {
                newPokeList.push(response.data);
                setData(newPokeList);
                setRemoveLoading(true);
            });
        } else if (Types !== "") {
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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemonPerType();
            });
        } else if (SelectorColor !== "") {
            filter = "/" + SelectorColor;

            api.get(`/pokemon-color${filter}`).then((response) => {
                async function getInfoPokemonPerColor() {
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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemonPerColor();
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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemon();
            });
        } else {
            //filter = `?offset=${Offset}&limit=${Limit}`;
            filter = Generation;

            //api.get(`/pokemon-species${filter}`).then((response) => {
            api.get(`/generation/${filter}`).then((response) => {
                //setTotalItens(response.data.count);
                async function getInfoPokemon() {
                    await Promise.all(
                        //response.data.results.map((pokemonItem) => {
                        response.data.pokemon_species.map((pokemonItem) => {
                            //Dividindo a URL para pegar o ID do Pokemon
                            //const splitedUrl = pokemonItem.url.split("/");
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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemon();
            });
        }
    }, [Search, Types, SelectorColor, Region, Generation]);

    return (
        <div>
            {!RemoveLoading && <Loading />}
            {/* <Headder setOffset={setOffset} TotalItens={TotalItens} /> */}
            <Headder setSearch={setSearch} search={Search} />
            {/*Modais - Generation / Region / Types */}
            <SelectorPokemonPerGeneration
                Generation={Generation}
                setGeneration={setGeneration}
                Region={Region}
                setRegion={setRegion}
                Types={Types}
                setTypes={setTypes}
                setRemoveLoading={setRemoveLoading}
            />
            <SelectorPokemonPerRigion
                setRegion={setRegion}
                Generation={Generation}
                setGeneration={setGeneration}
                Types={Types}
                setTypes={setTypes}
                setRemoveLoading={setRemoveLoading}
            />
            <SelectorPokemonType
                Types={Types}
                setTypes={setTypes}
                Region={Region}
                setRegion={setRegion}
                Generation={Generation}
                setGeneration={setGeneration}
                SelectorColor={SelectorColor}
                setRemoveLoading={setRemoveLoading}
            />
            {/* <SelectorPokemonColor
                SelectorColor={SelectorColor}
                setSelectorColor={setSelectorColor}
                Search={Search}
                ListNameColor={ListNameColor}
                Types={Types}
                setRemoveLoading={setRemoveLoading}
            /> */}
            {/*########################################*/}

            {Data.length !== 0 && (
                <FeaturedPokemon pokemon={Data[randomNumber(Data.length)]} />
            )}

            <S.Container>
                <div className="div-pokecard">
                    {Data.length !== 0 &&
                        Data.map((p) => {
                            return (
                                //p.id <= TotalItens &&
                                <PokeCard
                                    name={p.name}
                                    id={p.id}
                                    img={p.sprites}
                                    types={p.types}
                                    //Offset={Offset}
                                    //Types={Types}
                                    SelectorColor={SelectorColor}
                                    //Limit={Limit}
                                    //TotalItens={TotalItens}
                                    key={p.id}
                                />
                            );
                        })}
                </div>

                {/* {Data.length > 0 && (
                    <Pagination
                        Search={Search}
                        Types={Types}
                        SelectorColor={SelectorColor}
                        setOffset={setOffset}
                        maxButtonPagination={maxButtonPagination}
                        limit={Limit}
                        firstPagePagination={firstPagePagination}
                        currentPagePagination={currentPagePagination}
                        totalPages={totalPages}
                        setRemoveLoading={setRemoveLoading}
                    />
                )} */}

                <BackToTop />
            </S.Container>
        </div>
    );
}

export default Pokedex;
