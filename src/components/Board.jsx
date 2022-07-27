import React from 'react';
import useTicTacToe from '../hooks/useTicTacToe';
import Slot from './Slot';

const range = (amount) => [...Array(amount).fill().keys()];

function Board() {
  const { board } = useTicTacToe();

  return (
    <div className="board-grid">
      {range(board.width * board.height).map((i) => (
        <Slot key={i} index={i + 1} />
      ))}
    </div>
  );
}

export default Board;
