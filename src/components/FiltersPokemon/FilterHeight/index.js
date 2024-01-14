import React, { useEffect, useState } from "react";
import imgSmallHeight from "../../../assets/small-height.png";
import imgMediumHeight from "../../../assets/medium-height.png";
import imgTallHeight from "../../../assets/tall-height.png";
import * as S from "./styles";

function FilterHeight({
    filterChangeCheckbox,
    clearFilterForm,
    setClearFilterForm,
}) {
    const [chekedSmallHeight, setChekedSmallHeight] = useState(false);
    const [chekedMediumHeight, setChekedMediumHeight] = useState(false);
    const [chekedTallHeight, setChekedTallHeight] = useState(false);
    const [chekedAllHeight, setChekedAllHeight] = useState(true);

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            setChekedSmallHeight(false);
            setChekedMediumHeight(false);
            setChekedTallHeight(false);
            setChekedAllHeight(true);
        }
    }, [clearFilterForm]);

    return (
        <S.FilterHeight>
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

                                setChekedSmallHeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="smallHeight"
                        >
                            <img src={imgSmallHeight} alt="Small Pokemon" />
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

                                setChekedMediumHeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="mediumHeight"
                        >
                            <img src={imgMediumHeight} alt="Medium Pokemon" />
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

                                setChekedTallHeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="tallHeight"
                        >
                            <img src={imgTallHeight} alt="Tall Pokemon" />
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

                                setChekedAllHeight(e.currentTarget.checked);
                                filterChangeCheckbox(e);
                                setClearFilterForm(false);
                            }}
                        />
                        <label className="form-check-label" htmlFor="allHeight">
                            All
                        </label>
                    </div>
                </div>
            </div>
        </S.FilterHeight>
    );
}

export default FilterHeight;
