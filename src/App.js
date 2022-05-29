import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PokemonCard from "./PokemonCard";
import fatPikachu from './assets/kindpng_468972.png'
import pokeLogo from './assets/kindpng_24249.png'

function App() {

    const [pokemon, setPokemon] = useState([])
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const result = await axios.get(`${endpoint}`)
                console.log(result.data)
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemons()
    }, [endpoint]);

    return (
        <body className="body">
            <header className="headerBar">
                <img src={fatPikachu} alt="Pikachu" height="100" className="imgFlipped"/>
                <img src={pokeLogo} alt="Pokemon Logo" height="100"/>
                <img src={fatPikachu} alt="Pikachu" height="100"/>
            </header>

            <nav className="navBar">
                <button className={!pokemon.previous ? "button-disabled" : "button"}
                    type="button"
                    disabled={!pokemon.previous}
                    onClick={() => setEndpoint(pokemon.previous)}

                > Vorige
                </button>

                <button className={!pokemon.next ? "button-disabled" : "button"}
                    type="button"
                    disabled={!pokemon.next}
                    onClick={() => setEndpoint(pokemon.next)}
                > Volgende
                </button>
            </nav>

            <div className="pokemonCards">
                {pokemon.results && pokemon.results.map((poke) => {
                    return <PokemonCard url={poke.url} name={poke.name} key={poke.name}/>
                })}
            </div>
        </body>
    );
}

export default App;
