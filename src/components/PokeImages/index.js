import React from "react";
import * as S from "./styles";
//import { Link } from 'react-router-dom';

function PokeImages (props) {

    //Gera o ID do próximo pokemon.
    // let nextPokemon = Number(props.id) + 1;
    // if (nextPokemon === 906) {
    //     nextPokemon = 1;
    // }
    //Gera o ID do pokemon anterior.
    // let previewsPokemon = Number(props.id) - 1;
    // if (previewsPokemon === 0) {
    //     previewsPokemon = 905;
    // }

    return (
        <S.PokeImages>
            <h1>
                <span className="poke-number">Nº {props.id}</span> - <span className='poke-name'>{props.name}</span>
            </h1>

            <div className="div-images">
                <img src={props.img} alt="Imagem do Pokemon." />
            </div>

            {/* <div className='div-btn'>
                <Link to={'/pokeinfo/'+ previewsPokemon}>
                    <i className="bi bi-chevron-double-left"></i>
                </Link>
                
                <Link to={'/pokeinfo/'+ nextPokemon}>
                    <i className="bi bi-chevron-double-right"></i>
                </Link>
            </div> */}
        </S.PokeImages>
    )
}

export default PokeImages;