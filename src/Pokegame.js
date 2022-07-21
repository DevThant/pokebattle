import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { Pokemons } from "./Pokemons";
import { chooseDeck, getBP } from "./helpers.js";
import "./Pokegame.css";

// compare the two decks and add isWinner
class Pokegame extends Component {
  static defaultProps = {
    title: "Pokegame",
    pokemons: Pokemons,
  };
  state = {
    player1: {
      deck: [],
      BP: 0,
      score: 0,
      totalBP: 0,
    },
    player2: {
      deck: [],
      BP: 0,
      score: 0,
      totalBP: 0,
    },
    battle: false,
    round: 0,
  };
  startBattle = (e) => {
    const p1Deck = chooseDeck(this.props.pokemons);
    const p2Deck = chooseDeck(this.props.pokemons);
    const p1Bp = getBP(p1Deck);
    const p2Bp = getBP(p2Deck);

    this.setState({
      battle: true,
      round: this.state.round + 1,
      player1: {
        deck: p1Deck,
        BP: p1Bp,
        score:
          p1Bp > p2Bp ? this.state.player1.score + 1 : this.state.player1.score,
        totalBP: this.state.player1.totalBP + p1Bp,
      },
      player2: {
        deck: p2Deck,
        BP: p2Bp,
        score:
          p2Bp > p1Bp ? this.state.player2.score + 1 : this.state.player2.score,
        totalBP: this.state.player2.totalBP + p2Bp,
      },
    });
  };
  resetBattle = (e) => {
    this.setState({
      battle: false,
      player1: {
        deck: [],
        BP: 0,
        score: 0,
        totalBP: 0,
      },
      player2: {
        deck: [],
        BP: 0,
        score: 0,
        totalBP: 0,
      },
      round: 0,
    });
  };
  render() {
    const { battle, player1, player2, round } = this.state;

    return (
      <div>
        <nav>
          <p>Round: {round}</p>
          <p>
            P1: {player1.score} -- Scores -- P2: {player2.score}
          </p>

          <p>
            P1: {player1.totalBP} -- Total Battle Power -- P2: {player2.totalBP}
          </p>
        </nav>
        <div>
          <h1 className="Pokegame-header">Poke Battle</h1>
          <button onClick={this.startBattle}>Fight</button>
          <button onClick={this.resetBattle}>Reset</button>
        </div>
        <div className={battle ? "" : "Pokegame-hide"}>
          <Pokedex
            title="Player 1"
            Pokemons={player1.deck}
            BP={player1.BP}
            isWinner={player1.BP > player2.BP}
          />
          <Pokedex
            title="Player 2"
            Pokemons={player2.deck}
            BP={player2.BP}
            isWinner={player2.BP > player1.BP}
          />
        </div>
      </div>
    );
  }
}

export default Pokegame;
