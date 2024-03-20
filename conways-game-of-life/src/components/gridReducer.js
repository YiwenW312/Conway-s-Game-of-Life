export const actionTypes = {
    RESET_GRID: 'RESET_GRID',
    TOGGLE_CELL: 'TOGGLE_CELL',
    NEXT_GENERATION: 'NEXT_GENERATION',
  };
  
  export const gridReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.RESET_GRID:
        return { ...state, grid: createRandomGrid(state.rows, state.cols), heatMap: createEmptyGrid(state.rows, state.cols) };
      case actionTypes.TOGGLE_CELL:
        const newGrid = [...state.grid];
        newGrid[action.payload.x][action.payload.y] = state.grid[action.payload.x][action.payload.y] ? 0 : 1;
        return { ...state, grid: newGrid };
      case actionTypes.NEXT_GENERATION:
        const { nextGrid, nextHeatMap } = nextGeneration(state.grid, state.heatMap);
        return { ...state, grid: nextGrid, heatMap: nextHeatMap };
      default:
        return state;
    }
  };
  