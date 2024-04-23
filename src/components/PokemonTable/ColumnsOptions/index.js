import React from "react";
//import Checkbox from "../CheckBox";
import * as S from "./styles";

const ColumnsOptions = (props) => {
    return (
        <S.ColumnsOptions>
            <div className="div-options">
                <div className="div-search">
                    {/* <div className="input-group input-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                            aria-describedby="basic-addon1"
                            value={props.globalFilter || ""}
                            onChange={(e) =>
                                props.setGlobalFilter(e.target.value)
                            }
                        />
                    </div> */}

                    <select
                        className="form-select selection-lines-per-page"
                        value={props.pageSize}
                        onChange={(e) =>
                            props.setPageSize(Number(e.target.value))
                        }
                    >
                        {/* {[20, 60, 100, 200, props.data.length].map( */}
                        {[20, 60, 100, 200].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize} Pokemon
                            </option>
                        ))}
                    </select>
                </div>

                <div className="div-pagination">
                    <div>
                        <span className="me-3 number-page">
                            Página {props.pageIndex + 1} de{" "}
                            {props.pageOptions.length}
                        </span>
                        <nav aria-label="...">
                            <ul className="pagination m-0">
                                <li
                                    className={
                                        !props.canPreviousPage
                                            ? "page-item disabled"
                                            : "page-item"
                                    }
                                    onClick={() => props.gotoPage(0)}
                                >
                                    <button className="page-link">
                                        <i className="bi bi-chevron-bar-left"></i>
                                    </button>
                                </li>
                                <li
                                    className={
                                        !props.canPreviousPage
                                            ? "page-item disabled"
                                            : "page-item"
                                    }
                                    onClick={() => props.previousPage()}
                                >
                                    <button className="page-link">
                                        <i className="bi bi-chevron-left"></i>
                                    </button>
                                </li>
                                <li
                                    className={
                                        !props.canNextPage
                                            ? "page-item disabled"
                                            : "page-item"
                                    }
                                    onClick={() => props.nextPage()}
                                >
                                    <button className="page-link">
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </li>

                                <li
                                    className={
                                        !props.canNextPage
                                            ? "page-item disabled"
                                            : "page-item"
                                    }
                                    onClick={() =>
                                        props.gotoPage(props.pageCount - 1)
                                    }
                                >
                                    <button className="page-link">
                                        <i className="bi bi-chevron-bar-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <div className="collapse" id="collapseCheckboxListColulns">
                <div className="card card-body mt-2">
                    <h6 className="mb-3">Mostrar ou ocultar colunas</h6>
                    <div className="div-show-columns">
                        <br />
                        <div className="form-check">
                            <Checkbox
                                className="form-check-input"
                                id="todas-colunas"
                                {...props.getToggleHideAllColumnsProps()}
                            />{" "}
                            <label
                                className="form-check-label"
                                htmlFor="todas-colunas"
                            >
                                Todas Colunas
                            </label>
                        </div>

                        {props.allColumns.map((column) => (
                            <div className="form-check" key={column.id}>
                                <input
                                    id={column.id}
                                    className="form-check-input"
                                    type="checkbox"
                                    {...column.getToggleHiddenProps()}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={column.id}
                                >
                                    {column.header}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </S.ColumnsOptions>
    );
};

export default ColumnsOptions;
