import React, { useState } from 'react';
import '../App.css';
import {grabTopCard, chooseSwitch} from '../Backend/manageGame'
import ViewPopUp from './viewPopUp';

////////////////////////////////////////////////////////////////////////////////////
// Top display component of remaining deck and deck pile to choose from
////////////////////////////////////////////////////////////////////////////////////

function DeckPiles({theDeck,freshTop,setTop,toSwitch,player}) {

  const [openToggle,setToggle] = useState(false)
  const [viewTop, setViewTop] = useState(theDeck[theDeck.length-1])
  
  const toggleCard = () => {
    setToggle(!openToggle)
    console.log(viewTop)

  }

  ////////////////////////////////////////////////////////////////////////////////////
  // Pull new Top card
  ////////////////////////////////////////////////////////////////////////////////////

  const changeTopCard = () =>{
    const val = theDeck.pop()
    setTop(val)
  }

  ////////////////////////////////////////////////////////////////////////////////////
  // Used to add a swap card and to switch if applicable   
  ////////////////////////////////////////////////////////////////////////////////////

  const setPlace = () => {
    chooseSwitch(freshTop,player,toSwitch,freshTop,setTop)
  }

  return (
    <div className='deck-pile'>
        <img onClick = {toggleCard} src = {require("../Classic/back.png")} alt ="deck-back"/>
        { openToggle && <ViewPopUp
        potentialCard={viewTop}
        setPot = {setViewTop}
        setTop = {setTop}
        setToggle = {setToggle}
        theDeck = {theDeck}
        toSwitch = {toSwitch}/>}

        <img onClick = {setPlace} src = {require(`../Classic/${freshTop.src}.png`)} alt ="deck-back"/>
    </div>
  )
}

export default DeckPiles