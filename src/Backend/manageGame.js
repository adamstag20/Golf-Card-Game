
function chooseSwitch(to_add, the_player, toSwitch){

  //Makes sure user has a card they want to switch
  if (to_add.length === 0) {return}

  if (toSwitch.length === 0){
    toSwitch.push(to_add)
    console.log(toSwitch)
    return
  }
  else{
    toSwitch.push(to_add)
    console.log(toSwitch)
    var decide = 0
    for (let i =0; i < the_player.length;i++){
      if (the_player[i].src === toSwitch[0].src || the_player[i].src === toSwitch[1].src){
        ++decide
      }
    if (decide === 2){
      console.log("INVALID SWAP")
      while (toSwitch.length !== 0){ toSwitch.pop()}
    }
    console.log(toSwitch)
    }

  }

}


function grabTopCard(theDeck) {
  return theDeck.pop()
}


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