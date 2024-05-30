import React from "react";
import * as S from "./styles";

function PokeStats(props) {
    //Recuperando os valores dos Stats em porcentagem com uma base máxima de 180. Conta usada regra de 3.
    function findValueStatsInPercentage(value) {
        let result = 0;

        if (value > 180) {
            result = 100;
        } else {
            result = (value * 100) / 180;
        }

        return result;
    }

    //Verificando o valor da Stats para definir a cor da barra.
    function getColorBar(value) {
        let barColor = "";

        if (value < 29) {
            barColor = "#e74c3c";
        }

        if (value > 29 && value < 60) {
            barColor = "#e67e22";
        }

        if (value > 59 && value < 90) {
            barColor = "#f1c40f";
        }

        if (value > 89 && value < 120) {
            barColor = "#0a58ca";
        }

        if (value > 119 && value < 150) {
            barColor = "#8e44ad";
        }

        if (value > 149) {
            barColor = "#16a085";
        }

        return barColor;
    }

    return (
        <S.PokeStats>
            <h6>Stats</h6>

            <table>
                <tbody>
                    <tr>
                        <td className="td-title">HP</td>
                        <td className="td-value">{props.stats[0].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[0].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[0].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[0].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Attack</td>
                        <td className="td-value">{props.stats[1].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[1].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[1].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[1].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Defense</td>
                        <td className="td-value">{props.stats[2].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft "
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[2].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[2].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[2].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Sp. Atk</td>
                        <td className="td-value">{props.stats[3].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft "
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[3].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[3].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[3].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Sp. Def</td>
                        <td className="td-value">{props.stats[4].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft "
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[4].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[4].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[4].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Speed</td>
                        <td className="td-value">{props.stats[5].base_stat}</td>
                        <td>
                            <div className="progress">
                                <div
                                    className="progress-bar animate__animated animate__fadeInLeft "
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{
                                        width: `${findValueStatsInPercentage(
                                            props.stats[5].base_stat
                                        )}%`,
                                        backgroundColor: `${getColorBar(
                                            props.stats[5].base_stat
                                        )}`,
                                    }}
                                    aria-valuenow={findValueStatsInPercentage(
                                        props.stats[5].base_stat
                                    )}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-title">Total</td>
                        <td className="td-value td-total">
                            {props.stats[0].base_stat +
                                props.stats[1].base_stat +
                                props.stats[3].base_stat +
                                props.stats[2].base_stat +
                                props.stats[4].base_stat +
                                props.stats[5].base_stat}
                        </td>
                    </tr>
                </tbody>
            </table>
        </S.PokeStats>
    );
}

export default PokeStats;
