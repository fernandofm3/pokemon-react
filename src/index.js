import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./views/pokedex";
import Pokeinfo from "./views/pokeinfo";
import PokeComparation from "./views/pokeCoparation";
import PokeCapture from "./views/pokeCapture";
import AllPokemon from "./views/allPokemon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <main>
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokeinfo" element={<Pokeinfo />} />
                <Route path="/poke-comparation" element={<PokeComparation />} />
                <Route path="/poke-capture" element={<PokeCapture />} />
                <Route path="/all-Pokemon" element={<AllPokemon />} />
            </Routes>
        </main>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
