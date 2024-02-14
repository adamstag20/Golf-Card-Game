class Player {
  constructor(id, hand) {
    this.id = id;
    this.hand = hand;
    this.total = 0;
    this.rounds = [];
  }
}

const setPlayers = (totalPlay,theDeck) => {
  let players = []
  for (let i = 0; i < totalPlay; i++){
    let toAdd = new Player(i, createHand(theDeck))
    players.push(toAdd)
  }
  return players

}

const createHand = (theDeck) => {
  var new_hand = [];
  for (let i = 1; i <= 6; i++) {
    new_hand.push(theDeck.pop());
  }
  return new_hand;
};

// Give current players new hand of cards
const refreshPlayer = (allPlayers, theDeck) => {

const totalPlayers = allPlayers.length

for (let i = 0; i < totalPlayers; i++){
  let new_hand = []
  for (let j = 1; j <= 6; j++) {
    new_hand.push(theDeck.pop());
  }
  allPlayers[i].hand = new_hand
}
return allPlayers
}
export { Player, setPlayers, createHand };
