import React, { useState } from 'react';
import '../App.css';
import {grabTopCard} from '../Backend/manageGame'

function DeckPiles({theDeck,freshTop}) {
  const [top, setTop] = useState(() => {return freshTop});
  console.log(theDeck.length);
  return (
    <div className='deck-pile'>
        <img src = {require("../Classic/back.png")} alt ="deck-back"/>
        <img src = {require(`../Classic/${top.src}.png`)} alt ="deck-back"/>
    </div>
  )
}

export default DeckPiles