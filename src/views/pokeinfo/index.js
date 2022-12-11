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

//Import Styles
import * as S from './styles';

function PokeInfo () {

    //Ir ao topo da tela
    // function scrollUp () {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }    
    
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
    
    // Responsavel por guardar os dados recebidos do Pokemon.
    let infoPokemon = "";
    if(PokeData != "" && PokeDataSpecies != ""){
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
            description: PokeDataSpecies.flavor_text_entries[0].flavor_text
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

        //Buscando informações Pokemon Species
        api.get(`/pokemon-species/${id}`).then((response)=>{
            async function getInfoPokemonSpecies() {
                let dataResults = response.data;            
                setPokeDataSpecies(dataResults);
            }            
            getInfoPokemonSpecies();
        })
    })   

    return (
        <div>
            <Headder/>
            <S.Container>
                <div className='div-poke-info-main'>                    
                    <div className='div-poke-info'>
                        <div className='div-images-description'>
                            <PokeImages id={infoPokemon.id} name={infoPokemon.name} img={infoPokemon.img}/>
                            <PokeDescription description={infoPokemon.description} /> 
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
                            />                                                      
                        </div>
                    </div>

                    <div className='div-poke-evolutions'>

                    </div>
                </div>
            
            </S.Container>
        </div>    
    )
}

export default PokeInfo;