import React, { useState, useEffect } from "react";
import api from "../../services/api";
import PokeCard from "../../components/PokeCard";
import SelectorPokemonPerRigion from "../../components/SelectorPokemonPerRegion";
import SelectorPokemonPerGeneration from "../../components/SelectorPokemonPerGeneration";
import FiltersPokemon from "../../components/FiltersPokemon";
import Headder from "../../components/Headder";
import Loading from "../../components/Loading";
import BackToTop from "../../components/BackTotop";
import SelectorPokemonType from "../../components/SelectorPokemonType";
import { scrollUp } from "../../utils/utils.js";
import * as S from "./styles";

function Pokedex() {
    //const query = useQuery();
    const [Data, setData] = useState([]);
    const [OriginalData, setOriginalData] = useState([]);
    const [Types, setTypes] = useState("");

    const [Generation, setGeneration] = useState(1);
    const [Region, setRegion] = useState("");
    const [RemoveLoading, setRemoveLoading] = useState(false);
    const [NumberFeaturedPokemon, setNumberFeaturedPokemon] = useState("");
    const [SearchNameApi, setSearchNameApi] = useState(
        "Generation " + Generation
    );

    const [TotalPokemon, setTotalPokemon] = useState(0);

    useEffect(() => {
        //Descobrindo a quantidade atual do pokemon-species
        api.get(`/pokemon-species`).then((response) => {
            setTotalPokemon(response.data.count);
        });
    }, []);

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

                    console.log(newPokeList.length);

                    //Função para order os pokemons pelo ID de forma crescente
                    newPokeList.sort((a, b) =>
                        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
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

            <Headder SearchNameApi={SearchNameApi} page={"pokeDex"} />

            {/*Modais - Generation / Region / Types / Filters */}
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
                OriginalData={OriginalData}
                setData={setData}
                setRemoveLoading={setRemoveLoading}
                setNumberFeaturedPokemon={setNumberFeaturedPokemon}
            />
            {/*########################################*/}

            <S.Container>
                {Data.length === 0 && (
                    <div
                        className="alert alert-primary me-3 ms-3 div-error"
                        role="alert"
                    >
                        <i className="bi bi-info-circle-fill me-2"></i>No
                        Pokémon found in <span>{SearchNameApi}!</span> Please
                        change the filters!
                    </div>
                )}

                <div className="div-pokecard">
                    {Data.filter((p) => p.id <= TotalPokemon).map((p) => (
                        <PokeCard
                            name={p.name}
                            id={p.id}
                            img={p.sprites}
                            types={p.types}
                            TotalPokemon={TotalPokemon}
                            key={p.id}
                        />
                    ))}
                </div>

                <BackToTop />
            </S.Container>
        </div>
    );
}

export default Pokedex;
