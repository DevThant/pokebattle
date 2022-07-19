import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";
import { Pokemons } from "./Pokemons";

class Pokedex extends Component {
  static defaultProps = { title: "Pokedex", Pokemons };
  render() {
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-header">
          {this.props.title} | Total Power : {this.props.BP}
          <span className="Pokedex-winner">
            {this.props.isWinner ? "(Winner)" : ""}
          </span>
        </h1>
        <div className="Pokedex-grid">
          {this.props.Pokemons.map((pokemon) => (
            <Pokecard pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
