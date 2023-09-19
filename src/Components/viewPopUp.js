import React from 'react'
import '../PopUp.css'

function ViewPopUp({potentialCard,setPot,setTop,setToggle,theDeck,toSwitch,highlight}) {

  ////////////////////////////////////////////////////////////////////////////
  // Put potential card that was drawn from deck to the discard pile
  ////////////////////////////////////////////////////////////////////////////
  const discardPot = () => {
    setTop(potentialCard)
    theDeck.pop()
    setPot(theDeck[theDeck.length-1])
    setToggle(false)
    console.log(theDeck.length)
  }


  ////////////////////////////////////////////////////////////////////////////
  // Adds the potential card drawn from deck into switching array
  ////////////////////////////////////////////////////////////////////////////
  const addPot = () => {

    toSwitch.push(potentialCard)
    setTop(potentialCard)
    theDeck.pop()
    setPot(theDeck[theDeck.length-1])
    setToggle(false)
    highlight(true)
    console.log("Here!!")
    console.log(theDeck.length)
  }
  return (
    <div className='choosePopUp'>
        <div className='box'>
        <img src = {require(`../Classic/${potentialCard.src}.png`)} alt ="potential"/>
          <div className= 'buttons'>
            <button onClick = {discardPot} className = 'discard'>Discard</button>
            <button onClick = {addPot} className = 'choose'>Use</button>
          </div>
        </div>
    </div>
  )
}

export default ViewPopUp