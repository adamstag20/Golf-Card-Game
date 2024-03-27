import React from 'react';
import "../App.css";

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
        <h1>Player {index+1}: flip two cards </h1>
      </div>
    ) 
  }
  else {

    if (index < 5){
      return (
        <div className = "prepGame" >
            <h1>Player {index+1} </h1>
        </div>
      ) 
    }
    else {
      return (
        <div className = "prepGame" >
        </div>
      )

    }

  }}

export default PrepGamePop