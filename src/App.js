import "./App.css";
import shuffleDeck from "./Backend/loadDeck";
import { Player, setPlayers, createHand } from "./Backend/createPlayer";
import DeckPiles from "./Components/deckPiles";
import SingleCard from "./Components/SingleCard";
import RoundResult from "./Components/roundResult";
import { grabTopCard } from "./Backend/manageGame";
import { useState, useEffect } from "react";
import PrepGamePop from "./Components/newGamePop";

var shuffledDeck = [];
var toSwitch = [];
const TOTAL_PLAYERS = 2;
let prepCount = 0;
let prepPlayer = 0;

function App() {
  // Players hand
  const [a_hand, setHand] = useState(() => {
    return [];
  });

  const [allPlayers, setAllPlayers] = useState(); //all players array
  const [index, setIndex] = useState(); // current player index
  const [updateIndex, setUpdateIndex] = useState(false);
  const [playOn, setPlayOn] = useState(true); // Used to track how many cards face up
  const [score, setScore] = useState(-1); // Keeps track of scoring
  const [end, setEnd] = useState(false);
  const [prepGame, setPrepGame] = useState(false);

  const [start, setStart] = useState(false); // Allows app to know when to start game
  const [topCard, setTopCard] = useState(0); // holds top card
  const [cardHighlight, setCardHighlight] = useState(false);
  const [deckHighlight, setDeckHighlight] = useState(false);

  // Have players set before initiating a new game.

  const prepGameDisplay = () => {
    console.log("Here but still not working");
  };

  // Pass copy of the cards to a_hand and then update players as needed.
  useEffect(() => {
    // Allows each player to flip over two cards to start game
    if (prepGame == true) {
      let checkVal = 3;
      // All players have flipped 2 cards do not return
      if (TOTAL_PLAYERS == 2) {
        checkVal += 1;
      }
      if (prepPlayer == checkVal) {
        prepPlayer = 0;
        prepCount = 0;
        setPrepGame(false);
      } else {
        //Player hasn't flipped two cards yet
        if (prepCount != TOTAL_PLAYERS + 1) {
          prepCount += 1;
          setUpdateIndex(false);
        }
        //Player has flipped two cards
        if (prepCount == TOTAL_PLAYERS + 1) {
          setUpdateIndex(true);
          prepPlayer += 1;
          prepCount = 0;
        } else {
          return;
        }
      }
    }

    // Updates index of current player being displayed
    if (updateIndex) {
      setTimeout(() => {
        if (index + 1 != allPlayers.length) {
          // Check to see if next person was first to flip all cards
          if (index + 1 == score) {
            console.log("NEXT PLAYER 0");
            setPlayOn(false);
          }
          allPlayers[index].hand = a_hand;
          console.log(allPlayers);
          setAllPlayers(allPlayers);

          setHand(allPlayers[index + 1].hand);
          setIndex(index + 1);
        } else {
          // Check to see if next person was first to flip all cards
          if (0 == score) {
            console.log("NEXT PLAYER 0");
            setPlayOn(false);
          }

          allPlayers[index].hand = a_hand;
          console.log(allPlayers);
          setAllPlayers(allPlayers);
          setHand(allPlayers[0].hand);
          setIndex(0);
        }
        setUpdateIndex(false);
      }, "1200");
    }
  });

  //////////////////////////////////////////////////////////////
  // Resets a shuffled deck and allows new game to be played
  //////////////////////////////////////////////////////////////

  const NewGame = () => {
    // Shuffle a new deck and grab new players
    shuffledDeck = shuffleDeck();
    let grabPlayers = setPlayers(TOTAL_PLAYERS, shuffledDeck);
    setAllPlayers(grabPlayers);
    setHand(grabPlayers[0].hand);
    setIndex(0);
    setTopCard(grabTopCard(shuffledDeck));
    setDeckHighlight(false);
    setPlayOn(true);
    setStart(true);
    setCardHighlight(false);
    setDeckHighlight(false);
    setEnd(false);
    setScore(-1);
    setPrepGame(true);
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
      <PrepGamePop prepGame={prepGame} index={index} />
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
              setEnd={setEnd}
              end={end}
              index={index}
              setScore={setScore}
              score={score}
            />
          ))
        ) : (
          <div>
            {allPlayers.map(({ hand, id }) => (
              <RoundResult
                setScore={setScore}
                a_hand={hand}
                playerId={id}
                allPlayers={allPlayers}
                setAllPlayers={setAllPlayers}
              />
            ))}
            <button>Next Round</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
