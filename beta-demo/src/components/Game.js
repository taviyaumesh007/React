import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsnext, setXIsnext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(0)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsnext(!xIsnext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsnext={xIsnext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{}</ol>
      </div>
    </div>
  );
}
