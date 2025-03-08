import { React, useState, useEffect } from "react";
import * as S from "./styles";
import { pokeBalls, statusMultipliers } from "../../utils/utils.js";
import imgPokeBall from "../../assets/pokeball-2.png";

const Capture = ({ captureRate, infoStats }) => {
    const [BallType, setBallType] = useState("PokeBall");
    const [PokemonHpCurrent, setPokemonHpCurrent] = useState(
        infoStats[0]?.base_stat
    ); // Full HP por padrão
    const [PokemonStatus, setPokemonStatus] = useState("Normal");
    const [catchChance, setCatchChance] = useState(null);

    // Verifica a chance de captura do Pokemon
    function calculateCatchRate(
        hpTotal,
        hpCurrent,
        catchRate,
        ballMultiplier,
        status
    ) {
        const a =
            ((3 * hpTotal - 2 * hpCurrent) *
                catchRate *
                ballMultiplier *
                status) /
            (3 * hpTotal);
        if (a >= 255) return 1; // Captura garantida, como Master Ball

        return a / 255; // Chance de captura em porcentagem
    }

    // Atualiza a chance de captura sempre que alguma opção mudar
    useEffect(() => {
        if (
            infoStats &&
            BallType &&
            PokemonStatus &&
            PokemonHpCurrent !== null
        ) {
            const chance = calculateCatchRate(
                infoStats[0].base_stat,
                PokemonHpCurrent,
                captureRate,
                pokeBalls[BallType],
                statusMultipliers[PokemonStatus]
            );
            setCatchChance(chance);
        }
    }, [BallType, PokemonStatus, PokemonHpCurrent, captureRate, infoStats]);

    return (
        <S.Capture>
            <div>
                <div className="card-body p-0">
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <img
                                className="bg-danger rounded-circle me-3"
                                style={{ width: "60px", height: "60px" }}
                                src={imgPokeBall}
                                alt="Imagem Pokéball."
                            />
                            <h4 className="mb-3 text-dark">
                                Capture simulation
                            </h4>
                        </div>
                    </div>

                    <p className="mb-4">
                        Below you can roughly simulate the chances of catching
                        this pokemon. <br />
                        <span className="text-body-tertiary">
                            The calculation is made considering the Pokeball,
                            Status, and HP.
                        </span>
                    </p>

                    <div className="d-flex w-100 mb-1">
                        <select
                            className="form-select border border-black mb-2"
                            aria-label="Select Pokébola"
                            value={BallType}
                            onChange={(e) => {
                                setBallType(e.target.value);
                            }}
                        >
                            {Object.keys(pokeBalls).map((ball) => (
                                <option key={ball} value={ball}>
                                    {ball} {pokeBalls[ball]}x
                                </option>
                            ))}
                        </select>

                        <select
                            className="form-select border border-black mb-2 ms-2"
                            aria-label="Large select example"
                            value={PokemonStatus}
                            onChange={(e) => {
                                setPokemonStatus(e.target.value);
                            }}
                        >
                            {Object.keys(statusMultipliers).map((status) => (
                                <option key={status} value={status}>
                                    {status} {statusMultipliers[status]}x
                                </option>
                            ))}
                        </select>

                        <select
                            className="form-select border border-black mb-2 ms-2"
                            aria-label="Large select example"
                            value={PokemonHpCurrent}
                            onChange={(e) =>
                                setPokemonHpCurrent(e.target.value)
                            }
                        >
                            <option value={infoStats[0]?.base_stat}>
                                Full HP
                            </option>
                            <option value={infoStats[0]?.base_stat / 2}>
                                Half HP
                            </option>
                            <option value={1}>1 HP</option>
                        </select>
                    </div>

                    <div className="d-flex w-100 align-items-center">
                        <div className="fs-3 me-2">
                            <i className="bi bi-percent"></i>
                        </div>

                        <div
                            className="progress w-100"
                            role="progressbar"
                            aria-label="Example 20px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                                height: "38px",
                            }}
                        >
                            <div
                                className="progress-bar bg-primary-subtle"
                                style={{
                                    width: (catchChance * 100).toFixed(1) + "%",
                                }}
                            >
                                <span className="fs-6 text-primary-emphasis">
                                    {(catchChance * 100).toFixed(1)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="d-flex justify-content-end w-100">
                        Your chance of capture is{" "}
                        {(catchChance * 100).toFixed(1)}%
                    </p>
                </div>
            </div>
        </S.Capture>
    );
};

export default Capture;
