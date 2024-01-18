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

export { Player, setPlayers, createHand };
