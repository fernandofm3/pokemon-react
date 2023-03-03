import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

function KeepExploring(props) {
    return (
        <S.KeepExploring>
            <Link
                className="btn-keep-exploring"
                to={
                    "/?id=" +
                    props.query.get("id") +
                    "&offset=" +
                    props.query.get("offset") +
                    "&limit=" +
                    props.query.get("limit") +
                    "&type=" +
                    props.query.get("type") +
                    "&color=" +
                    props.query.get("color") +
                    "&qtPokemons=" +
                    props.query.get("qtPokemons")
                }
                onClick={() => props.scrollUp()}
            >
                <i className="bi bi-search"></i> keep Exploring
            </Link>
        </S.KeepExploring>
    );
}

export default KeepExploring;
