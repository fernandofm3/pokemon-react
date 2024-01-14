import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import * as S from "./styles";

function FilterStats({
    filterChangeCheckbox,
    clearFilterForm,
    setClearFilterForm,
}) {
    //Hp
    const [checkboxHpVeryLowStats, setCheckboxHpVeryLowStats] = useState(false);
    const [checkboxHpLowStats, setCheckboxHpLowStats] = useState(false);
    const [checkboxHpMediumStats, setCheckboxHpMediumStats] = useState(false);
    const [checkboxHpHighStats, setCheckboxHpHighStats] = useState(false);
    const [checkboxHpVeryHighStats, setCheckboxHpVeryHighStats] =
        useState(false);
    const [checkboxHpSuperStats, setCheckboxHpSuperStats] = useState(false);
    const [checkboxHpAllStats, setCheckboxHpAllStats] = useState(true);
    //Attack
    const [checkboxAttackVeryLowStats, setCheckboxAttackVeryLowStats] =
        useState(false);
    const [checkboxAttackLowStats, setCheckboxAttackLowStats] = useState(false);
    const [checkboxAttackMediumStats, setCheckboxAttackMediumStats] =
        useState(false);
    const [checkboxAttackHighStats, setCheckboxAttackHighStats] =
        useState(false);
    const [checkboxAttackVeryHighStats, setCheckboxAttackVeryHighStats] =
        useState(false);
    const [checkboxAttackSuperStats, setCheckboxAttackSuperStats] =
        useState(false);
    const [checkboxAttackAllStats, setCheckboxAttackAllStats] = useState(true);
    //Defense
    const [checkboxDefenseVeryLowStats, setCheckboxDefenseVeryLowStats] =
        useState(false);
    const [checkboxDefenseLowStats, setCheckboxDefenseLowStats] =
        useState(false);
    const [checkboxDefenseMediumStats, setCheckboxDefenseMediumStats] =
        useState(false);
    const [checkboxDefenseHighStats, setCheckboxDefenseHighStats] =
        useState(false);
    const [checkboxDefenseVeryHighStats, setCheckboxDefenseVeryHighStats] =
        useState(false);
    const [checkboxDefenseSuperStats, setCheckboxDefenseSuperStats] =
        useState(false);
    const [checkboxDefenseAllStats, setCheckboxDefenseAllStats] =
        useState(true);
    //Sp.Atk
    const [checkboxSpAtkVeryLowStats, setCheckboxSpAtkVeryLowStats] =
        useState(false);
    const [checkboxSpAtkLowStats, setCheckboxSpAtkLowStats] = useState(false);
    const [checkboxSpAtkMediumStats, setCheckboxSpAtkMediumStats] =
        useState(false);
    const [checkboxSpAtkHighStats, setCheckboxSpAtkHighStats] = useState(false);
    const [checkboxSpAtkVeryHighStats, setCheckboxSpAtkVeryHighStats] =
        useState(false);
    const [checkboxSpAtkSuperStats, setCheckboxSpAtkSuperStats] =
        useState(false);
    const [checkboxSpAtkAllStats, setCheckboxSpAtkAllStats] = useState(true);
    //Sp.Def
    const [checkboxSpDefVeryLowStats, setCheckboxSpDefVeryLowStats] =
        useState(false);
    const [checkboxSpDefLowStats, setCheckboxSpDefLowStats] = useState(false);
    const [checkboxSpDefMediumStats, setCheckboxSpDefMediumStats] =
        useState(false);
    const [checkboxSpDefHighStats, setCheckboxSpDefHighStats] = useState(false);
    const [checkboxSpDefVeryHighStats, setCheckboxSpDefVeryHighStats] =
        useState(false);
    const [checkboxSpDefSuperStats, setCheckboxSpDefSuperStats] =
        useState(false);
    const [checkboxSpDefAllStats, setCheckboxSpDefAllStats] = useState(true);
    //Speed
    const [checkboxSpeedVeryLowStats, setCheckboxSpeedVeryLowStats] =
        useState(false);
    const [checkboxSpeedLowStats, setCheckboxSpeedLowStats] = useState(false);
    const [checkboxSpeedMediumStats, setCheckboxSpeedMediumStats] =
        useState(false);
    const [checkboxSpeedHighStats, setCheckboxSpeedHighStats] = useState(false);
    const [checkboxSpeedVeryHighStats, setCheckboxSpeedVeryHighStats] =
        useState(false);
    const [checkboxSpeedSuperStats, setCheckboxSpeedSuperStats] =
        useState(false);
    const [checkboxSpeedAllStats, setCheckboxSpeedAllStats] = useState(true);

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            //HP
            setCheckboxHpVeryLowStats(false);
            setCheckboxHpLowStats(false);
            setCheckboxHpMediumStats(false);
            setCheckboxHpHighStats(false);
            setCheckboxHpVeryHighStats(false);
            setCheckboxHpSuperStats(false);
            setCheckboxHpAllStats(true);
            //Attack
            setCheckboxAttackVeryLowStats(false);
            setCheckboxAttackLowStats(false);
            setCheckboxAttackMediumStats(false);
            setCheckboxAttackHighStats(false);
            setCheckboxAttackVeryHighStats(false);
            setCheckboxAttackSuperStats(false);
            setCheckboxAttackAllStats(true);
            //Defense
            setCheckboxDefenseVeryLowStats(false);
            setCheckboxDefenseLowStats(false);
            setCheckboxDefenseMediumStats(false);
            setCheckboxDefenseHighStats(false);
            setCheckboxDefenseVeryHighStats(false);
            setCheckboxDefenseSuperStats(false);
            setCheckboxDefenseAllStats(true);
            //Sp.Atk
            setCheckboxSpAtkVeryLowStats(false);
            setCheckboxSpAtkLowStats(false);
            setCheckboxSpAtkMediumStats(false);
            setCheckboxSpAtkHighStats(false);
            setCheckboxSpAtkVeryHighStats(false);
            setCheckboxSpAtkSuperStats(false);
            setCheckboxSpAtkAllStats(true);
            //Sp.Def
            setCheckboxSpDefVeryLowStats(false);
            setCheckboxSpDefLowStats(false);
            setCheckboxSpDefMediumStats(false);
            setCheckboxSpDefHighStats(false);
            setCheckboxSpDefVeryHighStats(false);
            setCheckboxSpDefSuperStats(false);
            setCheckboxSpDefAllStats(true);
            //Speed
            setCheckboxSpeedVeryLowStats(false);
            setCheckboxSpeedLowStats(false);
            setCheckboxSpeedMediumStats(false);
            setCheckboxSpeedHighStats(false);
            setCheckboxSpeedVeryHighStats(false);
            setCheckboxSpeedSuperStats(false);
            setCheckboxSpeedAllStats(true);
        }
    }, [clearFilterForm]);

    return (
        <S.FilterStats>
            <div className="div-stats mb-3">
                <h5 className="filters-title mb-3">
                    <i className="bi bi-bar-chart-steps me-1"></i> Stats
                </h5>

                <div className="div-stats-main-checkbox">
                    <div>
                        <h6 data-tooltip-id="labelHp">HP</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpVeryLowStats"
                                id="sortByHpVeryLowStats"
                                checked={checkboxHpVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpVeryHighStats(false);
                                    setCheckboxHpSuperStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpLowStats"
                                id="sortByHpLowStats"
                                checked={checkboxHpLowStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpVeryHighStats(false);
                                    setCheckboxHpSuperStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpMediumStats"
                                id="sortByHpMediumStats"
                                checked={checkboxHpMediumStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpVeryHighStats(false);
                                    setCheckboxHpSuperStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpHighStats"
                                id="sortByHpHighStats"
                                checked={checkboxHpHighStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpVeryHighStats(false);
                                    setCheckboxHpSuperStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpVeryHighStats"
                                id="sortByHpVeryHighStats"
                                checked={checkboxHpVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpSuperStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortByHpStats"
                                value="sortByHpSuperStats"
                                id="sortByHpSuperStats"
                                checked={checkboxHpSuperStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpVeryHighStats(false);
                                    setCheckboxHpAllStats(false);

                                    setCheckboxHpSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortByHpStats"
                                value=""
                                id="sortByHpAllStats"
                                checked={checkboxHpAllStats}
                                onChange={(e) => {
                                    setCheckboxHpVeryLowStats(false);
                                    setCheckboxHpLowStats(false);
                                    setCheckboxHpMediumStats(false);
                                    setCheckboxHpHighStats(false);
                                    setCheckboxHpVeryHighStats(false);

                                    setCheckboxHpSuperStats(false);

                                    setCheckboxHpAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <h6 data-tooltip-id="labelAttack">Atk</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackVeryLowStats"
                                id="sortByAttackVeryLowStats"
                                checked={checkboxAttackVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackVeryHighStats(false);
                                    setCheckboxAttackSuperStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackLowStats"
                                id="sortByAttackLowStats"
                                checked={checkboxAttackLowStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackVeryHighStats(false);
                                    setCheckboxAttackSuperStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackMediumStats"
                                id="sortByAttackMediumStats"
                                checked={checkboxAttackMediumStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackVeryHighStats(false);
                                    setCheckboxAttackSuperStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackHighStats"
                                id="sortByAttackHighStats"
                                checked={checkboxAttackHighStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackVeryHighStats(false);
                                    setCheckboxAttackSuperStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackVeryHighStats"
                                id="sortByAttackVeryHighStats"
                                checked={checkboxAttackVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackSuperStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value="sortByAttackSuperStats"
                                id="sortByAttackSuperStats"
                                checked={checkboxAttackSuperStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackVeryHighStats(false);
                                    setCheckboxAttackAllStats(false);

                                    setCheckboxAttackSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortByAttackStats"
                                value=""
                                id="sortByAttackAllStats"
                                checked={checkboxAttackAllStats}
                                onChange={(e) => {
                                    setCheckboxAttackVeryLowStats(false);
                                    setCheckboxAttackLowStats(false);
                                    setCheckboxAttackMediumStats(false);
                                    setCheckboxAttackHighStats(false);
                                    setCheckboxAttackVeryHighStats(false);

                                    setCheckboxAttackSuperStats(false);

                                    setCheckboxAttackAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <h6 data-tooltip-id="labelDefense">Def</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseVeryLowStats"
                                id="sortByDefenseVeryLowStats"
                                checked={checkboxDefenseVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseVeryHighStats(false);
                                    setCheckboxDefenseSuperStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseLowStats"
                                id="sortByDefenseLowStats"
                                checked={checkboxDefenseLowStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseVeryHighStats(false);
                                    setCheckboxDefenseSuperStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseMediumStats"
                                id="sortByDefenseMediumStats"
                                checked={checkboxDefenseMediumStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseVeryHighStats(false);
                                    setCheckboxDefenseSuperStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseHighStats"
                                id="sortByDefenseHighStats"
                                checked={checkboxDefenseHighStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseVeryHighStats(false);
                                    setCheckboxDefenseSuperStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseVeryHighStats"
                                id="sortByDefenseVeryHighStats"
                                checked={checkboxDefenseVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseSuperStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value="sortByDefenseSuperStats"
                                id="sortByDefenseSuperStats"
                                checked={checkboxDefenseSuperStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseVeryHighStats(false);
                                    setCheckboxDefenseAllStats(false);

                                    setCheckboxDefenseSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortByDefenseStats"
                                value=""
                                id="sortByDefenseAllStats"
                                checked={checkboxDefenseAllStats}
                                onChange={(e) => {
                                    setCheckboxDefenseVeryLowStats(false);
                                    setCheckboxDefenseLowStats(false);
                                    setCheckboxDefenseMediumStats(false);
                                    setCheckboxDefenseHighStats(false);
                                    setCheckboxDefenseVeryHighStats(false);

                                    setCheckboxDefenseSuperStats(false);

                                    setCheckboxDefenseAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <h6 data-tooltip-id="labelSpAtk">SpA</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkVeryLowStats"
                                id="sortBySpAtkVeryLowStats"
                                checked={checkboxSpAtkVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);
                                    setCheckboxSpAtkSuperStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkLowStats"
                                id="sortBySpAtkLowStats"
                                checked={checkboxSpAtkLowStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);
                                    setCheckboxSpAtkSuperStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkMediumStats"
                                id="sortBySpAtkMediumStats"
                                checked={checkboxSpAtkMediumStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);
                                    setCheckboxSpAtkSuperStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkHighStats"
                                id="sortBySpAtkHighStats"
                                checked={checkboxSpAtkHighStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);
                                    setCheckboxSpAtkSuperStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkVeryHighStats"
                                id="sortBySpAtkVeryHighStats"
                                checked={checkboxSpAtkVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkSuperStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value="sortBySpAtkSuperStats"
                                id="sortBySpAtkSuperStats"
                                checked={checkboxSpAtkSuperStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);
                                    setCheckboxSpAtkAllStats(false);

                                    setCheckboxSpAtkSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortBySpAtkStats"
                                value=""
                                id="sortBySpAtkAllStats"
                                checked={checkboxSpAtkAllStats}
                                onChange={(e) => {
                                    setCheckboxSpAtkVeryLowStats(false);
                                    setCheckboxSpAtkLowStats(false);
                                    setCheckboxSpAtkMediumStats(false);
                                    setCheckboxSpAtkHighStats(false);
                                    setCheckboxSpAtkVeryHighStats(false);

                                    setCheckboxSpAtkSuperStats(false);

                                    setCheckboxSpAtkAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <h6 data-tooltip-id="labelSpDef">SpD</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefVeryLowStats"
                                id="sortBySpDefVeryLowStats"
                                checked={checkboxSpDefVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefVeryHighStats(false);
                                    setCheckboxSpDefSuperStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefLowStats"
                                id="sortBySpDefLowStats"
                                checked={checkboxSpDefLowStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefVeryHighStats(false);
                                    setCheckboxSpDefSuperStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefMediumStats"
                                id="sortBySpDefMediumStats"
                                checked={checkboxSpDefMediumStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefVeryHighStats(false);
                                    setCheckboxSpDefSuperStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefHighStats"
                                id="sortBySpDefHighStats"
                                checked={checkboxSpDefHighStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefVeryHighStats(false);
                                    setCheckboxSpDefSuperStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefVeryHighStats"
                                id="sortBySpDefVeryHighStats"
                                checked={checkboxSpDefVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefSuperStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value="sortBySpDefSuperStats"
                                id="sortBySpDefSuperStats"
                                checked={checkboxSpDefSuperStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefVeryHighStats(false);
                                    setCheckboxSpDefAllStats(false);

                                    setCheckboxSpDefSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortBySpDefStats"
                                value=""
                                id="sortBySpDefAllStats"
                                checked={checkboxSpDefAllStats}
                                onChange={(e) => {
                                    setCheckboxSpDefVeryLowStats(false);
                                    setCheckboxSpDefLowStats(false);
                                    setCheckboxSpDefMediumStats(false);
                                    setCheckboxSpDefHighStats(false);
                                    setCheckboxSpDefVeryHighStats(false);

                                    setCheckboxSpDefSuperStats(false);

                                    setCheckboxSpDefAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <h6 data-tooltip-id="labelSpeed">Spe</h6>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-low me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedVeryLowStats"
                                id="sortBySpeedVeryLowStats"
                                checked={checkboxSpeedVeryLowStats}
                                onChange={(e) => {
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedVeryHighStats(false);
                                    setCheckboxSpeedSuperStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedVeryLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input low me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedLowStats"
                                id="sortBySpeedLowStats"
                                checked={checkboxSpeedLowStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedVeryHighStats(false);
                                    setCheckboxSpeedSuperStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedLowStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input medium me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedMediumStats"
                                id="sortBySpeedMediumStats"
                                checked={checkboxSpeedMediumStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedVeryHighStats(false);
                                    setCheckboxSpeedSuperStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedMediumStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input high me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedHighStats"
                                id="sortBySpeedHighStats"
                                checked={checkboxSpeedHighStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedVeryHighStats(false);
                                    setCheckboxSpeedSuperStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check mb-1">
                            <input
                                className="form-check-input very-high me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedVeryHighStats"
                                id="sortBySpeedVeryHighStats"
                                checked={checkboxSpeedVeryHighStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedSuperStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedVeryHighStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input super me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value="sortBySpeedSuperStats"
                                id="sortBySpeedSuperStats"
                                checked={checkboxSpeedSuperStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedVeryHighStats(false);
                                    setCheckboxSpeedAllStats(false);

                                    setCheckboxSpeedSuperStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input stats-all me-2"
                                type="radio"
                                name="sortBySpeedStats"
                                value=""
                                id="sortBySpeedAllStats"
                                checked={checkboxSpeedAllStats}
                                onChange={(e) => {
                                    setCheckboxSpeedVeryLowStats(false);
                                    setCheckboxSpeedLowStats(false);
                                    setCheckboxSpeedMediumStats(false);
                                    setCheckboxSpeedHighStats(false);
                                    setCheckboxSpeedVeryHighStats(false);

                                    setCheckboxSpeedSuperStats(false);

                                    setCheckboxSpeedAllStats(
                                        e.currentTarget.checked
                                    );
                                    filterChangeCheckbox(e);
                                    setClearFilterForm(false);
                                }}
                            />
                        </div>
                    </div>

                    <div className="div-stats-label">
                        <label className="label-very-low">
                            <i className="bi bi-lightning-charge"></i> Very Low
                        </label>
                        <label className="label-low">
                            <i className="bi bi-lightning-charge"></i> Low
                        </label>
                        <label className="label-medium">
                            <i className="bi bi-lightning-charge-fill"></i>{" "}
                            Medium
                        </label>
                        <label className="label-high">
                            <i className="bi bi-lightning"></i> High
                        </label>
                        <label className="label-very-high">
                            <i className="bi bi-lightning"></i> Very High
                        </label>
                        <label className="label-super">
                            <i className="bi bi-lightning-fill"></i> Super
                        </label>
                        <label className="label-all">
                            <i className="bi bi-lightning-fill"></i> All
                        </label>
                    </div>
                </div>
            </div>

            <ReactTooltip id="labelHp" place="top" content="HP" />
            <ReactTooltip id="labelAttack" place="top" content="Attack" />
            <ReactTooltip id="labelDefense" place="top" content="Defense" />
            <ReactTooltip
                id="labelSpAtk"
                place="top"
                content="Special Attack"
            />
            <ReactTooltip
                id="labelSpDef"
                place="top"
                content="Special Defense"
            />
            <ReactTooltip id="labelSpeed" place="top" content="Speed" />
        </S.FilterStats>
    );
}

export default FilterStats;
