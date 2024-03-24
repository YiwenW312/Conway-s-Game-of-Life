const Cell = ({ isAlive, deadIteration, toggleCellState, useHeatmap }) => {
  const getCellColor = () => {
    if (isAlive) {
      return 'DarkOliveGreen';
    } else if (useHeatmap) {
      if (deadIteration === 0) {
        return 'white';
      }
      const deadIterationCap = -10;
      const intensityR = (deadIteration / deadIterationCap) * (255 - 85) + 85;
      const intensityG = (deadIteration / deadIterationCap) * (255 - 107) + 107;
      const intensityB = (deadIteration / deadIterationCap) * (255 - 47) + 47;
      return `rgb(${intensityR}, ${intensityG}, ${intensityB})`;
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

