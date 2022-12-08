import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Headder from '../../components/Headder';
import api from '../../services/api';
import _get from "lodash/get";
import { Link } from 'react-router-dom';

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

    const { id } = useParams();
    const [PokeData, setPokeData] = useState([]);
    const [PokeDataSpecies, setPokeDataSpecies] = useState([]);
    const [PokeImg, setPokeImg] = useState([]);
    let infoPokemon = "";
    
    //ID do próximo pokemon.
    let nextPokemon = Number(id) + 1;
    if (nextPokemon === 906) {
        nextPokemon = 1;
    }
    //ID do pokemon anterior.
    let previewsPokemon = Number(id) - 1;
    if (previewsPokemon === 0) {
        previewsPokemon = 905;
    }

    // Responsavel por guardar os dados recebidos do Pokemon.
    if(PokeData != "" && PokeDataSpecies != ""){
        infoPokemon = {
            id: PokeData.id,
            img: PokeImg,
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

    
    //Pegando a URL da imagem oficial do Pokemon
    function spriteAdapterOfficial (spriteOfficial) {
        return _get(spriteOfficial, "other.official-artwork.front_default", "");
    };     

    //Buscando Informações do Pokemon
    api.get(`/pokemon/${id}`).then((response)=>{       
        async function getInfoPokemon() {    
            let dataResults = response.data;            
            setPokeData(dataResults);
            setPokeImg(spriteAdapterOfficial (dataResults.sprites));            
        }
        
        getInfoPokemon();        
    })

    //Buscando informações mais detalhadas
    api.get(`/pokemon-species/${id}`).then((response)=>{
        async function getInfoPokemonSpecies() {
            let dataResults = response.data;            
            setPokeDataSpecies(dataResults);
        }
        
        getInfoPokemonSpecies();
    })

    return (
        <div>
            <Headder/>
            <S.Container>
                <div className='div-poke-info-main'>
                    <div className='div-poke-img'>
                        <h1><span className="poke-number">Nº {infoPokemon.id}</span> - <span className='poke-name'>{infoPokemon.name}</span></h1>
                        <img src={PokeImg} alt="Imagem do Pokemon." />

                        <div className='div-btn'>
                            <Link to={'/pokeinfo/'+ previewsPokemon} >
                                <i className="bi bi-chevron-double-left"></i>
                            </Link>
                            
                            <Link to={'/pokeinfo/'+ nextPokemon} >
                                <i className="bi bi-chevron-double-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='div-poke-info'>
                        <div className='div-information'>
                            <div className='div-description'>
                                <h6>Description</h6>
                                <p>{infoPokemon.description}</p>
                            </div>
                            
                            <div className='div-type'>
                                <h6>Type</h6>
                                <div className='div-types'>
                                    {
                                        infoPokemon.types?.map(t =>                                                
                                            <span
                                                style={
                                                    t.type.name === "normal"
                                                    ? {backgroundColor:"#ccc", color: "#333"}
                                                    :
                                                    t.type.name === "fighting"
                                                    ? {background:"#d56723", color: "#fff"}
                                                    :
                                                    t.type.name === "flying"
                                                    ? {background:"linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)", color: "#000"}
                                                    :
                                                    t.type.name === "poison"
                                                    ? {backgroundColor:"#b97fc9", color: "#fff"}
                                                    :
                                                    t.type.name === "ground"
                                                    ? {background:"linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)", color: "#000"}
                                                    :
                                                    t.type.name === "rock"
                                                    ? {backgroundColor:"#a38c21", color: "#fff"}
                                                    :
                                                    t.type.name === "bug"
                                                    ? {backgroundColor:"#729f3f", color: "#fff"}
                                                    :
                                                    t.type.name === "ghost"
                                                    ? {backgroundColor:"#7b62a3", color: "#fff"}
                                                    :
                                                    t.type.name === "steel"
                                                    ? {backgroundColor:"#9eb7b8", color: "#333"}
                                                    :
                                                    t.type.name === "fire"
                                                    ? {backgroundColor:"#fd7d24", color: "#fff"}
                                                    : 
                                                    t.type.name === "water"
                                                    ? {backgroundColor:"#3498db", color: "#fff"}
                                                    : 
                                                    t.type.name === "grass"
                                                    ? {backgroundColor:"#9bcc50", color: "#333"}
                                                    :
                                                    t.type.name === "electric"
                                                    ? {backgroundColor:"#eed535", color: "#333"}
                                                    :
                                                    t.type.name === "psychic"
                                                    ? {backgroundColor:"#f366b9", color: "#fff"}
                                                    :
                                                    t.type.name === "ice"
                                                    ? {backgroundColor:"#51c4e7", color: "#000"}
                                                    :
                                                    t.type.name === "dark"
                                                    ? {backgroundColor:"#707070", color: "#fff"}
                                                    :
                                                    t.type.name === "fairy"
                                                    ? {backgroundColor:"#fdb9e9", color: "#333"}
                                                    :
                                                    t.type.name === "dragon"
                                                    ? {background:"linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)", color: "#fff"}
                                                    : {background:"#fff", color: "#333"}
                                                }                            
                                                key={t.type.name}
                                            >
                                                {t.type.name}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            

                            <div className='div-infos'>
                                <h6>Information</h6>
                                <p>Height - <span>{infoPokemon.height}m</span></p>
                                <p>Weight - <span>{infoPokemon.weight}kg</span></p>
                                <p>Habitat - <span>{infoPokemon.habitat}</span></p>                           
                                <p>Abilities - <span>{infoPokemon.abilities}</span></p>         
                            </div>                                               
                        </div>

                        <div className='div-stats'>  
                            <h6>Stats</h6>                          
                            <p>EXPERIÊNCIA {infoPokemon.xp}xp</p>
                            <p>ATAQUE {infoPokemon.attack}k</p>
                            <p>ATAQUE ESPECIAL {infoPokemon.attackSpecial}k</p>
                            <p>DEFESA {infoPokemon.defense}k</p>
                            <p>DEFESA ESPECIAL {infoPokemon.defenseSpecial}k</p>
                        </div>
                    </div>
                </div>
            
            </S.Container>
        </div>    
    )
}

export default PokeInfo;