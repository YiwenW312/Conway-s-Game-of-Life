import React, { useContext } from 'react';
import Cell from './Cell';
import GameContext from '../context/GameContext';
import '..CSS/Grid.css';

const Grid = () => {
  const { grid, cellAges, toggleCellState, useHeatmap } = useContext(GameContext);

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isAlive={cell === 1}
            age={cellAges[rowIndex][colIndex]}
            useHeatmap={useHeatmap}
            toggleCellState={() => toggleCellState(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};



export default Grid;
