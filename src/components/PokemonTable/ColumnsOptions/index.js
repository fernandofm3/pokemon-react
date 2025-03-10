import React from "react";
import * as S from "./styles";

const ColumnsOptions = (props) => {
    return (
        <S.ColumnsOptions>
            <div className="div-options">
                <div className="div-search">
                    <select
                        className="form-select selection-lines-per-page"
                        value={props.pageSize}
                        onChange={(e) =>
                            props.setPageSize(Number(e.target.value))
                        }
                    >
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
        </S.ColumnsOptions>
    );
};

export default ColumnsOptions;
