import React from 'react';
import * as S from "./styles";

function PokeEvolutions (props) {

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

    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        let newPokeID;

        if(pokeId < 10) {
            return newPokeID = '00'+pokeId;
        }

        if(pokeId >= 10 && pokeId < 100) {
            return newPokeID = '0'+pokeId;
        }

        if(pokeId >= 100) {
            return newPokeID = pokeId;
        }        
    }

    return (
        <S.PokeEvolutions>
        
            <img className='evo-img-pokemon' src={props.img} alt="Imagem do Pokemon."/>

            <div className='evo-type-pokemon'> 
                {                    
                    props.types.map(t =>                                                
                        <p                           
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
                        </p>
                    )                    
                }                            
            </div> 

            <p className='div-evo-name-num'><span className='evo-num-pokemon'>N°{zeroLeft(props.id)}</span> <span className='evo-name-pokemon'>{splitName(props.name)}</span></p>

        </S.PokeEvolutions>
    )
}

export default PokeEvolutions;