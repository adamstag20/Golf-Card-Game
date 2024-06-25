import React from "react";
import "../scoreCard.css";

function ScoreCard({ allPlayers }) {
  return (
    <div>
      {allPlayers && (
        <div className="score-box">
          {allPlayers.map((player) => (
            <div className = 'score-details'> 
              <text>Player {player.id + 1} </text>
              <RoundDisplay rounds = {player.rounds}></RoundDisplay>
              <h2>{player.total}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RoundDisplay({ rounds}){

  return (
    <div>
      {rounds.map((round)=> (
        <div className = "round-num">{round}</div>
      ))}
    </div>
  )
}

export default ScoreCard;
