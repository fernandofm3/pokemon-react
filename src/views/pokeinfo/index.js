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

//Import Styles
import * as S from './styles';

function PokeInfo () {

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

    //Pegando a URL da imagem oficial do Pokemon
    function spriteAdapterOfficial (spriteOfficial) {
        return _get(spriteOfficial, "other.official-artwork.front_default", "");
    };  

    const { id } = useParams();
    const [PokeData, setPokeData] = useState([]);
    const [PokeDataSpecies, setPokeDataSpecies] = useState([]);
    const [FirstEvolution, setFirstEvolution] = useState([]);   
    const [MiddleEvolution, setMiddleEvolution] = useState([]);   
    const [LastEvolution, setLastEvolution] = useState([]);   
    
    // Responsavel por guardar os dados recebidos do Pokemon.
    let infoPokemon = "";
    if(PokeData !== "" && PokeDataSpecies != ""){
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
            description: PokeDataSpecies.flavor_text_entries[0].flavor_text,
            species: PokeDataSpecies.genera[0].genus,
            gender: PokeDataSpecies.gender_rate
        }
    }  
    
    useEffect( ()=>{
        //Buscando Informações do Pokemon
        api.get(`/pokemon/${id}`).then((response)=>{       
            async function getInfoPokemon() {    
                let dataResults = response.data;            
                setPokeData(dataResults);            
            }            
            getInfoPokemon();                   
        })

        //Buscando informações Pokemon Species na API
        api.get(`/pokemon-species/${id}`).then((response)=>{            
            async function getInfoPokemonSpecies() {
                let resultPokeDataSpecies = response.data;   
                let resultPokeEvolutions = "";
                                
                //Pegando ID da especie
                if(resultPokeDataSpecies.evolution_chain != null){
                    const splitedUrl = resultPokeDataSpecies.evolution_chain.url.split("/");
                    resultPokeEvolutions = await api.get(`/evolution-chain/${splitedUrl[6]}`);

                    /*****************************************************************************/                    
                    
                    let evoChain = [];                    
                    let evolutions = resultPokeEvolutions.data.chain;                     

                    async function getEvo(evo, pokeOrigin) {                        

                        for (let i = 0; i < evo.evolves_to.length; i++) { 

                            //if(evo.evolves_to > 0){
                                if(evoChain.indexOf(evo.evolves_to[i].species.name === -1)) {
                                    evoChain.push({
                                                    "name": evo.evolves_to[i].species.name,
                                                    "url": evo.evolves_to[i].species.url,
                                                    "evoFrom": pokeOrigin
                                                });                                
                                }
                                                            
                                getEvo(evo.evolves_to[i], evo.evolves_to[i].species.name);
                            //}
                                                                                    
                            // if(evoChain.indexOf(evo.evolves_to[i].species.name === -1)) {
                            //     evoChain.push({
                            //                     "name": evo.evolves_to[i].species.name,
                            //                     "url": evo.evolves_to[i].species.url,
                            //                     "evoFrom": pokeOrigin
                            //                 });                                
                            // }
                                                        
                            // getEvo(evo.evolves_to[i], evo.evolves_to[i].species.name);
                        
                        }
                        

                        //Pegando as informações dos pokemons que estão na lita de evoluções                        
                        let newEvoChain = evoChain;
                        for (let i = 0; i < newEvoChain.length; i++) {
                            
                            await api.get(`/pokemon/${evoChain[i].name}`).then((response)=>{
                                newEvoChain[i].id = response.data.id;                                
                                newEvoChain[i].types = response.data.types;                                
                                newEvoChain[i].img = spriteAdapterOfficial (response.data.sprites);
                            })                           
                            
                        }
                        
                        //Pegando primenra Evolução do Pokemon
                        setFirstEvolution([newEvoChain[0]]);

                        //Pegando a segunda e a terceira evolução do Pokemon
                        let pokeMiddleEvolitions = [];
                        let pokeLastEvolutions = [];
                        for (let i = 0; i < newEvoChain.length; i++) {
                            
                            if(newEvoChain[i].evoFrom === newEvoChain[0].name) {                                
                                pokeMiddleEvolitions.push(newEvoChain[i]);
                            } else {
                                if (newEvoChain[i].name !== newEvoChain[0].name)  {
                                    pokeLastEvolutions.push(newEvoChain[i]);
                                }
                            }                            
                        }

                        setMiddleEvolution(pokeMiddleEvolitions);
                        setLastEvolution(pokeLastEvolutions);

                    }

                    if(evolutions.evolves_to.length > 0) {
                        evoChain.push({
                                        "name": resultPokeEvolutions.data.chain.species.name,                                        
                                    });
                        getEvo(evolutions, evolutions.species.name);
                    } else {                       
                        //Ação quando não possui evolução
                        let newEvoChain = evoChain;    
                        await api.get(`/pokemon/${resultPokeEvolutions.data.chain.species.name}`).then((response)=>{
                            newEvoChain = [{}];
                            newEvoChain[0].name = infoPokemon.name;                                
                            newEvoChain[0].id = response.data.id;                                
                            newEvoChain[0].types = response.data.types;                                
                            newEvoChain[0].img = spriteAdapterOfficial (response.data.sprites);
                            newEvoChain[0].evoFrom = "";
                        })
                        
                        setFirstEvolution([newEvoChain[0]]);
                    }
                    /*****************************************************************************/
                } else {
                    
                    //Ação quando não possui evolução
                    let newEvoChainNotEvolution = [{}];    
                    await api.get(`/pokemon/${id}`).then((response)=>{                        
                        newEvoChainNotEvolution[0].name = infoPokemon.name;                                
                        newEvoChainNotEvolution[0].id = response.data.id;                                
                        newEvoChainNotEvolution[0].types = response.data.types;                                
                        newEvoChainNotEvolution[0].img = spriteAdapterOfficial (response.data.sprites);
                        newEvoChainNotEvolution[0].evoFrom = "";
                    })  
                    
                    setFirstEvolution([newEvoChainNotEvolution[0]]);                   
                }

                setPokeDataSpecies(resultPokeDataSpecies); 

            }  
            
            getInfoPokemonSpecies();

        })

        console.log(LastEvolution);

    }, [])   

    return (
        <div>
            <Headder/>
            <S.Container>
                <div className='div-poke-info-main'>                    
                    <div className='div-poke-info'>
                        <div className='div-images-description'>
                            <PokeImages id={infoPokemon.id} name={infoPokemon.name} img={infoPokemon.img}/>
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
                                species={infoPokemon.species}
                            />                                                      
                        </div>
                    </div>

                    <div className='div-evolutions'>
                        <h2>Evolutions</h2>

                        <ul className='div-pokemon-evolutions'>
                            <li className='first-evolution'>
                                { 
                                    FirstEvolution.length > 0 &&                           
                                    FirstEvolution.map((p) => 

                                        <PokeEvolutions                          
                                        name={p.name} 
                                        id={p.id} 
                                        img={p.img} 
                                        types={p.types}                            
                                        key={p.id}
                                        />
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
                                <li 
                                    className='middle-evolution' 
                                
                                >
                                    { 
                                        MiddleEvolution.length > 0 && MiddleEvolution.length < 3 &&                                    
                                        MiddleEvolution.map((p) => 

                                            <PokeEvolutions                          
                                                name={p.name} 
                                                id={p.id} 
                                                img={p.img} 
                                                types={p.types}                            
                                                key={p.id}
                                            />
                                        )
                                    } 
                                </li>                            
                            }

                            {MiddleEvolution.length > 2 && LastEvolution.length <= 0 &&
                                <li 
                                    className='middle-evolution middle-evolution-wrap' 
                                
                                >
                                    { 
                                        MiddleEvolution.length > 0 &&                                     
                                        MiddleEvolution.map((p) => 

                                            <PokeEvolutions                          
                                                name={p.name} 
                                                id={p.id} 
                                                img={p.img} 
                                                types={p.types}                            
                                                key={p.id}
                                            />
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

                                            <PokeEvolutions                          
                                            name={p.name} 
                                            id={p.id} 
                                            img={p.img} 
                                            types={p.types}                            
                                            key={p.id}
                                            />
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