const Cell = ({ isAlive, age, toggleCellState, useHeatmap }) => {
  const getCellColor = () => {
    if (isAlive) {
      return 'DarkOliveGreen'; 
    } else if (useHeatmap) {
      const ageCap = 10;
      const intensity = Math.max(255 - (age / ageCap) * 255, 0);
      return `rgb(${intensity}, ${intensity}, 255)`; 
    } else {
      return 'white';
    }
  };

  const cellStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: getCellColor(),
    border: '1px solid gray',
    display: 'inline-block',
  };

  return <div style={cellStyle} onClick={toggleCellState} />;
};


export default Cell;
  
