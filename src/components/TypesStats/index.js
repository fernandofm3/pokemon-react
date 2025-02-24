import React from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";

const TypesStats = (props) => {
    const dataTypes = props.DataTypesStats;
    let arrayDoubleDamageFrom = [];
    let arrayDoubleDamageTo = [];
    let arrayHalfDamageFrom = [];
    let arrayHalfDamageTo = [];
    let arrayNoDamageFrom = [];
    let arrayNoDamageTo = [];

    //Populando arrays
    for (let i = 0; i < dataTypes.length; i++) {
        //Populando o array arrayDoubleDamageFrom com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].double_damage_from.length; e++) {
            if (arrayDoubleDamageFrom.length > 0) {
                if (
                    arrayDoubleDamageFrom.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].double_damage_from[e].name
                    ) === undefined
                ) {
                    arrayDoubleDamageFrom.push({
                        type: {
                            name: dataTypes[i].double_damage_from[e].name,
                            damage: 2,
                        },
                    });
                } else {
                    let newDamage = arrayDoubleDamageFrom.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].double_damage_from[e].name
                    );
                    newDamage.type.damage = 2 * 2;
                }
            } else {
                arrayDoubleDamageFrom.push({
                    type: {
                        name: dataTypes[i].double_damage_from[e].name,
                        damage: 2,
                    },
                });
            }
        }

        //Populando o array arrayDoubleDamageTo com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].double_damage_to.length; e++) {
            if (arrayDoubleDamageTo.length > 0) {
                if (
                    arrayDoubleDamageTo.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].double_damage_to[e].name
                    ) === undefined
                ) {
                    arrayDoubleDamageTo.push({
                        type: {
                            name: dataTypes[i].double_damage_to[e].name,
                            damage: 2,
                        },
                    });
                } else {
                    let newDamage = arrayDoubleDamageTo.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].double_damage_to[e].name
                    );
                    newDamage.type.damage = 2 * 2;
                }
            } else {
                arrayDoubleDamageTo.push({
                    type: {
                        name: dataTypes[i].double_damage_to[e].name,
                        damage: 2,
                    },
                });
            }
        }

        //Populando o array arrayHalfDamageFrom com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].half_damage_from.length; e++) {
            if (arrayHalfDamageFrom.length > 0) {
                if (
                    arrayHalfDamageFrom.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].half_damage_from[e].name
                    ) === undefined
                ) {
                    arrayHalfDamageFrom.push({
                        type: {
                            name: dataTypes[i].half_damage_from[e].name,
                            damage: 0.5,
                        },
                    });
                } else {
                    let newDamage = arrayHalfDamageFrom.find(
                        (x) =>
                            x.type.name ===
                            dataTypes[i].half_damage_from[e].name
                    );
                    newDamage.type.damage = 0.5 * 0.5;
                }
            } else {
                arrayHalfDamageFrom.push({
                    type: {
                        name: dataTypes[i].half_damage_from[e].name,
                        damage: 0.5,
                    },
                });
            }
        }

        //Populando o array arrayHalfDamageTo com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].half_damage_to.length; e++) {
            if (arrayHalfDamageTo.length > 0) {
                if (
                    arrayHalfDamageTo.find(
                        (x) =>
                            x.type.name === dataTypes[i].half_damage_to[e].name
                    ) === undefined
                ) {
                    arrayHalfDamageTo.push({
                        type: {
                            name: dataTypes[i].half_damage_to[e].name,
                            damage: 0.5,
                        },
                    });
                } else {
                    let newDamage = arrayHalfDamageTo.find(
                        (x) =>
                            x.type.name === dataTypes[i].half_damage_to[e].name
                    );
                    newDamage.type.damage = 0.5 * 0.5;
                }
            } else {
                arrayHalfDamageTo.push({
                    type: {
                        name: dataTypes[i].half_damage_to[e].name,
                        damage: 0.5,
                    },
                });
            }
        }

        //Populando o array arrayNoDamageFrom com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].no_damage_from.length; e++) {
            if (arrayNoDamageFrom.length > 0) {
                if (
                    arrayNoDamageFrom.find(
                        (x) =>
                            x.type.name === dataTypes[i].no_damage_from[e].name
                    ) === undefined
                ) {
                    arrayNoDamageFrom.push({
                        type: {
                            name: dataTypes[i].no_damage_from[e].name,
                            damage: 0,
                        },
                    });
                } else {
                    let newDamage = arrayNoDamageFrom.find(
                        (x) =>
                            x.type.name === dataTypes[i].no_damage_from[e].name
                    );
                    newDamage.type.damage = 0 * 0;
                }
            } else {
                arrayNoDamageFrom.push({
                    type: {
                        name: dataTypes[i].no_damage_from[e].name,
                        damage: 0,
                    },
                });
            }
        }

        //Populando o array arrayNoDamageTo com o types, e excluindo os types repitidos.
        for (let e = 0; e < dataTypes[i].no_damage_to.length; e++) {
            if (arrayNoDamageTo.length > 0) {
                if (
                    arrayNoDamageTo.find(
                        (x) => x.type.name === dataTypes[i].no_damage_to[e].name
                    ) === undefined
                ) {
                    arrayNoDamageTo.push({
                        type: {
                            name: dataTypes[i].no_damage_to[e].name,
                            damage: 0,
                        },
                    });
                } else {
                    let newDamage = arrayNoDamageTo.find(
                        (x) => x.type.name === dataTypes[i].no_damage_to[e].name
                    );
                    newDamage.type.damage = 0 * 0;
                }
            } else {
                arrayNoDamageTo.push({
                    type: {
                        name: dataTypes[i].no_damage_to[e].name,
                        damage: 0,
                    },
                });
            }
        }
    }

    //Atualizando a eficacia no caso do Pokemon possuir dois types(Exemplo: fire e flying)
    if (dataTypes.length > 1) {
        //Defense
        //Verificando se o arrayNoDamageFrom possui algum type, se sim, depois é verificado nos arrays arrayHalfDamageFrom e
        //arrayDoubleDamageFrom se o mesmo type existe neles, se sim é removido.
        if (arrayNoDamageFrom.length > 0) {
            for (let i = 0; i < arrayNoDamageFrom.length; i++) {
                if (
                    arrayHalfDamageFrom.find(
                        (x) => x.type.name === arrayNoDamageFrom[i].type.name
                    ) !== undefined
                ) {
                    arrayHalfDamageFrom = arrayHalfDamageFrom.filter(
                        (type) =>
                            type.type.name !== arrayNoDamageFrom[i].type.name
                    );
                }
            }

            for (let i = 0; i < arrayNoDamageFrom.length; i++) {
                if (
                    arrayDoubleDamageFrom.find(
                        (x) => x.type.name === arrayNoDamageFrom[i].type.name
                    ) !== undefined
                ) {
                    arrayDoubleDamageFrom = arrayDoubleDamageFrom.filter(
                        (type) =>
                            type.type.name !== arrayNoDamageFrom[i].type.name
                    );
                }
            }
        }

        //Attack
        //Verificando se o arrayNoDamageTo possui algum type, se sim, depois é verificado nos arrays arrayHalfDamageTo e
        //arrayDoubleDamageTo se o mesmo type existe neles, se sim é removido.
        if (arrayNoDamageTo.length > 0) {
            for (let i = 0; i < arrayNoDamageTo.length; i++) {
                if (
                    arrayHalfDamageTo.find(
                        (x) => x.type.name === arrayNoDamageTo[i].type.name
                    ) !== undefined
                ) {
                    arrayHalfDamageTo = arrayHalfDamageTo.filter(
                        (type) =>
                            type.type.name !== arrayNoDamageTo[i].type.name
                    );
                }
            }

            for (let i = 0; i < arrayNoDamageTo.length; i++) {
                if (
                    arrayDoubleDamageTo.find(
                        (x) => x.type.name === arrayNoDamageTo[i].type.name
                    ) !== undefined
                ) {
                    arrayDoubleDamageTo = arrayDoubleDamageTo.filter(
                        (type) =>
                            type.type.name !== arrayNoDamageTo[i].type.name
                    );
                }
            }
        }

        //Defense
        //Verificando se o type existe tanto array arrayHalfDamageFrom quanto no array arrayDoubleDamageFrom, se sim, o type é removido dos dois arrays citados.
        //conta usada: 0.5 * 2 = 1, por tanto o type em questão passa a ter um 1x de valor, e por isso é removido da lista (1x é considerado valor normal/padrão).
        if (arrayHalfDamageFrom.length > 0) {
            let typesRemoved = [];

            for (let i = 0; i < arrayHalfDamageFrom.length; i++) {
                if (
                    arrayDoubleDamageFrom.find(
                        (x) => x.type.name === arrayHalfDamageFrom[i].type.name
                    ) !== undefined
                ) {
                    arrayDoubleDamageFrom = arrayDoubleDamageFrom.filter(
                        (type) =>
                            type.type.name !== arrayHalfDamageFrom[i].type.name
                    );
                    typesRemoved.push(arrayHalfDamageFrom[i].type.name);
                }
            }

            for (let i = 0; i < typesRemoved.length; i++) {
                arrayHalfDamageFrom = arrayHalfDamageFrom.filter(
                    (type) => type.type.name !== typesRemoved[i]
                );
            }
        }

        //Attack
        //Verificando se o type existe tanto array arrayHalfDamageTo quanto no array arrayDoubleDamageTo, se sim, o type é removido dos dois arrays citados.
        //conta usada: 0.5 * 2 = 1, por tanto o type em questão passa a ter um 1x de valor, e por isso é removido da lista (1x é considerado valor normal/padrão).
        if (arrayHalfDamageTo.length > 0) {
            let typesRemoved = [];

            for (let i = 0; i < arrayHalfDamageTo.length; i++) {
                if (
                    arrayDoubleDamageTo.find(
                        (x) => x.type.name === arrayHalfDamageTo[i].type.name
                    ) !== undefined
                ) {
                    arrayDoubleDamageTo = arrayDoubleDamageTo.filter(
                        (type) =>
                            type.type.name !== arrayHalfDamageTo[i].type.name
                    );
                    typesRemoved.push(arrayHalfDamageTo[i].type.name);
                }
            }

            for (let i = 0; i < typesRemoved.length; i++) {
                arrayHalfDamageTo = arrayHalfDamageTo.filter(
                    (type) => type.type.name !== typesRemoved[i]
                );
            }
        }
    }

    return (
        <S.TypesStats>
            <div className="div-types-stats">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="row">Damage</th>
                                <th scope="col">Attack</th>
                                <th scope="col">Defense</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Not effective</td>
                                <td>
                                    <PokeTypes
                                        types={arrayNoDamageTo}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="attack"
                                    />
                                </td>
                                <td>
                                    <PokeTypes
                                        types={arrayNoDamageFrom}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="defense"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Not very effective</td>
                                <td>
                                    <PokeTypes
                                        types={arrayHalfDamageTo}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="attack"
                                    />
                                </td>
                                <td>
                                    <PokeTypes
                                        types={arrayHalfDamageFrom}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="defense"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Super effective</td>
                                <td>
                                    <PokeTypes
                                        types={arrayDoubleDamageTo}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="attack"
                                    />
                                </td>
                                <td>
                                    <PokeTypes
                                        types={arrayDoubleDamageFrom}
                                        pokemonTypes={props.pokemonTypes}
                                        AtkDfs="defense"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </S.TypesStats>
    );
};

export default TypesStats;
