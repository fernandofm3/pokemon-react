import React, { useEffect, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";

const SelectorItemPerPage = ({
    // setLimit,
    // limit,
    // setOffset,
    //Search,
    //SelectorType,
    //SelectorColor,
    setRemoveLoading,
    setRegionName,
}) => {
    //Pokemons por regiões
    const [pokeRegion, setPokeRegion] = useState([]);

    useEffect(() => {
        api.get(`/pokedex`).then((response) => {
            console.log(response.data.results);
            setPokeRegion(response.data.results);
        });
    }, []);

    return (
        <S.SelectorItemPerPage className="me-3">
            <div className="div-selector-box">
                {/* <label htmlFor="selector-box">Generation:</label> */}
                <div className="form-floating">
                    <select
                        className="form-select"
                        aria-label="Floating label select example"
                        id="floatingSelect"
                        //value=""
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRegionName(e.target.value);
                            setRemoveLoading(false);
                        }}
                        // disabled={
                        //     Search !== ""
                        //         ? true
                        //         : SelectorType !== ""
                        //         ? true
                        //         : SelectorColor !== ""
                        //         ? true
                        //         : false
                        // }
                    >
                        <option selected disabled>
                            Open this select menu
                        </option>
                        {pokeRegion.map((region) => (
                            <option value={region.name} key={region.name}>
                                {" "}
                                {region.name}{" "}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="floatingSelect">Pokemon per Region</label>
                </div>
            </div>
        </S.SelectorItemPerPage>
    );
};

export default SelectorItemPerPage;
