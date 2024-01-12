import "./App.css";
import shuffleDeck from "./Backend/loadDeck";
import { Player, setPlayers, createHand } from "./Backend/createPlayer";
import DeckPiles from "./Components/deckPiles";
import SingleCard from "./Components/SingleCard";
import RoundResult from "./Components/roundResult";
import { grabTopCard } from "./Backend/manageGame";
import { useState } from "react";

var shuffledDeck = [];
var toSwitch = [];

function App() {
  // Players hand
  const [a_hand, setHand] = useState(() => {
    return [];
  });

  const [allPlayers, setAllPlayers] = useState();
  const [playOn, setPlayOn] = useState(true); // Used to track how many cards face up
  const [score, setScore] = useState(0); // Keeps track of scoring
  const [start, setStart] = useState(false); // Allows app to know when to start game
  const [topCard, setTopCard] = useState(0); // holds top card
  const [cardHighlight, setCardHighlight] = useState(false)
  const [deckHighlight, setDeckHighlight] = useState(false)

  //////////////////////////////////////////////////////////////
  // Resets a shuffled deck and allows new game to be played
  //////////////////////////////////////////////////////////////

  const NewGame = () => {
    shuffledDeck = shuffleDeck();
    setAllPlayers(setPlayers(3,shuffledDeck))
    setHand(createHand(shuffledDeck));
    setTopCard(grabTopCard(shuffledDeck));
    setDeckHighlight(false)
    setPlayOn(true);
    setStart(true);
    setCardHighlight(false)
    setDeckHighlight(false)
  }
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
        />
      ) : (
        <div></div>
      )}
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
