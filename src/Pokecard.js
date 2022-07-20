import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{pokemon.name}</p>
        <div className="Pokecard-image">
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        </div>
        <p>Type: {pokemon.type}</p>
        <p className="Pokecard-stat">
          Attack: <span>{pokemon.attack}</span>
        </p>
        <p className="Pokecard-stat">
          Hp: <span>{pokemon.hp}</span>
        </p>
      </div>
    );
  }
}

export default Pokecard;
