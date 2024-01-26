import React, { useState } from "react";
import { calcScore } from "../Backend/manageGame";

function RoundResult({ setScore, a_hand, player }) {
  var score = 0;
  const [roundScore, setRoundScore] = useState(0);
  const [load, setLoad] = useState(true);

  const getScore = () => {
    if (load === true) {
      score = calcScore(a_hand);
      setScore((prevScore) => prevScore + score);
      console.log(score);
      setRoundScore(score);
      setLoad(false);
    }
    return;
  };
  return (
    <div onload="findScore()">
      <script>function findScore() {(score = getScore())}</script>
      <div className="round-score">Player {player+1} score was {roundScore}</div>
    </div>
  );
}

export default RoundResult;
