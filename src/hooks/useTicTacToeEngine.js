import { useMemo, useState, useCallback } from 'react';
import { Board, Player } from '../engine/tictactoe';

function useTicTacToeEngine() {
  const [playerToggler, setPlayerToggler] = useState(true);
  const [gameStatus, setGameStatus] = useState('no');

  const player1 = useMemo(() => new Player('O', 'Player 1'), []);
  const player2 = useMemo(() => new Player('X', 'Player 2'), []);

  const currentPlayer = useMemo(
    () => {
      const player = playerToggler ? player1 : player2;
      return player;
    },
    [playerToggler],
  );

  const winner = useMemo(() => {
    if (gameStatus === 'win') {
      return currentPlayer;
    }
    return new Player('', '');
  }, [gameStatus]);

  const gameOver = useMemo(() => ['win', 'draw'].includes(gameStatus), [gameStatus]);

  const board = useMemo(() => new Board(3, 3), []);

  const makeTurn = useCallback((index) => {
    if (gameOver) {
      return false;
    }
    const valid = board.writeTurn(currentPlayer, index);
    if (valid) {
      const winStatus = board.checkWin();
      if (winStatus) {
        setGameStatus('win');
      } else if (board.isFull()) {
        setGameStatus('draw');
      } else {
        setPlayerToggler(!playerToggler);
      }
    }
    return valid;
  }, [gameStatus, currentPlayer, board, setPlayerToggler, setGameStatus, gameOver]);

  const reset = useCallback(() => {
    setGameStatus('no');
    setPlayerToggler(!playerToggler);
    board.reset();
  }, [setGameStatus, playerToggler, setPlayerToggler]);

  return {
    player1,
    player2,
    currentPlayer,
    board,
    makeTurn,
    gameStatus,
    reset,
    winner,
    gameOver,
  };
}

export default useTicTacToeEngine;
