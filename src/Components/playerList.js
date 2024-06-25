import React from "react";
import "../playerList.css";

function PlayerList({ allPlayers, index, playOn}) {
  return (
    <div>
      {allPlayers && (
        <div className="player-display">
          {allPlayers.map((player) => (
            <div className="player-hand">
              { player.id === index ? (

                <text className ="player-highlight">Player {player.id + 1} </text>
              ):(
              <text>Player {player.id + 1} </text>
              )}
              <div className="grid">
                {player.hand.map((card) => (
                  <Card card={card}
                  playOn = {playOn} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ card, playOn }) {

  if (card.face == 0 && playOn == true){
    return (
      <div className="display-card">
        <img
          className="card-shown"
          src={require(`../Classic/back.png`)}
          alt="card-front"
        />
      </div>
    ); 
  }
  else {
  return (
    <div className="display-card">
      <img
        className="card-shown"
        src={require(`../Classic/${card.src}.png`)}
        alt="card-front"
      />
    </div>
  );
  }
}

export default PlayerList;
