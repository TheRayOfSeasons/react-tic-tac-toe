import React from 'react';
import Actions from './components/Actions';
import Board from './components/Board';
import Stats from './components/Stats';
import TictacToe from './components/TicTacToe';
import './styles/main.scss';

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-5xl font-bold text-center">Tic-Tac-Toe</h1>
      <div className="flex flex-row justify-center mt-12">
        <div>
          <TictacToe>
            <Board />
            <div className="text-center text-xl mt-8">
              <Stats />
            </div>
            <div className="flex flex-row justify-center mt-4">
              <Actions />
            </div>
          </TictacToe>
        </div>
      </div>
    </div>
  );
}

export default App;
