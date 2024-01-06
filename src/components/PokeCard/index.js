import React from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
import _get from "lodash/get";
import { Link } from "react-router-dom";
import imgPokeball from "../../assets/pokeball.png";
import { colorTypeGradients } from "../../utils/utils";

function PokeCard(props) {
    //Ir ao topo da tela
    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    //Pegando a URL da imagem oficial do Pokemon
    function spriteAdapterOfficial(spriteOfficial) {
        let oficial_atwork = _get(
            spriteOfficial,
            "other.official-artwork.front_default",
            ""
        );
        let dream_word = _get(
            spriteOfficial,
            "other.dream_world.front_default",
            ""
        );

        if (dream_word) {
            return dream_word;
        }

        if (oficial_atwork) {
            return oficial_atwork;
        }

        return null;
    }

    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        if (pokeId < 10) {
            return "000" + pokeId;
        }

        if (pokeId >= 10 && pokeId < 100) {
            return "00" + pokeId;
        }

        if (pokeId >= 100 && pokeId < 1000) {
            return "0" + pokeId;
        }

        if (pokeId >= 1000) {
            return pokeId;
        }
    }

    //Verrificando o tamanho do NOME do Pokemon, se preciso o nome será dividio e mostrado só o primeiro nome.
    function splitName(name) {
        let newName = "";
        if (name.length > 15) {
            let splitedName = name.split("-");
            newName = splitedName[0];
        } else {
            newName = name.replace(/-/g, " ");
        }
        return newName;
    }

    const spriteOfficial = spriteAdapterOfficial(props.img);

    //Definindo a cor do card com base na cor do tipo
    let finalColor;

    if (props.types.length === 2) {
        finalColor = colorTypeGradients(
            props.types[0].type.name,
            props.types[1].type.name,
            props.types.length
        );
    } else {
        finalColor = colorTypeGradients(
            props.types[0].type.name,
            props.types[0].type.name,
            props.types.length
        );
    }

    return (
        <S.PokeCard>
            <Link
            // to={
            //     "/pokeinfo?id=" +
            //     props.id +
            //     "&offset=" +
            //     props.Offset +
            //     "&limit=" +
            //     props.Limit +
            //     "&type=" +
            //     props.SelectorType +
            //     "&color=" +
            //     props.SelectorColor +
            //     "&qtPokemons=" +
            //     props.TotalItens
            // }
            //onClick={() => scrollUp()}
            //id={"p" + props.id}
            >
                <div
                    className="card animate__animated animate__fadeIn animate__slow"
                    style={{
                        background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
                    }}
                >
                    <p className="pokeNum">#{zeroLeft(props.id)}</p>
                    <div className="div-img">
                        {!spriteOfficial ? (
                            <img
                                className="opacity-25"
                                src={imgPokeball}
                                alt="Imagem do Pokemon."
                            />
                        ) : (
                            <img
                                src={spriteOfficial}
                                alt="Imagem do Pokemon."
                            />
                        )}
                    </div>

                    <p className="pokeName">{splitName(props.name)}</p>
                </div>
            </Link>
            <div className="divPokeTypes animate__animated animate__fadeIn animate__slow">
                <PokeTypes types={props.types} pokeId={props.id} />
            </div>
        </S.PokeCard>
    );
}

export default PokeCard;
