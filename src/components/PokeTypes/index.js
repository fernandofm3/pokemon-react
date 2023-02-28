import React from "react";
import * as S from "./styles";

function PokeTypes(props) {
    return (
        <S.PokeTypes>
            <div className="div-types">
                {props.types?.map((t) => (
                    <span
                        style={
                            t.type.name === "normal"
                                ? { backgroundColor: "#ccc", color: "#333" }
                                : t.type.name === "fighting"
                                ? { background: "#d56723", color: "#fff" }
                                : t.type.name === "flying"
                                ? {
                                      background:
                                          "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
                                      color: "#000",
                                  }
                                : t.type.name === "poison"
                                ? { backgroundColor: "#b97fc9", color: "#fff" }
                                : t.type.name === "ground"
                                ? {
                                      background:
                                          "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
                                      color: "#000",
                                  }
                                : t.type.name === "rock"
                                ? { backgroundColor: "#a38c21", color: "#fff" }
                                : t.type.name === "bug"
                                ? { backgroundColor: "#729f3f", color: "#fff" }
                                : t.type.name === "ghost"
                                ? { backgroundColor: "#7b62a3", color: "#fff" }
                                : t.type.name === "steel"
                                ? { backgroundColor: "#9eb7b8", color: "#333" }
                                : t.type.name === "fire"
                                ? { backgroundColor: "#fd7d24", color: "#fff" }
                                : t.type.name === "water"
                                ? { backgroundColor: "#3498db", color: "#fff" }
                                : t.type.name === "grass"
                                ? { backgroundColor: "#9bcc50", color: "#333" }
                                : t.type.name === "electric"
                                ? { backgroundColor: "#eed535", color: "#333" }
                                : t.type.name === "psychic"
                                ? { backgroundColor: "#f366b9", color: "#fff" }
                                : t.type.name === "ice"
                                ? { backgroundColor: "#51c4e7", color: "#000" }
                                : t.type.name === "dark"
                                ? { backgroundColor: "#707070", color: "#fff" }
                                : t.type.name === "fairy"
                                ? { backgroundColor: "#fdb9e9", color: "#333" }
                                : t.type.name === "dragon"
                                ? {
                                      background:
                                          "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
                                      color: "#fff",
                                  }
                                : { background: "#fff", color: "#333" }
                        }
                        key={t.type.name}
                    >
                        {t.type.name}
                        {t.type.damage >= 0 && (
                            <span
                                className="damage"
                                style={
                                    t.type.damage === 0
                                        ? { backgroundColor: "#555" }
                                        : t.type.damage === 0.25
                                        ? { backgroundColor: "#b71212" }
                                        : t.type.damage === 0.5
                                        ? { backgroundColor: "#ff6060" }
                                        : t.type.damage === 2
                                        ? { backgroundColor: "#4caf50" }
                                        : { backgroundColor: "green" }
                                }
                            >
                                {t.type.damage}x
                            </span>
                        )}
                    </span>
                ))}
            </div>
        </S.PokeTypes>
    );
}

export default PokeTypes;
