import { ColumnFilter } from "./ColumnFilter";
import Types from "../../../components/PokeTypes";
import { Link } from "react-router-dom";

//Adicionando zero a esqueda no númeoro do Pokemon.
function zeroLeft(pokeId) {
    if (pokeId < 10) {
        return "000" + pokeId;
    }

    if (pokeId >= 10 && pokeId < 100) {
        return "00" + pokeId;
    }

    if (pokeId >= 100 && pokeId < 1000) {
        return "0" + pokeId;
    }

    if (pokeId >= 1000) {
        return pokeId;
    }
}

export const COLUMNS = [
    {
        Header: "#",
        accessor: "id",
        Filter: ColumnFilter,
        disableFilters: false,
        Cell: (props) => {
            return (
                <div className="d-flex flex-inline align-items-center">
                    <img
                        className="me-3"
                        src={props.cell.row.original.sprites.front_default}
                    />{" "}
                    <span className="poke-number">
                        #{zeroLeft(props.cell.row.original.id)}
                    </span>
                </div>
            );
        },
    },

    {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
        disableFilters: false,
        Cell: (props) => {
            const pokeId = props.cell.row.original.id;
            const totalPokemon = props.initialRows.length;
            return (
                <Link
                    to={
                        "/pokeinfo?id=" + pokeId + "&qtPokemons=" + totalPokemon
                    }
                    className="btn btn-outline-primary poke-name"
                    target="_blank"
                >
                    {props.cell.row.original.name}
                </Link>
            );
        },
    },

    {
        Header: "Type",
        accessor: (row) => {
            const types = row.types;

            //console.log(types);

            let type = row.types[0].type.name;

            if (row.types && types.length > 1) {
                type = row.types[0].type.name + "-" + row.types[1].type.name;
            }

            return type;
        },
        Filter: ColumnFilter,
        disableFilters: false,
        disableSortBy: false,
        Cell: (props) => {
            const types = props.cell.row.original.types;
            const pokeId = props.cell.row.original.id;
            return (
                <div className="div-types ms-3">
                    <Types types={types} pokeId={pokeId} />
                </div>
            );
        },
    },

    {
        Header: "BaseExp",
        accessor: "base_experience",
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            let baseExperience = props.cell.row.original.base_experience;

            if (baseExperience === null) {
                baseExperience = "n/a";
            }

            return <span>{baseExperience}</span>;
        },
    },

    {
        Header: "TotalStats",
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
                <span className="total-stats">
                    {stats[0].base_stat +
                        stats[1].base_stat +
                        stats[2].base_stat +
                        stats[3].base_stat +
                        stats[4].base_stat +
                        stats[5].base_stat}
                </span>
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
    },

    {
        Header: "Attack",
        accessor: (row) => {
            const stats = row.stats[1].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Defense",
        accessor: (row) => {
            const stats = row.stats[2].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Sp.Atk",
        accessor: (row) => {
            const stats = row.stats[3].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Sp.Def",
        accessor: (row) => {
            const stats = row.stats[4].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Speed",
        accessor: (row) => {
            const stats = row.stats[5].base_stat;
            return stats;
        },
        Filter: ColumnFilter,
        disableFilters: true,
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

    {
        Header: "Abilities",
        accessor: "abilities",
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true,
        Cell: (props) => {
            const abilities = props.cell.row.original.abilities;
            return (
                <div className="d-flex flex-column div-abilities">
                    {abilities.map((a, index) => (
                        <span key={index}>
                            {index + 1} - {a.ability.name}
                        </span>
                    ))}
                </div>
            );
        },
    },
];
