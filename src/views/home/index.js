import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import PokeCard from '../../components/PokeCard';
import Pagination from '../../components/Pagination';
import SelectorItemPerPage from '../../components/SelectorItemPerPage';
import SelectorPokemonType from '../../components/SelectorPokemonType';
import SelectorPokemonColor from '../../components/SelectorPokemonColor';
import SearchPokemon from '../../components/Search';
import Headder from '../../components/Headder';

//Import Styles
import * as S from './styles';

function Home() {

    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState("");

    const [ListNameType, setListNameType] = useState([]);
    const [SelectorType, setSelectorType] = useState("");

    const [ListNameColor, setListNameColor] = useState([]);
    const [SelectorColor, setSelectorColor] = useState("");

    const [Offset, setOffset] = useState(0);
    const [Limit, setLimit] = useState(12);    
    const [TotalItens, setTotalItens] = useState(0);
    
    const maxButtonPagination = 9;
    const maxLeftPagination = (maxButtonPagination - 1) / 2;
    const totalPages = Math.ceil(TotalItens / Limit);
    const currentPagePagination = Offset ? (Offset / Limit) + 1: 1;

    //const firstPagePagination =  Math.max(currentPagePagination - maxLeftPagination, 1);

    const maxfirstPagePagination = Math.max(totalPages - (maxButtonPagination - 1), 1);
    const firstPagePagination = Math.min(
        Math.max(currentPagePagination - maxLeftPagination, 1),
        maxfirstPagePagination
    );
        
    //Conexão com API - Recuperando os Dados
    useEffect( ()=>{

        //Buscando a lista com os nomes do TIPOS de Pokemons
        api.get(`/type`).then((response)=>{
            setListNameType(response.data.results);        
        })

        //Buscando a lista com os nomes das COLORS dos Pokemons
        api.get(`/pokemon-color`).then((response)=>{
            setListNameColor(response.data.results);        
        })

        let filter;
        const newPokeList = [];
        
        if(Search !== "") {
            filter = "/" + Search;

            api.get(`/pokemon${filter}`).then((response)=>{
                newPokeList.push(response.data);
                setData(newPokeList);
            })

        } else if(SelectorType !== "") {
            filter = "/" + SelectorType;

            api.get(`/type${filter}`).then((response)=>{

                async function getInfoPokemonPerType() {
            
                    let dataResults = response.data.pokemon;
                    
                    //Realizando um laço para buscar a informação de cada Pokemon para salvar em novo array
                    for (let i = 0; i < dataResults.length; i++) {
                        let resultPokeInfo = await api.get(`/pokemon/${dataResults[i].pokemon.name}`); 
                        resultPokeInfo = resultPokeInfo.data;               
                        newPokeList.push(resultPokeInfo);                        
                    }
                    
                    setData(newPokeList);                                     
                }

                getInfoPokemonPerType();

            })

        } else if(SelectorColor !== "") {
            filter = "/" + SelectorColor;

            api.get(`/pokemon-color${filter}`).then((response)=>{
                
                async function getInfoPokemonPerColor() {
                                
                    let dataResults = response.data.pokemon_species;
                    
                    //Realizando um laço para buscar a informação de cada Pokemon para salvar em novo array
                    for (let i = 0; i < dataResults.length; i++) {

                        //Dividindo a URL para pegar o ID do Pokemon
                        const splitedUrl = dataResults[i].url.split("/");
                        
                        let resultPokeInfo = await api.get(`/pokemon/${splitedUrl[6]}`); 
                        resultPokeInfo = resultPokeInfo.data;               
                        newPokeList.push(resultPokeInfo);                        
                    }
                                        
                    setData(newPokeList);                                     
                }

                getInfoPokemonPerColor();

            })

        } else {
            filter =  `?offset=${Offset}&limit=${Limit}`;

            api.get(`/pokemon${filter}`).then((response)=>{

                setTotalItens(response.data.count);

                async function getInfoPokemon() {
            
                    let dataResults = response.data.results;
                    
                    //Realizando um laço para buscar a informação de cada Pokemon para salvar em novo array
                    for (let i = 0; i < dataResults.length; i++) {
                        let resultPokeInfo = await api.get(`/pokemon/${dataResults[i].name}`); 
                        resultPokeInfo = resultPokeInfo.data;               
                        newPokeList.push(resultPokeInfo);                        
                    }
                    
                    setData(newPokeList);                                     
                }
        
                getInfoPokemon();
            })
        }        
    }, [Search, Offset, Limit, SelectorType, SelectorColor])    

    
    return (
        <div>            
            <Headder />

            <S.Container> 
                <S.DivSearch>
                    <SearchPokemon className='search-Bar' setSearch={setSearch} search={Search} />
                    <SelectorPokemonType  SelectorType={SelectorType} setSelectorType={setSelectorType} Search={Search} ListNameType={ListNameType} />            
                    <SelectorPokemonColor  SelectorColor={SelectorColor} setSelectorColor={setSelectorColor} Search={Search} ListNameColor={ListNameColor} />            
                    <SelectorItemPerPage className='selector-item' setLimit={setLimit} limit={Limit} Search={Search} SelectorType={SelectorType} SelectorColor={SelectorColor} />
                </S.DivSearch>
            </S.Container> 
            

            <S.Container>            
                {
                    Data.map(p => <PokeCard 
                        name={p.name} 
                        id={p.id} 
                        img={p.sprites.other.dream_world.front_default} 
                        types={p.types}                            
                        key={p.id}
                    />)
                }                    
            </S.Container> 

            <S.Container>                
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
                />
            </S.Container>
        </div>
    )
}

export default Home;