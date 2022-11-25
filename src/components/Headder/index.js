import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";

const Headder = ()=> {

    return(
        <S.Headder>
            <nav>
                <ul>
                    <li><img src={logo} alt="Imagem do logo." /></li>
                    <li>Pokedex</li>                    
                    <li>Sobre</li>                    
                </ul>
            </nav>
        </S.Headder>
    )
}

export default Headder;