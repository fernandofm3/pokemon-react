import React from "react";
import { findValueStatsInPercentage, getColorBar } from "../../utils/utils.js";
import * as S from "./styles";

function PokeStats(props) {
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
