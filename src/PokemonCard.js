import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonCard({name, url}) {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                console.log(result.data)
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }
            fetchPokemon()
        }, []);


    return (
        <article className="pokemonCard">
            <h1>{pokemon.name}</h1>
            {pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} width="100"/>}
            <h3>Moves: {pokemon.moves && pokemon.moves.length}</h3>
            <h3>Weight: {pokemon.weight}</h3>
            <h3 className="abilities">
                Abilities:
                {pokemon.abilities && pokemon.abilities.map((ability) => {
                    return (
                        <p className="ability">{ability.ability.name}</p>
                    )
                })}
            </h3>
        </article>
    )
}

export default PokemonCard
