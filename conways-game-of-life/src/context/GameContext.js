import React, { createContext, useReducer } from 'react';

const initialState = {
  grid: [],
  rows: 20,
  cols: 20,
  generation: 0,
  heatmap: [],
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_GRID':
      return {
        ...state,
        grid: action.grid,
        generation: state.generation + 1,
        heatmap: action.heatmap,
      };
    case 'RESET_GRID':
      return {
        ...state,
        grid: action.grid,
        generation: 0,
        heatmap: action.heatmap,
      };
    case 'SET_SIZE':
      return {
        ...state,
        rows: action.rows,
        cols: action.cols,
        grid: action.grid,
        generation: 0,
        heatmap: action.heatmap,
      };
    default:
      return state;
  }
}

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
