import React from 'react';
import { GameProvider } from './context/GameContext';
import Grid from './components/Grid';

const App = () => {
  return (
    <GameProvider>
      <div>
        <h1>Conway's Game of Life</h1>
        <Grid />
      </div>
    </GameProvider>
  );
};

export default App;

