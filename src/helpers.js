const chooseDeck = (pokemons) => {
  let deck = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * pokemons.length);
    deck.push(pokemons[random]);
    pokemons.splice(random, 1);
  }

  return deck;
};

const getTotalBP = (pokemons) => {
  let total = 0;
  // calculate attack and hp for each pokemon in the deck and add them to total
  for (let i = 0; i < pokemons.length; i++) {
    total += pokemons[i].attack + pokemons[i].hp;
  }

  return total;
};

export { chooseDeck, getTotalBP };
