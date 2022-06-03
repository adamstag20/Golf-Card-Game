import React, { useState, useEffect  } from 'react'
import { chooseSwitch } from '../Backend/manageGame';


function SingleCard({card, the_player, setPlayOn, toSwitch}) {

  const [faceUp, setFaceUp] = useState(1);
  const [choose,setChoose] = useState([]);
  
  // Puts card face up when clicked
  const Change = () => {
        setFaceUp(0);
        card.face = 1;
        checkFaces();
        return card;
  }

  //Checks to see what cards face up 
  const checkFaces = () => {
    var counter = 0;
    for (let i = 0; i < 6; i ++){
        if (the_player[i].face === 1) {
            counter += 1;
        }
    }
    if (counter === 6){
      setTimeout(createDelay, "4000");
    }
  }

  // Delays game then ends round of game
  const createDelay = () => {
    setPlayOn(false);
  }
  const setPlace = () => {
    setChoose(card)
    chooseSwitch(choose, the_player, toSwitch)
  }
  return (
        <div className = "card"  >
          <div>
          { faceUp ? (
            <img className = "back" 
            onClick= {Change} src = {require("../Classic/back.png")} alt = "back-card"/>
          ) : (
              <img  onClick = {setPlace} className = "front" src = {require(`../Classic/${card.src}.png`)} alt= "card-front"/>
          )
         }
          </div>
        </div>
  )
}

export default SingleCard