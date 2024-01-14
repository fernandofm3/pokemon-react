import React, { useState, useEffect } from "react";
import FilterSortBy from "./FilterSortBy";
import FilterTypes from "./FilterTypes";
import FilterStats from "./FilterStats";
import FilterHeight from "./FilterHeight";
import FilterWeight from "./FilterWeight";
import * as S from "./styles";

const FiltersPokemon = ({
    OriginalData,
    setData,
    setRemoveLoading,
    setNumberFeaturedPokemon,
}) => {
    //Variável resposável por receberr os dados originais vindo da api.
    let dataToFilter = [];

    //Aciona a filtragem no array de pokemons
    const [FilterAplly, setFilterAplly] = useState(false);

    //Aciona a limpeza dos filtros no formulário
    const [clearFilterForm, setClearFilterForm] = useState(false);

    //Objeto de filtros com valores padrão
    const [FiltersObject, setFiltersObject] = useState({
        sortByCategory: "",
        sortByHeight: "",
        sortByWeight: "",
        sortByTypes: "",
        sortByHpStats: "",
        sortByAttackStats: "",
        sortByDefenseStats: "",
        sortBySpAtkStats: "",
        sortBySpDefStats: "",
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

        //console.log(FiltersObject);
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

        //console.log(FiltersObject);
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

        //Dados originais para ser filtrado
        dataToFilter = OriginalData;

        if (FilterAplly === true) {
            // Filtrar os Pokemons com base nos critérios selecionados
            //let newFilteredArray = DataFilter.filter((pokemon) => {
            let newFilteredArray = dataToFilter.filter((pokemon) => {
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

            setData(newFilteredArray);
            setNumberFeaturedPokemon(0);
            setRemoveLoading(true);
            setFilterAplly(false);
        }
    }, [FilterAplly]);

    //Limpar o filtro aplicado pelo usuário
    useEffect(() => {
        if (clearFilterForm === true) {
            OriginalData.sort((a, b) =>
                a.id > b.id ? 1 : b.id > a.id ? -1 : 0
            );

            setData(OriginalData);
            setRemoveLoading(true);
            setClearFilterForm(false);
        }
    }, [clearFilterForm]);

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
                        <FilterSortBy
                            filterChangeInput={filterChangeInput}
                            clearFilterForm={clearFilterForm}
                            setClearFilterForm={setClearFilterForm}
                        />

                        <FilterTypes
                            filterChangeInput={filterChangeInput}
                            clearFilterForm={clearFilterForm}
                            setClearFilterForm={setClearFilterForm}
                        />

                        <FilterStats
                            filterChangeCheckbox={filterChangeCheckbox}
                            clearFilterForm={clearFilterForm}
                            setClearFilterForm={setClearFilterForm}
                        />

                        <FilterHeight
                            filterChangeCheckbox={filterChangeCheckbox}
                            clearFilterForm={clearFilterForm}
                            setClearFilterForm={setClearFilterForm}
                        />

                        <FilterWeight
                            filterChangeCheckbox={filterChangeCheckbox}
                            clearFilterForm={clearFilterForm}
                            setClearFilterForm={setClearFilterForm}
                        />

                        <div className="div-buttons">
                            <button
                                className="btn btn-primary me-2"
                                type="reset"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRemoveLoading(false);
                                    clearFilter();
                                    setClearFilterForm(true);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                RESET
                                <i className="bi bi-arrow-clockwise ms-2"></i>
                            </button>

                            <button
                                className={ShowBtnAplly}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRemoveLoading(false);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                    setFilterAplly(true);
                                }}
                            >
                                APPLY
                                <i className="bi bi-check-lg ms-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </S.FiltersPokemon>
    );
};

export default FiltersPokemon;
