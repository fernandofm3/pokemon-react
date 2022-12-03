import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import { Link} from 'react-router-dom';

const Headder = ()=> {

    return(
        <S.Headder>
            <nav>
                <ul>                  
                    <Link to='/'><li><img src={logo} alt="Imagem do logo." /></li></Link>
                    <Link to='/'><li>Pokédex</li></Link>
                    <Link to='/pokeinfo'><li>Pokeinfo</li></Link>                  
                </ul>
            </nav>
        </S.Headder>
    )
}

export default Headder;