import React, { createContext, useState, useCallback, useEffect } from 'react';
import { createClusteredGrid, computeNextGenerationWithAges } from '../utils/gameLogic';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [grid, setGrid] = useState(createClusteredGrid(20, 20, 5, 3));
    const [isPlaying, setIsPlaying] = useState(false);
    const [generation, setGeneration] = useState(0);
    const [gridSize, setGridSize] = useState({ rows: 20, cols: 20 });
    const [cellDeadIteration, setcellDeadIteration] = useState(createInitialcellDeadIteration(20, 20));
    const [useHeatmap, setUseHeatmap] = useState(false);


    // Initialize cell ages with 0 (dead cells) 
    function createInitialcellDeadIteration(rows, cols) {
        return Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => 0)
        );
    }

    // Function to update the grid size
    const updateGridSize = useCallback((rows, cols) => {
        const newGrid = createClusteredGrid(rows, cols);
        const newcellDeadIteration = Array(rows).fill(null).map(() => Array(cols).fill(0));

        setGridSize({ rows, cols });
        setGrid(newGrid);
        setcellDeadIteration(newcellDeadIteration);
        setGeneration(0);
        setIsPlaying(false);
    }, []);


    // Function to toggle the cell state
    const toggleCellState = (rowIndex, colIndex) => {
        setGrid(currentGrid => {
            const newGrid = currentGrid.map(row => [...row]);
            newGrid[rowIndex][colIndex] = currentGrid[rowIndex][colIndex] ? 0 : 1;
            return newGrid;
        });
    };


    // Function to reset the game to the initial state
    const resetGame = () => {
        setGrid(createClusteredGrid(gridSize.rows, gridSize.cols, 5, 3));
        setcellDeadIteration(createInitialcellDeadIteration(gridSize.rows, gridSize.cols));
        setGeneration(0);
        setIsPlaying(false);
    };

    // Updated function to compute the next generation and update cell ages
    const goToNextGeneration = useCallback(() => {
        const { nextGrid, nextcellDeadIteration } = computeNextGenerationWithAges(grid, cellDeadIteration);
        setGrid(nextGrid);
        setcellDeadIteration(nextcellDeadIteration);
        setGeneration(gen => gen + 1);
    }, [grid, cellDeadIteration]);

    // This effect will start the autoplay when isPlaying is true and stop it when isPlaying is false
    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(goToNextGeneration, 100);//100ms
        }

        return () => clearInterval(interval);
    }, [isPlaying, goToNextGeneration]);


    return (
        <GameContext.Provider
            value={{
                grid,
                setGrid,
                cellDeadIteration,
                useHeatmap,
                setUseHeatmap,
                isPlaying,
                setIsPlaying,
                generation,
                gridSize,
                updateGridSize,
                toggleCellState,
                resetGame,
                goToNextGeneration
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;

