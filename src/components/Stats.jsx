import React, { useMemo } from 'react';
import useTicTacToe from '../hooks/useTicTacToe';

function Stats() {
  const { currentPlayer, gameStatus } = useTicTacToe();

  const message = useMemo(() => {
    const player = `${currentPlayer.name} <${currentPlayer.token}>`;
    if (gameStatus === 'win') {
      return `${player} wins!`;
    }
    if (gameStatus === 'draw') {
      return 'Draw!';
    }
    return `Turn for ${player}`;
  }, [currentPlayer, gameStatus]);

  return (
    <p>
      {message}
    </p>
  );
}

export default Stats;
