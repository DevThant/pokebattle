import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

const POKE_API =
  "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";

const pokemons = [
  {
    id: 4,
    name: "Charmander",
    type: "fire",
    attack: 55,
    hp: 35,
    imgSrc: `${POKE_API}${4}.svg`,
  },
  {
    id: 7,
    name: "Squirtle",
    type: "water",
    attack: 48,
    hp: 44,
    imgSrc: `${POKE_API}${7}.svg`,
  },
  {
    id: 11,
    name: "Metapod",
    type: "bug",
    attack: 56,
    hp: 50,
    imgSrc: `${POKE_API}${11}.svg`,
  },
  {
    id: 12,
    name: "Butterfree",
    type: "flying",
    attack: 45,
    hp: 60,
    imgSrc: `${POKE_API}${12}.svg`,
  },
  {
    id: 25,
    name: "Pikachu",
    type: "electric",
    attack: 55,
    hp: 35,
    imgSrc: `${POKE_API}${25}.svg`,
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: "normal",
    attack: 45,
    hp: 115,
    imgSrc: `${POKE_API}${39}.svg`,
  },
  {
    id: 94,
    name: "Gengar",
    type: "ghost",
    attack: 65,
    hp: 60,
    imgSrc: `${POKE_API}${94}.svg`,
  },
  {
    id: 133,
    name: "Eevee",
    type: "normal",
    attack: 55,
    hp: 55,
    imgSrc: `${POKE_API}${133}.svg`,
  },
  {
    id: 137,
    name: "Porygon",
    type: "normal",
    attack: 65,
    hp: 40,
    imgSrc: `${POKE_API}${137}.svg`,
  },
  {
    id: 142,
    name: "Mewtwo",
    type: "psychic",
    attack: 110,
    hp: 80,
    imgSrc: `${POKE_API}${142}.svg`,
  },
  {
    id: 150,
    name: "Mew",
    type: "psychic",
    attack: 100,
    hp: 100,
    imgSrc: `${POKE_API}${150}.svg`,
  },
  {
    id: 181,
    name: "Magnemite",
    type: "steel",
    attack: 55,
    hp: 50,
    imgSrc: `${POKE_API}${181}.svg`,
  },
  {
    id: 201,
    name: "Unown",
    type: "psychic",
    attack: 48,
    hp: 48,
    imgSrc: `${POKE_API}${201}.svg`,
  },
  {
    id: 202,
    name: "Wobbuffet",
    type: "psychic",
    attack: 33,
    hp: 190,
    imgSrc: `${POKE_API}${202}.svg`,
  },
  {
    id: 212,
    name: "Scizor",
    type: "bug",
    attack: 100,
    hp: 70,
    imgSrc: `${POKE_API}${212}.svg`,
  },
];

class Pokedex extends Component {
  static defaultProps = {
    pokemons,
  };
  render() {
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className="Pokedex-grid">
          {this.props.pokemons.map((pokemon) => (
            <Pokecard pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
