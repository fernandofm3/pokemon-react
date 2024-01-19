import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    //GRUPO - INFORMAÇÕES DO PRODUTO

    {
        Header: "#",
        accessor: "id",
        Filter: ColumnFilter,
        disableFilters: false,
        Cell: (props) => {
            return (
                <>
                    <img src={props.cell.row.original.sprites.front_default} />{" "}
                    <span>#{props.cell.row.original.id}</span>
                </>
            );
        },
    },

    {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
        disableFilters: false,
    },

    {
        Header: "Type",
        accessor: "types",
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true,
        Cell: (props) => {
            const types = props.cell.row.original.types;
            return types.map((t, index) => <p key={index}>{t.type.name}</p>);
        },
    },

    {
        Header: "Total Stats",
        accessor: (row) => {
            const stats = row.stats;
            return (
                stats[0].base_stat +
                stats[1].base_stat +
                stats[2].base_stat +
                stats[3].base_stat +
                stats[4].base_stat +
                stats[5].base_stat
            );
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return (
                stats[0].base_stat +
                stats[1].base_stat +
                stats[2].base_stat +
                stats[3].base_stat +
                stats[4].base_stat +
                stats[5].base_stat
            );
        },
    },

    {
        Header: "HP",
        accessor: (row) => {
            const stats = row.stats[0].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[0].base_stat;
        },
    },

    {
        Header: "Attack",
        accessor: (row) => {
            const stats = row.stats[1].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[1].base_stat;
        },
    },

    {
        Header: "Defense",
        accessor: (row) => {
            const stats = row.stats[2].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[2].base_stat;
        },
    },

    {
        Header: "Sp.Atk",
        accessor: (row) => {
            const stats = row.stats[3].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[3].base_stat;
        },
    },

    {
        Header: "Sp.Def",
        accessor: (row) => {
            const stats = row.stats[4].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[4].base_stat;
        },
    },

    {
        Header: "Speed",
        accessor: (row) => {
            const stats = row.stats[5].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const stats = props.cell.row.original.stats;
            return stats[5].base_stat;
        },
    },

    {
        Header: "Height",
        accessor: "height",
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const height = props.cell.row.original.height;
            return <span>{height / 10} m</span>;
        },
    },

    {
        Header: "Weight",
        accessor: "weight",
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            const weight = props.cell.row.original.weight;
            return <span>{weight / 10} kg</span>;
        },
    },
];
