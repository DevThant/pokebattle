import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="Pokecard">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        <p>Type: {pokemon.type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Hp: {pokemon.hp}</p>
      </div>
    );
  }
}

export default Pokecard;
