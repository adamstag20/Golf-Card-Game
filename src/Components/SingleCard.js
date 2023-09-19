import React, { useState, useEffect  } from 'react'
import { chooseSwitch } from '../Backend/manageGame';


////////////////////////////////////////////////////////////////////////////////////
// Single Card Component implemented here used in App.js
////////////////////////////////////////////////////////////////////////////////////

function SingleCard({card, the_player, setPlayOn, toSwitch, topCard,setTop,setDeckHighlight}) {

  const [faceUp, setFaceUp] = useState(1);
  //const [choose,setChoose] = useState([]);
  
  ////////////////////////////////////////////////////////////////////////////////////
  // Puts card face up when clicked
  ////////////////////////////////////////////////////////////////////////////////////

  const Change = () => {
        setFaceUp(0);
        card.face = 1;
        checkFaces();
        return card;
  }

  ////////////////////////////////////////////////////////////////////////////////////
  //Checks to see what cards face up 
  ////////////////////////////////////////////////////////////////////////////////////

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

  ////////////////////////////////////////////////////////////////////////////////////
  // Delays game then ends round of game
  ////////////////////////////////////////////////////////////////////////////////////

  const createDelay = () => {
    setPlayOn(false);
  }

  ////////////////////////////////////////////////////////////////////////////////////
  // Responsible for adding card to be swapped and changing faceUp value if swapped
  ////////////////////////////////////////////////////////////////////////////////////

  const setPlace = () => {
    //setChoose(card)
    const pos =chooseSwitch(card, the_player, toSwitch,topCard, setTop)
    
    if ( pos != 10){
      console.log("DOING IT RIGHT")
      setDeckHighlight(false)
    }
    // Changes card to face up once switched with top card
    if ( pos < 6){Change()}
  }
  // Display stuff
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