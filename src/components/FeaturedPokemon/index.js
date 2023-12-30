import React from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
import PokeStats from "../../components/PokeStats";
import _get from "lodash/get";

function FeaturedPokemon(props) {
    console.log(props);

    //Verrificando o tamanho do NOME do Pokemon, se preciso o nome será dividio e mostrado só o primeiro nome.
    function splitName(name) {
        let newName = "";
        if (name.length > 15) {
            let splitedName = name.split("-");
            newName = splitedName[0];
        } else {
            newName = name.replace(/-/g, " ");
        }
        return newName;
    }

    //Pegando a URL da imagem oficial do Pokemon
    function spriteAdapterOfficial(spriteOfficial) {
        let oficial_atwork = _get(
            spriteOfficial,
            "other.official-artwork.front_default",
            ""
        );
        let dream_word = _get(
            spriteOfficial,
            "other.dream_world.front_default",
            ""
        );

        if (dream_word) {
            return dream_word;
        }

        if (oficial_atwork) {
            return oficial_atwork;
        }

        return null;
    }

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

    const spriteOfficial = spriteAdapterOfficial(props.pokemon.sprites);

    return (
        <S.FeaturedPokemon>
            <div className="div-main-featured-pokemon animate__animated animate__fadeIn animate__slow">
                <div className="div-featured-pokemon-1 mb-3">
                    <div className="div-name-pokemon">
                        <h1>{splitName(props.pokemon.name)}</h1>
                        <h2 className="">#{zeroLeft(props.pokemon.id)}</h2>
                    </div>

                    <div className="div-img-pokemon mb-3">
                        <div className="animate__animated animate__fadeInLeft animate__delay-1s animate__slow">
                            <img
                                className="img-pokemon-featured"
                                src={spriteOfficial}
                                alt="Imagem do Pokemon"
                            />
                        </div>
                    </div>

                    <div className="div-types-pokemon">
                        <PokeTypes
                            types={props.pokemon.types}
                            pokeId={props.pokemon.id}
                        />
                    </div>
                </div>

                <div className="div-featured-pokemon-2 mb-3">
                    <PokeStats
                        hp={props.pokemon.stats[0].base_stat}
                        attack={props.pokemon.stats[1].base_stat}
                        attackSpecial={props.pokemon.stats[3].base_stat}
                        defense={props.pokemon.stats[2].base_stat}
                        defenseSpecial={props.pokemon.stats[4].base_stat}
                        speed={props.pokemon.stats[5].base_stat}
                        totalStats={
                            props.pokemon.stats[0].base_stat +
                            props.pokemon.stats[1].base_stat +
                            props.pokemon.stats[2].base_stat +
                            props.pokemon.stats[3].base_stat +
                            props.pokemon.stats[4].base_stat +
                            props.pokemon.stats[5].base_stat
                        }
                    />
                </div>

                <div className="div-featured-pokemon-3">
                    <h1 className="mb-4">Description</h1>

                    <div className="div-info-pokemon mb-4">
                        <p>
                            <span>{props.pokemon.name}</span> is a Pokémon that
                            can reach a height of{" "}
                            <span>{props.pokemon.height / 10} meters</span> and
                            weigh up to{" "}
                            <span>{props.pokemon.weight / 10} kg</span> in its
                            natural habitat. Its base experience is{" "}
                            <span>
                                {" "}
                                {props.pokemon.base_experience
                                    ? props.pokemon.base_experience
                                    : "undefined, "}
                            </span>
                            , reflecting directly on the challenges it faces in
                            its daily life. His abilities are
                            {props.pokemon.abilities.map((abilities, index) => (
                                <span key={index}>
                                    {abilities.ability.name},{" "}
                                </span>
                            ))}
                            but as he gains experience he can acquire other
                            abilities.
                        </p>
                    </div>

                    <div className="div-more-details">
                        <button className="btn btn-warning">
                            more details
                        </button>
                    </div>
                </div>
            </div>
        </S.FeaturedPokemon>
    );
}

export default FeaturedPokemon;
