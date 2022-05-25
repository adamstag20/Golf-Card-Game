import React, { useState } from 'react'


function SingleCard({card, the_player, setPlayOn}) {

  const [faceUp, setFaceUp] = useState(1);

  const Change = () => {
        setFaceUp(0);
        card.face = 1;
        checkFaces();
        return card;
  }
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
  const createDelay = () => {
    setPlayOn(false);
  }
  return (
        <div className = "card"  >
          <div>
          { faceUp ? (
            <img className = "back" 
            onClick= {Change} src = {require("../Classic/back.png")} alt = "back-card"/>
          ) : (
            <img className = "front" src = {require(`../Classic/${card.src}.png`)} alt= "card-front"/>
          )
         }
          </div>
        </div>
  )
}

export default SingleCard