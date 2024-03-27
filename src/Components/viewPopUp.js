import React from "react";
import { chooseSwitch } from "../Backend/manageGame";
import "../PopUp.css";

function ViewPopUp({
  potentialCard,
  setPot,
  setTop,
  setToggle,
  theDeck,
  toSwitch,
  highlight,
  freshTop,
  player,
  setCardHighlight,
  setUpdateIndex
}) {
  ////////////////////////////////////////////////////////////////////////////
  // Put potential card that was drawn from deck to the discard pile
  ////////////////////////////////////////////////////////////////////////////
  const discardPot = () => {

    if (toSwitch.length == 1){
      toSwitch.pop()
      setCardHighlight(false)
    }
    setTop(potentialCard);
    theDeck.pop();
    setPot(theDeck[theDeck.length - 1]);
    setToggle(false);
    console.log(theDeck.length);
    setUpdateIndex(true)
  };

  ////////////////////////////////////////////////////////////////////////////
  // Adds the potential card drawn from deck into switching array
  ////////////////////////////////////////////////////////////////////////////
  const addPot = () => {
    if (toSwitch.length == 0) {

      toSwitch.push(potentialCard);
      setTop(potentialCard);
      theDeck.pop();
      setPot(theDeck[theDeck.length - 1]);
      setToggle(false);
      highlight(true);
    }
    else {
      const change = chooseSwitch(potentialCard, player, toSwitch, freshTop,setTop)
      if (change != 5 && change != 10){
        setCardHighlight(false)
      }
      theDeck.pop()
      setPot(theDeck[theDeck.length - 1]);
      setToggle(false);
    }
  };
  return (
    <div className="choosePopUp">
      <div className="box">
        <img
          className="pop-up-img"
          src={require(`../Classic/${potentialCard.src}.png`)}
          alt="potential"
        />
        <div className="buttons">
          <button onClick={discardPot} className="discard">
            Discard
          </button>
          <button onClick={addPot} className="choose">
            Use
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewPopUp;
