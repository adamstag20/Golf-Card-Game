import React, { useState } from "react";
import { calcScore } from "../Backend/manageGame";

function RoundResult({ setScore, a_hand, playerId, allPlayers, setAllPlayers}) {
  var score = 0;
  const [roundScore, setRoundScore] = useState(0);
  const [load, setLoad] = useState(true);

  const getScore = () => {

    if (load === true) {
      score = calcScore(a_hand);
      setScore((prevScore) => prevScore + score);
      console.log(score);
      allPlayers[playerId].rounds.push(score);
      setAllPlayers(allPlayers);
      setRoundScore(score);
      setLoad(false);
    }
    return;
  };
  return (
    <div onload="findScore()">
      <script>function findScore() {(score = getScore())}</script>
      <div className="round-score">Player {playerId+1} score was {roundScore}</div>
    </div>
  );
}

export default RoundResult;
