import React from "react";
import "../../styles/pokeTypes.css";
import * as S from "./styles";
import { Tooltip as ReactTooltip } from "react-tooltip";

function PokeTypes(props) {
    return (
        <S.PokeTypes>
            <div className="div-types">
                {props.types?.map((t) => (
                    <div key={t.type.name + props.pokeId}>
                        <div
                            data-tooltip-id={t.type.name + props.pokeId}
                            className={`poke__type__bg ${t.type.name}`}
                        >
                            <img
                                src={`${t.type.name}.png`}
                                alt="poke-type"
                            ></img>
                        </div>

                        <ReactTooltip
                            id={t.type.name + props.pokeId}
                            place="bottom"
                            content={t.type.name}
                            //variant="dark"
                            //opacity={0.7}
                        />
                    </div>
                ))}
            </div>
        </S.PokeTypes>
    );
}

export default PokeTypes;
