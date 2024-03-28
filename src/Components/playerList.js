import React from "react";
import "../playerList.css";

function PlayerList({ allPlayers }) {
  return (
    <div>
      {allPlayers && (
        <div className="player-display">
          {allPlayers.map((player) => (
            <div className="player-hand">
              <text>Player {player.id + 1} </text>
              <div className="grid">
                {player.hand.map((card) => (
                  <Card card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ card }) {
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

export default PlayerList;
