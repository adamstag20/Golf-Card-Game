import React from 'react'

function newGamePop() {
  return (
    <div className = "newGame" >
       <div>

       </div>
    </div>
  )
}

function PrepGamePop({prepGame, index}) {


  if (prepGame == true){
    return (
      <div className = "prepGame" >
        <h1>Player {index+1} </h1>
        <h2> Flip 2 cards</h2>
      </div>
    ) 
  }
  else {

  return (
    <div className = "prepGame" >
        <h1>Player {index+1} </h1>
    </div>
  )
  }}

export default PrepGamePop