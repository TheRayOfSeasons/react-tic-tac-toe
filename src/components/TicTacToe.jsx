import React from 'react';
import PropTypes from 'prop-types';
import TicTacToeContext from '../context/tictactoe-context';
import useTicTacToeEngine from '../hooks/useTicTacToeEngine';

function TictacToe({ children }) {
  const tictactoe = useTicTacToeEngine();
  return (
    <TicTacToeContext.Provider value={tictactoe}>
      {children}
    </TicTacToeContext.Provider>
  );
}

TictacToe.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TictacToe;
