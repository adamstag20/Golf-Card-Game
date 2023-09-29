import React, { useState, useEffect } from "react";
import { chooseSwitch } from "../Backend/manageGame";
import "../App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
////////////////////////////////////////////////////////////////////////////////////
// Single Card Component implemented here used in App.js
////////////////////////////////////////////////////////////////////////////////////

function SingleCard({
  card,
  the_player,
  setPlayOn,
  toSwitch,
  topCard,
  setTop,
  setDeckHighlight,
  setCardHighlight,
  cardHighlight,
}) {
  const [faceUp, setFaceUp] = useState(1);
  const [highlight, setHighlight] = useState(false);
  //const [choose,setChoose] = useState([]);

  const notify = () =>
    toast.warn("Invalid Swap!", {
      position: "top-center",
      autoClose: 650,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  ////////////////////////////////////////////////////////////////////////////////////
  // Puts card face up when clicked
  ////////////////////////////////////////////////////////////////////////////////////

  const Change = () => {
    
    console.log("flipping card")
    if (cardHighlight == true && faceUp == 1){
      notify()
    }
    else {
      setFaceUp(0);
      card.face = 1;
      checkFaces();

    }
    return card;
  };

  useEffect(() => {
    if (cardHighlight != true) {
      setHighlight(false);
    }
  }, [cardHighlight]);
  ////////////////////////////////////////////////////////////////////////////////////
  //Checks to see what cards face up
  ////////////////////////////////////////////////////////////////////////////////////

  const checkFaces = () => {
    var counter = 0;
    for (let i = 0; i < 6; i++) {
      if (the_player[i].face === 1) {
        counter += 1;
      }
    }
    if (counter === 6) {
      setTimeout(createDelay, "4000");
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////
  // Delays game then ends round of game
  ////////////////////////////////////////////////////////////////////////////////////

  const createDelay = () => {
    setPlayOn(false);
  };

  ////////////////////////////////////////////////////////////////////////////////////
  // Responsible for adding card to be swapped and changing faceUp value if swapped
  ////////////////////////////////////////////////////////////////////////////////////

  const setPlace = () => {
    //setChoose(card)
    const pos = chooseSwitch(card, the_player, toSwitch, topCard, setTop);

    if (pos == 5) {
      setDeckHighlight(false);
      setCardHighlight(false);
      setHighlight(false);
      notify();
    } else if (pos != 10) {
      setDeckHighlight(false);
      setCardHighlight(false);
      setHighlight(false);
    } else {
      setHighlight(true);
      setCardHighlight(true);
    }
    // Changes card to face up once switched with top card
    if (pos < 6) {
      Change();
    }
  };
  // Display stuff
  return (
    <div className="card">
      <div>
        {faceUp ? (
          <img
            className="back"
            onClick={Change}
            src={require("../Classic/back.png")}
            alt="back-card"
          />
        ) : !highlight ? (
          <img
            onClick={setPlace}
            src={require(`../Classic/${card.src}.png`)}
            alt="card-front"
          />
        ) : (
          <img
            onClick={setPlace}
            src={require(`../Classic/${card.src}.png`)}
            alt="card-front"
            class="card-highlight"
          />
        )}
      </div>
    </div>
  );
}

export default SingleCard;
