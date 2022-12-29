import React from "react";
import * as S from "./styles";
//import { Link } from 'react-router-dom';

function PokeImages (props) {

    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        if(pokeId < 10) {
            return '00'+pokeId;
        }

        if(pokeId >= 10 && pokeId < 100) {
            return '0'+pokeId;
        }

        if(pokeId >= 100) {
            return pokeId;
        }        
    }

    //Gera o ID do próximo pokemon.
    let nextPokemon = Number(props.id) + 1;
    if (nextPokemon === 906) {
        nextPokemon = 1;
    }
    //Gera o ID do pokemon anterior.
    let previewsPokemon = Number(props.id) - 1;
    if (previewsPokemon === 0) {
        previewsPokemon = 905;
    }

    return (
        <S.PokeImages>
            <h1>
                <span className="poke-number">Nº {zeroLeft(props.id)}</span> - <span className='poke-name'>{props.name}</span>
            </h1>

            <div className="div-images animate__animated animate__fadeIn animate__slow">
                <img src={props.img} alt="Imagem do Pokemon." />
            </div>

            <div className='div-btn'>
                <button 
                    //to={'/pokeinfo?id='+ previewsPokemon}
                    className='btn-previews'
                    onClick={()=> {
                        props.setRemoveLoading(false);
                        props.setPokemonId(previewsPokemon);
                        
                    }}                
                >
                    <i className="bi bi-chevron-double-left"></i>
                </button>
                
                <button 
                    //to={'/pokeinfo?id='+ nextPokemon}
                    className='btn-next'
                    onClick={()=> {
                        props.setRemoveLoading(false);
                        props.setPokemonId(nextPokemon);
                        
                    }}
                >
                    <i className="bi bi-chevron-double-right"></i>
                </button>
            </div>
        </S.PokeImages>
    )
}

export default PokeImages;