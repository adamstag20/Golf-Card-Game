import "./App.css";
import shuffleDeck from "./Backend/loadDeck";
import { Player, setPlayers, createHand } from "./Backend/createPlayer";
import DeckPiles from "./Components/deckPiles";
import SingleCard from "./Components/SingleCard";
import RoundResult from "./Components/roundResult";
import { grabTopCard } from "./Backend/manageGame";
import { useState, useEffect } from "react";

var shuffledDeck = [];
var toSwitch = [];

function App() {
  // Players hand
  const [a_hand, setHand] = useState(() => {
    return [];
  });

  const [allPlayers, setAllPlayers] = useState(); //all players array
  const [index, setIndex] = useState(); // current player index
  const [updateIndex, setUpdateIndex] = useState(false);
  const [playOn, setPlayOn] = useState(true); // Used to track how many cards face up
  const [score, setScore] = useState(0); // Keeps track of scoring

  const [start, setStart] = useState(false); // Allows app to know when to start game
  const [topCard, setTopCard] = useState(0); // holds top card
  const [cardHighlight, setCardHighlight] = useState(false);
  const [deckHighlight, setDeckHighlight] = useState(false);

  // Have players set before initiating a new game.

  // Pass copy of the cards to a_hand and then update players as needed.
  useEffect(() => {
    /*
    shuffledDeck = shuffleDeck();
    setAllPlayers(setPlayers(3, shuffledDeck))
    */
    if (updateIndex) {
      console.log("Lets change the hand shall we?");
      if (index + 1 != allPlayers.length) {
        allPlayers[index].hand = a_hand;
        console.log(allPlayers[index])
        setAllPlayers(allPlayers);

        setHand(allPlayers[index + 1].hand);
        setIndex(index + 1);

      } else {

        allPlayers[index].hand = a_hand;
        console.log(allPlayers[index])
        setAllPlayers(allPlayers);
        setHand(allPlayers[0].hand);
        setIndex(0);
      }
      setUpdateIndex(false);
    } else {
      console.log("useEffect trigger");
    }
  });

  //////////////////////////////////////////////////////////////
  // Resets a shuffled deck and allows new game to be played
  //////////////////////////////////////////////////////////////

  const NewGame = () => {
    console.log(allPlayers);
    // Shuffle a new deck and grab new players
    shuffledDeck = shuffleDeck();
    let grabPlayers = setPlayers(3, shuffledDeck);
    setAllPlayers(grabPlayers);
    setHand(grabPlayers[2].hand);
    setIndex(2);
    setTopCard(grabTopCard(shuffledDeck));
    setDeckHighlight(false);
    setPlayOn(true);
    setStart(true);
    setCardHighlight(false);
    setDeckHighlight(false);
  };
  //////////////////////////////////////////////////////////////
  // Display stuff
  //////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <h1>Golf Card Game</h1>
      <button onClick={NewGame}>New Game</button>
      {start ? (
        <DeckPiles
          theDeck={shuffledDeck}
          freshTop={topCard}
          setTop={setTopCard}
          toSwitch={toSwitch}
          player={a_hand}
          deckHighlight={deckHighlight}
          setDeckHighlight={setDeckHighlight}
          setCardHighlight={setCardHighlight}
          setUpdateIndex={setUpdateIndex}
        />
      ) : (
        <div></div>
      )}
      <header>Player {index+1}</header>
      <div className="card-grid">
        {playOn ? (
          a_hand.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              the_player={a_hand}
              setPlayOn={setPlayOn}
              toSwitch={toSwitch}
              topCard={topCard}
              setTop={setTopCard}
              setDeckHighlight={setDeckHighlight}
              setCardHighlight={setCardHighlight}
              cardHighlight={cardHighlight}
              setUpdateIndex={setUpdateIndex}
            />
          ))
        ) : (
          <RoundResult setScore={setScore} a_hand={a_hand} />
        )}
      </div>
    </div>
  );
}

export default App;
