import React from 'react';
import './Grid.css';

const Cell = ({ isAlive, toggleCellState, x, y }) => {
  const onClick = () => toggleCellState(x, y);

  const cellClass = `cell ${isAlive ? 'alive' : 'dead'}`;

  return <div className={cellClass} onClick={onClick} />;
};

export default Cell;