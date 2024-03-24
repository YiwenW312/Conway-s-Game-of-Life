import React, { useContext } from 'react';
import Cell from './Cell';
import GameContext from '../context/GameContext';
import './Grid.css';

const Grid = () => {
  const { grid, cellDeadIteration, toggleCellState, useHeatmap, gridSize } = useContext(GameContext);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize.cols}, 20px)`,
    gridTemplateRows: `repeat(${gridSize.rows}, 20px)`,
    gap: '1px',
    alignContent: 'center',
  };

  if (!grid || !grid[0] || !cellDeadIteration || !cellDeadIteration[0]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container" style={gridStyle}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isAlive={cell === 1}
            deadIteration={cellDeadIteration[rowIndex][colIndex]}
            useHeatmap={useHeatmap}
            toggleCellState={() => toggleCellState(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};



export default Grid;
