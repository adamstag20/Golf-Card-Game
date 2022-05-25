class Player{
    constructor(hand, faces) {
      this.hand = hand;
      this.faces = faces;
    }
  }

  const createHand = (theDeck) => {
      var new_hand = []
      for (let i= 1; i <= 6; i++){
          new_hand.push(theDeck.pop())
      }
      return new_hand;


  }

  export {Player, createHand};
