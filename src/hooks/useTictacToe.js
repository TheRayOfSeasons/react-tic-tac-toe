import { useContext } from 'react';
import TicTacToeContext from '../context/tictactoe-context';
// eslint-disable-next-line no-unused-vars
import { Player, Board } from '../engine/tictactoe';

/**
 * @typedef {Object} TicTacToeValues
 * @property {Player} player1
 * @property {Player} player2
 * @property {Player} currentPlayer
 * @property {Board} board
 * @property {(number) => boolean} makeTurn
 * @property {string} gameStatus
 * @property {() => void} reset
 * @property {string} winner
 * @property {boolean} gameOver
 */

/**
 * Uses the TicTacToe context.
 * @returns {TicTacToeValues}
 */
function useTicTacToe() {
  const context = useContext(TicTacToeContext);
  if (context === undefined) {
    throw new Error('useTicTacToe must be used within a TicTacToe component');
  }
  return context;
}

export default useTicTacToe;
