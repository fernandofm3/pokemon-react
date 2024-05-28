import React from "react";
import "../../styles/pokeTypes.css";
import * as S from "./styles";
import { Tooltip as ReactTooltip } from "react-tooltip";

function PokeTypes(props) {
    let imgSize = "20px";
    let bgSize = "40px";

    if (props.imgSize) {
        imgSize = props.imgSize;
    }

    if (props.bgSize) {
        bgSize = props.bgSize;
    }

    const imgStyle = {
        width: imgSize,
        height: imgSize,
    };

    const bgStyle = {
        width: bgSize,
        height: bgSize,
    };

    return (
        <S.PokeTypes>
            <div className="div-types">
                {props.types?.map((t) => (
                    <div key={t.type.name + props.pokeId}>
                        <div
                            data-tooltip-id={t.type.name + props.pokeId}
                            className={`poke__type__bg ${t.type.name}`}
                            style={bgStyle}
                        >
                            <img
                                src={`${t.type.name}.png`}
                                alt="poke-type"
                                style={imgStyle}
                            ></img>
                        </div>

                        <ReactTooltip
                            id={t.type.name + props.pokeId}
                            place="bottom"
                            content={t.type.name}
                        />
                    </div>
                ))}
            </div>
        </S.PokeTypes>
    );
}

export default PokeTypes;
