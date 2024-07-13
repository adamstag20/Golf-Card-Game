import React, { useState } from "react";
import "../App.css";

function WelcomePage() {
  return (
    <div className = "welcome-box">
      <h1 className="welcome-title"> Welcome to the Golf Card Game</h1>
      <h3>
        Just like the outdoor game of golf, the card game known as GOLF has a
        goal of keeping the score as low as possible.{" "}
      </h3>
      <h3>
        {" "}
        <strong>Game Objective:</strong> You cannot look (except for the inital
        peek of your two bottom row cards at the beginning of the game) at your
        own face down cards.The objective or goal is to switch the cards you
        have with those of the lowest values you pick up from the deck or
        discard pile.{" "}
      </h3>
      <h3>
        <strong>How to Play:</strong> Each player is provided two rows of three
        face down cards. To start the game each player will flip over two cards.{" "}
      </h3>
      <h3>
        Then each person makes a move until all six cards are face up for one
        player. All other players are allowed to make one more move until they
        have to reveal any cards. Once all cards are flipped each player will
        calculate their score for that round or "hole".
      </h3>
      <h3>
        <strong>Cards are scored as...</strong>
      </h3>
      <h4>
        <strong>Aces:</strong> 1 <br/>
        <strong>2 through 10:</strong> Cards number value <br/>
        <strong>Jacks and Queens:</strong> 10 <br/>
        <strong>Kings:</strong> 0
      </h4>
      <h3>
        You can cancel cards out if they are the same card type for example a
        Jack matches a Jack or a 4 matches a 4. To cancel to zero the corners or
        edges of matching cards have to be able to touch.{" "}
      </h3>
      <h3><strong>Possible move options are:</strong>
        <li>Flip one of your face down cards</li>
        <li>Draw a card from face down deck, either switch for a face up/face down card or discard.</li>
        <li>Draw from discard pile to switch with a face-up or face-down card.</li>
      </h3>
    </div>
  );
}

export default WelcomePage;
