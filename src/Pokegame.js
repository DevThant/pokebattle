import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { Pokemons } from "./Pokemons";
import { chooseDeck, getTotalBP } from "./helpers.js";

// compare the two decks and add isWinner
class Pokegame extends Component {
  static defaultProps = {
    title: "Pokegame",
    pokemons: Pokemons,
  };
  render() {
    const p1 = chooseDeck(this.props.pokemons);
    const p2 = chooseDeck(this.props.pokemons);
    const p1Total = getTotalBP(p1);
    const p2Total = getTotalBP(p2);
    return (
      <div>
        <Pokedex
          title="Player 1"
          Pokemons={p1}
          BP={p1Total}
          isWinner={p1Total > p2Total}
        />
        <Pokedex
          title="Player 2"
          Pokemons={p2}
          BP={p2Total}
          isWinner={p2Total > p1Total}
        />
      </div>
    );
  }
}

export default Pokegame;
