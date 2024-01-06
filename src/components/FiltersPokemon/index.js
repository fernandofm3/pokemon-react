import React, { useState, useEffect } from "react";
import imgSmallHeight from "../../assets/small-height.png";
import imgMediumHeight from "../../assets/medium-height.png";
import imgTallHeight from "../../assets/tall-height.png";
import imgWeight from "../../assets/weight.png";
import * as S from "./styles";

const FiltersPokemon = ({
    DataFilter,
    OriginalData,
    setData,
    setRemoveLoading,
    setNumberFeaturedPokemon,
}) => {
    const [FilterAplly, setFilterAplly] = useState(false);
    const [ClearFilter, setClearFilter] = useState(false);

    //Referente as categorias
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

    //Objeto de filtros com valores padrão
    const [FiltersObject, setFiltersObject] = useState({
        sortByCategory: "",
        sortByHeight: "",
        sortByWeight: "",
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
                    pokemon.weight / 10 > weightGreaterThan230

                    // filtroQtDisponivel < filtroM23 &&
                    // filtroQtPendente >= filtroQtGeral &&
                    // validade === filtroValidade &&
                    // filtroLotesBloqueados > 0 &&
                    // filtroOrdensEmProducao > 0 &&
                    // qtDisponivel >= filtroMinDisponivel &&
                    // qtDisponivel <= filtroMaxDisponivel
                );
            });

            console.log(newFilteredArray.length);

            //Condições para verificar a classificação do array
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
                                        className="form-select form-select-sm"
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
                                            Shorter Height to Greater Height
                                        </option>
                                        <option value="greaterHeightToShorterHeight">
                                            Greater Height to Shorter Height
                                        </option>
                                        <option value="lightWeightToHeavyWeight">
                                            Light Weight to Heavy Weight
                                        </option>
                                        <option value="heavyWeightToLightWeight">
                                            Heavy Weight to Light Weight
                                        </option>
                                    </select>
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

                                    //referente a Categoria
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
                    </form>
                </div>
            </div>
        </S.FiltersPokemon>
    );
};

export default FiltersPokemon;
