import React from "react";

export const ColumnFilter = (props) => {
    const { filterValue, setFilter } = props.column;

    let classInputColumns = "form-control form-control-sm mt-2 mb-2";

    if (props.column.id === "codigo") {
        classInputColumns =
            "width-input-codigo form-control form-control-sm mt-2 mb-2";
    }

    return (
        <input
            className={classInputColumns}
            value={filterValue || ""}
            onChange={(e) => setFilter(e.target.value)}
        />
    );
};
