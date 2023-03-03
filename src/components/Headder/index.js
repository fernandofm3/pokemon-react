import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Headder = (props) => {
    return (
        <S.Headder>
            <nav>
                <ul>
                    <Link to="/">
                        <li>
                            <img src={logo} alt="Imagem do logo." />
                        </li>
                    </Link>

                    <Link
                        to="/"
                        onClick={() => {
                            props.setOffset(0);
                        }}
                    >
                        <li>Pokédex</li>
                    </Link>

                    <Link
                        to={
                            "/pokeinfo?id=1&offset=0&limit=12&type=&color=&qtPokemons=" +
                            props.TotalItens
                        }
                    >
                        <li>Pokeinfo</li>
                    </Link>
                </ul>

                <ul className="ulVersionApp">
                    <li className="versionApp">V 2.0</li>
                </ul>
            </nav>
        </S.Headder>
    );
};

export default Headder;
