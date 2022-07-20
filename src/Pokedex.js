import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";
import { Pokemons } from "./Pokemons";

class Pokedex extends Component {
  static defaultProps = { title: "Pokedex", Pokemons };
  render() {
    const { title, Pokemons, isWinner, BP } = this.props;
    return (
      <div className="Pokedex">
        <h1
          className={`Pokedex-header ${
            title === "Player 1" ? "Pokedex-p1" : "Pokedex-p2"
          }`}
        >
          {title} | Total Power : {BP}
          <span className="Pokedex-winner">{isWinner ? "(Winner)" : ""}</span>
        </h1>
        <div className="Pokedex-flex">
          {Pokemons.map((pokemon) => (
            <Pokecard pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
