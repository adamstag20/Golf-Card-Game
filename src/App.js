import './App.css'
import shuffleDeck from './Backend/loadDeck';
import {Player, createHand} from './Backend/createPlayer';
import DeckPiles from './Components/deckPiles';
import SingleCard from './Components/SingleCard';
import RoundResult from './Components/roundResult';
import { grabTopCard } from './Backend/manageGame';
import { useState } from 'react';

var shuffledDeck = []


function App() {
  const [a_hand, setHand] = useState(() => {
    return []
  });
  const [playOn, setPlayOn] = useState(true);
  const [score, setScore] = useState(0);
  const [start,setStart] = useState(false);
  const [topCard,setTopCard] = useState(0);

  // Resets a shuffled deck and allows new game to be played
  const NewGame = () => {
    shuffledDeck = shuffleDeck();
    setHand(createHand(shuffledDeck));
    setTopCard(grabTopCard(shuffledDeck));
    setPlayOn(true);
    setStart(true);
    console.log(shuffledDeck);
  }


  return (
    <div className="App">
       <h1>Golf Card Game</h1>
      <button onClick = {NewGame}>New Game</button>
      {start ? (
      <DeckPiles
      theDeck = {shuffledDeck}
      freshTop = {topCard}
      />
      ) : ( <div></div>)
      }
      <div className = "card-grid">
        { playOn ? (
        a_hand.map(card =>(
            <SingleCard key ={card.id} 
            card = {card} 
            the_player = {a_hand}
            setPlayOn = {setPlayOn}/>
        ))
        ) : (
          <RoundResult
          setScore = {setScore}
           a_hand = {a_hand}/>
        )
       }
      </div>
    </div>
  );
}

export default App;
