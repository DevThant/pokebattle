const chooseDeck = (pokemons) => {
  let deck = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * pokemons.length);
    // do not push the same pokemon twice
    if (deck.includes(pokemons[random])) {
      i--;
    } else {
      deck.push(pokemons[random]);
    }
  }
  return deck;
};

const getBP = (pokemons) => {
  return pokemons.reduce((total, pokemon) => {
    return total + pokemon.attack + pokemon.hp;
  }, 0);
};

export { chooseDeck, getBP };
