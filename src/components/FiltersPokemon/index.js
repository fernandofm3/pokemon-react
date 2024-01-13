import React, { useState, useEffect } from "react";
import api from "../../services/api";
import imgSmallHeight from "../../assets/small-height.png";
import imgMediumHeight from "../../assets/medium-height.png";
import imgTallHeight from "../../assets/tall-height.png";
import imgWeight from "../../assets/weight.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import * as S from "./styles";

const FiltersPokemon = ({
    DataFilter,
    OriginalData,
    setData,
    setRemoveLoading,
    setNumberFeaturedPokemon,
}) => {
    useEffect(() => {
        //Buscando a lista com os nomes do TIPOS de Pokemons
        api.get(`/type`).then((response) => {
            setListNameType(response.data.results);
        });
    }, []);

    //Lista de tipos
    const [ListNameType, setListNameType] = useState([]);

    const [FilterAplly, setFilterAplly] = useState(false);
    const [ClearFilter, setClearFilter] = useState(false);

    //Referente as classificações
    const [sortByCategory, setSortByCategory] = useState("");

    //Referente a altura
    const [chekedSmallHeight, setChekedSmallHeight] = useState(false);
    const [chekedMediumHeight, setChekedMediumHeight] = useState(false);
    const [chekedTallHeight, setChekedTallHeight] = useState(false);
    const [chekedAllHeight, setChekedAllHeight] = useState(true);

    //Referente ao peso
    const [chekedLightweight, setChekedLightweight] = useState(false);
    const [chekedMediumWeight, setChekedMediumWeight] = useState(false);
    const [chekedHeavyWeight, setChekedHeavyWeight] = useState(false);
    const [chekedAllWeight, setChekedAllWeight] = useState(true);

    //Referente aos tipos dos pokemons
    const [sortByTypes, setSortByTypes] = useState("");

    //Referente as estatisticas de poder
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

    //Objeto de filtros com valores padrão
    const [FiltersObject, setFiltersObject] = useState({
        sortByCategory: "",
        sortByHeight: "",
        sortByWeight: "",
        sortByTypes: "",
        //Hp
        sortByHpStats: "",
        //Attack
        sortByAttackStats: "",
        //Defense
        sortByDefenseStats: "",
        //Sp.Atk
        sortBySpAtkStats: "",
        //Sp.Def
        sortBySpDefStats: "",
        //Spees
        sortBySpeedStats: "",
    });

    const [ShowBtnAplly, setShowBtnAplly] = useState(
        "btn btn-sm btn-success invisible me-2"
    );

    //Adiciona o valor true ou false no objeto de filtros.
    //Se o usuário checou adiciona true se não checgou adiciona false.
    const filterChangeCheckbox = (e) => {
        const { name, checked, value } = e.target;

        if (checked === true) {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: value,
            }));
        }

        if (checked === false) {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: checked,
            }));
        }

        console.log(FiltersObject);
    };

    //Adiciona o valor digitado pelo usuário no objeto de filtros.
    const filterChangeInput = (e) => {
        const { name, value } = e.target;

        if (value !== "") {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: value,
            }));
        }

        if (value === "") {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: "",
            }));
        }

        console.log(FiltersObject);
    };

    //Coloca os valores padrões no objeto de Filters.
    const clearFilter = () => {
        let filterName = Object.keys(FiltersObject);
        let filterValues = Object.values(FiltersObject);

        for (let i = 0; i < filterName.length; i++) {
            if (filterValues[i] === true || filterValues[i] === false) {
                setFiltersObject((Filters) => ({
                    ...Filters,
                    [filterName[i]]: false,
                }));
            } else {
                setFiltersObject((Filters) => ({
                    ...Filters,
                    [filterName[i]]: "",
                }));
            }
        }

        //props.setLoading(false);
    };

    //Procura no objeto "Filters" algum status true
    useEffect(() => {
        let filterStatus = Object.values(FiltersObject);

        for (let i = 0; i < filterStatus.length; i++) {
            if (
                filterStatus[i] === true ||
                (filterStatus[i] !== true &&
                    filterStatus[i] !== false &&
                    filterStatus[i] !== "")
            ) {
                setShowBtnAplly("btn btn-success visible");

                break;
            } else {
                setShowBtnAplly("btn btn-success invisible");
            }
        }
    }, [FiltersObject]);

    //Filtra o Array atual dos pokemons conforme a escolha do usuário.
    useEffect(() => {
        //console.log("Precisa aplicar o filtro!");

        if (FilterAplly === true) {
            // Filtrar os Products com base nos critérios selecionados
            let newFilteredArray = DataFilter.filter((pokemon) => {
                console.log(pokemon);

                //Variaveis com valor padrão para os filtro
                //Altura
                let heightUpTo1 = Infinity;
                let heightUpTo2 = Infinity;
                let heightGreaterThan1 = 0;
                let heightGreaterThan2 = 0;

                //Peso
                let weightUpTo45 = Infinity;
                let weightUpTo230 = Infinity;
                let weightGreaterThan45 = 0;
                let weightGreaterThan230 = 0;

                //Tipos
                let type = "";

                //Stats
                //HP
                let hpVeryLowStats = Infinity;
                let hpLowStats = 0;
                let hpLowStatsMax = Infinity;
                let hpMediumStats = 0;
                let hpMediumStatsMax = Infinity;
                let hpHighStats = 0;
                let hpHighStatsMax = Infinity;
                let hpVeryHighStats = 0;
                let hpVeryHighStatsMax = Infinity;
                let hpSuperStats = 0;
                let hpSuperStatsMax = Infinity;
                //Attack
                let attackVeryLowStats = Infinity;
                let attackLowStats = 0;
                let attackLowStatsMax = Infinity;
                let attackMediumStats = 0;
                let attackMediumStatsMax = Infinity;
                let attackHighStats = 0;
                let attackHighStatsMax = Infinity;
                let attackVeryHighStats = 0;
                let attackVeryHighStatsMax = Infinity;
                let attackSuperStats = 0;
                let attackSuperStatsMax = Infinity;
                //Defense
                let defenseVeryLowStats = Infinity;
                let defenseLowStats = 0;
                let defenseLowStatsMax = Infinity;
                let defenseMediumStats = 0;
                let defenseMediumStatsMax = Infinity;
                let defenseHighStats = 0;
                let defenseHighStatsMax = Infinity;
                let defenseVeryHighStats = 0;
                let defenseVeryHighStatsMax = Infinity;
                let defenseSuperStats = 0;
                let defenseSuperStatsMax = Infinity;
                //Sp.Atk
                let spAtkVeryLowStats = Infinity;
                let spAtkLowStats = 0;
                let spAtkLowStatsMax = Infinity;
                let spAtkMediumStats = 0;
                let spAtkMediumStatsMax = Infinity;
                let spAtkHighStats = 0;
                let spAtkHighStatsMax = Infinity;
                let spAtkVeryHighStats = 0;
                let spAtkVeryHighStatsMax = Infinity;
                let spAtkSuperStats = 0;
                let spAtkSuperStatsMax = Infinity;
                //Sp.Def
                let spDefVeryLowStats = Infinity;
                let spDefLowStats = 0;
                let spDefLowStatsMax = Infinity;
                let spDefMediumStats = 0;
                let spDefMediumStatsMax = Infinity;
                let spDefHighStats = 0;
                let spDefHighStatsMax = Infinity;
                let spDefVeryHighStats = 0;
                let spDefVeryHighStatsMax = Infinity;
                let spDefSuperStats = 0;
                let spDefSuperStatsMax = Infinity;
                //Speed
                let speedVeryLowStats = Infinity;
                let speedLowStats = 0;
                let speedLowStatsMax = Infinity;
                let speedMediumStats = 0;
                let speedMediumStatsMax = Infinity;
                let speedHighStats = 0;
                let speedHighStatsMax = Infinity;
                let speedVeryHighStats = 0;
                let speedVeryHighStatsMax = Infinity;
                let speedSuperStats = 0;
                let speedSuperStatsMax = Infinity;

                //Verifica se o filtro foi ativado
                //Filtro referente a altura do pokemon
                if (FiltersObject.sortByHeight !== "") {
                    if (FiltersObject.sortByHeight === "heightUpTo1") {
                        heightUpTo1 = 1;
                    }

                    if (
                        FiltersObject.sortByHeight === "heightGreaterThan1UpTo2"
                    ) {
                        heightGreaterThan1 = 1;
                        heightUpTo2 = 2;
                    }

                    if (FiltersObject.sortByHeight === "heightGreaterThan2") {
                        heightGreaterThan2 = 2;
                    }
                }

                //Filtro referente ao peso do pokemon
                if (FiltersObject.sortByWeight !== "") {
                    if (FiltersObject.sortByWeight === "weightUpTo45") {
                        weightUpTo45 = 45;
                    }

                    if (
                        FiltersObject.sortByWeight ===
                        "weightGreaterThan45UpTo230"
                    ) {
                        weightGreaterThan45 = 45;
                        weightUpTo230 = 230;
                    }

                    if (FiltersObject.sortByWeight === "weightGreaterThan230") {
                        weightGreaterThan230 = 230;
                    }
                }

                //Filtro referente ao tipo do pokemon
                if (FiltersObject.sortByTypes !== "") {
                    pokemon.types.map((t) => {
                        if (t.type.name === FiltersObject.sortByTypes) {
                            type = t.type.name;
                        }
                    });
                }

                //Filtro referente a estatistica HP do pokemon
                if (FiltersObject.sortByHpStats !== "") {
                    if (
                        FiltersObject.sortByHpStats === "sortByHpVeryLowStats"
                    ) {
                        hpVeryLowStats = 30;
                    }
                    if (FiltersObject.sortByHpStats === "sortByHpLowStats") {
                        hpLowStats = 30;
                        hpLowStatsMax = 60;
                    }
                    if (FiltersObject.sortByHpStats === "sortByHpMediumStats") {
                        hpMediumStats = 60;
                        hpMediumStatsMax = 90;
                    }
                    if (FiltersObject.sortByHpStats === "sortByHpHighStats") {
                        hpHighStats = 90;
                        hpHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortByHpStats === "sortByHpVeryHighStats"
                    ) {
                        hpVeryHighStats = 120;
                        hpVeryHighStatsMax = 150;
                    }
                    if (FiltersObject.sortByHpStats === "sortByHpSuperStats") {
                        hpSuperStats = 150;
                    }
                }

                //Filtro referente a estatistica Attack do pokemon
                if (FiltersObject.sortByAttackStats !== "") {
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackVeryLowStats"
                    ) {
                        attackVeryLowStats = 30;
                    }
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackLowStats"
                    ) {
                        attackLowStats = 30;
                        attackLowStatsMax = 60;
                    }
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackMediumStats"
                    ) {
                        attackMediumStats = 60;
                        attackMediumStatsMax = 90;
                    }
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackHighStats"
                    ) {
                        attackHighStats = 90;
                        attackHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackVeryHighStats"
                    ) {
                        attackVeryHighStats = 120;
                        attackVeryHighStatsMax = 150;
                    }
                    if (
                        FiltersObject.sortByAttackStats ===
                        "sortByAttackSuperStats"
                    ) {
                        attackSuperStats = 150;
                    }
                }

                //Filtro referente a estatistica Defense do pokemon
                if (FiltersObject.sortByDefenseStats !== "") {
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseVeryLowStats"
                    ) {
                        defenseVeryLowStats = 30;
                    }
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseLowStats"
                    ) {
                        defenseLowStats = 30;
                        defenseLowStatsMax = 60;
                    }
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseMediumStats"
                    ) {
                        defenseMediumStats = 60;
                        defenseMediumStatsMax = 90;
                    }
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseHighStats"
                    ) {
                        defenseHighStats = 90;
                        defenseHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseVeryHighStats"
                    ) {
                        defenseVeryHighStats = 120;
                        defenseVeryHighStatsMax = 150;
                    }
                    if (
                        FiltersObject.sortByDefenseStats ===
                        "sortByDefenseSuperStats"
                    ) {
                        defenseSuperStats = 150;
                    }
                }

                //Filtro referente a estatistica Sp.Atk do pokemon
                if (FiltersObject.sortBySpAtkStats !== "") {
                    if (
                        FiltersObject.sortBySpAtkStats ===
                        "sortBySpAtkVeryLowStats"
                    ) {
                        spAtkVeryLowStats = 30;
                    }
                    if (
                        FiltersObject.sortBySpAtkStats === "sortBySpAtkLowStats"
                    ) {
                        spAtkLowStats = 30;
                        spAtkLowStatsMax = 60;
                    }
                    if (
                        FiltersObject.sortBySpAtkStats ===
                        "sortBySpAtkMediumStats"
                    ) {
                        spAtkMediumStats = 60;
                        spAtkMediumStatsMax = 90;
                    }
                    if (
                        FiltersObject.sortBySpAtkStats ===
                        "sortBySpAtkHighStats"
                    ) {
                        spAtkHighStats = 90;
                        spAtkHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortBySpAtkStats ===
                        "sortBySpAtkVeryHighStats"
                    ) {
                        spAtkVeryHighStats = 120;
                        spAtkVeryHighStatsMax = 150;
                    }
                    if (
                        FiltersObject.sortBySpAtkStats ===
                        "sortBySpAtkSuperStats"
                    ) {
                        spAtkSuperStats = 150;
                    }
                }

                //Filtro referente a estatistica Sp.Def do pokemon
                if (FiltersObject.sortBySpDefStats !== "") {
                    if (
                        FiltersObject.sortBySpDefStats ===
                        "sortBySpDefVeryLowStats"
                    ) {
                        spDefVeryLowStats = 30;
                    }
                    if (
                        FiltersObject.sortBySpDefStats === "sortBySpDefLowStats"
                    ) {
                        spDefLowStats = 30;
                        spDefLowStatsMax = 60;
                    }
                    if (
                        FiltersObject.sortBySpDefStats ===
                        "sortBySpDefMediumStats"
                    ) {
                        spDefMediumStats = 60;
                        spDefMediumStatsMax = 90;
                    }
                    if (
                        FiltersObject.sortBySpDefStats ===
                        "sortBySpDefHighStats"
                    ) {
                        spDefHighStats = 90;
                        spDefHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortBySpDefStats ===
                        "sortBySpDefVeryHighStats"
                    ) {
                        spDefVeryHighStats = 120;
                        spDefVeryHighStatsMax = 150;
                    }
                    if (
                        FiltersObject.sortBySpDefStats ===
                        "sortBySpDefSuperStats"
                    ) {
                        spDefSuperStats = 150;
                    }
                }

                //Filtro referente a estatistica Speed do pokemon
                if (FiltersObject.sortBySpeedStats !== "") {
                    if (
                        FiltersObject.sortBySpeedStats ===
                        "sortBySpeedVeryLowStats"
                    ) {
                        speedVeryLowStats = 30;
                    }
                    if (
                        FiltersObject.sortBySpeedStats === "sortBySpeedLowStats"
                    ) {
                        speedLowStats = 30;
                        speedLowStatsMax = 60;
                    }
                    if (
                        FiltersObject.sortBySpeedStats ===
                        "sortBySpeedMediumStats"
                    ) {
                        speedMediumStats = 60;
                        speedMediumStatsMax = 90;
                    }
                    if (
                        FiltersObject.sortBySpeedStats ===
                        "sortBySpeedHighStats"
                    ) {
                        speedHighStats = 90;
                        speedHighStatsMax = 120;
                    }
                    if (
                        FiltersObject.sortBySpeedStats ===
                        "sortBySpeedVeryHighStats"
                    ) {
                        speedVeryHighStats = 120;
                        speedVeryHighStatsMax = 150;
                    }
                    if (
                        FiltersObject.sortBySpeedStats ===
                        "sortBySpeedSuperStats"
                    ) {
                        speedSuperStats = 150;
                    }
                }

                return (
                    //Filtra a altura do pokemon
                    pokemon.height / 10 <= heightUpTo1 &&
                    pokemon.height / 10 > heightGreaterThan1 &&
                    pokemon.height / 10 <= heightUpTo2 &&
                    pokemon.height / 10 > heightGreaterThan2 &&
                    //Filtra o peso do pokemon
                    pokemon.weight / 10 <= weightUpTo45 &&
                    pokemon.weight / 10 > weightGreaterThan45 &&
                    pokemon.weight / 10 <= weightUpTo230 &&
                    pokemon.weight / 10 > weightGreaterThan230 &&
                    //Filtra o tipo do pokemon
                    type === FiltersObject.sortByTypes &&
                    //Filtra por HP
                    pokemon.stats[0].base_stat < hpVeryLowStats &&
                    pokemon.stats[0].base_stat >= hpLowStats &&
                    pokemon.stats[0].base_stat < hpLowStatsMax &&
                    pokemon.stats[0].base_stat >= hpMediumStats &&
                    pokemon.stats[0].base_stat < hpMediumStatsMax &&
                    pokemon.stats[0].base_stat >= hpHighStats &&
                    pokemon.stats[0].base_stat < hpHighStatsMax &&
                    pokemon.stats[0].base_stat >= hpVeryHighStats &&
                    pokemon.stats[0].base_stat < hpVeryHighStatsMax &&
                    pokemon.stats[0].base_stat >= hpSuperStats &&
                    pokemon.stats[0].base_stat < hpSuperStatsMax &&
                    //Filtra por Attack
                    pokemon.stats[1].base_stat < attackVeryLowStats &&
                    pokemon.stats[1].base_stat >= attackLowStats &&
                    pokemon.stats[1].base_stat < attackLowStatsMax &&
                    pokemon.stats[1].base_stat >= attackMediumStats &&
                    pokemon.stats[1].base_stat < attackMediumStatsMax &&
                    pokemon.stats[1].base_stat >= attackHighStats &&
                    pokemon.stats[1].base_stat < attackHighStatsMax &&
                    pokemon.stats[1].base_stat >= attackVeryHighStats &&
                    pokemon.stats[1].base_stat < attackVeryHighStatsMax &&
                    pokemon.stats[1].base_stat >= attackSuperStats &&
                    pokemon.stats[1].base_stat < attackSuperStatsMax &&
                    //Filtra por Defense
                    pokemon.stats[2].base_stat < defenseVeryLowStats &&
                    pokemon.stats[2].base_stat >= defenseLowStats &&
                    pokemon.stats[2].base_stat < defenseLowStatsMax &&
                    pokemon.stats[2].base_stat >= defenseMediumStats &&
                    pokemon.stats[2].base_stat < defenseMediumStatsMax &&
                    pokemon.stats[2].base_stat >= defenseHighStats &&
                    pokemon.stats[2].base_stat < defenseHighStatsMax &&
                    pokemon.stats[2].base_stat >= defenseVeryHighStats &&
                    pokemon.stats[2].base_stat < defenseVeryHighStatsMax &&
                    pokemon.stats[2].base_stat >= defenseSuperStats &&
                    pokemon.stats[2].base_stat < defenseSuperStatsMax &&
                    //Filtra por Sp.Atk
                    pokemon.stats[3].base_stat < spAtkVeryLowStats &&
                    pokemon.stats[3].base_stat >= spAtkLowStats &&
                    pokemon.stats[3].base_stat < spAtkLowStatsMax &&
                    pokemon.stats[3].base_stat >= spAtkMediumStats &&
                    pokemon.stats[3].base_stat < spAtkMediumStatsMax &&
                    pokemon.stats[3].base_stat >= spAtkHighStats &&
                    pokemon.stats[3].base_stat < spAtkHighStatsMax &&
                    pokemon.stats[3].base_stat >= spAtkVeryHighStats &&
                    pokemon.stats[3].base_stat < spAtkVeryHighStatsMax &&
                    pokemon.stats[3].base_stat >= spAtkSuperStats &&
                    pokemon.stats[3].base_stat < spAtkSuperStatsMax &&
                    //Filtra por Sp.Def
                    pokemon.stats[4].base_stat < spDefVeryLowStats &&
                    pokemon.stats[4].base_stat >= spDefLowStats &&
                    pokemon.stats[4].base_stat < spDefLowStatsMax &&
                    pokemon.stats[4].base_stat >= spDefMediumStats &&
                    pokemon.stats[4].base_stat < spDefMediumStatsMax &&
                    pokemon.stats[4].base_stat >= spDefHighStats &&
                    pokemon.stats[4].base_stat < spDefHighStatsMax &&
                    pokemon.stats[4].base_stat >= spDefVeryHighStats &&
                    pokemon.stats[4].base_stat < spDefVeryHighStatsMax &&
                    pokemon.stats[4].base_stat >= spDefSuperStats &&
                    pokemon.stats[4].base_stat < spDefSuperStatsMax &&
                    //Filtra por Sp.Def
                    pokemon.stats[5].base_stat < speedVeryLowStats &&
                    pokemon.stats[5].base_stat >= speedLowStats &&
                    pokemon.stats[5].base_stat < speedLowStatsMax &&
                    pokemon.stats[5].base_stat >= speedMediumStats &&
                    pokemon.stats[5].base_stat < speedMediumStatsMax &&
                    pokemon.stats[5].base_stat >= speedHighStats &&
                    pokemon.stats[5].base_stat < speedHighStatsMax &&
                    pokemon.stats[5].base_stat >= speedVeryHighStats &&
                    pokemon.stats[5].base_stat < speedVeryHighStatsMax &&
                    pokemon.stats[5].base_stat >= speedSuperStats &&
                    pokemon.stats[5].base_stat < speedSuperStatsMax
                );
            });

            //console.log(newFilteredArray);

            //Classificação por nome do pokemon
            if (FiltersObject.sortByCategory === "asc") {
                newFilteredArray = newFilteredArray.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }
            if (FiltersObject.sortByCategory === "desc") {
                newFilteredArray = newFilteredArray.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            //Classificação por número do pokemon
            if (FiltersObject.sortByCategory === "smallestNumberFirst") {
                newFilteredArray.sort((a, b) =>
                    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
                );
            }
            if (FiltersObject.sortByCategory === "highestNumberFirst") {
                newFilteredArray.sort((a, b) =>
                    a.id < b.id ? 1 : b.id < a.id ? -1 : 0
                );
            }

            //Classificação por altura do pokemon
            if (
                FiltersObject.sortByCategory === "shorterHeightToGreaterHeight"
            ) {
                newFilteredArray.sort((a, b) =>
                    a.height > b.height ? 1 : b.height > a.height ? -1 : 0
                );
            }

            if (
                FiltersObject.sortByCategory === "greaterHeightToShorterHeight"
            ) {
                newFilteredArray.sort((a, b) =>
                    a.height < b.height ? 1 : b.height < a.height ? -1 : 0
                );
            }

            //Classificação por peso do pokemon
            if (FiltersObject.sortByCategory === "lightWeightToHeavyWeight") {
                newFilteredArray.sort((a, b) =>
                    a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0
                );
            }

            if (FiltersObject.sortByCategory === "heavyWeightToLightWeight") {
                newFilteredArray.sort((a, b) =>
                    a.weight < b.weight ? 1 : b.weight < a.weight ? -1 : 0
                );
            }

            //Classificação por hp do pokemon
            if (FiltersObject.sortByCategory === "hpWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[0].base_stat > b.stats[0].base_stat
                        ? 1
                        : b.stats[0].base_stat > a.stats[0].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "hpBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[0].base_stat < b.stats[0].base_stat
                        ? 1
                        : b.stats[0].base_stat < a.stats[0].base_stat
                        ? -1
                        : 0
                );
            }

            //Classificação por Attack do pokemon
            if (FiltersObject.sortByCategory === "attackWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[1].base_stat > b.stats[1].base_stat
                        ? 1
                        : b.stats[1].base_stat > a.stats[1].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "attackBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[1].base_stat < b.stats[1].base_stat
                        ? 1
                        : b.stats[1].base_stat < a.stats[1].base_stat
                        ? -1
                        : 0
                );
            }

            //Classificação por Defesa do pokemon
            if (FiltersObject.sortByCategory === "defenseWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[2].base_stat > b.stats[2].base_stat
                        ? 1
                        : b.stats[2].base_stat > a.stats[2].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "defenseBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[2].base_stat < b.stats[2].base_stat
                        ? 1
                        : b.stats[2].base_stat < a.stats[2].base_stat
                        ? -1
                        : 0
                );
            }

            //Classificação por Especial Ataque do pokemon
            if (FiltersObject.sortByCategory === "spAtkWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[3].base_stat > b.stats[3].base_stat
                        ? 1
                        : b.stats[3].base_stat > a.stats[3].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "spAtkBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[3].base_stat < b.stats[3].base_stat
                        ? 1
                        : b.stats[3].base_stat < a.stats[3].base_stat
                        ? -1
                        : 0
                );
            }

            //Classificação por Especial Defesa do pokemon
            if (FiltersObject.sortByCategory === "spDefWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[4].base_stat > b.stats[4].base_stat
                        ? 1
                        : b.stats[4].base_stat > a.stats[4].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "spDefBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[4].base_stat < b.stats[4].base_stat
                        ? 1
                        : b.stats[4].base_stat < a.stats[4].base_stat
                        ? -1
                        : 0
                );
            }

            //Classificação por Velocidade do pokemon
            if (FiltersObject.sortByCategory === "speedWorstToBest") {
                newFilteredArray.sort((a, b) =>
                    a.stats[5].base_stat > b.stats[5].base_stat
                        ? 1
                        : b.stats[5].base_stat > a.stats[5].base_stat
                        ? -1
                        : 0
                );
            }
            if (FiltersObject.sortByCategory === "speedBestToWorst") {
                newFilteredArray.sort((a, b) =>
                    a.stats[5].base_stat < b.stats[5].base_stat
                        ? 1
                        : b.stats[5].base_stat < a.stats[5].base_stat
                        ? -1
                        : 0
                );
            }

            //Pokemon mais Fraco para o mais Forte
            if (FiltersObject.sortByCategory === "weakerToStronger") {
                newFilteredArray.sort((a, b) =>
                    a.stats[0].base_stat +
                        a.stats[1].base_stat +
                        a.stats[2].base_stat +
                        a.stats[3].base_stat +
                        a.stats[4].base_stat +
                        a.stats[5].base_stat >
                    b.stats[0].base_stat +
                        b.stats[1].base_stat +
                        b.stats[2].base_stat +
                        b.stats[3].base_stat +
                        b.stats[4].base_stat +
                        b.stats[5].base_stat
                        ? 1
                        : b.stats[0].base_stat +
                              b.stats[1].base_stat +
                              b.stats[2].base_stat +
                              b.stats[3].base_stat +
                              b.stats[4].base_stat +
                              b.stats[5].base_stat >
                          a.stats[0].base_stat +
                              a.stats[1].base_stat +
                              a.stats[2].base_stat +
                              a.stats[3].base_stat +
                              a.stats[4].base_stat +
                              a.stats[5].base_stat
                        ? -1
                        : 0
                );
            }

            //Pokemon mais Forte para o mais Fraco
            if (FiltersObject.sortByCategory === "strongerToWeaker") {
                newFilteredArray.sort((a, b) =>
                    a.stats[0].base_stat +
                        a.stats[1].base_stat +
                        a.stats[2].base_stat +
                        a.stats[3].base_stat +
                        a.stats[4].base_stat +
                        a.stats[5].base_stat <
                    b.stats[0].base_stat +
                        b.stats[1].base_stat +
                        b.stats[2].base_stat +
                        b.stats[3].base_stat +
                        b.stats[4].base_stat +
                        b.stats[5].base_stat
                        ? 1
                        : b.stats[0].base_stat +
                              b.stats[1].base_stat +
                              b.stats[2].base_stat +
                              b.stats[3].base_stat +
                              b.stats[4].base_stat +
                              b.stats[5].base_stat <
                          a.stats[0].base_stat +
                              a.stats[1].base_stat +
                              a.stats[2].base_stat +
                              a.stats[3].base_stat +
                              a.stats[4].base_stat +
                              a.stats[5].base_stat
                        ? -1
                        : 0
                );
            }

            //if (newFilteredArray.length !== 0) {
            setData(newFilteredArray);
            setNumberFeaturedPokemon(0);
            setRemoveLoading(true);
            setFilterAplly(false);
            //}
        }
    }, [FilterAplly]);

    //Limpar o filtro aplicado pelo usuário
    useEffect(() => {
        if (ClearFilter === true) {
            //console.log(OriginalData);

            OriginalData.sort((a, b) =>
                a.id > b.id ? 1 : b.id > a.id ? -1 : 0
            );

            setData(OriginalData);
            setRemoveLoading(true);
            setClearFilter(false);
        }
    }, [ClearFilter]);

    return (
        <S.FiltersPokemon>
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="filterpokemon"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <i className="bi bi-funnel-fill me-2"></i> Filters
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="mb-4 div-filters">
                            <div className="div-sort-by-category mb-3">
                                <h5 className="filters-title mb-3">
                                    <i className="bi bi-list-columns me-1"></i>{" "}
                                    Sort by
                                </h5>

                                <div className="mb-3">
                                    <select
                                        className="form-select"
                                        aria-label=".form-select-lg example"
                                        name="sortByCategory"
                                        value={sortByCategory}
                                        onChange={(e) => {
                                            setSortByCategory(
                                                e.currentTarget.value
                                            );
                                            filterChangeInput(e);
                                        }}
                                    >
                                        <option value="">Default</option>
                                        <option value="asc">A-Z</option>
                                        <option value="desc">Z-A</option>

                                        <option value="smallestNumberFirst">
                                            Smallest number first
                                        </option>
                                        <option value="highestNumberFirst">
                                            Highest number first
                                        </option>

                                        <option value="shorterHeightToGreaterHeight">
                                            Height - Shorter to Greater
                                        </option>
                                        <option value="greaterHeightToShorterHeight">
                                            Height - Greater to Shorter
                                        </option>

                                        <option value="lightWeightToHeavyWeight">
                                            Weight - Light to Heavy
                                        </option>
                                        <option value="heavyWeightToLightWeight">
                                            Weight - Heavy to Light
                                        </option>

                                        <option value="hpWorstToBest">
                                            HP - Worst to Best
                                        </option>
                                        <option value="hpBestToWorst">
                                            HP - Best to Worst
                                        </option>

                                        <option value="attackWorstToBest">
                                            Attack - Worst to Best
                                        </option>
                                        <option value="attackBestToWorst">
                                            Attack - Best to Worst
                                        </option>

                                        <option value="defenseWorstToBest">
                                            Defense - Worst to Best
                                        </option>
                                        <option value="defenseBestToWorst">
                                            Defense - Best to Worst
                                        </option>

                                        <option value="spAtkWorstToBest">
                                            Sp. Atk - Worst to Best
                                        </option>
                                        <option value="spAtkBestToWorst">
                                            Sp. Atk - Best to Worst
                                        </option>

                                        <option value="spDefWorstToBest">
                                            Sp. Def - Worst to Best
                                        </option>
                                        <option value="spDefBestToWorst">
                                            Sp. Def - Best to Worst
                                        </option>

                                        <option value="speedWorstToBest">
                                            Speed - Worst to Best
                                        </option>
                                        <option value="speedBestToWorst">
                                            Speed - Best to Worst
                                        </option>

                                        <option value="weakerToStronger">
                                            Total Stats - Worst to Best
                                        </option>
                                        <option value="strongerToWeaker">
                                            Total Stats - Best to Worst
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="div-types mb-3">
                                <h5 className="filters-title mb-3">
                                    <i className="bi bi-fire me-1"></i> Types
                                </h5>

                                <div className="mb-3">
                                    <select
                                        className="form-select"
                                        aria-label=".form-select-lg example"
                                        name="sortByTypes"
                                        value={sortByTypes}
                                        onChange={(e) => {
                                            setSortByTypes(
                                                e.currentTarget.value
                                            );
                                            filterChangeInput(e);
                                        }}
                                    >
                                        <option value="">All</option>

                                        {ListNameType.map((type, index) => {
                                            return (
                                                index < 18 && (
                                                    <option
                                                        value={type.name}
                                                        key={index}
                                                    >
                                                        {type.name}
                                                    </option>
                                                )
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="div-stats mb-3">
                                <h5 className="filters-title mb-3">
                                    <i className="bi bi-bar-chart-steps me-1"></i>{" "}
                                    Stats
                                </h5>

                                <div className="div-stats-main-checkbox">
                                    <div>
                                        <h6 data-tooltip-id="labelHp">H</h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortByHpStats"
                                                value="sortByHpVeryLowStats"
                                                id="sortByHpVeryLowStats"
                                                checked={checkboxHpVeryLowStats}
                                                onChange={(e) => {
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxHpVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpAllStats(
                                                        false
                                                    );

                                                    setCheckboxHpSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxHpVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpLowStats(
                                                        false
                                                    );
                                                    setCheckboxHpMediumStats(
                                                        false
                                                    );
                                                    setCheckboxHpHighStats(
                                                        false
                                                    );
                                                    setCheckboxHpVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxHpSuperStats(
                                                        false
                                                    );

                                                    setCheckboxHpAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 data-tooltip-id="labelAttack">A</h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortByAttackStats"
                                                value="sortByAttackVeryLowStats"
                                                id="sortByAttackVeryLowStats"
                                                checked={
                                                    checkboxAttackVeryLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxAttackMediumStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxAttackHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxAttackVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxAttackSuperStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackAllStats(
                                                        false
                                                    );

                                                    setCheckboxAttackSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxAttackVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackLowStats(
                                                        false
                                                    );
                                                    setCheckboxAttackMediumStats(
                                                        false
                                                    );
                                                    setCheckboxAttackHighStats(
                                                        false
                                                    );
                                                    setCheckboxAttackVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxAttackSuperStats(
                                                        false
                                                    );

                                                    setCheckboxAttackAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 data-tooltip-id="labelDefense">
                                            D
                                        </h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortByDefenseStats"
                                                value="sortByDefenseVeryLowStats"
                                                id="sortByDefenseVeryLowStats"
                                                checked={
                                                    checkboxDefenseVeryLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseMediumStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseSuperStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseAllStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxDefenseAllStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxDefenseVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseLowStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseMediumStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseHighStats(
                                                        false
                                                    );
                                                    setCheckboxDefenseVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseSuperStats(
                                                        false
                                                    );

                                                    setCheckboxDefenseAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 data-tooltip-id="labelSpAtk">
                                            S.A
                                        </h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortBySpAtkStats"
                                                value="sortBySpAtkVeryLowStats"
                                                id="sortBySpAtkVeryLowStats"
                                                checked={
                                                    checkboxSpAtkVeryLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpAtkMediumStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpAtkVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpAtkSuperStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpAtkVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpAtkVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkSuperStats(
                                                        false
                                                    );

                                                    setCheckboxSpAtkAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 data-tooltip-id="labelSpDef">
                                            S.D
                                        </h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortBySpDefStats"
                                                value="sortBySpDefVeryLowStats"
                                                id="sortBySpDefVeryLowStats"
                                                checked={
                                                    checkboxSpDefVeryLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpDefMediumStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpDefVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpDefSuperStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpDefVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpDefVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefSuperStats(
                                                        false
                                                    );

                                                    setCheckboxSpDefAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 data-tooltip-id="labelSpeed">S</h6>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input very-low me-2"
                                                type="radio"
                                                name="sortBySpeedStats"
                                                value="sortBySpeedVeryLowStats"
                                                id="sortBySpeedVeryLowStats"
                                                checked={
                                                    checkboxSpeedVeryLowStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedVeryLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedLowStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpeedMediumStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedMediumStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpeedVeryHighStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedVeryHighStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                checked={
                                                    checkboxSpeedSuperStats
                                                }
                                                onChange={(e) => {
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedAllStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedSuperStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
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
                                                    setCheckboxSpeedVeryLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedLowStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedMediumStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedHighStats(
                                                        false
                                                    );
                                                    setCheckboxSpeedVeryHighStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedSuperStats(
                                                        false
                                                    );

                                                    setCheckboxSpeedAllStats(
                                                        e.currentTarget.checked
                                                    );
                                                    filterChangeCheckbox(e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="div-stats-label">
                                        <label className="label-very-low">
                                            <i className="bi bi-lightning-charge"></i>{" "}
                                            Very Low
                                        </label>
                                        <label className="label-low">
                                            <i className="bi bi-lightning-charge"></i>{" "}
                                            Low
                                        </label>
                                        <label className="label-medium">
                                            <i className="bi bi-lightning-charge-fill"></i>{" "}
                                            Medium
                                        </label>
                                        <label className="label-high">
                                            <i className="bi bi-lightning"></i>{" "}
                                            High
                                        </label>
                                        <label className="label-very-high">
                                            <i className="bi bi-lightning"></i>{" "}
                                            Very High
                                        </label>
                                        <label className="label-super">
                                            <i className="bi bi-lightning-fill"></i>{" "}
                                            Super
                                        </label>
                                        <label className="label-all">
                                            <i className="bi bi-lightning-fill"></i>{" "}
                                            All
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="div-height mb-3">
                                <h5 className="mb-3 filters-title">
                                    <i className="bi bi-rulers me-2"></i>
                                    Height
                                </h5>

                                <div>
                                    <div className="form-check div-small-height me-3">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByHeight"
                                            value="heightUpTo1"
                                            id="smallHeight"
                                            checked={chekedSmallHeight}
                                            onChange={(e) => {
                                                setChekedMediumHeight(false);
                                                setChekedTallHeight(false);
                                                setChekedAllHeight(false);

                                                setChekedSmallHeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="smallHeight"
                                        >
                                            <img
                                                src={imgSmallHeight}
                                                alt="Small Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-medium-height me-3">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByHeight"
                                            value="heightGreaterThan1UpTo2"
                                            id="mediumHeight"
                                            checked={chekedMediumHeight}
                                            onChange={(e) => {
                                                setChekedSmallHeight(false);
                                                setChekedTallHeight(false);
                                                setChekedAllHeight(false);

                                                setChekedMediumHeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="mediumHeight"
                                        >
                                            <img
                                                src={imgMediumHeight}
                                                alt="Medium Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-tall-height me-3 ">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByHeight"
                                            value="heightGreaterThan2"
                                            id="tallHeight"
                                            checked={chekedTallHeight}
                                            onChange={(e) => {
                                                setChekedSmallHeight(false);
                                                setChekedMediumHeight(false);
                                                setChekedAllHeight(false);

                                                setChekedTallHeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="tallHeight"
                                        >
                                            <img
                                                src={imgTallHeight}
                                                alt="Tall Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-all-height">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByHeight"
                                            value=""
                                            id="allHeight"
                                            checked={chekedAllHeight}
                                            onChange={(e) => {
                                                setChekedSmallHeight(false);
                                                setChekedMediumHeight(false);
                                                setChekedTallHeight(false);

                                                setChekedAllHeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="allHeight"
                                        >
                                            All
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="div-weight mb-3">
                                <h5 className="filters-title mb-3">
                                    <i className="bi bi-boxes me-1"></i> Weight
                                </h5>

                                <div>
                                    <div className="form-check div-lightWeight me-3">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByWeight"
                                            value="weightUpTo45"
                                            id="lightWeight"
                                            checked={chekedLightweight}
                                            onChange={(e) => {
                                                setChekedMediumWeight(false);
                                                setChekedHeavyWeight(false);
                                                setChekedAllWeight(false);

                                                setChekedLightweight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="lightWeight"
                                        >
                                            <img
                                                src={imgWeight}
                                                alt="lightWeight Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-medium-weight me-3">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByWeight"
                                            value="weightGreaterThan45UpTo230"
                                            id="mediumWeight"
                                            checked={chekedMediumWeight}
                                            onChange={(e) => {
                                                setChekedLightweight(false);
                                                setChekedHeavyWeight(false);
                                                setChekedAllWeight(false);

                                                setChekedMediumWeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="mediumWeight"
                                        >
                                            <img
                                                src={imgWeight}
                                                alt="Medium Weight Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-heavy-weight me-3">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByWeight"
                                            value="weightGreaterThan230"
                                            id="heavyWeight"
                                            checked={chekedHeavyWeight}
                                            onChange={(e) => {
                                                setChekedLightweight(false);
                                                setChekedMediumWeight(false);
                                                setChekedAllWeight(false);

                                                setChekedHeavyWeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="heavyWeight"
                                        >
                                            <img
                                                src={imgWeight}
                                                alt="Heavy Weight Pokemon"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-check div-all-weight">
                                        <input
                                            className="form-check-input me-2"
                                            type="radio"
                                            name="sortByWeight"
                                            value=""
                                            id="allWeight"
                                            checked={chekedAllWeight}
                                            onChange={(e) => {
                                                setChekedLightweight(false);
                                                setChekedMediumWeight(false);
                                                setChekedHeavyWeight(false);

                                                setChekedAllWeight(
                                                    e.currentTarget.checked
                                                );
                                                filterChangeCheckbox(e);
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="allWeight"
                                        >
                                            All
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                className="btn btn-danger me-2"
                                type="reset"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRemoveLoading(false);
                                    clearFilter();
                                    setClearFilter(true);

                                    //referente as classificações
                                    setSortByCategory("");

                                    //Referente a Altura
                                    setChekedSmallHeight(false);
                                    setChekedMediumHeight(false);
                                    setChekedTallHeight(false);
                                    setChekedAllHeight(true);

                                    //Referente ao peso
                                    setChekedLightweight(false);
                                    setChekedMediumWeight(false);
                                    setChekedHeavyWeight(false);
                                    setChekedAllWeight(true);

                                    //Referente ao Tipos
                                    setSortByTypes("");

                                    //Referente as estatisticas
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
                                }}
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                            <button
                                className={ShowBtnAplly}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRemoveLoading(false);
                                    setData(OriginalData);
                                    setFilterAplly(true);
                                }}
                            >
                                <i className="bi bi-check-square"></i>
                            </button>
                        </div>

                        <ReactTooltip id="labelHp" place="top" content="HP" />
                        <ReactTooltip
                            id="labelAttack"
                            place="top"
                            content="Attack"
                        />
                        <ReactTooltip
                            id="labelDefense"
                            place="top"
                            content="Defense"
                        />
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
                        <ReactTooltip
                            id="labelSpeed"
                            place="top"
                            content="Speed"
                        />
                    </form>
                </div>
            </div>
        </S.FiltersPokemon>
    );
};

export default FiltersPokemon;
