import React, { useState } from "react";
import * as S from "./styles";
import { logDOM } from "@testing-library/react";

function PokeInformations(props) {
    //Recuperando os valores dos Genders em porcentagem com uma base máxima de 8 para ser Female. Conta usada regra de 3.
    function findValueGenderInPercentage(value) {
        let result = (value * 100) / 8;
        return result;
    }

    function calculateCatchRate(hpTotal, hpCurrent, catchRate, ballMultiplier) {
        const a =
            ((3 * hpTotal - 2 * hpCurrent) * catchRate * ballMultiplier) /
            (3 * hpTotal);
        if (a >= 255) return 1; // Captura garantida, como Master Ball
        return a / 255; // Chance de captura em porcentagem
    }

    // Função para determinar a classificação e a frase com base na Base Friendship
    const getFriendshipClassification = (friendship) => {
        if (friendship >= 0 && friendship <= 49) {
            return (
                <div>
                    <h5 className="card-title">Poor</h5>
                    <p className="card-text">It seems to dislike you.</p>
                </div>
            );
        } else if (friendship >= 50 && friendship <= 99) {
            return (
                <div>
                    <h5 className="card-title">Normal</h5>
                    <p className="card-text">It is getting used to you.</p>
                </div>
            );
        } else if (friendship >= 100 && friendship <= 149) {
            return (
                <div>
                    <h5 className="card-title">Good</h5>
                    <p className="card-text">It likes you quite a bit!</p>
                </div>
            );
        } else if (friendship >= 150 && friendship <= 199) {
            return (
                <div>
                    <h5 className="card-title">Great</h5>
                    <p className="card-text">It loves you!</p>
                </div>
            );
        } else if (friendship >= 200 && friendship <= 255) {
            return (
                <div>
                    <h5 className="card-title">Max</h5>
                    <p className="card-text">
                        It is extremely attached to you! It must love you a lot.
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <h5 className="card-title">Unknown</h5>
                    <p className="card-text">
                        Friendship value out of valid range.
                    </p>
                </div>
            );
        }
    };

    //Verifica a chance de captura do Pokemon
    const pokeBalls = {
        PokeBall: 1,
        GreatBall: 1.5,
        UltraBall: 2,
        MasterBall: 255,
        SafariBall: 1.5,
        NetBall: 3, // Eficaz contra Pokémon de água e inseto
        DiveBall: 3.5, // Eficaz contra Pokémon encontrados debaixo d'água
        NestBall: 1, // Fator de captura variável: (40 - nível do Pokémon) / 10
        RepeatBall: 3.5, // Eficaz contra Pokémon já capturados
        TimerBall: 1, // Fator de captura aumenta com o número de turnos: +1 a cada 10 turnos
        LuxuryBall: 1, // Aumenta a amizade do Pokémon capturado
        PremierBall: 1,
        DuskBall: 3, // Eficaz em cavernas e à noite
        HealBall: 1, // Cura o Pokémon capturado ao máximo
        QuickBall: 5, // Eficaz se usada no primeiro turno da batalha
        CherishBall: 1, // Usada para distribuir Pokémon em eventos especiais
        FastBall: 4, // Eficaz contra Pokémon rápidos (com Speed base maior ou igual a 100)
        LevelBall: 1, // Fator de captura variável baseado no nível do seu Pokémon comparado ao nível do Pokémon selvagem
        LureBall: 3, // Eficaz contra Pokémon pescados
        HeavyBall: 1, // Fator de captura variável: +20, +30, ou +40 se o Pokémon for pesado; -20 se for leve
        LoveBall: 8, // Eficaz contra Pokémon do sexo oposto ao do seu Pokémon
        MoonBall: 4, // Eficaz contra Pokémon que evoluem com a Pedra da Lua
        FriendBall: 1, // Aumenta a amizade do Pokémon capturado
        DreamBall: 4, // Usada em Pokémon adormecidos (geralmente em Dream World ou Max Raid Battles)
        BeastBall: 0.1, // Eficaz contra Ultra Beasts (10x captura)
    };

    const [ballType, setBallType] = useState("PokeBall");

    const handleBallTypeChange = (e) => setBallType(e.target.value);

    const catchChance = calculateCatchRate(
        props.hp,
        props.hp,
        props.captureRate,
        pokeBalls[ballType]
    );

    return (
        <S.PokeInformations>
            <div className="poke-data">
                {/* <h6>Data</h6> */}

                <div className="card text-bg-primary mb-3">
                    <div className="card-header">Genres</div>
                    <div className="card-body">
                        <h5 className="card-title">{props.genres}</h5>
                    </div>
                </div>

                <div className="card text-bg-primary mb-3">
                    <div className="card-header">Height</div>
                    <div className="card-body">
                        <h5 className="card-title">{props.height} M</h5>
                    </div>
                </div>

                <div className="card text-bg-primary mb-3">
                    <div className="card-header">Weight</div>
                    <div className="card-body">
                        <h5 className="card-title">{props.weight} kg</h5>
                    </div>
                </div>

                <div className="card text-bg-primary mb-3">
                    <div className="card-header">Abilities</div>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">
                            {props.abilities}
                        </h5>
                    </div>
                </div>
                <div className="card text-bg-primary mb-3">
                    <div className="card-header">Habitat</div>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">
                            {props.habitat}
                        </h5>
                    </div>
                </div>
            </div>

            <div className="poke-training">
                {/* <h6>Training</h6> */}

                <div className="card border-light mb-3">
                    <div className="card-header">TRAINING</div>
                    <div className="card-body p-0 pt-3">
                        <div className="mb-4">
                            <div className="d-flex align-items-end">
                                <h3>
                                    <span className="badge text-bg-primary">
                                        {props.captureRate}
                                    </span>
                                </h3>
                                <h5>
                                    <span className="badge text-bg-light">
                                        Catch rate
                                    </span>
                                </h5>
                            </div>

                            <div>
                                <p>
                                    * The formula below is based on the chosen
                                    Pokeball and with HP at 100%.
                                </p>
                            </div>

                            <div className="div-main-capture">
                                <div className="div-select-pokeball">
                                    <select
                                        className="form-select mb-2"
                                        aria-label="Large select example"
                                        value={ballType}
                                        onChange={handleBallTypeChange}
                                    >
                                        {Object.keys(pokeBalls).map((ball) => (
                                            <option key={ball} value={ball}>
                                                {ball}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="div-calc-catch-rate">
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Example 20px high"
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ height: "38px" }}
                                    >
                                        <div
                                            className="progress-bar bg-primary-subtle"
                                            style={{
                                                width:
                                                    (catchChance * 100).toFixed(
                                                        1
                                                    ) + "%",
                                            }}
                                        >
                                            <span className="fs-6 text-primary-emphasis">
                                                {(catchChance * 100).toFixed(1)}
                                                %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end w-100 text-secondary">
                                Your chance of capture is{" "}
                                {(catchChance * 100).toFixed(1)}%
                            </div>
                        </div>

                        <div className="div-cards-training">
                            <div className="card border-light bg-secondary-subtle mb-3">
                                <div className="card-header border border-0">
                                    Base Friendship
                                </div>
                                <div className="card-body">
                                    {getFriendshipClassification(
                                        props.baseHappiness
                                    )}
                                </div>
                            </div>

                            <div className="card border-light bg-secondary-subtle mb-3">
                                <div className="card-header border border-0">
                                    Base Exp.
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{props.xp}</h5>
                                </div>
                            </div>

                            <div className="card border-light bg-secondary-subtle mb-3">
                                <div className="card-header border border-0">
                                    Growth Rate
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-capitalize">
                                        {props.growthRate}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-light">
                    <div className="card-header ps-1">BREEDING</div>
                    <div className="card-body p-0 pt-3">
                        <div className="card border-light bg-body-secondary mb-3">
                            <div className="card-header border border-0">
                                Egg Groups
                            </div>
                            <div className="card-body">
                                {props.eggGroups.map((egg) => {
                                    return (
                                        <h5
                                            className="card-title text-capitalize"
                                            key={egg.name}
                                        >
                                            * {egg.name}
                                        </h5>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="card border-light bg-body-secondary mb-3">
                            {/* <div className="card-header border border-0">
                                Egg Groups
                            </div> */}
                            <div className="card-body">
                                <div className="poke-breeding">
                                    {props.gender === -1 ? (
                                        <div className="div-gender">
                                            <div className="div-gender-percentage">
                                                <div>
                                                    <p>Genderless</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="div-gender">
                                            <div className="div-gender-percentage">
                                                <div>
                                                    <i className="bi bi-gender-female"></i>
                                                    <p>
                                                        Female{" "}
                                                        {findValueGenderInPercentage(
                                                            props.gender
                                                        )}
                                                        %
                                                    </p>
                                                </div>
                                                <div>
                                                    <i className="bi bi-gender-male"></i>
                                                    <p>
                                                        Male{" "}
                                                        {findValueGenderInPercentage(
                                                            8 - props.gender
                                                        )}
                                                        %
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </S.PokeInformations>
    );
}

export default PokeInformations;
