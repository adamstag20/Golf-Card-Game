////////////////////////////////////////////////////////////////////////////////////
// Does switch checking for invalid swaps, cards in swap, too many cards added, etc.
////////////////////////////////////////////////////////////////////////////////////

function chooseSwitch(to_add, the_player, toSwitch, topCard,setTop){

  //Makes sure user has a card they want to switch
  if (to_add.length === 0) {return 10}

  // more than 2 cards selected
  if (toSwitch.length > 2){
      while (toSwitch.length !== 0){ toSwitch.pop()}
      return 10
  }
  if ( toSwitch.length == 2 && toSwitch[0].src === toSwitch[1].src){
      while (toSwitch.length !== 0){ toSwitch.pop()}
      console.log("Invalid Swap!!")
      return 10;
  }
  // No cards -> add selected
  if (toSwitch.length === 0){
    toSwitch.push(to_add)
    console.log(toSwitch)
    return 10
  }
  else{
    
    toSwitch.push(to_add)
    console.log(toSwitch)
    if (toSwitch[0].src === toSwitch[1].src){
        while (toSwitch.length !== 0){ toSwitch.pop()}
        console.log("Invalid Swap!!")
        return 5;
    }
    var decide = 0
    for (let i =0; i < the_player.length;i++){
      for (let j =0; j < toSwitch.length;j++){

        // Check if cards to swap are both from player's hand
        if (the_player[i].src === toSwitch[j].src){
          decide++
        }
      }
    }
    }
    if (decide === 2){
      console.log("INVALID SWAP")
      while (toSwitch.length !== 0){ toSwitch.pop()}
      return 5
    }
    return doSwitch(the_player, toSwitch, setTop, topCard)
    }

//////////////////////////////////////////////////////////////////////////
// Switches cards from hand and deck
/////////////////////////////////////////////////////////////////////////

function doSwitch(player, toSwitch, setTop, topCard){

      var pos = 0

      // Top Card is first card selected
      if (toSwitch[0].src === topCard.src){
        for (let i = 0; i < 6; i++){
          if (player[i].src === toSwitch[1].src){ pos = i}
        }
        let prev = JSON.parse(JSON.stringify(player[pos]))
        player[pos].src = toSwitch[0].src
        player[pos].val = toSwitch[0].val
        setTop(prev)
        while (toSwitch.length !== 0){ toSwitch.pop()}
        return pos
      }
      // Hand card first selected
      else {
        for (let i = 0; i < 6; i++){
          if (player[i].src === toSwitch[0].src){ pos = i}
        }
        let prev = JSON.parse(JSON.stringify(player[pos]))
        // Switching src for photo card swap and also the values to get
       // for proper scoring functionality
        player[pos].src = toSwitch[1].src
        player[pos].val = toSwitch[1].val
        setTop(prev)
        while (toSwitch.length !== 0){ toSwitch.pop()}
        return pos
      }
      return 10

}

/////////////////////////////////////////////////////////////////////////
// Grabs card from top of deck
////////////////////////////////////////////////////////////////////////

function grabTopCard(theDeck) {

  var val = theDeck.pop()
  //val.face = 1
  return val
}

/////////////////////////////////////////////////////////////////////////
// Calculates score for each hand after a round of play
/////////////////////////////////////////////////////////////////////////

function calcScore(a_hand) {
    var tot = 0;
    for (let i = 0; i < 6; i++){
      //Check for 1st card
      if (i === 0){
        if ( a_hand[i].val !== a_hand[1].val && a_hand[i].val !== a_hand[3].val
          && a_hand[i].val !== a_hand[4].val){
            if (a_hand[i].val === 11 || a_hand[i].val === 12){tot += 10;}
            else {tot += a_hand[i].val;}
          }
      }
      //Check for 2nd and 5th card
      if ( i === 1 || i === 4){
        var choose = false;
        for (let j = 0; j < 6; j++){
          if (j !== i){
            if (a_hand[j].val === a_hand[i].val){ choose = true}
          }
        }
        if ( choose === false) {
            if (a_hand[i].val === 11 || a_hand[i].val === 12){tot += 10;}
            else {tot += a_hand[i].val;}
        }
      }
      // Check for 3rd card
      if (i === 2){
        if ( a_hand[i].val !== a_hand[1].val && a_hand[i].val !== a_hand[5].val
          && a_hand[i].val !== a_hand[4].val){
            if (a_hand[i].val === 11 || a_hand[i].val === 12){tot += 10;}
            else {tot += a_hand[i].val;}
          }
      }
      // Check for 4th card
      if (i === 3){
        if ( a_hand[i].val !== a_hand[0].val && a_hand[i].val !== a_hand[1].val
          && a_hand[i].val !== a_hand[4].val){
            if (a_hand[i].val === 11 || a_hand[i].val === 12){tot += 10;}
            else {tot += a_hand[i].val;}
          }
      }
      // Check fro 6th card
      if (i === 5){
        if ( a_hand[i].val !== a_hand[1].val && a_hand[i].val !== a_hand[2].val
          && a_hand[i].val !== a_hand[4].val){
            if (a_hand[i].val === 11 || a_hand[i].val === 12){tot += 10;}
            else {tot += a_hand[i].val;}
          }
      }
    }
    return tot;
  }

  export { calcScore, grabTopCard, chooseSwitch}