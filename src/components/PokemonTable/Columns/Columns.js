import { ColumnFilter } from "./ColumnFilter";
import Types from "../../../components/PokeTypes";

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
            if (
                props &&
                props.cell.row.original.sprites.front_default &&
                props.cell.row.original.id
            ) {
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
            }
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
                <a
                    className="btn btn-outline-primary poke-name"
                    href={`/pokeinfo?id=${pokeId}&qtPokemons=${totalPokemon}`} // Link real
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        if (e.button === 0) {
                            // Evita o comportamento padrão para o clique esquerdo
                            e.preventDefault();

                            // Janela centralizada
                            const width = 1200;
                            const height = 700;
                            const left = (window.screen.width - width) / 2;
                            const top = (window.screen.height - height) / 2;

                            window.open(
                                `/pokeinfo?id=${pokeId}&qtPokemons=${totalPokemon}`,
                                "_blank",
                                `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
                            );
                        }
                    }}
                >
                    {props.cell.row.original.name}
                </a>
            );
        },
    },

    {
        Header: "Type",
        accessor: (row) => {
            if (row && row.types[0]) {
                let type = row.types[0].type.name;

                if (row.types.length > 1) {
                    type =
                        row.types[0].type.name + "-" + row.types[1].type.name;
                }

                return type;
            }
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
            if (row && row.stats[0]) {
                const stats = row.stats;
                return (
                    stats[0].base_stat +
                    stats[1].base_stat +
                    stats[2].base_stat +
                    stats[3].base_stat +
                    stats[4].base_stat +
                    stats[5].base_stat
                );
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: (props) => {
            if (props && props.cell.row.original.stats[0]) {
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
            }
        },
    },

    {
        Header: "HP",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[0].base_stat;
                return value;
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Attack",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[1].base_stat;
                return value;
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Defense",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[2].base_stat;
                return value;
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Sp.Atk",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[3].base_stat;
                return value;
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Sp.Def",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[4].base_stat;
                return value;
            }
        },
        Filter: ColumnFilter,
        disableFilters: true,
    },

    {
        Header: "Speed",
        accessor: (row) => {
            if (row && row.stats[0]) {
                const value = row.stats[5].base_stat;
                return value;
            }
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
            if (props && props.cell.row.original.abilities) {
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
            }
        },
    },
];
