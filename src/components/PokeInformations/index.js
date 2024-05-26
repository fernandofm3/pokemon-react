import React, { useState } from "react";
import * as S from "./styles";
import imgPokeBall from "../../assets/pokeball.png";

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
                    <h5 className="card-title">{friendship} / Poor</h5>
                    <p className="card-text">It seems to dislike you.</p>
                </div>
            );
        } else if (friendship >= 50 && friendship <= 99) {
            return (
                <div>
                    <h5 className="card-title">{friendship} / Normal</h5>
                    <p className="card-text">It is getting used to you.</p>
                </div>
            );
        } else if (friendship >= 100 && friendship <= 149) {
            return (
                <div>
                    <h5 className="card-title">{friendship} / Good</h5>
                    <p className="card-text">It likes you quite a bit!</p>
                </div>
            );
        } else if (friendship >= 150 && friendship <= 199) {
            return (
                <div>
                    <h5 className="card-title">{friendship} / Great</h5>
                    <p className="card-text">It loves you!</p>
                </div>
            );
        } else if (friendship >= 200 && friendship <= 255) {
            return (
                <div>
                    <h5 className="card-title">{friendship} / Max</h5>
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
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-data-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-data"
                        type="button"
                        role="tab"
                        aria-controls="nav-data"
                        aria-selected="true"
                    >
                        DATA
                    </button>
                    <button
                        className="nav-link"
                        id="nav-training-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-training"
                        type="button"
                        role="tab"
                        aria-controls="nav-training"
                        aria-selected="false"
                    >
                        TRAINING
                    </button>
                    <button
                        className="nav-link"
                        id="nav-breeding-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-breeding"
                        type="button"
                        role="tab"
                        aria-controls="nav-breeding"
                        aria-selected="false"
                    >
                        BREEDING
                    </button>
                </div>
            </nav>

            <div className="tab-content pt-4" id="nav-tabContent">
                {/*Data*/}
                <div
                    className="tab-pane fade show active"
                    id="nav-data"
                    role="tabpanel"
                    aria-labelledby="nav-data-tab"
                    tabIndex="0"
                >
                    <div className="poke-data">
                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-diagram-3-fill me-2"></i>{" "}
                                Species
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{props.genres}</h5>
                            </div>
                        </div>

                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-rulers me-2"></i> Height
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{props.height} M</h5>
                            </div>
                        </div>

                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-box-fill me-2"></i> Weight
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {props.weight} kg
                                </h5>
                            </div>
                        </div>

                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-image-alt me-2"></i>
                                Habitat
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">
                                    {props.habitat}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card text-bg-light border-black mb-3">
                        <div className="card-header">
                            <i className="bi bi-tornado me-2"></i> Abilities
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">
                                {props.abilities}
                            </h5>
                        </div>
                    </div>
                </div>
                {/*Training*/}
                <div
                    className="tab-pane fade"
                    id="nav-training"
                    role="tabpanel"
                    aria-labelledby="nav-training-tab"
                    tabIndex="0"
                >
                    <div className="mb-4">
                        <div className="d-flex align-items-end">
                            <h3>
                                <span className="badge text-bg-primary">
                                    Catch Rate | {props.captureRate}
                                </span>
                            </h3>
                        </div>

                        <div className="mt-1">
                            <p className="text-secondary">
                                {/* * This Pokémon has a Capture Rate of 45. <br /> */}
                                Below you can simulate the chance of capture
                                based on the Poké Ball chosen. <br />
                                <span className="text-body-tertiary">
                                    The calculation is made considering the HP
                                    at 100%.
                                </span>
                            </p>
                        </div>

                        <div className="div-main-capture">
                            <div className="div-select-pokeball">
                                <img src={imgPokeBall} alt="Imagem Pokéball." />
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
                                <i className="bi bi-percent"></i>
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
                                                (catchChance * 100).toFixed(1) +
                                                "%",
                                        }}
                                    >
                                        <span className="fs-6 text-primary-emphasis">
                                            {(catchChance * 100).toFixed(1)}
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
                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-heart-half me-2"></i> Base
                                Friendship
                            </div>
                            <div className="card-body">
                                {getFriendshipClassification(
                                    props.baseHappiness
                                )}
                            </div>
                        </div>

                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-hourglass-split me-2"></i>{" "}
                                Base Exp.
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{props.xp}</h5>
                            </div>
                        </div>

                        <div className="card text-bg-light border-black mb-3">
                            <div className="card-header">
                                <i className="bi bi-graph-up-arrow me-2"></i>{" "}
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
                {/*Breeding*/}
                <div
                    className="tab-pane fade"
                    id="nav-breeding"
                    role="tabpanel"
                    aria-labelledby="nav-breeding-tab"
                    tabIndex="0"
                >
                    <div className="card text-bg-light border-black mb-3">
                        <div className="card-header">
                            <i className="bi bi-egg-fill me-2"></i> Egg Groups
                        </div>
                        <div className="card-body">
                            {props.eggGroups.map((egg) => {
                                return (
                                    <h5
                                        className="card-title text-capitalize"
                                        key={egg.name}
                                    >
                                        {egg.name}
                                    </h5>
                                );
                            })}
                        </div>
                    </div>

                    <div className="card text-bg-light border-black mb-3">
                        <div className="card-header">
                            <i className="bi bi-gender-ambiguous me-2"></i>{" "}
                            Gender
                        </div>
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
        </S.PokeInformations>
    );
}

export default PokeInformations;
