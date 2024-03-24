const Cell = ({ isAlive, age, toggleCellState, useHeatmap }) => {
  const getCellColor = () => {
    if (isAlive) {
      return 'DarkOliveGreen';
    } else if (useHeatmap) {
      if (age === 0) {
        return 'white';
      }
      const ageCap = -10;
      const intensityR = (age / ageCap) * (255 - 85) + 85;
      const intensityG = (age / ageCap) * (255 - 107) + 107;
      const intensityB = (age / ageCap) * (255 - 47) + 47;
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

