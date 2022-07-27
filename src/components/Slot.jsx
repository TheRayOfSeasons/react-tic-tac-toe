import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useTicTacToe from '../hooks/useTicTacToe';

function Slot({ index }) {
  const { currentPlayer, makeTurn, gameOver } = useTicTacToe();
  const [token, setToken] = useState('');
  const [previousState, setPreviousState] = useState(gameOver);

  useEffect(() => {
    if (previousState && !gameOver) {
      setToken('');
    }
    setPreviousState(gameOver);
  }, [gameOver, setToken, setPreviousState]);

  const commit = useCallback(() => {
    const playerToken = currentPlayer.token;
    const valid = makeTurn(index);
    if (valid) {
      setToken(playerToken);
    }
  }, [makeTurn, index, setToken, currentPlayer]);

  return (
    <div
      className="board-box"
      onClick={() => commit()}
      onKeyDown={() => commit()}
      role="button"
      tabIndex="0"
      aria-label={`${index}-button`}
    >
      {token}
    </div>
  );
}

Slot.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Slot;
