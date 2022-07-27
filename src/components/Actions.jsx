import React from 'react';
import useTicTacToe from '../hooks/useTicTacToe';

function Actions() {
  const { reset, gameOver } = useTicTacToe();

  return (
    <div className="flex flex-row">
      {gameOver && (
        <button
          type="button"
          onClick={() => reset()}
          onKeyDown={() => reset()}
          className="border border-black hover:bg-gray p-2"
        >
          Play Again
        </button>
      )}
    </div>
  );
}

export default Actions;
