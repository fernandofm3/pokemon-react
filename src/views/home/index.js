import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import PokeCard from '../../components/PokeCard';
import Pagination from '../../components/Pagination';
import SelectorItem from '../../components/SelectorItem';
import SearchPokemon from '../../components/Search';

//Import Styles
import * as S from './styles';

function Home() {

    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState("");
    const [Offset, setOffset] = useState(0);
    const [Limit, setLimit] = useState(30);    
    const [TotalPages, setTotalPages] = useState(0);

    const pages = Math.ceil(TotalPages/ Limit);
    
    //Conexão com API - Recuperando os Dados
    useEffect( ()=>{
        let filter;
        const newPokeList = [];
        
        if(Search !== "") {
            filter = "/" + Search;

            api.get(`/pokemon${filter}`).then((response)=>{
                newPokeList.push(response.data);
                setData(newPokeList);
            })

        } else {
            filter =  `?offset=${Offset}&limit=${Limit}`;

            api.get(`/pokemon${filter}`).then((response)=>{

                setTotalPages(response.data.count);

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
    }, [Search, Offset, Limit])    

    
    return (
        <div>            
        
            <S.Container> 
                <S.DivSearch>
                    <SearchPokemon className='search-Bar' setSearch={setSearch} search={Search} />            
                    <SelectorItem className='selector-item' setLimit={setLimit} limit={Limit} />
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
                <Pagination setOffset={setOffset} pages={pages} limit={Limit} />
            </S.Container>

            </div>
    )
}

export default Home;