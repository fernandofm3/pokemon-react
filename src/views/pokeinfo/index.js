import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Headder from '../../components/Headder';
import api from '../../services/api';
import _get from "lodash/get";
import PokeDescription from '../../components/PokeDescription';
import PokeTypes from '../../components/PokeTypes';
import PokeInformations from '../../components/PokeInformations';
import PokeStats from '../../components/PokeStats';
import PokeImages from '../../components/PokeImages';
import PokeEvolutions from '../../components/PokeEvolutions';
import { Link } from 'react-router-dom';

//Import Styles
import * as S from './styles';

function PokeInfo () {

    //Ir ao topo da tela
    function scrollUp () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }   

    //Pega apenas o primeiro nome do pokemon.
    function splitName(name) {        
        let newName = "";
        if(name.length > 15) {
            let splitedName = name.split('-');
            newName = splitedName[0]; 
        } else {
            newName = name;
        }
        return newName;
    }

    //Pegando a URL da imagem oficial do Pokemon.
    function spriteAdapterOfficial (spriteOfficial) {
        return _get(spriteOfficial, "other.official-artwork.front_default", "");
    }; 
    
    //Busca pelo idioma "en" e pega o nome do Genres.
    function getGenresNameInEn(genres) {
        let genresName = "";        
        for (let i = 0; i < genres.length; i++) {
            if(genres[i].language.name === 'en') {
                genresName = genres[i].genus;
            }            
        }
        return genresName;
    }

    //Busca pelo idioma "en" e pega a descrição.
    function getDescriptionInEn(description) {
        let descriptionText = "";        
        for (let i = 0; i < description.length; i++) {
            if(description[i].language.name === 'en') {
                descriptionText = description[i].flavor_text;
            }            
        }
        return descriptionText;
    }

    const { id } = useParams();
    const [PokemonId, setPokemonId] = useState(id);
    const [PokeData, setPokeData] = useState({});
    const [PokeDataSpecies, setPokeDataSpecies] = useState([]);
    const [FirstEvolution, setFirstEvolution] = useState([]);   
    const [MiddleEvolution, setMiddleEvolution] = useState([]);   
    const [LastEvolution, setLastEvolution] = useState([]);   
    
    // Variável responsável por guardar os dados recebidos do Pokemon.
    let infoPokemon = "";

    if((PokeData != "" ) && (PokeDataSpecies != "")){
        infoPokemon = {
            id: PokeData.id,
            img: spriteAdapterOfficial (PokeData.sprites),
            name: splitName(PokeData.name),
            types: PokeData.types,
            height: PokeData.height  / 10,
            weight: PokeData.weight  / 10,
            hp: PokeData.stats[0].base_stat,
            attack: PokeData.stats[1].base_stat,
            attackSpecial: PokeData.stats[3].base_stat,
            defense: PokeData.stats[2].base_stat,
            defenseSpecial: PokeData.stats[4].base_stat,
            speed: PokeData.stats[5].base_stat,
            abilities: PokeData.abilities === null ? 'Undefined' : PokeData.abilities.map(item => ' ' + item.ability.name).toString(),
            xp: PokeData.base_experience === null ? 'Undefined' : PokeData.base_experience,
            habitat: PokeDataSpecies.habitat === null ? 'Undefined' : PokeDataSpecies.habitat.name,
            description: getDescriptionInEn(PokeDataSpecies.flavor_text_entries),
            genres: getGenresNameInEn(PokeDataSpecies.genera),
            gender: PokeDataSpecies.gender_rate
        }
    }  
    
    useEffect( ()=>{

        //Buscando Informações do Pokemon com o ID recuperado do useParams.
        api.get(`/pokemon/${PokemonId}`).then((response)=>{ 
            
            //Informações recuperadas do pokemon.
            let dataResults = response.data;

            //Enviando o objeto (infoPokemon).            
            setPokeData(dataResults);            
        })

        //Buscando informações Pokemon(Species) com o ID recuperado do useParams.
        api.get(`/pokemon-species/${PokemonId}`).then((response)=>{ 

            //Função responsável por tratar as Evoluções dos Pokemons. 
            async function getEvolutions() {

                //Informações recuperadas do pokemon-species.
                let resultPokeDataSpecies = response.data; 

                //Enviando o objeto (infoPokemon).
                setPokeDataSpecies(resultPokeDataSpecies);
                
                let resultPokeEvolutions = "";
                                
                //Verificando se possui evolução.
                if(resultPokeDataSpecies.evolution_chain != null){
                    //Pegando ID da evolução.
                    const splitedUrl = resultPokeDataSpecies.evolution_chain.url.split("/");
                    resultPokeEvolutions = await api.get(`/evolution-chain/${splitedUrl[6]}`);                                        
                    
                    //Array onde ficará todos Pokemons evoluídos.
                    const evoChain = []; 
                    
                    //Árvore de evoluções recuperada da API
                    const evolutions = resultPokeEvolutions.data.chain; 

                    //Função resposável por acessar a árvore de evoluções recursivamente e guarda os Pokemons no Array (evoChain).
                    async function getEvo(evo, pokeOrigin) {                        

                        //Laço recursivo que recupera os pokemons evoluídos de dentro da árvore de evoluções. 
                        for (let i = 0; i < evo.evolves_to.length; i++) {

                            if(evoChain.indexOf(evo.evolves_to[i].species.name === -1)) {

                                let idSplitedUrl = evo.evolves_to[i].species.url.split("/");

                                await api.get(`/pokemon/${idSplitedUrl[6]}`).then((response)=>{
                                    evoChain.push({
                                        "id" : response.data.id,
                                        "name": response.data.name,
                                        "evoFrom": pokeOrigin,
                                        "types" : response.data.types,
                                        "img" : spriteAdapterOfficial (response.data.sprites) 
                                    });

                                })                                                                            
                            }
                                                        
                            getEvo(evo.evolves_to[i], evo.evolves_to[i].species.name);

                        }

                        //Salvando os Pokemons evoluídos em uma nova variável para corrigir um alerta do React.
                        const newEvoChain = evoChain;

                        //Separando e salvando as evoluções em arrays separados (esse procedimento facilitou na renderição).
                        const pokeMiddleEvolitions = [];
                        const pokeLastEvolutions = [];

                        //Laço para percorrer os Pokemons evoluídos.
                        for (let i = 0; i < newEvoChain.length; i++) {
                            
                            //Verificando se o Pokemon evoluiu do Pokemon origem.
                            if(newEvoChain[i].evoFrom === newEvoChain[0].name) {                                
                                pokeMiddleEvolitions.push(newEvoChain[i]);
                            } else {
                                //Verificando se o Pokemon evoluiu de outro Pokemon já evoluído.
                                if (newEvoChain[i].name !== newEvoChain[0].name)  {
                                    pokeLastEvolutions.push(newEvoChain[i]);
                                }
                            }                            
                        }                       

                        //Mandando as evoluções prontas para renderização.
                        setMiddleEvolution(pokeMiddleEvolitions);
                        setLastEvolution(pokeLastEvolutions);

                    }

                    //Verificando se o Pokemon possui evoluções.
                    if(evolutions.evolves_to.length > 0) {

                        //Extraindo o ID do Pokemon da url
                        let idSplitedUrlPokeOrigin = resultPokeEvolutions.data.chain.species.url.split("/");
                        //Buscando as informações do Pokemon origem (primeira evolução).
                        await api.get(`/pokemon/${idSplitedUrlPokeOrigin[6]}`).then((response)=>{                                                        
                            let firstEvolutionPokemon = [];
                            firstEvolutionPokemon.push({
                                "id" : response.data.id,
                                "name": response.data.name,
                                "evoFrom": "",
                                "types" : response.data.types,
                                "img" : spriteAdapterOfficial (response.data.sprites) 
                            });
                            setFirstEvolution(firstEvolutionPokemon);
                        })

                        //Colocando o nome do Pokemon orirem no array para fazer verificações posteriormente.
                        evoChain.push({"name": resultPokeEvolutions.data.chain.species.name});
                                    
                        //Função resposável por acessar a árvore de evoluções recursivamente e guarda os Pokemons no Array (evoChain).
                        getEvo(evolutions, evolutions.species.name);

                    } else {                       
                        //Ação quando não possui evoluções
                        //Variável que receberá o Pokemon sem evolução.
                        let newEvoChain = "";
                        
                        //Extraindo o ID do Pokemon da url.
                        let idSplitedUrl = resultPokeEvolutions.data.chain.species.url.split("/");

                        //Buscando na API as informações do Pokemon e adicionando no array (newEvoChain).
                        await api.get(`/pokemon/${idSplitedUrl[6]}`).then((response)=>{
                            newEvoChain = [{}];
                            newEvoChain[0].name = response.data.name;                                
                            newEvoChain[0].id = response.data.id;                                
                            newEvoChain[0].types = response.data.types;                                
                            newEvoChain[0].img = spriteAdapterOfficial (response.data.sprites);
                            newEvoChain[0].evoFrom = "";
                        })
                        
                        //Enviando Pokemon para renderização.
                        setFirstEvolution([newEvoChain[0]]);
                    }
                    
                } else {
                    
                    //Ação quando não possui evoluções
                    //Variável que receberá o Pokemon sem evolução.
                    let newEvoChainNotEvolution = [{}]; 
                    
                    //Buscando na API as informações do Pokemon e adicionando no array (newEvoChainNotEvolution).
                    await api.get(`/pokemon/${PokemonId}`).then((response)=>{                        
                        newEvoChainNotEvolution[0].name = response.data.name;                                
                        newEvoChainNotEvolution[0].id = response.data.id;                                
                        newEvoChainNotEvolution[0].types = response.data.types;                                
                        newEvoChainNotEvolution[0].img = spriteAdapterOfficial (response.data.sprites);
                        newEvoChainNotEvolution[0].evoFrom = "";
                    })  
                    
                    //Enviando Pokemon para renderização.
                    setFirstEvolution([newEvoChainNotEvolution[0]]);                   
                }
            }  
            
            //Função responsável por tratar as Evoluções dos Pokemons.
            getEvolutions();

        })

    }, [PokemonId])   

    return (
        <div>
            <Headder/>
            <S.Container>
                <div className='div-poke-info-main'>                    
                    <div className='div-poke-info'>
                        <div className='div-images-description'>
                            <PokeImages id={infoPokemon.id} name={infoPokemon.name} img={infoPokemon.img} setPokemonId={setPokemonId} />

                            <PokeDescription description={infoPokemon.description} gender={infoPokemon.gender}/> 
                        </div>

                        <div className='div-type-stats-informations'>
                            <PokeTypes types={infoPokemon.types} />
                            
                            <PokeStats 
                                    hp={infoPokemon.hp}
                                    attack={infoPokemon.attack}
                                    attackSpecial={infoPokemon.attackSpecial}
                                    defense={infoPokemon.defense}
                                    defenseSpecial={infoPokemon.defenseSpecial}
                                    speed={infoPokemon.speed}
                            /> 

                            <PokeInformations 
                                xp={infoPokemon.xp}
                                height={infoPokemon.height} 
                                weight={infoPokemon.weight}
                                habitat={infoPokemon.habitat}
                                abilities={infoPokemon.abilities}
                                genres={infoPokemon.genres}
                            />                                                      
                        </div>
                    </div>

                    <div className='div-evolutions'>
                        
                        <h1>Evolutions</h1>

                        <ul className='div-pokemon-evolutions'>
                            <li className='first-evolution'>
                                { 
                                    FirstEvolution.length > 0 &&                           
                                    FirstEvolution.map((p) => 
                                        <Link to={'/pokeinfo/'+ p.id} 
                                            onClick={()=> {
                                                setPokemonId(p.id)
                                                scrollUp();
                                            }}
                                        >
                                            <PokeEvolutions                          
                                                name={p.name} 
                                                id={p.id} 
                                                img={p.img} 
                                                types={p.types}                            
                                                key={p.id}
                                            />
                                        </Link>
                                    )
                                } 
                            </li>


                            {
                                MiddleEvolution.length > 0 &&
                                <li className='li-evo-arrow'>
                                    {
                                        MiddleEvolution.length > 0 &&  MiddleEvolution.length < 3 &&                                  
                                        MiddleEvolution.map((p) =>
                                            <p key={p.id}>
                                                <i className="bi bi-caret-right-fill arrow-right"></i>
                                                <i className="bi bi-caret-down-fill arrow-bottom"></i>
                                            </p>                           
                                        )
                                    }

                                    {
                                        MiddleEvolution.length > 0 &&  MiddleEvolution.length > 2 &&                                  
                                        <p>
                                            <i className="bi bi-caret-right-fill arrow-right"></i>
                                            <i className="bi bi-caret-down-fill arrow-bottom"></i>
                                        </p>
                                    }
                                </li>
                            }

                            {MiddleEvolution.length > 0 && 
                                <li>
                                    { 
                                        MiddleEvolution.length > 0 && MiddleEvolution.length < 3 &&                                    
                                        MiddleEvolution.map((p) => 

                                            <Link to={'/pokeinfo/'+ p.id} 
                                                onClick={()=> {
                                                    setPokemonId(p.id)
                                                    scrollUp();
                                                }}
                                            >
                                                <PokeEvolutions                          
                                                    name={p.name} 
                                                    id={p.id} 
                                                    img={p.img} 
                                                    types={p.types}                            
                                                    key={p.id}
                                                />
                                            </Link>
                                        )
                                    } 
                                </li>                            
                            }

                            {MiddleEvolution.length > 2 && LastEvolution.length <= 0 &&
                                <li className='middle-evolution'>
                                    { 
                                        MiddleEvolution.length > 0 &&                                     
                                        MiddleEvolution.map((p) => 

                                            <Link to={'/pokeinfo/'+ p.id}
                                                className='test'
                                                onClick={()=> {
                                                    setPokemonId(p.id)
                                                    scrollUp();
                                                }}
                                            >
                                                <PokeEvolutions                          
                                                    name={p.name} 
                                                    id={p.id} 
                                                    img={p.img} 
                                                    types={p.types}                            
                                                    key={p.id}
                                                />
                                            </Link>
                                        )
                                    } 
                                </li>                            
                            }

                            
                            {LastEvolution.length > 0 && 
                                <li className='li-evo-arrow'>
                                    {
                                        LastEvolution.length > 0 &&                                     
                                        LastEvolution.map((p) =>                                        
                                            <p key={p.id}>
                                                <i className="bi bi-caret-right-fill arrow-right"></i>
                                                <i className="bi bi-caret-down-fill arrow-bottom"></i>
                                            </p>
                                        )
                                    }
                                </li>                            
                            }
                            
                            {LastEvolution.length > 0 &&
                                <li className='last-evolution'>
                                    { 
                                        LastEvolution.length > 0 &&                           
                                        LastEvolution.map((p) => 
                                            <Link to={'/pokeinfo/'+ p.id} 
                                                onClick={()=> {
                                                    setPokemonId(p.id)
                                                    scrollUp();
                                                }}
                                            >
                                                <PokeEvolutions                                             
                                                    name={p.name} 
                                                    id={p.id} 
                                                    img={p.img} 
                                                    types={p.types}                            
                                                    key={p.id}
                                                />
                                            </Link>    
                                        )
                                    } 
                                </li>
                            }                           
                            
                        </ul>                       
                    </div>
                </div>
            
            </S.Container>
        </div>    
    )
}

export default PokeInfo;