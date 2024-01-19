import React, { useMemo, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    usePagination,
    useColumnOrder,
} from "react-table";
import OptionsColumns from "./ColumnsOptions";
import { COLUMNS } from "./Columns/Columns";
import * as S from "./styles";

const PokemonTable = (props) => {
    const columns = useMemo(() => COLUMNS, []);
    //const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => props.AllPokemon, []);

    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (index) => {
        setSelectedRow(index);
    };

    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: {
                hiddenColumns: columns.map((column) => {
                    if (column.show === false)
                        return column.accessor || column.id;
                }),
                pageSize: 50,
            },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useColumnOrder
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        allColumns,
        getToggleHideAllColumnsProps,
        setColumnOrder,
        setGlobalFilter,
    } = tableInstance;

    const { pageIndex, pageSize } = state;

    const { globalFilter } = state;

    return (
        <S.PokemonTable>
            {data !== "" && (
                <>
                    <OptionsColumns
                        allColumns={allColumns}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                        getToggleHideAllColumnsProps={
                            getToggleHideAllColumnsProps
                        }
                        nextPage={nextPage}
                        previousPage={previousPage}
                        canNextPage={canNextPage}
                        canPreviousPage={canPreviousPage}
                        pageOptions={pageOptions}
                        gotoPage={gotoPage}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                        data={data}
                    />

                    <div className="table-responsive div-table">
                        <table className="" {...getTableProps()}>
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr
                                        className="tr-columns"
                                        {...headerGroup.getHeaderGroupProps()}
                                    >
                                        {headerGroup.headers.map((column) => (
                                            <th className="" key={column.id}>
                                                <span className="thead-div-arrow">
                                                    <span className="text-black">
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </span>

                                                    <span
                                                        {...column.getHeaderProps(
                                                            column.getSortByToggleProps()
                                                        )}
                                                    >
                                                        {!column.disableSortBy ? (
                                                            <span>
                                                                {column.isSorted ? (
                                                                    column.isSortedDesc ? (
                                                                        <i className="bi bi-chevron-down ms-3 text-black" />
                                                                    ) : (
                                                                        <i className="bi bi-chevron-up ms-3 text-black" />
                                                                    )
                                                                ) : (
                                                                    <span className="div-thead-arrow-up-down text-black">
                                                                        <i className="bi bi-chevron-up ms-3" />
                                                                        <i className="bi bi-chevron-down ms-3" />
                                                                    </span>
                                                                )}
                                                            </span>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </span>
                                                </span>

                                                <span>
                                                    {column.canFilter
                                                        ? column.render(
                                                              "Filter"
                                                          )
                                                        : null}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>

                            <tbody {...getTableBodyProps()}>
                                {page.map((row, index) => {
                                    prepareRow(row);
                                    return (
                                        <tr
                                            {...row.getRowProps()}
                                            key={index}
                                            className={
                                                selectedRow === index
                                                    ? "selected-row"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handleRowClick(index)
                                            }
                                        >
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td
                                                        className=""
                                                        {...cell.getCellProps()}
                                                    >
                                                        {cell.render("Cell")}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </S.PokemonTable>
    );
};

export default PokemonTable;
