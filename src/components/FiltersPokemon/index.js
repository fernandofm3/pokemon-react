import React, { useState, useEffect } from "react";
import * as S from "./styles";

const FiltersPokemon = ({
    DataFilter,
    OriginalData,
    setData,
    setRemoveLoading,
}) => {
    const [FilterAplly, setFilterAplly] = useState(false);
    const [ClearFilter, setClearFilter] = useState(false);
    const [Ordering, setOrdering] = useState("");

    //Objeto de filtros com valores padrão
    const [FiltersObject, setFiltersObject] = useState({
        ordering: "",
    });

    const [ShowBtnAplly, setShowBtnAplly] = useState(
        "btn btn-sm btn-success invisible me-2"
    );

    //Adiciona o valor true ou false no objeto de filtros.
    //Se o usuário checou adiciona true se não checgou adiciona false.
    const filterChangeCheckbox = (e) => {
        const { name, checked } = e.target;

        if (checked === true) {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: checked,
            }));
        }

        if (checked === false) {
            setFiltersObject((Filters) => ({
                ...Filters,
                [name]: checked,
            }));
        }
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
        //console.log("Filters mudou!!!");

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

        //console.log(filterStatus);
    }, [FiltersObject]);

    //Filtra o Array atual dos pokemons conforme a escolha do usuário.
    useEffect(() => {
        //console.log("Precisa aplicar o filtro!");

        if (FilterAplly === true) {
            let newFilteredArray;
            //let filterOrdering = "";

            // Aplicar ordenação
            if (FiltersObject.ordering === "asc") {
                newFilteredArray = DataFilter.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }

            if (FiltersObject.ordering === "desc") {
                newFilteredArray = DataFilter.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            // Filtrar os Products com base nos critérios selecionados
            const filteredPokemons = DataFilter.filter(() => {
                //Verifica se o filtro foi ativado
                // if (FiltersObject.ordering !== "") {
                //     filterOrdering = FiltersObject.ordering;
                // } else {
                //     filterOrdering = "";
                // }
                //return (
                //     filial === filtroFilial &&
                //     filtroQtDisponivel < filtroM23 &&
                //     filtroQtPendente >= filtroQtGeral &&
                //     validade === filtroValidade &&
                //     filtroLotesBloqueados > 0 &&
                //     filtroOrdensEmProducao > 0 &&
                //     qtDisponivel >= filtroMinDisponivel &&
                //     qtDisponivel <= filtroMaxDisponivel
                //);
            });

            //console.log(newFilteredArray);

            setData(newFilteredArray);
            setRemoveLoading(true);
            setFilterAplly(false);
        }
    }, [FilterAplly]);

    //Limpar o filtro aplicado pelo usuário
    useEffect(() => {
        if (ClearFilter === true) {
            //console.log(OriginalData);

            // OriginalData.sort((a, b) =>
            //     a.id > b.id ? 1 : b.id > a.id ? -1 : 0
            // );

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
                        <i className="bi bi-filter me-2"></i> Filters
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
                            <h6 className="mb-4 filters-title">
                                <i className="bi bi-database-fill me-1"></i>
                                Consultas Locais
                            </h6>
                            <div className="">
                                <div className="mb-3">
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label=".form-select-lg example"
                                        name="ordering"
                                        value={Ordering}
                                        onChange={(e) => {
                                            setOrdering(e.currentTarget.value);
                                            filterChangeInput(e);
                                        }}
                                    >
                                        <option value="">
                                            Ordenar por nome
                                        </option>
                                        <option value="asc">Asc</option>
                                        <option value="desc">Desc</option>
                                    </select>
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
                                    setOrdering("");
                                }}
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                            <button
                                className={ShowBtnAplly}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRemoveLoading(false);
                                    // props.setProducts(props.ProductsBase);
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
