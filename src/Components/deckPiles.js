import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { grabTopCard, chooseSwitch } from "../Backend/manageGame";
import ViewPopUp from "./viewPopUp";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

////////////////////////////////////////////////////////////////////////////////////
// Top display component of remaining deck and deck pile to choose from
////////////////////////////////////////////////////////////////////////////////////

function DeckPiles({
  theDeck,
  freshTop,
  setTop,
  toSwitch,
  player,
  deckHighlight,
  setDeckHighlight,
  setCardHighlight,
  setUpdateIndex,
}) {
  const [openToggle, setToggle] = useState(false);
  const [viewTop, setViewTop] = useState(theDeck[theDeck.length - 1]);

  /*
  useEffect(() => {
    const change = chooseSwitch(freshTop, player, toSwitch, freshTop, setTop);
    console.log("Trigger openToggle useEffect") 
  }, [openToggle]);
*/

  const toggleCard = () => {
    if (!deckHighlight){
      console.log("Toggle no no :(")
      setToggle(!openToggle);
    }
    console.log("TOGGLED ASS HOLE");
  };

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
  // Pull new Top card
  ////////////////////////////////////////////////////////////////////////////////////

  const changeTopCard = () => {
    const val = theDeck.pop();
    setTop(val);
  };
  ////////////////////////////////////////////////////////////////////////////////////
  // Used to add a swap card and to switch if applicable
  ////////////////////////////////////////////////////////////////////////////////////

  const setPlace = () => {
    const change = chooseSwitch(freshTop, player, toSwitch, freshTop, setTop);
    if (change == 5) {
      setDeckHighlight(false);
      notify();
      console.log("TRIGGER UN_HIGHLIGHT throw error");
      setCardHighlight(false);
    } else if (change != 10) {
      setDeckHighlight(false);
      console.log("TRIGGER UN_HIGHLIGHT");
      setCardHighlight(false);
      setUpdateIndex(true)
      console.log("True")
    } else {
      setDeckHighlight(true);
    }
    setCardHighlight(false);
  };

  return (
    <div className="deck-pile">
      <img
        onClick={toggleCard}
        src={require("../Classic/back.png")}
        alt="deck-back"
      />
      {openToggle && !deckHighlight && (
        <ViewPopUp
          potentialCard={viewTop}
          setPot={setViewTop}
          setTop={setTop}
          setToggle={setToggle}
          theDeck={theDeck}
          toSwitch={toSwitch}
          highlight={setDeckHighlight}
          freshTop = {freshTop}
          player = {player}
          setCardHighlight = {setCardHighlight}
          setUpdateIndex = {setUpdateIndex}
        />
      )}
      {!deckHighlight ? (
        <img
          onClick={setPlace}
          src={require(`../Classic/${freshTop.src}.png`)}
          alt="deck-back"
        />
      ) : (
        <img
          onClick={setPlace}
          src={require(`../Classic/${freshTop.src}.png`)}
          alt="deck-back"
          class="card-highlight"
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={650}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default DeckPiles;
