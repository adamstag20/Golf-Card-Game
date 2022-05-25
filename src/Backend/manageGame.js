

function grabTopCard(theDeck) {
  return theDeck.pop()
}


function calcScore(a_hand) {
    console.log(a_hand)
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

  export { calcScore, grabTopCard}