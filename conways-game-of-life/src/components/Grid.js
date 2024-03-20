import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import SizeForm from './SizeForm';
import './Grid.css';

const Grid = () => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [grid, setGrid] = useState(() => createRandomGrid(rows, cols));

  const resetGrid = (newRows, newCols) => {
    setRows(newRows);
    setCols(newCols);
    setGrid(createRandomGrid(newRows, newCols));
  };

    const createEmptyGrid = (rows, cols) => {
      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(Array.from(Array(cols), () => 0));
      }
      return grid;
    };
    
    const createRandomGrid = (rows, cols) => {
      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(
          Array.from(Array(cols), () => (Math.random() > 0.95 ? 1 : 0))
        );
      }
      return grid;
    };
    
    const countNeighbors = (grid, x, y) => {
      const neighbors = [
        [0, 1], [0, -1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]
      ];
      return neighbors.reduce((acc, [dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
          acc += grid[newX][newY];
        }
        return acc;
      }, 0);
    };
    
    const nextGeneration = (grid) => {
      const nextGen = grid.map(arr => [...arr]);
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          const neighbors = countNeighbors(grid, i, j);
          if (!grid[i][j] && neighbors === 3) {
            nextGen[i][j] = 1;
          } else if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
            nextGen[i][j] = 0;
          }
        }
      }
      return nextGen;
    };
    
    const Grid = ({ rows = 20, cols = 20 }) => {
      const [grid, setGrid] = useState(() => createEmptyGrid(rows, cols));
    
      useEffect(() => {
        setGrid(createRandomGrid(rows, cols));
      }, [rows, cols]);
  
      const toggleCellState = (x, y) => {
        const newGrid = [...grid];
        newGrid[x][y] = grid[x][y] ? 0 : 1;
        setGrid(newGrid);
      };
  
      return (
        <div>
          <SizeForm onSubmit={({ rows, cols }) => resetGrid(rows, cols)} />
          <div className="grid-container">
            {grid.map((rows, i) =>
              rows.map((cell, j) => (
                <Cell
                  key={`${i}-${j}`}
                  isAlive={cell === 1}
                  toggleCellState={toggleCellState}
                  x={i}
                  y={j}
                />
              ))
            )}
          </div>
          <div className="controls">
            <button onClick={() => setGrid(createRandomGrid(rows, cols))}>Reset</button>
            <button onClick={() => setGrid(nextGeneration(grid))}>Next Generation</button>
          </div>
        </div>
      );
    };
}
export default Grid;
