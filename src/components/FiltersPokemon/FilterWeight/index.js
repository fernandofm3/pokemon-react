import React, { useEffect, useState } from "react";
import imgWeight from "../../../assets/weight.png";
import * as S from "./styles";

function FilterHeight({
    filterChangeCheckbox,
    clearFilterForm,
    setClearFilterForm,
}) {
    const [chekedLightweight, setChekedLightweight] = useState(false);
    const [chekedMediumWeight, setChekedMediumWeight] = useState(false);
    const [chekedHeavyWeight, setChekedHeavyWeight] = useState(false);
    const [chekedAllWeight, setChekedAllWeight] = useState(true);

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            setChekedLightweight(false);
            setChekedMediumWeight(false);
            setChekedHeavyWeight(false);
            setChekedAllWeight(true);
        }
    }, [clearFilterForm]);

    return (
        <S.FilterHeight>
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

                                setChekedLightweight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="lightWeight"
                        >
                            <img src={imgWeight} alt="lightWeight Pokemon" />
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

                                setChekedMediumWeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="mediumWeight"
                        >
                            <img src={imgWeight} alt="Medium Weight Pokemon" />
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

                                setChekedHeavyWeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="heavyWeight"
                        >
                            <img src={imgWeight} alt="Heavy Weight Pokemon" />
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

                                setChekedAllWeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label className="form-check-label" htmlFor="allWeight">
                            All
                        </label>
                    </div>
                </div>
            </div>
        </S.FilterHeight>
    );
}

export default FilterHeight;
