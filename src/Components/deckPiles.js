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
}) {
  const [openToggle, setToggle] = useState(false);
  const [viewTop, setViewTop] = useState(theDeck[theDeck.length - 1]);

  useEffect(() => {}, [deckHighlight]);

  const toggleCard = () => {
    setToggle(!openToggle);
    console.log(viewTop);
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
      {openToggle && (
        <ViewPopUp
          potentialCard={viewTop}
          setPot={setViewTop}
          setTop={setTop}
          setToggle={setToggle}
          theDeck={theDeck}
          toSwitch={toSwitch}
          highlight={setDeckHighlight}
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
