import React from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
import _get from "lodash/get";
import { Link } from "react-router-dom";

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
        return _get(spriteOfficial, "other.official-artwork.front_default", "");
    }

    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        if (pokeId < 10) {
            return "00" + pokeId;
        }
        if (pokeId >= 10 && pokeId < 100) {
            return "0" + pokeId;
        }
        if (pokeId >= 100) {
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
            newName = name;
        }
        return newName;
    }

    const spriteOfficial = spriteAdapterOfficial(props.img);
    //const spriteDream = spriteAdapterDream(props.img);

    return (
        <S.PokeCard>
            <Link
                to={
                    "/pokeinfo?id=" +
                    props.id +
                    "&offset=" +
                    props.Offset +
                    "&limit=" +
                    props.Limit +
                    "&type=" +
                    props.SelectorType +
                    "&color=" +
                    props.SelectorColor
                }
                onClick={() => scrollUp()}
                id={"p" + props.id}
            >
                <div className="card animate__animated animate__fadeIn animate__slow">
                    <img src={spriteOfficial} alt="Imagem do Pokemon." />
                    <p className="pokeNum">N° {zeroLeft(props.id)}</p>
                    <p className="pokeName">{splitName(props.name)}</p>
                    <div className="divPokeTypes">
                        <PokeTypes types={props.types} />
                    </div>
                </div>
            </Link>
        </S.PokeCard>
    );
}

export default PokeCard;
