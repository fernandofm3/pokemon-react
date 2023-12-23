import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import PokeCard from "../../components/PokeCard";
import Pagination from "../../components/Pagination";
import SelectorItemPerPage from "../../components/SelectorItemPerPage";
import SelectorPokemonType from "../../components/SelectorPokemonType";
import SelectorPokemonColor from "../../components/SelectorPokemonColor";
import SearchPokemon from "../../components/Search";
import Headder from "../../components/Headder";
import Loading from "../../components/Loading";
import BackToTop from "../../components/BackTotop";

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

    const query = useQuery();
    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState("");
    const [ListNameType, setListNameType] = useState([]);
    const [SelectorType, setSelectorType] = useState(
        query.get("type") ? query.get("type") : ""
    );
    const [ListNameColor, setListNameColor] = useState([]);
    const [SelectorColor, setSelectorColor] = useState(
        query.get("color") ? query.get("color") : ""
    );
    const [Offset, setOffset] = useState(
        query.get("offset") ? query.get("offset") : 0
    );
    const [Limit, setLimit] = useState(
        query.get("limit") ? query.get("limit") : 12
    );
    const [TotalItens, setTotalItens] = useState(
        query.get("qtPokemons") ? query.get("qtPokemons") : 0
    );
    const [RemoveLoading, setRemoveLoading] = useState(false);

    const maxButtonPagination = 9;
    const maxLeftPagination = (maxButtonPagination - 1) / 2;
    const totalPages = Math.ceil(TotalItens / Limit);
    const currentPagePagination = Offset ? Offset / Limit + 1 : 1;
    const maxfirstPagePagination = Math.max(
        totalPages - (maxButtonPagination - 1),
        1
    );
    const firstPagePagination = Math.min(
        Math.max(currentPagePagination - maxLeftPagination, 1),
        maxfirstPagePagination
    );

    //Ir para o último Pokemon selecionado.
    scrollToPokemon(query.get("id"));

    useEffect(() => {
        //Buscando a lista com os nomes do TIPOS de Pokemons
        api.get(`/type`).then((response) => {
            setListNameType(response.data.results);
        });

        //Buscando a lista com os nomes das COLORS dos Pokemons
        api.get(`/pokemon-color`).then((response) => {
            setListNameColor(response.data.results);
        });
    }, []);

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
        } else if (SelectorType !== "") {
            filter = "/" + SelectorType;

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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemonPerColor();
            });
        } else {
            filter = `?offset=${Offset}&limit=${Limit}`;

            api.get(`/pokemon-species${filter}`).then((response) => {
                setTotalItens(response.data.count);

                async function getInfoPokemon() {
                    await Promise.all(
                        response.data.results.map((pokemonItem) => {
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

                    setData(newPokeList);
                    setRemoveLoading(true);
                    scrollUp();
                }

                getInfoPokemon();
            });
        }
    }, [Search, Offset, Limit, SelectorType, SelectorColor]);

    return (
        <div>
            {!RemoveLoading && <Loading />}

            <Headder setOffset={setOffset} TotalItens={TotalItens} />

            <S.Container>
                <div className="div-search">
                    <SearchPokemon setSearch={setSearch} search={Search} />

                    <div className="div-seletors">
                        <SelectorPokemonType
                            SelectorType={SelectorType}
                            setSelectorType={setSelectorType}
                            Search={Search}
                            ListNameType={ListNameType}
                            SelectorColor={SelectorColor}
                            setRemoveLoading={setRemoveLoading}
                        />
                        <SelectorPokemonColor
                            SelectorColor={SelectorColor}
                            setSelectorColor={setSelectorColor}
                            Search={Search}
                            ListNameColor={ListNameColor}
                            SelectorType={SelectorType}
                            setRemoveLoading={setRemoveLoading}
                        />
                        <SelectorItemPerPage
                            className="selector-item"
                            setLimit={setLimit}
                            setOffset={setOffset}
                            limit={Limit}
                            Search={Search}
                            SelectorType={SelectorType}
                            SelectorColor={SelectorColor}
                            setRemoveLoading={setRemoveLoading}
                        />
                    </div>
                </div>

                <div className="div-pokecard">
                    {Data.map((p) => {
                        return (
                            p.id <= TotalItens && (
                                <PokeCard
                                    name={p.name}
                                    id={p.id}
                                    img={p.sprites}
                                    types={p.types}
                                    Offset={Offset}
                                    SelectorType={SelectorType}
                                    SelectorColor={SelectorColor}
                                    Limit={Limit}
                                    TotalItens={TotalItens}
                                    key={p.id}
                                />
                            )
                        );
                    })}
                </div>

                {Data.length > 0 && (
                    <Pagination
                        Search={Search}
                        SelectorType={SelectorType}
                        SelectorColor={SelectorColor}
                        setOffset={setOffset}
                        maxButtonPagination={maxButtonPagination}
                        limit={Limit}
                        firstPagePagination={firstPagePagination}
                        currentPagePagination={currentPagePagination}
                        totalPages={totalPages}
                        setRemoveLoading={setRemoveLoading}
                    />
                )}

                <BackToTop />
            </S.Container>
        </div>
    );
}

export default Pokedex;
